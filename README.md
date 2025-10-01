<h1 align='center'>Task Manager</h1>

<p align="center">A task management app built with Angular (TypeScript) and SCSS for styling. The project uses a mock API (JSON-server) to handle data, but everything is started automatically with a single command.</p>

---

## Features

- ✨ Create new tasks  
- ✅ Mark tasks as completed  
- 🗑️ Delete tasks  
- 📋 View a list of all tasks  

---

## Technologies

### Frontend
- **Angular** – framework for building web applications  
- **TypeScript** – typed superset of JavaScript  
- **HTML5** – structure for the user interface  
- **SCSS (Sass)** – CSS preprocessor for styling  
- **RxJS** – handling asynchronous operations  
- **Angular CLI** – tools for development, testing, and building  

### Backend (mock)
- **JSON-server** – simulates a REST API backend  
- **Node.js** – runtime for JavaScript/TypeScript  
- **npm** – package manager for scripts and dependencies  
- **concurrently** – runs frontend and backend in parallel  

### Other
- **Git & GitHub** – version control  
- **Visual Studio Code** – development environment  

---

## Architecture

The project consists of:  

- **Frontend (Angular)**  
  - Started with `ng serve`  
  - Runs on [http://localhost:4200](http://localhost:4200)  

- **Backend (mock API via JSON-server)**  
  - Started with `npm run start:api`  
  - Runs on [http://localhost:3000](http://localhost:3000)  

- **Development**  
  - `npm start` runs both frontend and backend in parallel (via `concurrently`)  

---

## Project Structure

```
taskmanager/
├── mock-api/              # JSON-server with db.json (mock backend)
│   └── db.json            # Data file for tasks
├── src/                   # Angular source code
│   ├── app/               # Main logic and components
│   ├── assets/            # Images, icons, etc.
│   ├── environments/      # Environment files (dev/prod)
│   └── index.html         # Root HTML file
├── angular.json           # ngular configuration
├── package.json           # Project dependencies & scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

---

## Installation

1. Clone the repository:  
```
git clone https://github.com/Jojje84/taskmanager.git
cd taskmanager
```

2. Install dependencies:
```
npm install
```

3. Start the application (frontend + mock API):
```
npm start
```

4. Open in your browser:
 - Frontend: http://localhost:4200
 - Mock-API: http://localhost:5000

---

## Usage

- Add new tasks via the form
- View and manage tasks in the list
- Data is stored via the mock API

---

## Screenshots

- Home

![Home-sida](screenshots/home.png)

- Dashboard

![dashboard-sida](screenshots/dashboard.png)

- List
![list-sida](screenshots/list.png)

- Download
![download -sida](screenshots/download.png)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

👤 Jorge

[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?logo=github&logoColor=white)](https://github.com/Jojje84) 
&nbsp;
[![Email](https://img.shields.io/badge/Email-Contact-blue?logo=icloud&logoColor=white)](mailto:jorgeavilas@icloud.com) 
&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jorge-avila-35622030/)
