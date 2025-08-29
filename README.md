# Patientor Application

Patientor is a full-stack web application designed for managing patient data, including diagnoses and medical entries. It features a React frontend for a rich user interface and a robust Express/Node.js backend to handle data operations.

This repository is structured as a monorepo, containing both the frontend and backend applications in separate directories.

## Features

* **Patient List:** View a list of all patients with basic information.
* **Detailed Patient View:** Click on a patient to see their full details, including SSN, date of birth, and a comprehensive list of their medical entries.
* **Add New Patients:** A modal form allows for the easy addition of new patients to the system.
* **Add Medical Entries:** For any given patient, you can add new medical entries, choosing between "Health Check," "Occupational Healthcare," and "Hospital" visit types.
* **Dynamic Entry Forms:** The form for adding new entries dynamically changes based on the selected entry type, showing relevant fields for each.
* **Diagnosis Codes:** Associate medical entries with official diagnosis codes, which are displayed with their corresponding names.
* **Typed API:** Both frontend and backend are written in TypeScript, ensuring type safety and better developer experience.

## Tech Stack

### Frontend (`/patientor`)

* **Framework:** React 18
* **Language:** TypeScript
* **UI Library:** Material-UI (MUI)
* **Routing:** React Router
* **HTTP Client:** Axios
* **Bundler:** Vite

### Backend (`/patientor-backend`)

* **Framework:** Express.js
* **Language:** TypeScript
* **Runtime:** Node.js
* **Data Validation:** Zod
* **Dependencies:** Cors, UUID for generating unique IDs

---

## Project Structure
patientor-app/
├── patientor/          # React Frontend Application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── patientor-backend/  # Express Backend Application
├── data/
├── src/
├── package.json
└── ...

---

## Getting Started

Follow these instructions to get both the frontend and backend applications running on your local machine.

### Prerequisites

* Node.js and npm (or yarn) installed on your machine.

### 1. Backend Setup

First, navigate to the backend directory, install dependencies, and start the server.

```bash
# Navigate to the backend directory
cd patientor-backend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The backend server will start on http://localhost:3001 by default.

### 2. Frontend Setup

In a separate terminal, navigate to the frontend directory, install its dependencies, and start the development server.

```bash
# Navigate to the frontend directory from the root
cd patientor

# Install dependencies
npm install

# Start the development server
npm run dev
```

The React application will start, and you can access it in your browser, typically at http://localhost:5173.

---

## Available Scripts

### Backend (/patientor-backend)
npm run tsc: Compiles the TypeScript code into JavaScript.

npm run dev: Starts the development server with hot-reloading using ts-node-dev.

npm run lint: Lints the code using ESLint.

npm start: Starts the production server from the compiled JavaScript files in the build/ directory.

### Frontend (/patientor)
npm run dev: Starts the Vite development server.

npm run build: Compiles the TypeScript and React code for production.

npm run lint: Lints the code using ESLint.

npm run preview: Serves the production build locally for previewing.