# 🚀 Job Tracker API

A secure and scalable RESTful backend API for managing job applications.  
Built with Node.js, Express, MongoDB, and JWT authentication, this project demonstrates real-world backend architecture including authentication, authorization, filtering, and user-based data isolation.

---

## 🔥 Key Features

- 🔐 User Authentication (Register & Login)
- 🪪 JWT Token Authorization
- 🛡 Protected Routes via Middleware
- 👤 User-specific Data Ownership
- 📌 Full CRUD for Job Applications
- 🔎 Multi-field Search (company, role, notes)
- 🧭 Filtering by Status & Company
- 📊 Sorted Results (latest first)
- ⚙️ Clean RESTful Architecture

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **bcryptjs**
- **Git / GitHub**

---

## 📁 Project Structure
src/
├── config/ # DB connection
├── controllers/ # Business logic
├── middleware/ # Auth middleware
├── models/ # Mongoose schemas
├── routes/ # API routes
└── app.js


---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository


git clone https://github.com/rakibfeb/job-tracker-api.git
cd job-tracker-api

## Install Dependencies

npm install

## Create Environment File

Create .env in root:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

## ▶️ Run Server

npm server.js

## 🔑 API Endpoints
# Authentication
Method	Endpoint
POST	/api/auth/register
POST	/api/auth/login

# Applications (Protected)
Method	Endpoint
POST	/api/applications
GET	/api/applications
GET	/api/applications/:id
PUT	/api/applications/:id
DELETE	/api/applications/:id


