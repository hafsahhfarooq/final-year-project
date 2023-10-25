from pydantic import BaseModel, EmailStr
from datetime import datetime


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserOut(BaseModel):
    user_id: int
    email: EmailStr
    full_name: str

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class SensorValuesOut(BaseModel):
    id: int
    sensor_ppg: float
    sensor_temperature: float
    sensor_spo2: float
    user_id: int
    created_at: datetime


class MLValuesOut(BaseModel):
    ml_id: int
    systole_prediction: float
    diastole_prediction: float
    from_esp32_id: int


class Dashboard(BaseModel):
    full_name: str
    sensor_temperature: float
    sensor_spo2: float
    systole_prediction: float
    diastole_prediction: float
    created_at: datetime
