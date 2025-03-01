from sqlalchemy import Column, Integer, String, ARRAY
from database import Base

class Movie(Base):
    __tablename__ = 'movies'
    id= Column(Integer, primary_key=True, index= True)
    title = Column(String, nullable=False)
    image = Column(String, nullable=True)
    year = Column(Integer, nullable=False)
    genre_ids=Column(ARRAY(Integer), nullable=True)


