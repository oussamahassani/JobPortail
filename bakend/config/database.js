var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://bahrinawres39:nawres@cluster0.hhkwcqp.mongodb.net/jobiapp?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', true);
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() {
    console.log('database is connected successfully!!');
});