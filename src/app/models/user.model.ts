/*
 * Task Manager - User Model
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file contains the User interface model for the task management system.
 * Original work by Jorge Avila - please maintain attribution.
 */

// Modell för användare
export interface User {
  id: number; // Användarens unika ID
  name: string; // Namn på användaren
  role: string; // Roll för användaren
  avatar: string; // Länk till användarens avatarbild
}
