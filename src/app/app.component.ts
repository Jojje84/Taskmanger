/*
 * Task Manager - Main App Component
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file contains the root application component with sidebar integration.
 * Original work by Jorge Avila - please maintain attribution.
 */

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, SidebarComponent],
})
export class AppComponent {
  isSidebarOpen = true; 
}
