var join = Array.prototype.join

function logger(namespace) {
  return function(){
    console.log(namespace, join.apply(arguments,[' ']));
  }
}

module.exports = logger



// 'official answer'
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}