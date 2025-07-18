// src/features/gamification/useUserProgress.js
import { useState } from 'react'

export default function useUserProgress() {
  const [progress, setProgress] = useState({})

  const updateProgress = (key, value) => {
    setProgress(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return { progress, updateProgress }
}