from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

# Encode the password
encoded_password = quote_plus("Hafsah@123")

SQLALCHEMY_DATABASE_URL = f'postgresql://postgres:{encoded_password}@localhost:5432/MyDatabase'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# SessionLocal is responsible for talking with databases.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# while True:
#     try:
#         conn = psycopg2.connect(host='localhost', database='MyDatabase',
#                                 user='postgres', password='Hafsah@123', cursor_factory=RealDictCursor)
#         cursor = conn.cursor()
#         print("Database connection was successful!!")
#     except Exception as error:
#         print("Connecting to database failed!!")
#         print("Error: ", error)
#         time.sleep(2)
