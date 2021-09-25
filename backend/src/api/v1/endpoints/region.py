from ....database.database import Region, get_db, Session
from ....database.models.region import RegionModel, BaseRelationRegionModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List

router = APIRouter(
    prefix="/region",
    tags=["Region"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=RegionModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    region = Region(name=name)
    db.add(region)
    db.commit()
    return region


@router.get("/{id}",  response_model=RegionModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Получение конкретного регоина"""
    return db.query(Region).filter(Region.id == id).first()
