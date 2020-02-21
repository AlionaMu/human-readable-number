/*module.exports =*/ 
function toReadable (number) {
    var array = number.toString().split('').map(Number);
    switch(array[0]){
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
    switch(array[1]){
        case 0:
            break;
        case 1:
            y="Один";
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
console.log (toReadable(532));