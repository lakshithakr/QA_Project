from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.utills import extract_text_pdf,extract_text_docx,extract,convert_chunks, text_embedding, generate_answer
from bs4 import BeautifulSoup
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from fastapi.responses import JSONResponse

app= FastAPI()

origins=["http://localhost:3000"]

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
    return {"answer": answer}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
