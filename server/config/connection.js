const mongoose = require('mongoose'); // import mongoose

// create connection to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cold-case-central', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify
});

// export connection
module.exports = mongoose.connection;
