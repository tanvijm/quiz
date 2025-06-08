'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HubSpotForm from './HubSpotForm'

interface PreQuizFormProps {
  onSubmit: (data: { name: string; email: string }) => void
}

export default function PreQuizForm({ onSubmit }: PreQuizFormProps) {
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleHubSpotSubmit = () => {
    setIsSubmitted(true)
    // Navigate to quiz after short delay
    setTimeout(() => {
      router.push('/quiz')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Test Your <span className="gradient-text">Incident Management</span> Skills
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Take our quick assessment and get instant insights into your incident response knowledge. 
            Score 80%+ to earn exclusive incident.io SWAG!
          </p>
        </div>

        {!isSubmitted ? (
          <div className="card p-8 animate-slide-up">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Get Started</h2>
              <p className="text-gray-600">Enter your details to begin the quiz</p>
            </div>

            <HubSpotForm onSubmit={handleHubSpotSubmit} />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By continuing, you agree to receive insights and updates from incident.io
              </p>
            </div>
          </div>
        ) : (
          <div className="card p-8 text-center animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank you!
            </h3>
            <p className="text-gray-600 mb-6">
              Your information has been submitted. Starting the quiz now...
            </p>
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        )}

        <div className="mt-8 text-center animate-fade-in">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              5 minutes
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              10 questions
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Free SWAG
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}