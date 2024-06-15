/*Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}*/

function personagem(F_vitoria , F_derrotas){
    let F_ranked = F_vitoria - F_derrotas;
    return F_ranked;
};

let vitoria = parseInt(prompt('Digite quantas vitorias possui: ')) ;
let derrotas = parseInt(prompt('Digite quantas derrotas possui: '));
let status_personagem = personagem(vitoria , derrotas);
    if(status_personagem <= 10){
        console.log('Ferro');
    }else if(status_personagem > 10 && status_personagem <= 20 ){
        console.log('Bronze');
    }else if(status_personagem > 20 && status_personagem <= 50){
        console.log('Prata');
    }else if(status_personagem > 50 && status_personagem <= 80){
        console.log('Ouro');
    }else if(status_personagem > 80 && status_personagem <= 90){
        console.log('Diamante');
    }else if(status_personagem > 90 && status_personagem <= 100){
        console.log('Lendário')
    }else{
        console.log('Imortal')
    }
