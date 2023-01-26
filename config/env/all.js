// default app configuration
const port = process.env.PORT || 4000;
let db = process.env.MONGODB_URI || "mongodb://nodegoat-server:NI59xvZho7pV7WVauFnmtfZPr7lecdm2yxFxLtPvLxjXrwJ6y498o4e2ttM9zFgiRUIl0LRY6KqpACDb8lOedg==@nodegoat-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nodegoat-server";

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};

