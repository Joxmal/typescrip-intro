import './style.css'
// import { Pokemon2,charmander3 } from './bases/03-classes'
// import { charmander } from './bases/03-classes'
// import { charmander } from './bases/04-injection'
import { charmander } from './bases/05-decorators'






document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
  <h1>${charmander.name} ${charmander.id}</h1>
  <ahref="https://vitejs.dev/guide/features.html" target="_blank">Documentation</ahref=>


`
