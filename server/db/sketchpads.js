const fs = require('fs');

let writeLocation;
let drawingList;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/sketchpads.test.json`;
  drawingList = JSON.parse(fs.readFileSync(writeLocation));
} else {
  writeLocation = `${__dirname}/sketchpads.dev.json`;
  drawingList = JSON.parse(fs.readFileSync(writeLocation));
}

const db = {};

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
