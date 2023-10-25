from fastapi import FastAPI
from app import models
from app.database import engine, get_db
from app.routers import user, auth, sensors, prediction, dashboard
# from .config import settings


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(user.router)
app.include_router(auth.router)
app.include_router(sensors.router)
app.include_router(prediction.router)
app.include_router(dashboard.router)
