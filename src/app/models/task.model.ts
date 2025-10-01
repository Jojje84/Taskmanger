/*
 * Task Manager - Task Model
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file contains the Task interface model for the task management system.
 * Original work by Jorge Avila - please maintain attribution.
 */

// Modell för uppgift (task)
export interface Task {
  id?: number; // Uppgiftens unika ID (valfri)
  title: string; // Titel på uppgiften
  description?: string; // Beskrivning av uppgiften (valfri)
  status: string; // Status på uppgiften (t.ex. aktiv, avslutad)
  priority: string; // Prioritet på uppgiften (Low, Medium, High)
  projectId: number; // ID för projektet som uppgiften tillhör
  creatorId: number; // ID för skaparen av uppgiften
  deadline?: string; // Deadline för uppgiften (valfri)
  projectName?: string; // Projektnamn (valfri, används för visning)
}
