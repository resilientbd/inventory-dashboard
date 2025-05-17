# 🧾 Inventory Dashboard - DevOps Ready 🚀

A simple, interactive inventory dashboard built with **React**, containerized using **Docker**, and automated with **GitHub Actions** for CI/CD. Perfect for showcasing a full DevOps lifecycle from development to deployment.

---

## 📦 Features

- 🖥️ React-based frontend UI (inventory listing and stats / static)
- 🐳 Dockerfile for production builds with Nginx
- ⚙️ Docker Compose support
- 🔁 GitHub Actions for CI/CD
- ☁️ Pushes image to Docker Hub on commit to `main`

---

## 📂 Project Structure

```
inventory-dashboard/
├── src/
├── public/
├── Dockerfile
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── docker-build-push.yml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- Docker & Docker Compose
- GitHub account + Docker Hub account

### Run Locally with Docker Compose

```bash
docker-compose up --build
```

Then open: [http://localhost:8080](http://localhost:8080)

---

## 🔧 Dockerfile Overview

- Multi-stage build: `node:18-alpine` to build React → served via `nginx:alpine`
- Exposes port `80`, mapped to `8080` on host

---

## ⚙️ GitHub Actions CI/CD

Triggers on push to `main` branch:

- Builds Docker image
- Tags it as `resilientbd/inventory-dashboard:latest`
- Pushes it to Docker Hub

### 🔐 Secrets Required

In GitHub repo settings → `Secrets and variables` → `Actions`, add:

- `DOCKER_USERNAME` — your Docker Hub username
- `DOCKER_PASSWORD` — password or access token

---

## 🧪 Development

To run locally without Docker:

```bash
npm install
npm start
```

---

## 📄 License

MIT License

---

## 🙌 Author

**Shaikh Faisal Hossain** — [LinkedIn](https://www.linkedin.com/in/shaikh-faisal-hossain-68aa19118/)