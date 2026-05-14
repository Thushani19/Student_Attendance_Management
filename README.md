# Student_Attendance_Management
Student_Attendance_Management using node.js, mongoDB and Express.js

ICA -03 Project
1. Project Title :- Student AAttendance Management System
2. Problem Description :- Many schools and institutes still manage attendance manually. 
        Manual attendance wastes time and can cause mistakes.
3. Propoed Solution :- this system helps manage student attendance digitally using REST APIs.
        Users can: 
        1. Add students
        2. View attendance
        3. Update attendance
        4. Delete records

4. Features :-
        1. Student id / registration
        2. Attendance marking
        3. CRUD operations
        4. MongoDB Database integrations
        5. RESTful API
        6. Postman testing

5. Technologies Used :-
        1. Node.js
        2. Express.js
        3. MongoDB
        4. Mongoose
        5. Postman
        6. GitHub

6. API Endpoints :-
        GET :- /getallattendance  
        POST :- /create   
        PUT :- /update/:id 
        DELETE :- /delete/:id

7. Setup Instructions :-
        CREATE folder sturcture:-
        Student Attendance Management/
            |
            |__Controller/
            |      |__StudentController.js
            |
            |__routes/
            |     |__studentRoute.js
            |
            |__Model/
            |     |__Student.js
            |__index.js
            |
            |__package.json
            |
            |__README.md
            |
            |__.env
            |
            |.gitignore
            |
            |__Screenshots
            |

        1. Package installation
              Eg:- npm init, npm i express
        2. Run project
        3. Postman testing

8. How to run the Project :-
        1. node index.js
        2. GET :- (http://localhost:8000/api/Attendance/getallattendance) 
        3. POST :- (http://localhost:8000/api/Attendance/create)   
        4. PUT :- (http://localhost:8000/api/Attendance/update/6a06085d77b0a3297f735e0d)
        5. DELETE :- (http://localhost:8000/api/Attendance/delete/6a06085d77b0a3297f735e0d)
