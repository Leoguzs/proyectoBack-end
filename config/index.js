//información general de configuración


//Sesion 8
module.exports ={
    secret: process.env.NODE_ENV ==='production' ? process.env.SECRET : 'secret'
};
