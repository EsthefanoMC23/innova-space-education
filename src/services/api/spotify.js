// src/services/api/spotify.js
export const getPlaylist = async (playlistId) => {
  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`)
  return response.json()
}