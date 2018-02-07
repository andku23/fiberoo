

function fib(){
  var out = [0, 1];
  var i = 1;
  var previous = i;
  while(out.length < 100){
    out.push(i);
    var temp = previous;
    previous = i;

    i += temp;

  }
  return out;
}

function numsToStrings(numbers){
  var out;
  out = _.map(numbers, function(num){
    return num.toString();
  });
  return out;
}

function numEvenNums(numbers){
  var out = 0;
  _.map(numbers, function(num){
    if(num % 2 == 0){
      out += 1;
    }

  });
  return out;
}

console.log(fib());
console.log(numsToStrings([1, 2, 3]));
console.log(numEvenNums(fib()));