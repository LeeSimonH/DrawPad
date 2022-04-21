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

const storageSchema = newSchema({
  drawingList: Array,
  newDrawingId: Number,
  currentDrawing: {
    type: Schema.Types.ObjectId,
    ref: 'drawing',
  },
  synced: Boolean,
});

const drawingsSchema = new Schema({
  drawingId: Number,
  grid: Array,
});

const Drawing = mongoose.model('Drawing', drawingsSchema);
const Storage = mongoose.model('Storage', storageSchema);

module.exports = {
  Drawing,
  Storage,
};
