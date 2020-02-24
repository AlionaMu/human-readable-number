/*module.exports = */function toReadable (number) {
    var array = number.toString().split('').map(Number);
    
    switch(array[0]){
        case undefined:
            x = null;
        case 0:
            break;
        case 1:
            x="one hundred";
            break;
        case 2:
            x="two hundred";
            break;
            case 3:
            x="three hundred";
            break;
             case 4:
            x="four hundred";
            break;
             case 5:
            x="five hundred";
            break;
             case 6:
            x="six hundred";
            break;
             case 7:
           x="seven hundred";
            break;
             case 8:
            x="eight hundred";
            break;
             case 9:
            x="nine hundred";
            break;
            }
    if (array[1] === 1) {
        switch(array[2]){
            case 1:
            y="eleven";
            break;
            case 2:
            y="twelve";
            break;
             case 3:
            y= "thirteen";
            break;
             case 4:
            y="fourteen";
            break;
             case 5:
            y="fifteen";
            break;
             case 6:
           y="sixteen";
            break;
             case 7:
            y="seventeen";
            break;
             case 8:
            y="eighteen";
            break;
            case 9:
            y="ninteen";
            break;
            };
        z = null;}
    switch(array[1]){
        case undefined:
            y = null;
        case 0:
            break;            
        case 2:
            y="twenty";
            break;
            case 3:
            y="thirty";
            break;
             case 4:
            y= "forty";
            break;
             case 5:
            y="fifty";
            break;
             case 6:
            y="sixty";
            break;
             case 7:
           y="seventy";
            break;
             case 8:
            y="eighty";
            break;
             case 9:
            y="ninety";
            break;
            }
    switch(array[2]){
        case undefined:
            z = null;
        case 0:
            break;
        case 1:
            z="one";
            break;
        case 2:
            z="two";
            break;
            case 3:
            z="three";
            break;
             case 4:
            z="four";
            break;
             case 5:
            z="five";
            break;
             case 6:
            z="six";
            break;
             case 7:
           z="seven";
            break;
             case 8:
            z="eight";
            break;
             case 9:
            z="nine";
            break;
            }


result = x + " " + y + " " + z;
return result;
}
console.log (toReadable(212));
console.log (toReadable(532));
console.log (toReadable(74));
console.log (toReadable(802));