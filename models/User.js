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
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    status:{type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true} //it could be hash
},{timestamps: true, collection: 'users'})

UserSchema.methods.publicData = ()=>{  //I did not require email nor password, just in case
    return{
    id: this.id,
    name: this.name,
    lastname: this.lastname,
    age: this.age,
    status:this.status,
    }
};

mongoose.model("User", UserSchema)
