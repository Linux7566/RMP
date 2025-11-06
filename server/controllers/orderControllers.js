import models from "../models/models.js"

const {Order} = models;

export const getOrder = async(req,res,next) => {
        try{
            const getOrder = await Order.findAll()
    
            res.status(200).json(getOrder)
        }
        catch(err){
            next(err)
        };
}

export const postOrder = async(req,res,next) => {
    try{
        const postOrder = await Order.create()

        res.status(200).json(postOrder)
    }
    catch(err){
        next(err)
    };
}