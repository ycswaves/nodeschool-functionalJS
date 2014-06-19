function curryN(fn, n) {
  var n = n || fn.length;
  var args = [];
  return function curryFn(val){
    if(args.length < n-1){
      args.push(val);
      return curryFn;
    }
    else{
      return fn.apply(null, args.concat(val));
    }
  }
}

module.exports = curryN