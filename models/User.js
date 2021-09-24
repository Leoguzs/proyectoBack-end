// class Usuario {
//     constructor(id, name, lastName, age, status, email, password){
//         this.id = id, 
//         this.name = name,
//         this.lastName = lastName,
//         this.age = age,
//         this.status = status,
//         this.email = email, 
//         this.password = password
//     }
// }

// module.exports = Usuario

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../config').secret

const UserSchema= new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Tiene que haber un nombre en usuario"]
    },
    lastname: {
        type: String, 
        required: [true, "Tiene que haber un apellido en usuario"]},
    age: {type: Number, required: true},
    status:{type: String, enum:['Premium', 'Basico'], required:true},
    email: {type: String, required:true, unique:true, match:[/\S+@\S+.\S+/, "Email invalido"],
    index:true},
    hash: String,
    salt: String

},{timestamps: true, collection: 'users'})

UserSchema.plugin(uniqueValidator, {message: "Ya existe"})


UserSchema.methods.newPassword = function(password){

    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString("hex")
  }
  
  UserSchema.methods.validatePassword = function (password) {
    const newHash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
    return this.hash === newHash
  }
  
  UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
  
    return jwt.sign({
      id: this._id,
      email: this.email,
      exp: parseInt(exp.getTime() / 1000),
    }, secret)
  }
  
  UserSchema.methods.toAuthJSON = function(){
    return {
      email: this.email,
      token: this.generateJWT()
    }
  }
UserSchema.methods.publicData = function (){  //I did not require email nor password, just in case
    return{
    id: this.id,
    name: this.name,
    lastname: this.lastname,
    age: this.age,
    email:this.email,
    status:this.status,
    }
}

mongoose.model("User", UserSchema)



/* exportar variable de entorno en terminal 

export Leonardo=45

echo $Leonardo      imprime lo que le decimos
 */


//definir la liga a la conxion de base de datos
//process.env.Leonardo   y trae el valor