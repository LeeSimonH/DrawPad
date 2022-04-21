const fs = require('fs');

let writeLocation;
let drawingList;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/drawings.test.json`;
  drawingList = JSON.parse(fs.readFileSync(writeLocation));
} else {
  writeLocation = `${__dirname}/drawings.dev.json`;
  drawingList = JSON.parse(fs.readFileSync(writeLocation));
}

const db = {};

/**
 * #sync - Overwrites the current database with drawings list from client
 *
 * @param {Array} markets - the new drawings list
 * @return {Array} the list of drawings
 */
db.sync = (drawings) => {
  if (!Array.isArray(drawings)) {
    return new Error(
      `Market list must be an array, received ${typeof drawings}`
    );
  }
  if (drawings.some((d) => d.drawingId === undefined)) {
    return new Error('Missing fields on some drawings');
  }
  db.write(drawings);
  db.reset();
  return drawingList;
};

/**
 * #find - Returns the entire list of drawings from the appropriate
 * drawings.env.json file.
 *
 * @return {Array} the list of drawings
 */
db.find = () => {
  db.reset();
  return drawingList;
};

/**
 * #drop - Deletes everything from the appropriate sketchpads.env.json file and
 * writes an empty array in its place.
 */
db.drop = () => {
  drawingList = [];
  db.write(drawingList);
};

db.write = (data) => {
  fs.writeFileSync(writeLocation, JSON.stringify(data, null, 2));
};

db.reset = () => {
  drawingList = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;
