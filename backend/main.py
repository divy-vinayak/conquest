from typing import Union

from fastapi import FastAPI, Depends, Response, status
from fastapi.security import HTTPBearer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
token_auth_scheme = HTTPBearer()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/api/")
async def read_root(token: str = Depends(token_auth_scheme)):
    return {"Hello": "World"}
