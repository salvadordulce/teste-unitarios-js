var mostrar = require("./mostrar-nome");

//CRIANDO O PRIMEIRO TESTE
test('Mostrar nome Dulce', function(){
    var resultado = mostrar("Dulce");

    expect(resultado).toBe("Dulce");
});

//CRIANDO O SEGUNDO TESTE
test('Mostrar nome', function(){
   
    var resultado = mostrar();

    expect(resultado).toBe("Sem nome");
});