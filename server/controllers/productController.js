import models from "../models/models.js"

const {Product} = models;

export const getProduct = async(req,res,next) => {
        try{
            const getProduct = await Product.findAll()
    
            res.status(200).json(getProduct)
        }
        catch(err){
            next(err)
        };
}

export const postProduct = async(req,res,next) => {
    try{
        const postProduct = await Product.create()

        res.status(200).json(postProduct)
    }
    catch(err){
        next(err)
    };
}

export const updateProduct = async(req,res,next) => {
    try {
        const {id} = req.params;
        const [updated] = await Product.update (req.body,{where:{id}});
        if (!updated) return res.status(404).json({message: 'Товар не найден'});
        const product = await Product.findByPk(id);
        res.json(product);
    }
    catch(err) {
        next(err)
    };
}