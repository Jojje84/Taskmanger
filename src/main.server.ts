/*
 * Task Manager - Server Bootstrap File
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Taskmanger
 * License: MIT License - see LICENSE file for details
 * 
 * This file bootstraps the Angular application for server-side rendering.
 * Original work by Jorge Avila - please maintain attribution.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
