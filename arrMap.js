module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(a, b, index, array){
    a.push(fn(b, index, array));
    return a;
  }, []);
}