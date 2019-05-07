const glob = require('glob');
const fs = require('fs');

module.exports = function (input, output, dateField) {
  glob(input, (err, filenames) => {
    const file = filenames.map(toFileContents).sort(byPublicationDate);
    fs.writeFileSync(output, JSON.stringify(file, null, 2));
  });

  function toFileContents (filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
  }

  function byPublicationDate (a,b) {
    return parseTime(b[dateField]) - parseTime(a[dateField]);
  }

  function parseTime (time) {
    return new Date(time).getTime();
  }
}

