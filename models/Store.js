const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const StoreSchema = new mongoose.Schema({
  description: {
    type: String,
    require: 'Enter name'
  },
  investedTime: { 
    type: String,
    require: 'Enter time'
  }
});

module.exports = mongoose.model('Store', StoreSchema)
