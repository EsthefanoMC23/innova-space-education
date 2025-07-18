// src/hooks/useAudioPlayer.js
import { useState, useEffect } from 'react'

export default function useAudioPlayer(url) {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, setPlaying]
}