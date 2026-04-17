const mongoose = require('mongoose');

const uri = 'your_mongodb_uri_here';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;