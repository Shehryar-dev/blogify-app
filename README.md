# 📝 Blogify – A Simple Blogging Platform

**Blogify** is a web-based blogging application where users can:

- 🧑‍💻 Sign up and sign in (JWT authentication)
- ✍️ Create new blogs with image uploads
- 📖 Read blogs by others
- 💬 Comment on blog posts
- 📱 Fully responsive UI with Tailwind CSS
- 🖼️ Designed using EJS templating

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Auth:** JWT (JSON Web Token)
- **Image Upload:** Multer
- **Other Tools:** dotenv, cookie-parser

---

## 📁 Project Structure


## 🔧 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Auth:** JWT (JSON Web Token)
- **Image Upload:** Multer
- **Other Tools:** dotenv, cookie-parser

---

## 📁 Project Structure


## 🔧 Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Tailwind CSS
- **Auth:** JWT (JSON Web Token)
- **Image Upload:** Multer
- **Other Tools:** dotenv, cookie-parser

---

## 📁 Project Structure
```
📂 blogify-app/
├──📂 controllers/
├──📂 middlewares/
├──📂 models/
├──📂 public/
│ └──📂 screenshots/
├──📂 routes/
├──📂 utils/
├──📂 views/
│ └── ejs files
├── .env
├── .gitignore
├── README.md
├── package.json
└── index.js
```

---

## ✨ Features

- ✅ JWT Auth (Login / Signup)
- ✅ Add Blog with Image
- ✅ View Full Blog with Title, Image, Body, Date, Author
- ✅ Comment System (UI Ready)
- ✅ Latest Blog Sidebar
- ✅ Responsive Design using Tailwind CSS

---

## 🔐 JWT Authentication Flow

1. User signs up → Token generated.
2. Token stored in HTTP-only cookie.
3. Middleware verifies token on protected routes.

---

## 🖼️ Screenshots

### 🔒 Login Page
![Login Page](./public/screenshots/login.png)

### 🆕 Signup Page
![Signup Page](./public/screenshots/signup.png)

### 🏠 Home (All Blogs)
![Home Page](./public/screenshots/home.png)

### 📄 All Blog Page
![Show Blog Page](./public/screenshots/show-all-blog.png)

### 📄 Full Blog Page
![Show Blog Page](./public/screenshots/show-single-blog.png)

### ✍️ Add Blog
![Add Blog](./public/screenshots/add.png)

---

## 🚀 How to Run

```bash
git clone https://github.com/Shehryar-dev/blogify-app.git
cd blogify-app
npm install
npm start
