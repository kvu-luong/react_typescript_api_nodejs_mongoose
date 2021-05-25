if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://khanhvu:khanhvupass@ds139352.mlab.com:39352/todo_app",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost:27017/todo_app',
        secret: 'yoursecret'
    };
}