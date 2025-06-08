export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface QuizState {
  currentQuestion: number
  answers: number[]
  score: number
  isCompleted: boolean
}

export interface QuizResult {
  score: number
  percentage: number
  passed: boolean
  totalQuestions: number
}