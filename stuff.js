var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b) {
  return `The sum of these numbers is ${a + b}.`
}

var pi = 3.142;

// Shorthand version
module.exports = {
  counter,
  adder,
  pi
};

/*
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
*/
