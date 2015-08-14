Router.configure({
  loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout'
    // notFoundTemplate: 'notFound',
    // waitOn: function() { return Meteor.subscribe('events'); }
});

Router.map(function() {

  // this.route('eventcode', {
  //   name: 'eventcode',
  //   path: '/'
  // });

//this.route('admin');
this.route('login');




});
