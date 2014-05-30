function countWords(inputWords) {
  return inputWords.reduce(function(pre, cur){
    pre[cur] = ++pre[cur] || 1;
    return pre;
  }, {});
}

module.exports = countWords