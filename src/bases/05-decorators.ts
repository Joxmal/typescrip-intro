class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ){}

  scream(){
    console.log(`NO QUIERO!!!`)
  }

  speak(){
    console.log(`NO QUIERO HABLAR`)
  }
}



const Mydecorator = () =>{
  return(target:Function) => {
    console.log(target)
    console.log(NewPokemon)
    return NewPokemon
  }
}

@Mydecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ){}

  scream(){
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak(){
    console.log(`${this.name}, ${this.name}`)
  }
}

export const charmander = new Pokemon(4, 'Charmander')

charmander.speak()
charmander.scream()