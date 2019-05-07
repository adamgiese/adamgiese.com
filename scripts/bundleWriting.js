const bundleByDate = require('./util/bundleByDate');

bundleByDate('./content/writings/**.json', './src/bundled/writings.json', 'publicationDate');
