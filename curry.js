function curryN(fn, n) {
  return function () {
    return fn.bind.apply(fn, [null].concat(arguments));
  }
}

module.exports = curryN