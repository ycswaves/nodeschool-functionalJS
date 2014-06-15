function repeat(operation, num) {
  if(num <= 0) return false;
  operation();
  return repeat.bind(null, operation, --num);
}

function trampoline(fn) {
  while(fn && fn instanceof Function){
    fn = fn();
  }
}

module.exports = function(operation, num) {
   trampoline(repeat.bind(null, operation, num));
}