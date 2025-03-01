from pydantic import BaseModel
from typing import List, Optional
class MovieSchema(BaseModel):
    id: Optional[int] = None
    title: str
    year: int
    image: Optional[str] = None
    genre_ids: List[int]