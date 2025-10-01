/*
 * Task Manager - Project Model
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file contains the Project interface model for the task management system.
 * Original work by Jorge Avila - please maintain attribution.
 */

// Modell för projekt
export interface Project {
  id: number; // Projektets unika ID
  name: string; // Namn på projektet
  description: string; // Beskrivning av projektet
  creatorId: number; // ID för skaparen av projektet
  userIds: number[]; // Lista med användar-ID:n som är kopplade till projektet
}
