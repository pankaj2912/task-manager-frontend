Here is your **`README.md`** file with API documentation for GitHub. You can copy and paste this directly into your repository.

---

📁 **`README.md`**
```md
# Task Manager API

This is a simple **Task Manager API** built with **Node.js, Express, and MongoDB (Atlas)**. It allows users to perform **CRUD** operations (Create, Read, Update, Delete) on tasks.

## Features
- 📄 Create, Read, Update, and Delete tasks.
- 🚀 Uses **MongoDB Atlas** for cloud storage.
- 🌐 Fully RESTful API.
- 🛡️ CORS enabled for frontend integration.

---

## 📌 Installation

### 1️⃣ Clone the Repository
```bash
git clone [https://github.com/your-username/task-manager-.git](https://github.com/pankaj2912/task-manager)
cd task-manager-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add:

```
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasksDB?retryWrites=true&w=majority
```

### 4️⃣ Start the Server
```bash
npm run dev
```

The API will run at **`http://localhost:8000`**.

---

## 🛠️ API Endpoints

### 📌 Get All Tasks
```http
GET /api/tasks
```
📌 **Response:**
```json
[
  {
    "_id": "650e2f7f5f5e3c001f0c1234",
    "title": "Buy groceries",
    "description": "Milk, Bread, Butter",
    "status": "To Do",
    "createdAt": "2024-03-10T12:34:56.789Z",
    "updatedAt": "2024-03-10T12:34:56.789Z"
  }
]
```

---

### 📌 Get a Task by ID
```http
GET /api/tasks/:id
```
📌 **Response:**
```json
{
  "_id": "650e2f7f5f5e3c001f0c1234",
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter",
  "status": "To Do",
  "createdAt": "2024-03-10T12:34:56.789Z",
  "updatedAt": "2024-03-10T12:34:56.789Z"
}
```

---

### 📌 Create a New Task
```http
POST /api/tasks
```
📌 **Request Body:**
```json
{
  "title": "Complete project",
  "description": "Finish the React-Node project",
  "status": "In Progress"
}
```
📌 **Response:**
```json
{
  "_id": "650e2f8a5f5e3c001f0c1235",
  "title": "Complete project",
  "description": "Finish the React-Node project",
  "status": "In Progress",
  "createdAt": "2024-03-10T12:40:00.123Z",
  "updatedAt": "2024-03-10T12:40:00.123Z"
}
```

---

### 📌 Update a Task
```http
PUT /api/tasks/:id
```
📌 **Request Body:**
```json
{
  "status": "Done"
}
```
📌 **Response:**
```json
{
  "_id": "650e2f8a5f5e3c001f0c1235",
  "title": "Complete project
