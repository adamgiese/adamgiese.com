const glob = require('glob');
const fs = require('fs');

glob('content/writings/**.json', (err, filenames) => {
  const file = filenames.map(toFileContents).sort(byPublicationDate);
  fs.writeFileSync('./src/bundled/writings.json', JSON.stringify(file, null, 2));
});

function toFileContents (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

function byPublicationDate (a,b) {
  return parseTime(b.publicationDate) - parseTime(a.publicationDate);
}

function parseTime (time) {
  return new Date(time).getTime();
}
