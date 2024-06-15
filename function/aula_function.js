function welcome(nome_welcome){
    console.log('Bem Vindo' + nome_welcome);
}


let nome = prompt('Digite seu nome: ');
let quant_visita = prompt('Primeira visita: s/n');
    if(quant_visita == 's'){
        welcome(nome)
    }else{
        console.log('Pode entrar')
    }