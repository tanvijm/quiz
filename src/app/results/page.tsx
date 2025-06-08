export const dynamic = 'force-dynamic'

'use client'

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
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Quiz Complete!
          </h1>
          
          <div className="mb-6">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.percentage)}`}>
              {result.percentage}%
            </div>
            <p className="text-lg text-gray-600">
              You scored {result.score} out of {result.totalQuestions} questions correctly
            </p>
          </div>

          <div className={`p-4 rounded-lg mb-6 ${
            result.passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`font-medium ${result.passed ? 'text-green-800' : 'text-red-800'}`}>
              {getScoreMessage(result)}
            </p>
          </div>

          {!result.passed && (
            <a
              href="/quiz"
              className="inline-block bg-incident-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-incident-600 transition-colors"
            >
              Try Again
            </a>
          )}
        </div>

        {showLeadForm && !submitted && (
          <LeadForm onSubmit={handleLeadSubmit} />
        )}

        {submitted && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-green-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your SWAG request has been submitted successfully. You&apos;ll receive an email with shipping details within 2-3 business days.
            </p>
            <p className="text-sm text-gray-500">
              Want to learn more about incident management? Check out <a href="https://incident.io" className="text-incident-500 hover:text-incident-600">incident.io</a>
            </p>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="/"
            className="text-incident-500 hover:text-incident-600 font-medium"
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