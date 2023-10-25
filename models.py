from sqlalchemy import Column, ForeignKey, DOUBLE_PRECISION, VARCHAR, SmallInteger
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text
from sqlalchemy.orm import relationship
# from sqlalchemy.sql.expression import null

from .database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(SmallInteger, primary_key=True, index=True, nullable=False)
    full_name = Column(VARCHAR, nullable=False)
    email = Column(VARCHAR, unique=True, index=True, nullable=False)
    password = Column(VARCHAR, nullable=False)

    sensor_values = relationship("SensorValues", back_populates="owner")


class SensorValues(Base):
    __tablename__ = "from_esp32"

    id = Column(SmallInteger, primary_key=True, index=True, nullable=False, unique=True)
    sensor_ppg = Column(DOUBLE_PRECISION, index=True, nullable=False)
    sensor_temperature = Column(DOUBLE_PRECISION, index=True, nullable=False)
    sensor_spo2 = Column(DOUBLE_PRECISION, index=True, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    user_id = Column(SmallInteger, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)

    owner = relationship("User", back_populates="sensor_values")
    mlModel = relationship("MLModel", back_populates="owner_ml")


class MLModel(Base):
    __tablename__ = "mlModel"

    ml_id = Column(SmallInteger, primary_key=True, index=True, nullable=False)
    systole_prediction = Column(DOUBLE_PRECISION, index=True, nullable=False)
    diastole_prediction = Column(DOUBLE_PRECISION, index=True, nullable=False)
    from_esp32_id = Column(SmallInteger, ForeignKey("from_esp32.id", ondelete="CASCADE"), index=True, nullable=False)
    # esp32_ppg = Column(SmallInteger, ForeignKey("from_esp32.sensor_ppg"),
    #                    index=True, nullable=False)

    owner_ml = relationship("SensorValues", back_populates="mlModel")
