from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    DB_URL = os.getenv("DATABASE_URL")

settings = Settings()
