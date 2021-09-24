from pydantic import BaseModel

class EntityDoesNotExist(BaseModel):
    raise NotADirectoryError