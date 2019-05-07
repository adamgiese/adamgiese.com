const bundleByDate = require('./util/bundleByDate');

bundleByDate('./content/speakings/**.json', './src/bundled/speakings.json', 'eventDate');
