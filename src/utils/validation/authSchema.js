// src/utils/validation/authSchema.js
export const loginSchema = {
  email: {
    required: "Email es requerido",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Email inválido"
    }
  },
  password: {
    required: "Contraseña es requerida",
    minLength: {
      value: 6,
      message: "Mínimo 6 caracteres"
    }
  }
}