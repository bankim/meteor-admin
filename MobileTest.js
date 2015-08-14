if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  // Meteor.logout();

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  AdminConfig = {
    adminEmails: ['bankim@motifworks.com'],
    collections:
    {
    Eventos: {
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'Venue',
          name: 'venuename',
        }
      ]
    },
    eSessions: {
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'Description',
          name: 'description'
        }
      ]
    },
    Speakers: {
      tableColumns: [
        {
          label: 'First Name',
          name: 'fname'
        }, {
          label: 'Email',
          name: 'email'
        }
      ]

    },
    Attendees: {
      tableColumns: [
        {
          label: 'First Name',
          name: 'fname'
        }, {
          label: 'Email',
          name: 'email'
        }
      ]

    }
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  AdminConfig = {
    adminEmails: ['bankim@motifworks.com'],
    collections:
    {
    Eventos: {
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'Venue',
          name: 'venuename',
        }
      ]
    },
    eSessions: {
      tableColumns: [
        {
          label: 'Title',
          name: 'title'
        }, {
          label: 'Description',
          name: 'description'
        }
      ]
    },
    Speakers: {
      tableColumns: [
        {
          label: 'First Name',
          name: 'fname'
        }, {
          label: 'Email',
          name: 'email'
        }
      ]

    },
    Attendees: {
      tableColumns: [
        {
          label: 'First Name',
          name: 'fname'
        }, {
          label: 'Email',
          name: 'email'
        }
      ]

    }
    }
  }
}
