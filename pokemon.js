function Pokemon(nome, pontosAtaque, pontosDefesa) {
  this.nome = nome;
  this.pontosAtaque = pontosAtaque;
  this.pontosDefesa = pontosDefesa;
  this.atacar = (oponente) => {
    // Se eu tenho mais pontos de ataque 
    // do que o outro pokemon tem de pontos de defesa
    // Eu sou o campeão
    // Se não, eu sou o perdedor
    // CONDICAO ? VERDADEIRO : FALSO
    const vencedor = (this.pontosAtaque > oponente.pontosDefesa) ? this : oponente;
    console.log(`O vencedor da luta é ${vencedor.nome}\n`);  
  };
  this.saudacao = (callbackSaudacao) => {
    const textoSaudacao = `Olá. ${callbackSaudacao({...this})}`;
    console.log(textoSaudacao);
  }  
}

function saudacaoCompleta({ nome, pontosAtaque, pontosDefesa }) {
  return `Meu nome é ${nome}. Tenho ${pontosAtaque} pontos de ataque. Tenho ${pontosDefesa} pontos de defesa`; 
}

function saudacaoSimples({ pontosDefesa }) {
  return `Tenho ${pontosDefesa} pontos de defesa.`;
}

let pineco = new Pokemon("Pineco", 1500, 500);
let pikachu = new Pokemon("Pikachu", 2500, 1000);

let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'
let listaPokemons = JSON.parse(jsonPokemons);

// Para cada item dentro de RESULTS, vamos criar um novo POKEMON 
// e adicionar em uma lista de pokemons

let instanciasPokemons = [];
for (let contador = 0; contador < listaPokemons.results.length; contador++) {
  let instancia = new Pokemon(
    listaPokemons.results[contador].name, 
    (contador + 1) * Math.random() * 1000, 
    (contador + 1) * Math.random() * 500
  );
  instanciasPokemons.push(instancia);
}

// Map, Filter, ForEach, Reduce, Find.
// Map -> Método que retorna um array alterado
// Filter -> Método utilizado para filtrar e retornar um array filtrado
// ForEach -> Método utilizado para percorrer/iterar sobre um array
// Reduce -> Método utilizado para criar algo novo a partir de um array
// Find -> Método utilizado para encontrar algo dentro de um array

// for (let atacante = 0; atacante < instanciasPokemons.length; atacante++) {
//   const pokemonAtacante = instanciasPokemons[atacante];
//   console.log(`O atacante é ${pokemonAtacante.nome}. Os pontos de ataque são ${pokemonAtacante.pontosAtaque}`);

//   for (let defensor = 0; defensor < instanciasPokemons.length; defensor++) {
//     if (atacante != defensor) {
//       const pokemonDefensor = instanciasPokemons[defensor];
//       console.log(`O defensor é ${pokemonDefensor.nome}. Os pontos de defesa são ${pokemonDefensor.pontosDefesa}`);
//       pokemonAtacante.atacar(pokemonDefensor);
//     }
//   }

//   console.log('\n');
// }

instanciasPokemons.forEach((pokemon, index) => {
  console.log(`O atacante é ${pokemon.nome}. Os pontos de ataque são ${pokemon.pontosAtaque}`);
});

// Pokemons com mais de 2.000 de ataque
const pokemonsFortes = instanciasPokemons.filter((pokemon) => {
  return pokemon.pontosAtaque > 2000 && pokemon.nome.includes("char");
});

function proprioForEach (array, callback) {
  for (let posicao = 0; posicao < array.length; posicao++) {
    const valor = array[posicao];
    callback(valor, posicao);
  }
}

proprioForEach(pokemonsFortes, (valor, posicao) => {
  console.log(valor.nome);
});

proprioForEach(pokemonsFortes, (valor, posicao) => {
  console.log(valor.pontosAtaque);
});

// Criar o próprio método de filter
// Criar o próprio método de map