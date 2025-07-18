// src/utils/helpers.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}