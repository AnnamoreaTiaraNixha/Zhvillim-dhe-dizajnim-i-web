module.exports = {
    DB: 'mongodb://localhost:27017/MedicalProducts'
 };

 /*
const mongoose = require('mongoose');
const uri = 'mongodb+srv://gent:admin@cluster0.zcpfida.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error.message);
});
*/