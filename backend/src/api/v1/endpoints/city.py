from ....database.database import City, get_db, Session
from ....database.models.city import CityModel, BaseRelationCityModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter()


@router.post("/city/create")
async def create(name: str, db: Session = Depends(get_db), tags=["Region"], response_model=CityModel, response_class=ORJSONResponse):
    city = City(name=name)
    db.add(city)
    db.commit()
    return city


@router.get("/city/{id}")
async def create(id: int, db: Session = Depends(get_db), tags=["Region"], response_model=CityModel, response_class=ORJSONResponse):
    return db.query(City).filter(City.id == id).first()
