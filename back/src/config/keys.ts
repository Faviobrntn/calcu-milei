//keys.js - decide que credenciales debe devolver dependiendo el entorno
if (process.env.NODE_ENV === 'production') {
    //Cuando ejecutamos en Heroku, esta variable de entorno estara configurada para nosotros
    module.exports = require('./prod');
    
} else {
    module.exports = require('./dev');
}

// export default key1;
// export default key;