//// Load Node modules
const express = require('express');
const path = require('path');

// Initialise Express
const app = express();
const PORT = 3000;

// Handle request for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// Define route handlers

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
  res.sendFile('client/index.html');
});

/**
 * configure express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(
    {},
    { ...defaultErr },
    { message: { err: err.message } }
  );
  console.log(errorObj.log);

  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
