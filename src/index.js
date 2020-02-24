module.exports = function toReadable (number) {
    var arr = [
        [, "one", "two", "three", "four", "five", "six",
            "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"],
    
        [,,"twenty", "thirty", "forty", "fifty", "sixty",
            "seventy", "eighty", "ninety"],
    ];
if (number < 20){
    return arr[0][number];
}
if (number >= 100) {
    var x = number.toString().substring(1,2);
    if (parseInt(number%100) < 20) {
        return (arr[0][parseInt(number/100)] + ' hundred ' + arr[0][parseInt(number%100)]);
    }
    else if (parseInt(number%100) >= 0) {
        return (arr[0][parseInt(number/100)] + ' hundred ' + arr[1][x] + ' ' + arr[0][parseInt(number%10)]);
    }
    else {return ('');}
}
return  (arr[1][parseInt(number/10)] + ' ' + (parseInt(number%10)? arr[0][parseInt(number%10)]:'' ));
}


