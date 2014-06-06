 function getDependencies(tree) {
  if(!tree.dependencies){
    return [];
  }
  	
  return Object.keys(tree.dependencies).reduce(function(resArr, dep){
    resArr.push(dep+'@'+tree.dependencies[dep].version);
  	return resArr;
  }, getDependencies(tree.dependencies)).sort();
}

module.exports = getDependencies
