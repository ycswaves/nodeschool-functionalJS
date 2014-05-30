function reduce(arr, fn, initial) {
  if(!arr.length)
    return initial;
  initial = fn(initial, arr.shift());
  return reduce(arr, fn, initial);
}

module.exports = reduce