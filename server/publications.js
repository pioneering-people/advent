/*

  After 'meteor remove autopublish':
  
  Meteor.publish('posts', function() {
    return Posts.find()
  })

  Meteor.publish('johnsPosts', function() {
    return Posts.find({'author': 'Tom'})
  })

  when meteor sees that somePosts publication has returned a cursor it checks the name of the
  server-side collection. Pulls all matching documents from the cursor and sends it into a
  client-side collection of the same name.


  Exclude certain fields:

  Meteor.publish('allPosts', function(){
    return Posts.find({}, {fields: {
      author: false
    }});
  });

  




*/