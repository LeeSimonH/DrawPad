const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://simonlee1125:secret123@cluster0.fpkjo.mongodb.net/sketchpads?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'sketchpads',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const sketchpadsSchema = new Schema({
  name: String,
  drawingId: Number,
  grid: Array,
});

const Sketchpads = mongoose.model('sketchpads', sketchpadsSchema);

module.exports = Sketchpads;
