import './style.css'
import { Pokemon2,charmander3 } from './bases/03-classes'
import { charmander } from './bases/03-classes'


const charmander2 = new Pokemon2({type: 'fire', name: 'Charmander', hp: 10})


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
  el poke es: ${charmander2.getName()} <br>
  el tipo es: ${charmander2.getType()} <br>
  el hp es: ${charmander2.getHp()} <br>

  <br>
  el poke es: ${charmander.name} <br>
  <br>

  ${charmander3.getMoves()}


`
