# app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import user  # Import your route file
from app.db import Base, engine
from app.models import user as user_model  # Import models for table creation

app = FastAPI()

# CORS Configuration – allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace * with your frontend domain (e.g. "https://tripontrack.vercel.app")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables (run once or move to Alembic in production)
Base.metadata.create_all(bind=engine)

# Root route
@app.get("/")
def read_root():
    return {"message": "TripOnTrack API is running 🚀"}

# Include the user routes (signup, login, etc.)
app.include_router(user.router, prefix="/api/users", tags=["Users"])
