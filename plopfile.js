const datepickerPrompt = require('inquirer-datepicker-prompt')

module.exports = function (plop) {
  plop.setPrompt('datetime', datepickerPrompt);
  plop.setGenerator('writing', {
    description: 'A piece of writing, such as a blog post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Title: ',
      },
      {
        type: 'input',
        name: 'publication',
        message: 'Publication: ',
      },
      {
        type: 'input',
        name: 'link',
        message: 'Link: ',
      },
      {
        type: 'input',
        name: 'snippet',
        message: 'Snippet: ',
      },
      {
        type: 'datetime',
        name: 'publicationDate',
        message: 'Publication Date: ',
      },
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
