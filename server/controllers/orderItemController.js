import models from "../models/models.js"

const {Order_item} = models;

export const getOrder_item = async(req,res,next) => {
        try{
            const getOrder_item = await Order_item.findAll()
    
            res.status(200).json(getOrder_item)
        }
        catch(err){
            next(err)
        };
}

export const postOrder_item = async(req,res) => {
    try{
        const postOrder_item = await Order_item.create()

        res.status(200).json(postOrder_item)
    }
    catch(err){
        next(err)
    };
}