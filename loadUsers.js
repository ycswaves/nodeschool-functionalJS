function loadUsers(userIds, load, done) {
  var users = []
    , loadCounter = 0;
  for (var i = 0; i < userIds.length; i++) {
    users[i] = userIds[i];
    load(userIds[i], function(user){
      if(user !== undefined){
        var index = users.indexOf(user.id);
        users[index] = user;
        loadCounter++;
      }
      if(loadCounter >= userIds.length){
         return done(users);
      }
    });
  }
  return users
}

module.exports = loadUsers


// Tim's answer
// function loadUsers(userIds, load, done) {
//   var completed = 0
//   var users = []
//   userIds.forEach(function(id, index) {
//     load(id, function(user) {
//       users[index] = user
//       if (++completed === userIds.length) return done(users)
//     })
//   })
// }
