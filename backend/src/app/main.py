from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.utills import extract_text_pdf,extract_text_docx,extract,convert_chunks, text_embedding, generate_answer
from bs4 import BeautifulSoup
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps

app= FastAPI()

uri = f"mongodb+srv://lakshithakumuduranga102:Laki1234@sketch.a6hz2ws.mongodb.net/"
origins=["http://localhost:3000"]

client = MongoClient(uri)
qa_db=client.QA
qa_collection=qa_db['QA_Collection']


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Request model for the question
class QuestionRequest(BaseModel):
    question: str

# question="who is gilmini?"

with open('C:/Users/laksh/Desktop/Project/QA_Project/backend/src/app/data_html.html','r') as file:
    html_content=file.read()
soup=BeautifulSoup(html_content,'html.parser')
soup_str= str(soup)
text_data=soup_str
#text_data=extract(data)
chunks=convert_chunks(text_data)
vector_db=text_embedding(chunks)

# @app.get("/")
# async def read_root():
#     answer = generate_answer(vector_db, question)
#     #json_compatible_answer = jsonable_encoder(answer)
#     return answer
#question="who is gilmini?"
@app.post("/")
class Question(BaseModel):
    question: str

@app.post("/generate-answer/")
async def generate_answer_endpoint(question: Question):
    answer = generate_answer(vector_db,question.question)  # Call your existing function here
    result = qa_collection.insert_one({"question": question.question, "answer": answer})
    return {"answer": answer}

@app.get("/history")
def get_all_questions():
    all_qa = qa_collection.find()
    return dumps(all_qa)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
