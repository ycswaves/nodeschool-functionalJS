function getDependencies(tree) {
  if(!tree.dependencies){
    return [];
  }

  return Object.keys(tree.dependencies).reduce(function(pre, dep){
    var depObj = tree.dependencies[dep]
      , resArr = getDependencies(depObj)
      , depStr = dep+'@'+depObj.version;

    resArr.push(depStr);

    resArr = resArr.filter(function(e){
      return pre.indexOf(e) == -1;
    });

    return pre.concat(resArr);
  },[]).sort();
}

module.exports = getDependencies

// official answer
function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

module.exports = getDependencies
