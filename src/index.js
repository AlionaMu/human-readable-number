module.exports = function toReadable (number) {
    let arr = [
        [, "one", "two", "three", "four", "five", "six",
            "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"],
    
        [,,"twenty", "thirty", "forty", "fifty", "sixty",
            "seventy", "eighty", "ninety"],
    ];
    let x = number.toString().substring(1,2);
    let y = number.toString().substring(2,3);
  if (number == 0)  return "zero"
  if (number < 20){
    return arr[0][number];
  }
  if (number >= 100) {
    if (x == 0 && y == 0) return arr[0][parseInt(number/100)] + ' hundred'
    else if (number%100 < 20) {
        return (arr[0][parseInt(number/100)] + ' hundred ' + arr[0][number%100]);
    }
    else if (number%100 >= 20 ) {
        return (y == 0?  arr[0][parseInt(number/100)] + ' hundred ' + arr[1][x]: arr[0][parseInt(number/100)] + ' hundred ' + arr[1][x] + ' ' + arr[0][number%10]);
    }
    else {return ('');}
  }
  return  (x == 0? arr[1][parseInt(number/10)]: arr[1][parseInt(number/10)] + ' ' + (number%10? arr[0][number%10]:'' ));
  }

