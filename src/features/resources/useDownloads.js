// src/features/resources/useDownloads.js
import { useState } from 'react'

export default function useDownloads() {
  const [downloads, setDownloads] = useState([])

  const addDownload = (resource) => {
    setDownloads(prev => [...prev, resource])
  }

  return { downloads, addDownload }
}