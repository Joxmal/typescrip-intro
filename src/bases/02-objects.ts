export const PokemonIds: (number | string)[]  = [1,2,3,4]


export interface Pokemon {
  id: number;
  name: string;
  age? : number
}

export const bulbasaur: Pokemon = {
  id:1,
  name:'bulbasaur'
}

export const charmander: Pokemon = {
  id:4,
  name:'charmander',
  age: 10

}

export const pokemons: Pokemon[] = []

pokemons.push(charmander, bulbasaur)
console.log(pokemons)

PokemonIds.push("sdadad");