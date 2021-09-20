const mongoose = require('mongoose') //it's to going to help us to communicate with the Database
const User = mongoose.model("User")


//CRUD

//save new user in the Database
function newUser(req, res, next) {
    var user = new User(req.body);
    user.save().then(nuUser => {       //success
        res.status(200).send(nuUser)
    }).catch(next)                     //error
}


//CRUD

//get
function getUser(req, res, next) {    //If the client uses id, means, it wants to find one user 
    if (req.params.id){
        User.findById(req.params.id)
        .then(us => {res.send(us)})
        .catch(next)
    } else {                         //the client will get ALL the users
        User.find()
        .then(users=>{res.send(users)})
        .catch(next)
    }
}


//update
function updateUser(req, res, next) {
    User.findById(req.params.id)
        .then(user => {
            if (!user) { return res.sendStatus(401); }
            let updatedInfo = req.body
            if (typeof updatedInfo.name !== "undefined")
                user.name = updatedInfo.name
            if (typeof updatedInfo.age !== "undefined")
                user.age = updatedInfo.age
            if (typeof updatedInfo.lastName !== "undefined")
                user.lastName = updatedInfo.lastName
            if (typeof updatedInfo.status !== "undefined")
                user.status = updatedInfo.status
            if(typeof updatedInfo.email !== "undefined")
                user.email = updatedInfo.email
                if (typeof updatedInfo.password !== "undefined")
                user.password = updatedInfo.password
                
            user.save()
            .then(updated =>{
                res.status(200).json(updated.publicData())
            })
            .catch(next)
        })
        .catch(next)
}

function deleteUser(req, res, next) {
    User.findOneAndDelete({_id:req.params.id})
    .then (d => {res.status(200).send("The user has been deleted")})
    .catch (next)
}

module.exports = {
    newUser,
    getUser,
    updateUser,
    deleteUser
}


/* Servicio para modificar un registro, se debe de considerar los casos de modificaciones por atributo, es decir, si los registros tienen un atributo nombre el servicio debe ser capaz de solo modificar el nombre. Así como una modificación total, es decir, de todos los atributos. Se recomienda definir servicios por separado para cada caso.
Consulta por id.

Consulta de todos los registros.

Consulta por coincidencia de atributos, es decir, si los registros tienen un campo nombre, el servicio debe ser capaz de regresar todos los registros que compartan el nombre. Y esto debe funcionar en general para todos los campos de la base.

Servicio se consulta de todos los registros limitado a un número que determina el cliente.

Servicio de consulta por campos, es decir, un servicio que solo regrese los campos que se piden por el usuario. */
