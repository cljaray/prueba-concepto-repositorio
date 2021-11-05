require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.connect(process.env.DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('mongo db conectado');
}

module.exports = connectDB;

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 * 
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */ 



/* 
const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    admin: {type:Boolean, default:false},
    email: String,
    producto:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Producto"
    }],
    detalleCompra:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DetalleCompra"
    }],
    resetPasswordToken: String,
    passwordTokenExpires: Date,
    expDates:[{
        itemId:String,
        titulo:String,
        duracion:Number,
        fechaInicia:Date,
        fechaVence: Date,
        ultimaRenovacion: Date,
        renovado:{ type:Boolean, default:false }
    }],
    fechasDeRevision: [{
        itemId:String,
        fecha:{
            dia:Date,
            hora:String
        },
        pendiente:{type:Boolean,default:true},
        revisionesEnVivo: {type:Boolean,default:true},
        profesor: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Profesor"
        }
    }],
    revisionesEnVivo: Array
    
});

const ProfSchema = new mongoose.Schema({
    username: String,
    lastname: String,
    hash: String,
    email: String,  
    semanaString: String,  
    profesor: {type:Boolean, default:true},
    admin: {type:Boolean, default:false},
    permisoPendiente:{type:Boolean,default:true},
    resetPasswordToken: String,
    passwordTokenExpires: Date,
    semana: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Semana"
    }
    
    
});

const User = connection.model('User', UserSchema);
const Profesor = connection.model('Profesor', ProfSchema);


// Expose the connection
module.exports = connection;
 */