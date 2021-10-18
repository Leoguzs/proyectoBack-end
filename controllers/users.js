const mongoose = require('mongoose') //it's to going to help us to communicate with the Database
const passport = require('passport')
const User = mongoose.model("User")


//CRUD

//save new user in the Database/post
function newUser(req, res, next) {
    const body = req.body,
        password = body.password

    delete body.password
    const user = new User(body)

    user.newPassword(password);    //sesion 7 revisar crearPassword
    user.save()
        .then(user => {
            return res.status(200).json(user.toAuthJSON())
        })
        .catch(next)
}


//get
function getUser(req, res, next) {    //If the client uses id, means, it wants to find one user 
    /* User.findById(req.user.id), (err, user) =>{ 
    if(!user || err){
        return res.sendStatus(401)
    }
    return res.send(user.publicData())
    })
    .catch(err => res.send(err)) */
    if (req.params.id) {
        User.findById(req.params.id)
            .then(us => { res.send(us) })
            .catch(next)
    } else {
        User.find()
            .then(users => { res.send(users) })
            .catch(next)
    }
}



//update/put
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
            if (typeof updatedInfo.email !== "undefined")
                user.email = updatedInfo.email
            if (typeof updatedInfo.password !== "undefined")
                user.newPassword(updatedInfo.password)

            user.save()
                .then(updated => {
                    res.status(201).json(updated.publicData())
                })
                .catch(next)
        })
        .catch(next)
}

function deleteUser(req, res, next) {
    User.findOneAndDelete({ _id: req.user.id })
        .then(d => { res.status(200).send("The user has been deleted") })
        .catch(next)
}

function newSesion(req, res, next) {
    if (!req.body.email || !req.body.password) {
        return res.status(422).json({ error: { email: "missing information" } })
    }
    passport.authenticate('local',
        { session: false },
        function (err, user, info) {
            if (err) { return next(err) }
            if (user) {
                user.token = user.generateJWT()   //sesion 7
            } else {
                return res.status(422).json(info)
            }
        })(req, res, next)
}

function count(req, res, next) {   /*status search */
    var status = req.params.st
    User.aggregate([
        { '$match': { 'status': status } },
        { '$count': 'total' }
    ]).then(r => {
        res.status(200).send(r)
    })
        .catch(next)
}

function totalUsers(req, res, next) { /* counts total users */
    let total = req.params.to
    User.aggregate([
        {
            '$count': 'null'
        }
    ]).then(r => {
        res.status(200).send(r)
    }).catch(next)
}



module.exports = {
    newUser,
    getUser,
    updateUser,
    deleteUser,
    newSesion,
    count,
    totalUsers
}


/* Servicio para modificar un registro, se debe de considerar los casos de modificaciones por atributo, es decir, si los registros tienen un atributo nombre el servicio debe ser capaz de solo modificar el nombre. Así como una modificación total, es decir, de todos los atributos. Se recomienda definir servicios por separado para cada caso.
Consulta por id.

Consulta de todos los registros.

Consulta por coincidencia de atributos, es decir, si los registros tienen un campo nombre, el servicio debe ser capaz de regresar todos los registros que compartan el nombre. Y esto debe funcionar en general para todos los campos de la base.

Servicio se consulta de todos los registros limitado a un número que determina el cliente.

Servicio de consulta por campos, es decir, un servicio que solo regrese los campos que se piden por el usuario. */
