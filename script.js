// //a primeira deve receber um array de numeros e retornar todos os numeros do array multiplicados por 3
// let arrayNumeros = [1,2,3,4,5,6]
// let outroArray = [4,5,7,8,2,57]

// function multiplicaNumeros(array){
//   let novoArray = []
//   for(numero of array){
//     novoArray.push(numero*3)
//   }
//   return novoArray
// }
// let retornoFuncao = multiplicaNumeros(arrayNumeros)
// console.log(retornoFuncao)
// console.log(multiplicaNumeros(outroArray))

// //A segunda deve receber um array de números, e retornar um array apenas com os números pares.
// function numerosPares(pares){
//   let arrayPares = []
//   for(numero of pares){
//     if (numero%2===0){
//     arrayPares.push(numero)
//   }
// }
//   return arrayPares
// }
// console.log(numerosPares(arrayNumeros)) 

// console.log(arrayNumeros)
// const filtraArray = arrayNumeros.filter((numero, indice, array) => {
//   if (numero%2===0){
//     return numero
//   } 
// })
// console.log("filtro", filtraArray)





// Com o array de pokémons do template, faça o seguinte:
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]


// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
function trataPokemon(pokemon){
  pokemon.vida = 100
}

// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
const pokemonsVidaCheia = pokemons.map((elemento)=> {
  trataPokemon(elemento)
  return elemento
})
console.log(pokemonsVidaCheia)

// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback
const pokemonsDeFogo = pokemons.filter((tipofogo) =>{
  return tipofogo.tipo === "fogo"
})
console.log(pokemonsDeFogo)
