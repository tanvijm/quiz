'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionCard from '@/components/QuestionCard'
import { questions } from '@/lib/questions'
import { QuizState } from '@/types/quiz'

export default function QuizPage() {
  const router = useRouter()
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    score: 0,
    isCompleted: false
  })

  const currentQuestion = questions[quizState.currentQuestion]

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers]
    newAnswers[quizState.currentQuestion] = answerIndex
    
    setQuizState(prev => ({
      ...prev,
      answers: newAnswers
    }))
  }

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }))
    } else {
      // Quiz completed, redirect to results
      const searchParams = new URLSearchParams()
      searchParams.set('answers', JSON.stringify(quizState.answers))
      router.push(`/results?${searchParams.toString()}`)
    }
  }

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }))
    }
  }

  const isAnswered = quizState.answers[quizState.currentQuestion] !== undefined

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <QuestionCard
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={quizState.answers[quizState.currentQuestion] ?? null}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={quizState.currentQuestion + 1}
          totalQuestions={questions.length}
        />
      </div>

      <div className="flex justify-between max-w-2xl mx-auto">
        <button
          onClick={handlePrevious}
          disabled={quizState.currentQuestion === 0}
          className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="px-6 py-2 bg-incident-500 text-white rounded-lg font-medium hover:bg-incident-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {quizState.currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
        </button>
      </div>
    </main>
  )
}