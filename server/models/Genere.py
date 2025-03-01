from sqlalchemy import Column, Integer, String, ARRAY
from database import Base

class Genere(Base):
    __tablename__ = 'Genres'
    id= Column(Integer, primary_key=True, index= True)
    name = Column(String, nullable=False)


