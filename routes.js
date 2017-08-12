module.exports = (app) => {
    app.use('/api/image', require('./apis/user/index.js'));
}
