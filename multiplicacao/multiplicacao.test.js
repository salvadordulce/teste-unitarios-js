var multiplicar = require("./multiplicacao");

//CRIANDO O PRIMEIRO TESTE
test('Multiplicar 4 * 4 para resultado em 16', function(){
    var resultado = multiplicar(4,4);

    expect(resultado).toBe(16);
});

//CRIANDO O SEGUNDO TESTE
test('Multiplicar 5 * 5 para resultado em 25', function(){
    var resultado = multiplicar(5,5);

    expect(resultado).toBe(25);
});
