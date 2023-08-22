var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

var [a, b] = lines.shift().split(' ').map(Number);
var cont = a;
var dig0 = 0;
var dig1 = 0;
var dig2 = 0;
var dig3 = 0;
var dig4 = 0;
var dig5 = 0;
var dig6 = 0;
var dig7 = 0;
var dig8 = 0;
var dig9 = 0;
var palavra = "a"
var letra = 'a';
if( a!=0){
while (cont <= b) {
    palavra = cont.toString();
    cont = cont+1;
    for (var x = 0; x<palavra.length; x++ )
    {      
        letra = palavra.substring(x, x+1) 
        switch (letra) {
            case "0":
                dig0 = dig0+1;
                break;
            case "1":
                dig1 = dig1+1;
                break;
            case "2":
                dig2 = dig2+1;
                break;
            case "3":
                dig3 = dig3+1;
                break;
            case "4":
                dig4 = dig4+1;
                break;
            case "5":
                dig5 = dig5+1;
                break;
            case "6":
                dig6 = dig6+1;
                break;
            case "7":
                dig7 = dig7+1;
                break;
            case "8":
                dig8 = dig8+1;
                break;
            case "9":
                dig9 = dig9+1;
                break;
        }
    }       
}
console.log(dig0 + " " + dig1 + " " + dig2 + " " + dig3 + " " + dig4 + " " + dig5 + " " + dig6 + " " + dig7 + " " + dig8 + " " + dig9); 
}