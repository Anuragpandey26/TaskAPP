# Task Management API

Simple Node.js Express backend with MySQL, Sequelize, and Zod validation.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create MySQL database:
```sql
CREATE DATABASE taskapp;
```

3. Run migrations:
```bash
npx sequelize-cli db:migrate
```

4. Start server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Auth
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Tasks (Authenticated)
- POST `/api/tasks` - Create task
- GET `/api/tasks` - Get all user tasks
- GET `/api/tasks/:id` - Get single task
- PUT `/api/tasks/:id` - Update task
- DELETE `/api/tasks/:id` - Delete task

## Example Requests

### Register
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Task (with Bearer token)
```json
POST /api/tasks
Authorization: Bearer <token>
{
  "title": "My Task",
  "description": "Task description",
  "status": "pending"
}
```
