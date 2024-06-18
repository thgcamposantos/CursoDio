class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'realizou um ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi('Gandalf', 1000, 'mago');
  const guerreiro = new Heroi('Arthur', 35, 'guerreiro');
  const monge = new Heroi('Liu Kang', 30, 'monge');
  const ninja = new Heroi('Ryu Hayabusa', 28, 'ninja');
  
  mago.atacar();       
  guerreiro.atacar();  
  monge.atacar();      
  ninja.atacar();  
  