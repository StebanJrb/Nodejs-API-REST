# 🧩 Node.js REST API

A RESTful API built with **Node.js**, **Express**, and **MySQL** for managing users and laboratory reservations.  
This project provides a set of endpoints to **retrieve, add, and manage** data stored in a MySQL database.

---

## 🚀 Main Features

- Modular structure using **Express Router**  
- Database connection via **promise-mysql**  
- Organized controllers for business logic separation  
- CORS and request logging with **morgan**  
- Environment configuration using **dotenv**

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/StebanJrb/Nodejs-API-REST.git
   cd Nodejs-API-REST
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   HOST=localhost
   DATABASE=your_database_name
   USER=your_user
   PASSWORD=your_password
   ```

4. **Run the server**
   ```bash
   npm start
   ```
   or, if no start script is defined:
   ```bash
   node index.js
   ```

Server runs on:  
👉 **http://localhost:3000**

---

## 📡 Main Endpoints

### 🔹 Users (`/api/users`)

| Method | Endpoint | Description |
|:--:|:--|:--|
| **GET** | `/api/users/` | Retrieves all users. |
| **GET** | `/api/users/1?username={name}&password={password}` | Retrieves a specific user (basic login). |
| **POST** | `/api/users/` | Creates a new user. *(body: { name, email, password })* |
| **DELETE** | `/api/users/` | Deletes a user by name and password. |

---

### 🔹 Labs (`/api/labs`)

| Method | Endpoint | Description |
|:--:|:--|:--|
| **GET** | `/api/labs/` | Retrieves all lab/event records. |
| **GET** | `/api/labs/1?name={name}&sala={room}` | Retrieves a specific lab event. |
| **POST** | `/api/labs/` | Creates a new lab reservation. *(body: { room_id, user_id, start_time, end_time, event_title, event_description })* |

---

## 🧠 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [promise-mysql](https://www.npmjs.com/package/promise-mysql)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 💡 Example Request (POST new lab reservation)

```bash
curl -X POST http://localhost:3000/api/labs -H "Content-Type: application/json" -d '{
  "room_id": "Lab 101",
  "user_id": 1,
  "start_time": "2025-10-29 09:00:00",
  "end_time": "2025-10-29 11:00:00",
  "event_title": "Networking Practice",
  "event_description": "Configuring routers and switches."
}'
```

---

## 📋 Suggested Improvements

- ✅ Stronger input validation (using **Joi** or **Express Validator**)  
- ✅ Password encryption with **bcrypt**  
- ✅ Authentication with **JWT**  
- ✅ Environment-based configuration (dev/prod)  
- ✅ Auto-generated documentation with **Swagger**

---

## 👨‍💻 Author

**Julian Ruiz**  
Systems and Telecommunications Engineer  
📧 [LinkedIn](https://www.linkedin.com/in/julian-ruiz/)

