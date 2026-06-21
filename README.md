# 🚀 Personal Job Tracking Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://jobly-track-job.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rakib%20Mondal-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/rakib-mondal-092b56210)
[![GitHub](https://img.shields.io/badge/GitHub-rakibfeb-black?style=for-the-badge&logo=github)](https://github.com/rakibfeb)

A secure and scalable REST API built with **Node.js, Express.js, and MongoDB** to help users manage and track their job applications efficiently. The application allows users to create, update, search, and organize job applications while maintaining a complete history of status changes.

## 🌐 Live Demo

🔗 **Live Application:** https://jobly-track-job.vercel.app/

---

## ✨ Features

- 🔐 JWT Authentication
- 🔑 Password hashing with bcrypt
- 📝 Create, update, and delete job applications
- 📋 Track application status history
- 🔍 Search applications by company, role, location, or notes
- 📂 Filter applications by status
- 🛡 Protected routes using authentication middleware
- 🗄 MongoDB integration with Mongoose
- 📈 Maintain complete job application records

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT
- bcryptjs

### Utilities

- dotenv
- cors

---

## 📁 Project Structure

```text
job-tracker-api/
│
├── server.js
├── package.json
├── .env
│
└── src/
    ├── app.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── applications.controller.js
    ├── middleware/
    │   └── auth.middleware.js
    ├── models/
    │   ├── User.js
    │   └── Application.js
    └── routes/
        ├── auth.routes.js
        └── application.routes.js
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/rakibfeb/job-tracker-api.git
cd job-tracker-api
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs on:

```text
http://localhost:3000
```

---

# 📌 API Endpoints

## Authentication

### Register

**POST** `/api/auth/register`

```json
{
  "name": "Rakib",
  "email": "rakib@example.com",
  "password": "password123"
}
```

### Login

**POST** `/api/auth/login`

```json
{
  "email": "rakib@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "message": "Login Successful!",
  "token": "JWT_TOKEN"
}
```

---

## Applications

All routes require:

```text
Authorization: Bearer <token>
```

### Create Application

**POST** `/api/applications`

```json
{
  "company": "Google",
  "role": "Backend Developer",
  "location": "Remote",
  "salary": "20 LPA",
  "status": "Applied",
  "notes": "Applied through LinkedIn"
}
```

### Get All Applications

**GET** `/api/applications`

Supports query parameters:

```text
?status=Applied
?company=Google
?search=backend
```

### Get Single Application

**GET** `/api/applications/:id`

### Update Application

**PUT** `/api/applications/:id`

Status changes are automatically stored in `statusHistory`.

### Delete Application

**DELETE** `/api/applications/:id`

---

## 📊 Application Statuses

- Applied
- Phone Screen
- Interview Scheduled
- Interviewed
- Technical Test
- Offer Received
- Offer Accepted
- Rejected
- Withdrawn

---

## 📄 Example Application Schema

```javascript
{
  company,
  role,
  location,
  salary,
  jobUrl,
  status,
  statusHistory,
  appliedDate,
  followupDate,
  notes,
  user
}
```

---

## 🚀 Future Improvements

- Pagination
- Sorting and filtering
- Dashboard analytics
- Email reminders
- Resume upload support
- Notes and tags
- Swagger API documentation
- Export applications to CSV/PDF

---

## 👨‍💻 Author

### Rakib Mondal

MCA Graduate | Backend Developer

#### 📫 Connect With Me

- 🔗 LinkedIn: https://www.linkedin.com/in/rakib-mondal-092b56210
- 💻 GitHub: https://github.com/rakibfeb
- 🌐 Live Application: https://jobly-track-job.vercel.app/

---

## 📜 License

This project is licensed under the ISC License.
