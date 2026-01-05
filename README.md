# Lab Management System

This is a simple **Lab Management System** project with a **frontend** in HTML and a **backend** in JavaScript (Node.js) using **MongoDB** as the database.

---

## Features

- Add, view, and manage lab records.
- Simple user interface for lab management.
- Backend API connected to MongoDB for storing lab data.

---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:** npm

---

## Project Structure

Lab-Management-System/
├── backend/
│ ├── server.js # Backend server
│ ├── routes/ # API routes
│ ├── models/ # MongoDB models
│ └── package.json # Node.js dependencies
├── frontend/
│ └── index.html # Frontend UI
└── README.md

yaml
Copy code

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Lab-Management-System
2. Setup Backend
bash
Copy code
cd backend
npm install
3. Start Backend Server
bash
Copy code
npm run dev
The backend will run on http://localhost:3000 (or the port specified in your server.js).

4. Open Frontend
Open frontend/index.html in your browser to access the Lab Management System UI.

Usage
Open the index.html in a browser.

Use the forms to add or view lab records.

Backend operations (like adding/viewing data) are handled by Node.js and MongoDB.

Notes
Make sure MongoDB is running locally or provide a MongoDB connection string in server.js.

Ensure Node.js and npm are installed before running the backend.

Run Commands
Command	Description
npm run dev	Starts the backend server
Open index.html	Opens the frontend in a browser
