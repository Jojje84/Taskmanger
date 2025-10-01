/*
 * Task Manager - Priority Color Pipe
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file contains a custom pipe for converting task priority to display colors.
 * Original work by Jorge Avila - please maintain attribution.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true,
})
export class PriorityColorPipe implements PipeTransform {
  transform(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'black';
    }
  }
}
