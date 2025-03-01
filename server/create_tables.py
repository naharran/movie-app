from database import engine, Base
from models.Movie import Movie
from models.Genere import Genre
Base.metadata.create_all(bind=engine)
