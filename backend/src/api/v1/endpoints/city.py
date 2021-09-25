from ....database.database import City, get_db, Session
from ....database.models.city import CityModel, BaseRelationCityModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter(
    prefix="/city",
    tags=["City"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=CityModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    city = City(name=name)
    db.add(city)
    db.commit()
    return city


@router.get("/{id}", response_model=CityModel, response_class=ORJSONResponse)
async def get(id: int,  db: Session = Depends(get_db),):
    return db.query(City).filter(City.id == id).first()
