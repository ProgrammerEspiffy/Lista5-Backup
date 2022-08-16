//Variavel inicial
var nomes = []

//Nomes
nomes[0] = "Marcos"
nomes[1] = "Gauxi"
nomes[2] = "Carlos"
nomes[3] = "Relampago Marquinhos"
nomes[4] = "Salaminho"

//Codigo Nome
var codigoNome = nomes[0]

//variavel booleana
var achei = false

//Código de Looping
for (let ix = 0; ix < nomes.length; ix++) {
    if (codigoNome == nomes[ix]) {
        achei = true
    }

    //Maneira elegante
    if (achei == true) {
      console.log("Achei =) "+nomes);  
    } else {
        console.log("Não Achei =(")
    }
}

//Créditos ao Gui E Vinicius