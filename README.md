# EduPulse AI — Student Early-Intervention Platform

AI-Powered Attendance Management & Student Early-Intervention Platform.

## Workflow
**Detect → Explain → Intervene → Follow Up**

## Technology Stack
- **Backend:** Python, FastAPI, Uvicorn, SQLAlchemy, Pydantic
- **Frontend:** HTML, CSS, Vanilla JavaScript, Chart.js, Axios
- **Database:** SQLite (SQLAlchemy ORM)
- **ML:** Scikit-Learn (Logistic Regression primary)

## Setup & Running Locally
1. Install dependencies:
   ```bash
   pip install -r server/requirements.txt
   ```
2. Copy environment file:
   ```bash
   copy .env.example .env
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn server.app.main:app --reload
   ```
4. Access the web app at `http://127.0.0.1:8000`.
