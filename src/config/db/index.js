const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

    async function connect() {
        try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs__blog-dev');
        console.log('successfully');
        } catch (error) {
            console.log('failed');
        }        
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
      }

module.exports = {connect};