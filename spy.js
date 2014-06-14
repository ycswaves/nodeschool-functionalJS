function Spy(target, method) {
  var spy = {count: 0}
    , originMethod = target[method];

  target[method] = function () {
    spy.count++;

    // argArr = Array.prototype.slice.call(arguments);
    // return originMethod.apply(target,argArr);
    //looks like no need to cast arguments into array

    return originMethod.apply(target,arguments);
  }
  return spy;
}
module.exports = Spy