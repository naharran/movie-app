from fastapi import APIRouter, Depends
router = APIRouter()
from pydantic import BaseModel
from database import get_db
from sqlalchemy.orm import Session

from typing import Optional, List
from services.movie import get_movies_from_db, add_movie
from schemas.Movie import MovieSchema
from database import get_db  

@router.get("/")
async def get_movies_route(db: Session = Depends(get_db)):
    return await get_movies_from_db(db)

@router.post("/")
async def add_entity(new_movie: MovieSchema, db = Depends(get_db)):
    await add_movie(db,new_movie)



