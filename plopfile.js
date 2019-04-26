const datepickerPrompt = require('inquirer-datepicker-prompt')

const prompts = {
  title: {
    type: 'input',
    name: 'title',
    message: 'Title: ',
  },
  publication: {
    type: 'input',
    name: 'publication',
    message: 'Publication: ',
  },
  link: {
    type: 'input',
    name: 'link',
    message: 'Link: ',
  },
  snippet: {
    type: 'input',
    name: 'snippet',
    message: 'Snippet: ',
  },
  publicationDate: {
    type: 'datetime',
    name: 'publicationDate',
    message: 'Publication Date: ',
  },
  eventName: {
    type: 'input',
    name: 'eventName',
    message: 'Event Name: ',
  },
  eventDate: {
    type: 'datetime',
    name: 'eventDate',
    message: 'Event Date: ',
  },
}

module.exports = function (plop) {
  plop.setPrompt('datetime', datepickerPrompt);
  plop.setGenerator('writing', {
    description: 'A piece of writing, such as a blog post',
    prompts: [ prompts.title, prompts.publication, prompts.publicationDate, prompts.snippet, prompts.link ],
    actions: [ saveAsJson('writing', 'writings') ],
  });

  plop.setGenerator('speaking', {
    description: 'A speaking gig, such as a conference or meetup',
    prompts: [ prompts.title, prompts.link, prompts.eventName, prompts.eventDate, prompts.snippet ],
    actions: [ saveAsJson('speaking', 'speakings') ],
  });
};

function saveAsJson(singular, plural) {
  return {
    type: 'add',
    path: `content/${plural}/{{dashCase title}}.json`,
    templateFile: `templates/${singular}.hbs`,
  }
}
