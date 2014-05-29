function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(e){
      return goodUsers.some(function(good){
        return good.id === e.id;
      });
    });

  };
}

module.exports = checkUsersValid