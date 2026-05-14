import express from "express";

import { create, deleteAttendance, fetch, update} from "../Controller/userController.js";

const route  = express.Router();

route.get("/getallattendance", fetch);  
route.post("/create", create);   
route.put("/update/:id", update); 
route.delete("/delete/:id", deleteAttendance);  

export default route;