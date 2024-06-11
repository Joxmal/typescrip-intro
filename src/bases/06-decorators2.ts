// decoradores

const Mydecorator = () =>{
  return(target:Function) => {
    console.log(target)
    console.log(NewPokemon)
    return NewPokemon
  }
}

const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}



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





export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ){}

  scream(){
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  @Deprecated('most use speak2 mehrod instead')
  speak(){
    console.log(`${this.name}, ${this.name}`)
  }
}

export const charmander = new Pokemon(4, 'Charmander')


charmander.speak()

abstract class hola {
  id?: number;
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

class Pokemon2 extends hola{
  constructor(id2: number, name2: string) {
    super(id2, name2)
  
  }
}
