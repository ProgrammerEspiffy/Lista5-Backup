var temp = [30, 24, 23, 35, 32, 22, 36]

var menorTemp = 1000
var maiorTemp = 0

var Midia;

tempMedia = temp[0] + temp[1] + temp[2] + temp[3] + temp[4] + temp[5] + temp[6];
tM = tempMedia / 7

for (let i = 0; i < temp.length; i++) {
    if (menorTemp > temp[i]) {
       menorTemp = temp[i] 
    }
    if (maiorTemp < temp[i]) {
        maiorTemp = temp[i]
    }
    
    if (tM < temp[i]) {
        Midia = temp[i]
    }

}
console.log(menorTemp);
console.log(maiorTemp);
console.log(tM);
console.log(Midia);