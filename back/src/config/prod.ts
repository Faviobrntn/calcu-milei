//prod.js - claves para el entorno de produccion, obtenidas desde las variables de entorno del servidor
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleFailureRedirect: 'http://avsa.hol.es/login/google/callback/null/null',
    googleLoginRedirect: 'http://avsa.hol.es/login/google/callback/',
    // mongoURI: process.env.MONGO_URI,
    mysql_username: process.env.MYSQL_USERNAME,
    mysql_password: process.env.MYSQL_PASSWORD,
    mysql_database: process.env.MYSQL_DATABASE,
    cookiekey: process.env.COOKIE_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    origin: 'http://avsa.hol.es'
};

// export default keys;