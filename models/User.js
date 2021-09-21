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
    email: {type: String, required:true},
    password: {type: String, required:true} //it could be hash
},{timestamps: true, collection: 'users'})

UserSchema.methods.publicData = function () {  //I did not require email nor password, just in case
    return{
    id: this.id,
    name: this.name,
    lastname: this.lastname,
    age: this.age,
    email:this.email,
    status:this.status,
    }
};


//jwt? sesion 7
mongoose.model("User", UserSchema)
