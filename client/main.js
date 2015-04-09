/*

  After 'meteor remove autopublish':
  
  Meteor.subscribe('posts')


  Instead of using the deps.autorun to
  redraw everything on all changes in data
  we can choose how things change on specific
  data change events:

  Posts.find().observe({
    added: function(post) {
      // when 'added' callback fires, add HTML element
    },
    changed: function(post) {
      // when 'changed' callback fires, modify HTML element's text
    },
    removed: function(post) {
      // when 'removed' callback fires, remove HTML element
    }
  });




*/