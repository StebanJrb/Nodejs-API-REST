import { response } from "express";
import {getConnection} from "../database/database";

const getLabs = async (request,response)=>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, sala, inicio, fin FROM eventos");
        response.json(result);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};
const getLab= async (request,response)=>{
    try{
        const name1 = request.query.name;
        const sala1 = request.query.sala;
        console.log(name1);
        console.log(sala1);
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, sala, inicio, fin FROM eventos WHERE name= ? AND sala = ?", [name1, sala1]);
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
const addPrac = async (request,response)=>{
    try{
        const connection = await getConnection();
        let {room_id, user_id, start_time, end_time, event_title,event_description}= request.body;
        if(room_id == undefined || user_id == undefined || start_time == undefined || end_time == undefined || event_title == undefined || event_description == undefined){
            response.status(400).json({message:"Usuario no lleno los campos"});
        }else{
            const roomidentity = await connection.query("SELECT room_id FROM salas_laboratorio WHERE room_name =?",room_id);
            room_id = roomidentity[0].room_id;
            const practica = {room_id, user_id, start_time, end_time, event_title,event_description};
            const result = await connection.query("INSERT INTO eventos_reserva SET ?", practica);
            response.json(result);
            response.status();
            }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
};
function reqInfoLab() {
    try{
        const connection = getConnection();
        let loop;
        const result = connection.query("SELECT COUNT(*) AS total FROM eventos_reserva");
        loop = result[0].total;
        console.log("cantidad es de:");
        console.log(loop);
    }catch(error){
        
    }
};


export const methods ={
    getLabs,
    getLab,
    addPrac,
    reqInfoLab
};