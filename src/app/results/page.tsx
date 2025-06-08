'use client'

export const dynamic = 'force-dynamic'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import LeadForm, { LeadData } from '@/components/LeadForm'
import { questions } from '@/lib/questions'
import { calculateScore, getScoreMessage, getScoreColor } from '@/lib/scoring'
import { QuizResult } from '@/types/quiz'

function ResultsContent() {
  const searchParams = useSearchParams()
  const [result, setResult] = useState<QuizResult | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const answersParam = searchParams.get('answers')
    if (answersParam) {
      try {
        const answers = JSON.parse(answersParam)
        const correctAnswers = questions.map(q => q.correctAnswer)
        const calculatedResult = calculateScore(answers, correctAnswers)
        setResult(calculatedResult)
        setShowLeadForm(calculatedResult.passed)
      } catch (error) {
        console.error('Error parsing answers:', error)
      }
    }
  }, [searchParams])

  const handleLeadSubmit = async (data: LeadData) => {
    try {
      // Here you would typically send the data to your backend/CRM
      console.log('Lead data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting lead:', error)
    }
  }

  if (!result) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <p>Loading results...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quiz <span className="gradient-text">Complete!</span>
          </h1>
          <p className="text-xl text-gray-600">
            Here&apos;s how you performed on the incident management assessment
          </p>
        </div>

        <div className="card p-8 md:p-12 text-center mb-8 animate-slide-up">
          <div className="mb-8">
            <div className={`text-7xl md:text-8xl font-bold mb-4 ${getScoreColor(result.percentage)}`}>
              {result.percentage}%
            </div>
            <p className="text-xl text-gray-600 mb-6">
              You answered {result.score} out of {result.totalQuestions} questions correctly
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="w-64 bg-gray-100 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                    result.percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                    result.percentage >= 60 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                    'bg-gradient-to-r from-red-400 to-red-600'
                  }`}
                  style={{ width: `${result.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-2xl mb-8 ${
            result.passed ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' : 'bg-gradient-to-r from-red-50 to-rose-50 border border-red-200'
          }`}>
            <div className="flex items-center justify-center mb-3">
              {result.passed ? (
                <svg className="w-8 h-8 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className={`text-lg font-semibold ${result.passed ? 'text-green-800' : 'text-red-800'}`}>
              {getScoreMessage(result)}
            </p>
          </div>

          {!result.passed && (
            <a
              href="/"
              className="btn-primary mb-6"
            >
              Try Again
            </a>
          )}
        </div>

        {showLeadForm && !submitted && (
          <LeadForm onSubmit={handleLeadSubmit} />
        )}

        {submitted && (
          <div className="card p-8 text-center animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Your SWAG request has been submitted successfully. You&apos;ll receive an email with shipping details within 2-3 business days.
            </p>
            <div className="bg-gradient-secondary p-6 rounded-2xl">
              <p className="text-gray-700 mb-2">
                Want to learn more about incident management?
              </p>
              <a href="https://incident.io" className="gradient-text font-semibold hover:underline text-lg">
                Explore incident.io →
              </a>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/"
            className="text-primary-500 hover:text-primary-600 font-semibold transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600">Loading results...</p>
          </div>
        </div>
      </main>
    }>
      <ResultsContent />
    </Suspense>
  )
}