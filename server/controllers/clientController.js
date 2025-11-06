import models from "../models/models.js"

const {Client} = models;

export const getAllClients = async(req,res,next) => {
    try{
        const clients = await Client.findAll()

        res.status(200).json(clients)
    }
    catch(err){
        next(err)
    };
}

export const getOneClient = async(req,res,next) => {
        try{
            const {id} = req.params;
            const oneClietns = await Client.findOne({where:{id}})
    
            res.status(200).json(oneClietns)
        }
        catch(err){
            next(err)
        };
}

export const postClient = async(req,res,next) => {
    try{
        const { name, rating, age} = req.body;
        const newclient = await Client.create({name, rating, age});

        res.status(201).json({message: 'Добавлено'});
    }
    catch(err){
        next(err)
    };
}

export const deleteClient = async(req,res,next) => {
    try{
        const {id} = req.params;
        const deleted = await Client.destroy({where:{id}})

        res.status(202).json({message: 'Удалено'});
    }
    catch(err){
        next(err)
    };
}