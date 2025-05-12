
# 💳 Payment Processing System

A full-stack e-commerce transaction engine built to simulate real-world checkout flows using modern backend infrastructure. Supports secure, scalable processing of credit, debit, and bank payments with real-time admin and user insights.

## 🚀 Features

* **💼 Simulated E-Commerce Checkout**
  Supports card and bank transfer "payments" with dynamic amount, method, and status logging for each transaction.

* **🗃️ Dual-Database Architecture**

  * **SQL** for structured order/payment data with ACID guarantees
  * **MongoDB** for unstructured transaction metadata and audit logs

* **🔐 Secure RESTful API Layer**
  Built with Node.js, Express, and Spring Boot for managing user transactions, account access, and reporting endpoints.

* **⚙️ DevOps Ready**

  * **Docker** for containerized deployment
  * **AWS** for scalable cloud hosting
  * **Jenkins** for CI/CD integration

* **📈 Admin Dashboard (API Level)**
  Admins can view all transaction records, filter by status or method, and simulate refunds or settlements.

---

## 🧰 Tech Stack

* **Frontend:** React, TypeScript, Axios
* **Backend:** Node.js, Express, Spring Boot
* **Databases:** PostgreSQL, MongoDB
* **DevOps:** Docker, AWS, Jenkins
* **Other:** WebSockets, AJAX, REST APIs

---
## 🚀 Live Demo

🌍 [View deployed app on Render]([https://payment-processing-system-2.onrender.com/])
https://payment-processing-system-2.onrender.com/
---

## 📦 Run Locally

```bash
# Clone the repo
git clone https://github.com/phuongnguyen221436/payment-processing-system.git
cd payment-processing-system

# Install backend dependencies
npm install

# Start backend
npm run dev

# (Optional) Start frontend if separated
cd frontend
npm install
npm start
```

> ⚠️ Make sure to configure your `.env` with your database connection strings before running.

---

## 📝 About the Project

This system was built as a robust simulation of how enterprise-grade checkout systems like Stripe or PayPal operate under the hood. It showcases fault-tolerant backend architecture, performance optimization, and multi-database orchestration — ideal for demonstrating backend design, DevOps readiness, and full-stack systems thinking.

