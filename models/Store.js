const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const StoreSchema = new mongoose.Schema({
  description: {
    type: String,
    require: 'Enter a name'
  }
});

module.exports = mongoose.model('Store', StoreSchema)