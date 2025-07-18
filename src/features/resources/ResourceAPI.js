// src/features/resources/ResourceAPI.js
export const fetchResources = async () => {
  const response = await fetch('/api/resources')
  return response.json()
}