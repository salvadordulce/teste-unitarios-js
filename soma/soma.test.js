var somar = require("./soma");

//CRIANDO O PRIMEIRO TESTE
test('Somar 1 + 1 para resultado em 2', function(){
    var resultado = somar(1,1);

    expect(resultado).toBe(2);
});

//CRIANDO O SEGUNDO TESTE
test('Somar 15 + 27 + 300 para resultado em 342', function(){
    var resultado = somar(15,27,300);

    expect(resultado).toBe(342);
});