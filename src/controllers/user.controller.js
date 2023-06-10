import { response } from "express";
import {getConnection} from "../database/database";

const getUsers = async (request,response)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT user_id, username, password, email FROM usuarios");
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};
const getUser= async (request,response)=>{
    try{
        const name1 = request.query.username;
        const password1 = request.query.password;
        console.log(name1);
        console.log(password1);
        const connection = await getConnection();
        const result = await connection.query("SELECT user_id, username, password, email FROM usuarios WHERE username= ? AND password = ?", [name1, password1]);
        if(result.length == 0){
            response.status(500).json({error:'No en base de datos'}); 
        }else{
            response.json(result);
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};
const addUsers = async (request,response)=>{
    try{
        const {name, email, password}= request.body;
        if(name == undefined || email == undefined || password == undefined){
            response.status(400).json({message:"Usuario no lleno los campos"});
        }
        console.log(name);
        console.log(email);
        console.log(password);
        const estudiante = {name, email, password};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?",estudiante);
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};
const deleteUser= async (request,response)=>{
    try{
        const name1 = request.query.name;
        const password1 = request.query.password;
        console.log(name1);
        console.log(password1);
        const connection = await getConnection();
        const result = await connection.query("DELETE user_id, username, password, email FROM usuarios WHERE name= ? AND password = ?", [name1, password1]);
        if(result.length == 0){
            response.status(500).json({error:'No en base de datos'}); 
        }else{
            response.json(result);
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods ={
    getUsers,
    getUser,
    addUsers,
    deleteUser
};