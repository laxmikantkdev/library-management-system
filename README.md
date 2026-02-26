# 📚 Library Management System

Secure full-stack Library Management System built with **Spring Boot (Backend)** and **React + TypeScript (Frontend)**.

This project implements **JWT authentication**, **Role-Based Access Control (RBAC)**, and complete **CRUD operations** for managing books.

---

## 🚀 Tech Stack

### 🔹 Backend
- Spring Boot 3
- Spring Security
- JWT Authentication
- Role-Based Authorization (ADMIN / USER)
- Spring Data JPA
- H2 In-Memory Database
- BCrypt Password Encryption
- Bean Validation

### 🔹 Frontend
- React (Vite)
- TypeScript
- TailwindCSS
- Context API (State Management)
- Axios (API Integration)
- Protected Routes
- Role-Based UI Rendering

---

# 🔐 Features

## Authentication
- User Registration
- Admin Registration
- Login with JWT token generation
- Secure password hashing using BCrypt
- Stateless session management

## Authorization
- USER → View books
- ADMIN → Add / Update / Delete / Change Status

## Book Management
- View all books
- Add new book (Admin only)
- Update book details (Admin only)
- Delete book (Admin only)
- Borrow / Return book (Admin only)

---

# 📂 Project Structure

```
library-management-system/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── security/
│   ├── config/
│   └── model/
│
├── frontend/
│   ├── components/
│   ├── context/
│   ├── services/
│   ├── routes/
│   └── pages/
│
└── README.md
```

---

# ⚙️ How to Run

---

## 🔹 Backend Setup

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Run application

Using Maven:

```bash
mvn spring-boot:run
```

Or run `LibraryApplication.java` from your IDE.

### 3️⃣ Backend runs on:

```
http://localhost:8080
```

---

## 🔹 Frontend Setup

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

### 4️⃣ Frontend runs on:

```
http://localhost:5173
```

---

# 🧪 API Endpoints

## 🔑 Authentication

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /auth/register | Register USER |
| POST | /auth/register-admin | Register ADMIN |
| POST | /auth/login | Login & receive JWT |

---

## 📚 Books

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /books | Authenticated Users |
| POST | /books | ADMIN only |
| PUT | /books/{id} | ADMIN only |
| DELETE | /books/{id} | ADMIN only |
| PATCH | /books/{id}/status | ADMIN only |

---

# 🛡 Security Implementation

- Stateless authentication using JWT
- Custom JWT validation filter
- Role-based method security using `@PreAuthorize`
- BCrypt password encryption
- Authorization header validation

---

# 📝 Notes

- H2 in-memory database is used (data resets on restart).
- Ensure backend runs before frontend.
- JWT token is required in Authorization header:
  
  ```
  Authorization: Bearer <token>
  ```

---

# 👨‍💻 Author

Developed as part of a technical assignment to demonstrate secure full-stack application development with authentication and role-based authorization.
