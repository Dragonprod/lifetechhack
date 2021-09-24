from ....database.database import District, get_db, Session
from ....database.models.district import DistrictModel, BaseRelationDistrictModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter()


@router.post("/district/create")
async def create(name: str, db: Session = Depends(get_db), tags=["District"], response_model=DistrictModel, response_class=ORJSONResponse):
    district = District(name=name)
    db.add(district)
    db.commit()
    return district


@router.get("/district/{id}")
async def create(id: int, db: Session = Depends(get_db), tags=["Distict"], response_model=DistrictModel, response_class=ORJSONResponse):
    return db.query(District).filter(District.id == id).first()
