const express = require('express');
const app = express();
const path = require('path');
const { nextTick } = require('process');

const db = require('./db/drawings');
const port = process.env.PORT || 3000;

// statically serve everything in the build folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../client')));
app.use(express.json());

// used to return the list of drawings
app.get('/drawings', (req, res) => {
  res.json(db.find());
});

// used to save/update list of drawings
app.post('/drawings', (req, res, next) => {
  const syncResult = db.sync(req.body);
  if (syncResult instanceof Error) {
    return next({ code: 400, error: syncResult });
  }
  res.json(syncResult);
});

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
