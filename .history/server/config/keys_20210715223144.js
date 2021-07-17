const SERVER = {
    secret:"n69zhKGLv6",
    port: 3000
}

const DB_USER = "test";
const DB_PASSWORD = "password";
const MONGODB = {
    MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
};

const SESSION = {
    COOKIE_KEY: "romeo"
};

const KEYS = {
    ...MONGODB,
    ...SESSION
}

module.exports = KEYS;