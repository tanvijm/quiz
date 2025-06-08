import { QuizResult } from '@/types/quiz'

export function calculateScore(answers: number[], correctAnswers: number[]): QuizResult {
  const correctCount = answers.reduce((count, answer, index) => {
    return answer === correctAnswers[index] ? count + 1 : count
  }, 0)
  
  const score = correctCount
  const percentage = Math.round((correctCount / correctAnswers.length) * 100)
  const passed = percentage >= 80
  
  return {
    score,
    percentage,
    passed,
    totalQuestions: correctAnswers.length
  }
}

export function getScoreMessage(result: QuizResult): string {
  if (result.passed) {
    return `Congratulations! You scored ${result.percentage}% and qualify for free SWAG from incident.io!`
  } else {
    return `You scored ${result.percentage}%. You need 80% or higher to qualify for free SWAG. Try again!`
  }
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 80) return 'text-green-600'
  if (percentage >= 60) return 'text-yellow-600'
  return 'text-red-600'
}