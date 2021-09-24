from fastapi import FastAPI
from .core.config import PROJECT_NAME, API_V1_PREFIX
from .api.v1.routes import router as api_router

app = FastAPI(title=PROJECT_NAME)


# app.add_event_handler("startup", )
# app.add_event_handler("shutdown", )

app.include_router(api_router, prefix=API_V1_PREFIX)
