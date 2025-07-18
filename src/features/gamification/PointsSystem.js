// src/features/gamification/PointsSystem.js
export class PointsSystem {
  constructor() {
    this.points = 0
  }

  addPoints(amount) {
    this.points += amount
    return this.points
  }

  getLevel() {
    return Math.floor(this.points / 100) + 1
  }
}