import pDb from '../database/db.js';
import query from '../query/query.js'

const getEmploye = async (req, res) => {
    try {
        const result = await pDb.any(query.getEmploye);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getEmployeById = async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const result = await pDb.any(query.getEmployeById,[id])
        res.status(200).json(result)
    }catch(err){
        res.status(500).json( {error : err.message})
    }

}


const addEmploye = async (req,res)=>{
    const {emp_name,email,city,salary} = req.body;
    try{
        const emailExist = await pDb.any(query.checkEmail,[email]);
        if(emailExist.length > 0){
            res.status(400).send("email is already exist")
        }else{
            await pDb.any(query.addEmploye,[emp_name,email,city,salary]);
            res.status(201).send("student add successfully")
        }

    }catch(err){
        res.status(500).json( {error : err.message})
    }
}

const removeEmploye = async (req,res)=>{
    const id = parseInt(req.params.id);
    try{
        const checkEmploye = await pDb.any(query.checkEmploye,[id])
        if(checkEmploye.length == 0){
            res.status(400).send("this employe is not exist")
        }else{
            await pDb.any(query.removeEmploye,[id]);
            res.status(200).send("employe successfully fired")
        }
    }catch(err){
        res.status(500).json( {error : err.message})
    }
}

const updateEmploye = async (req,res)=>{
    const id = parseInt(req.params.id);
    const { emp_name} = req.body;
    try{
        const haveEmp = await pDb.any(query.getEmployeById, [id])
        if(haveEmp.length == 0 ){
            res.status(400).send("employe doesent exist")
        }else{
            await pDb.any(query.updateEmploye,[emp_name,id])
            res.status(200).send("update employe successfully")
        }
    }catch(err){
        res.status(500).json( {error : err.message})
    }
}


export  default {
    getEmploye,
    getEmployeById,
    addEmploye,
    removeEmploye,
    updateEmploye
}
