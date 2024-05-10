const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout

});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitação para saber se pode entrar no kart');
console.log('Alem das suas verificaçoes, precisamos verificar se voce esta na lista de presença do horario');

readline.question('Qual o ano de nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readline.question("Voce tem habilitação? (Sim/Não) ", temHabilitação => {
            if(!(temHabilitação.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilitação para entrar no kart');
            }else{
                readline.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})  