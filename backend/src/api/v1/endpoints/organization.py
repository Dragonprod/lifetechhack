from ....database.database import Organization, get_db, Session
from ....database.models.organization import OrganizationModel, BaseRelationOrganizationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter()


@router.post("/organization/create")
async def create(name: str, db: Session = Depends(get_db), tags=["Organization"], response_model=OrganizationModel, response_class=ORJSONResponse):
    organization = Organization(name=name)
    db.add(organization)
    db.commit()
    return organization


@router.get("/organization/{id}")
async def create(id: int, db: Session = Depends(get_db), tags=["Organization"], response_model=OrganizationModel, response_class=ORJSONResponse):
    return db.query(Organization).filter(Organization.id == id).first()
