from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumark:float

app=FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "get students method called"

#localhost:8000/addStudent
@app.post("/addStudent")
def addStudent():
    return "add students method called"
# PUT - Update student
# localhost:8000/updateStudent
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"


# DELETE - Delete student
# localhost:8000/deleteStudent
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"

@app.get("/getParticularStudent/{id}")
def getParticularStudent(id:int):
    return {"userid":id}

#localhost:80000/filterdept?dept="CSE" &marks 
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"dept":dept,"mark":mark}

@app.post("/addStudents")
def addStudent(stu:Student):
    return {"student_details":stu}