//información general de configuración


//Sesion 8
module.exports ={
    secret: pricess.env.NODE_ENV ==='production' ? process.env.SECRET : 'secret'
};
