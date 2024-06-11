import axios from 'axios'
import { PokeAPIResponse } from '../interfaces/pokeapi-response.interface'; 


export class  Pokemon2 {   
  private name: string;
  private type: string;
  private hp: number;

  constructor(config: { name: string, type: string, hp: number }) {
    this.name = config.name;
    this.type = config.type;
    this.hp = config.hp;
  }
    
  public getName(): string {
      return this.name
  }
  
  public getType(): string {
      return this.type
  }
  
  public getHp(): number {
      return this.hp
  }

  public attack(target: Pokemon2): void {
      console.log(`${this.name} attacks ${target.getName()}!`)
  }

   public takeDamage(damage: number): void {
      this.hp -= damage
      console.log(`${this.name} takes ${damage} damage. HP left: ${this.hp}`)
  }
}

export class Pokemon {
  public name: string
  public id: number

  constructor(id: number,name:string){
    this.id = id;
    this.name = name;
    console.log('constuctor llamando')
  }
}

export const charmander = new Pokemon(4, 'Charmander')

export class Pokemon3 {

  get urlNombre(): string{
    return `https://pokeapi.co/api/v2/${this.name}/${this.id}`
  }

  constructor( private id: number, private name:string) {
  }

  async getMoves(){
    // const moves = 10
    const {data} = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)

    console.log(data.moves)
    return data.name
  }
}

export const charmander3 = new Pokemon3(4, 'Charmander')