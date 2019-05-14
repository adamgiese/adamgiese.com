const prompts = {
  title: {
    type: 'input',
    name: 'title',
    message: 'Title: ',
  },
  slug: {
    type: 'input',
    name: 'slug',
    message: 'Slug: ',
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
};

module.exports = prompts;

