# 🔗 URL Shortener

A full-stack URL Shortener web application that converts long URLs into short, shareable links with click tracking functionality.


## 📌 Features

* 🔗 Convert long URLs into short links
* 📊 Track number of clicks on each link
* ⚡ Fast redirection to original URL
* 📱 Simple and responsive UI
* 📋 Copy short link with one click

---

## 🛠️ Tech Stack

### 🔹 Frontend

* HTML
* CSS
* JavaScript

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (Mongoose)

---

## 📂 Project Structure

```
├── server.js
├── url.js
├── urlModel.js
├── db.js
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
```

---

## ⚙️ How It Works

1. User enters a long URL in the frontend 
2. Frontend sends POST request to `/shorten` 
3. Backend generates a unique short ID using nanoid 
4. URL is stored in MongoDB 
5. Short URL is returned and displayed
6. When user opens short link → redirected to original URL

---

## 🔌 API Endpoints

### ➤ Create Short URL

```
POST /shorten
```

**Body:**

```json
{
  "originalUrl": "https://example.com"
}
```

---

### ➤ Redirect to Original URL

```
GET /:shortId
```

---

### ➤ Get URL Stats

```
GET /stats/:id
```

---

## ▶️ Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 💡 Future Improvements

* 🔐 User authentication
* 📊 Advanced analytics dashboard
* 🌐 Custom short URLs
* ⏳ Link expiration feature
* 📁 QR code generation

---

## 🙌 Author

**Rohit Munjal**

---


If you like this project, give it a ⭐ on GitHub!
