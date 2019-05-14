const datepickerPrompt = require('inquirer-datepicker-prompt')
const {
  eventDate,
  eventName,
  link,
  publication,
  publicationDate,
  slug,
  snippet,
  title,
} = require('./util/plop/prompts.js');

module.exports = function (plop) {
  plop.setPrompt('datetime', datepickerPrompt);
  plop.setGenerator('writing', {
    description: 'A piece of writing, such as a blog post',
    prompts: [ title, slug, publication, publicationDate, snippet, link ],
    actions: [ saveAsJson('writing', 'writings') ],
  });

  plop.setGenerator('speaking', {
    description: 'A speaking gig, such as a conference or meetup',
    prompts: [ title, slug, link, eventName, eventDate, snippet ],
    actions: [ saveAsJson('speaking', 'speakings') ],
  });
};

function saveAsJson(singular, plural) {
  return {
    type: 'add',
    path: `content/${plural}/{{dashCase slug}}.json`,
    templateFile: `templates/${singular}.hbs`,
  }
}
