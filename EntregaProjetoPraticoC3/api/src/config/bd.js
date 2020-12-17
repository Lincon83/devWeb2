
const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, 
    poolSize: 10, 
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000, 
    family: 4 
  };

const mongo = mongoose.connect( 'mongodb://Users/lincon/EntregaProjetoPraticoC2', options);

mongo.then(() => {
    console.log('Conectado ao Banco de Dados');
}).catch(error => console.error(error.message));
