import Attendance from "../Model/userModels.js";

export const create = async(req, res)=>{
    try{
       
        const AttendanceData = new Attendance(req.body);
        const {studentId} = AttendanceData;

        const AttendanceExist = await Attendance.findOne({studentId})
        if(AttendanceExist){
            return res.status(400).json({message : "studentId already exists."})
        }
       
        const savedAttendance = await AttendanceData.save();
       
        res.status(200).json(savedAttendance)
    } catch(error){
     
        res.status(500).json({error: "Internal server Error."})
    }
}

export const fetch = async(req, res)=>{
    try{
        
        const students = await Attendance.find();

        if(students.length=== 0){
            return res.status(404).json({message : "student not found."})
        }
       res.status(200).json(students);
    } catch(error){
       
        res.status(500).json({error: "Internal server Error."})
    }
}

export const update = async(req, res)=>{
    try{
        
        const id = req.params.id;
        
        const AttendanceExist = await Attendance.findOne({_id:id})
        if(!AttendanceExist){
            return res.status(404).json({message : "student not found."});
        }
       
        const updateAttendance = await Attendance.findByIdAndUpdate(id,req.body,{new : true});
       res.status(201).json(updateAttendance);
    } catch(error){
       
        res.status(500).json({error: "Internal server Error."});
    }
}

export const deleteAttendance = async(req, res)=>{
    try{
       
        const id = req.params.id;
        
        const AttendanceExist = await Attendance.findOne({_id:id})
        if(!AttendanceExist){
            return res.status(404).json({message : "Student not found."});
        }

        await Attendance.findOneAndDelete(id);
       
       res.status(201).json({message: "studentId deleted Successfully."});
        
    } catch(error){
        
        res.status(500).json({error: "Internal server Error."});
    }
}