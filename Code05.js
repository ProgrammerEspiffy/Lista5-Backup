//variaveis
//vetor.length = 10
var Posição = [2,4,6,8,10,12,14,16,18,20]
var Mvalor = 0;

//i++ = i = i + 1
for (let index = 0; index < Posição.length; index++) {
    
    //se ValorMaior < do Que Posição[I - 1]
    if(Mvalor < Posição[index - 1]){
        Mvalor = Posição[index]
    }
}
//debug
console.log(Mvalor);