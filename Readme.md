# Recycling Manager Selection Dashboard

A standalone system for ranking candidates for a recycling production line manager role.  
The project demonstrates database design, AI prompting, and a modern dashboard UI.

---

## 🧠 Project Overview

This system simulates an HR decision-support tool that:
- Generates realistic candidate data
- Evaluates candidates using AI-style scoring
- Ranks candidates transparently
- Visualizes results in a clean dashboard

The project is intentionally backend-light to keep it easy to review and run locally.

---

## 🧱 Architecture

**Data Flow**
Faker.js → JSON → SQL schema
↘ React Dashboard (mock AI scores)


- Faker.js generates realistic candidates
- SQL schema supports structured storage and ranking
- Frontend consumes the same dataset for consistency

---

## 🗄️ Database Design

### Tables
- `candidates`: basic profile information
- `evaluations`: AI-generated scores
- `rankings`: derived via SQL view

### Ranking Logic


total_score = crisis + sustainability + motivation


Rankings are computed using a SQL VIEW to ensure:
- No data duplication
- Automatic updates
- Transparent evaluation logic

---

## 🤖 AI Prompting

Three evaluation prompts are provided:
- Crisis Management
- Sustainability Knowledge
- Team Motivation

Prompts are rubric-based and compatible with real AI APIs.  
Mock scores are generated for demonstration purposes.

See: `ai-prompts/prompts.md`

---

## 📊 Dashboard Features

Built with **React + Vite + Mantine UI**

### Features
- 🏆 Top-10 Leaderboard with performance indicators
- 📊 Skill heatmap for comparative analysis
- 🪪 Candidate profile cards with score breakdowns

---

## 🛠️ Tech Stack

- Frontend: React, Vite, Mantine UI, Recharts
- Data Generation: Faker.js
- Database: MySQL-compatible SQL
- Utilities: Python (virtual environment)

---

## ▶️ How to Run

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/recycling-manager-selection-dashboard.git
cd recycling-manager-selection-dashboard

2. Frontend
```
cd dashboard
npm install
npm run dev

```

Open: http://localhost:5173

📁 Project Structure
ai-prompts/        → AI evaluation prompts
dashboard/         → React + Vite frontend
data-generator/    → Faker.js candidate generator
scripts/           → JSON → SQL helper scripts
sql/               → Schema and sample data

✅ Notes

No paid APIs required

No backend server required

Designed for clarity, auditability, and extensibility


