from fastapi import APIRouter

# from .endpoints.auth import router as auth_router
from .endpoints.city import router as city_router
from .endpoints.district import router as district_router
from .endpoints.region import router as region_router
from .endpoints.organization import router as organization_router
from .endpoints.population import router as population_router
from .endpoints.services import router as service_router
from .endpoints.auth import router as auth_router
from .endpoints.profile import router as profile_router


router = APIRouter()
# router.include_router(auth_router)
router.include_router(city_router)
router.include_router(region_router)
router.include_router(district_router)
router.include_router(organization_router)
router.include_router(population_router)
router.include_router(service_router)
router.include_router(auth_router)
router.include_router(profile_router)
