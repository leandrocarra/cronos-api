const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.json({
    homePage: true
  });
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body)
  await store.save();
  res.redirect('/');
};

exports.GetStores = async (req, res) => {
  const stores = await Store.find();
  res.json(stores)
};

exports.ListStores = async (req, res) => {
 const store = await Store.findOne({ _id: req.params.id });
 res.json(store)
};

exports.DeleteStores = async (req, res) => {
  const store = await Store.deleteOne({ _id: req.params.id });
  res.json(store)
 };
 