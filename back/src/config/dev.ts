//prod.js - claves para el entorno de produccion, obtenidas desde las variables de entorno del servidor
module.exports = {
    googleClientID: "asdasd", //process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: "asdasdas", //process.env.GOOGLE_CLIENT_SECRET,
    googleFailureRedirect: 'http://localhost:4200/login/google/callback/null/null',
    googleLoginRedirect: 'http://localhost:4200/login/google/callback/',
    // mongoURI: 'mongodb://dev:sonserios10@localhost/avsa',
    // mongoURI: 'mongodb+srv://user_avsa:7j0RC8cVgTZWxAfb@clusteravsa-bjidz.mongodb.net/test?retryWrites=true&w=majority',
    mysql_username: 'favio',
    mysql_password: 'sonserios10',
    mysql_database: 'calcu_milei',
    cookiekey: 'AVSACOOKIE',
    JWT_SECRET: "oandnasdñonasdkjnañj21n23n4124n1n4ñ1k2nn123", //process.env.JWT_SECRET,
    // origin: 'http://localhost:4200',
    // origin: 'http://localhost:8100',
    origin: '*',
    verificacion: false
};

// export default keys;