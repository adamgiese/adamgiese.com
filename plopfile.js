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
  }
}

module.exports = function (plop) {
  plop.setPrompt('datetime', datepickerPrompt);
  plop.setGenerator('writing', {
    description: 'A piece of writing, such as a blog post',
    prompts: [
      prompts.title,
      prompts.publication,
      prompts.publicationDate,
      prompts.snippet,
      prompts.link,
    ],
    actions: [
      {
        type: 'add',
        path: 'content/writings/{{dashCase title}}.json',
        templateFile: 'templates/writing.hbs',
      },
    ],
  });
};
