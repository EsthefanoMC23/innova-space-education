// src/services/database/users.js
export const getUserData = async (userId) => {
  // Conexión a base de datos real
  return mockUserData[userId] || null
}

const mockUserData = {
  'user1': { name: 'Usuario Ejemplo', points: 100 }
}