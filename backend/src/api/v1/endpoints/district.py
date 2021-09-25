from ....database.database import District, get_db, Session
from ....database.models.district import DistrictModel, BaseRelationDistrictModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter(
    prefix="/district",
    tags=["District"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=DistrictModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    district = District(name=name)
    db.add(district)
    db.commit()
    return district


@router.get("/{id}", response_model=DistrictModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    return db.query(District).filter(District.id == id).first()
