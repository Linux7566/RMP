import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Client = sequelize.define(
    'clients',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        rating:{
            type: DataTypes.DECIMAL,
            allowNull:false,
            defaultValue: 0,
        },
        age:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        }
    }
)
const Product = sequelize.define(
    'products',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        count:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }

)

const Order = sequelize.define(
    'orders',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'открыт',
        },
        total_amount:{
            type: DataTypes.DECIMAL,
            defaultValue: 0,
        }
    }
)

const Order_item = sequelize.define(
    'order_item',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        count:{
            type:DataTypes.INTEGER,
        },
        price:{
            type: DataTypes.DECIMAL
        }
    }
)

Client.hasMany(Order)
Order.belongsTo(Client)

Order.hasMany(Order_item)
Order_item.belongsTo(Order)

Product.hasMany(Order_item)
Order_item.belongsTo(Product)

export default {Client, Product, Order, Order_item};
