//Função
function medida(metros) {
    //Váriavel


    var Deci = 0.1
    var Centi = 0.01
    var Mili = 0.001



    //Calculo
    Deci = metros * 10;
    Centi = metros * 100;
    Mili = metros * 1000;  

    console.log(Deci,Centi,Mili);
}
// chamar digitar a função
medida(1);
