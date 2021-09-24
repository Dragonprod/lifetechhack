from ....database.database import Region, get_db, Session
from ....database.models.region import RegionModel, BaseRelationRegionModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter()


@router.post("/region/create")
async def create(name: str, db: Session = Depends(get_db), tags=["Region"], response_model=RegionModel, response_class=ORJSONResponse):
    region = Region(ame=name)
    db.add(region)
    db.commit()
    return region


@router.get("/region/{id}")
async def create(id: int, db: Session = Depends(get_db), tags=["Region"], response_model=RegionModel, response_class=ORJSONResponse):
    return db.query(Region).filter(Region.id == id).first()
