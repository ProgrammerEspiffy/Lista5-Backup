var vetor = [10, 9, 10, 23, 12];

function acharMaior(vetor) {
    var maior_valor = vetor[0]
    var quantidade_de_vezes = 0
 
    for (let index = 0; index < vetor.length; index++) {
       if(maior_valor < vetor[index]){
          maior_valor = vetor[index]
       }
    }
 
    for (let index = 0; index < vetor.length; index++) {
       if(maior_valor == vetor[index]){
          quantidade_de_vezes++;
       }
    }
 
    var string = maior_valor + " " + quantidade_de_vezes

    return string
 } 
acharMaior(vetor);
console.log(acharMaior());