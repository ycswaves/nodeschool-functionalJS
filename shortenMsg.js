function getShortMessages(messages) {
  return messages.filter(function(obj){
    return obj.message.length < 50;
  }).map(function(e){
    return e.message;
  });
}

module.exports = getShortMessages