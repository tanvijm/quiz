'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PreQuizForm from '@/components/PreQuizForm'

export default function Home() {
  const router = useRouter()

  const handleFormSubmit = (data: { name: string; email: string }) => {
    // Store user data in localStorage for later use
    localStorage.setItem('quizUserData', JSON.stringify(data))
    
    // Navigate to quiz
    router.push('/quiz')
  }

  return <PreQuizForm onSubmit={handleFormSubmit} />
}