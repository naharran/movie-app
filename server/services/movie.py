from schemas.Movie import MovieSchema

from sqlalchemy.orm import Session
from models.Movie import Movie
from schemas.Movie import MovieSchema


mockmovies = [Movie(id=1, title="First Movie", year=1990, genre_ids=[1,5]), 
Movie(id=1, title="First Movie", year=1990, genre_ids = [1,5]),
Movie(id=1, title="First Movie", year=1990, genre_ids = [1,5])]


async def get_movies_from_db():
    return mockmovies

async def add_movie(db, movie:MovieSchema):
    db_movie = Movie(title = movie.title,year = movie.year, image=movie.image, genre_ids=movie.genre_ids)
    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)
    return db_movie
