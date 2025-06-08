'use client'

interface QuestionCardProps {
  question: string
  options: string[]
  selectedAnswer: number | null
  onAnswerSelect: (answerIndex: number) => void
  questionNumber: number
  totalQuestions: number
}

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions
}: QuestionCardProps) {
  const progressPercentage = (questionNumber / totalQuestions) * 100

  return (
    <div className="max-w-3xl mx-auto animate-slide-up">
      <div className="card p-8 md:p-10">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Question {questionNumber} of {totalQuestions}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            {question}
          </h2>
        </div>
        
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`group w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-md ${
                selectedAnswer === index
                  ? 'border-primary-500 bg-gradient-secondary shadow-lg transform scale-[1.02]'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  selectedAnswer === index
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-gray-900 text-lg leading-relaxed">
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}