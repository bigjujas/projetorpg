// worlds.ts
import { enemies } from './enemies';

import forestBackground from '/src/assets/forestBackground.jpg'
import cavernBackground from '/src/assets/cavernBackground.jpg'
import castleBackground from '/src/assets/castleBackground.jpg'

export const worlds = [
  {
    number: 'Mundo1',
    name: 'Bosque Sombrio 🌲',
    background: forestBackground,
    enemies: [enemies.goblin, enemies.forestBandit, enemies.forestUndead, enemies.forestTitan],
  },
  {
    number: 'Mundo2',
    name: 'Caverna da Fronteira 🗿',
    background: cavernBackground,
    enemies: [enemies.caveSkeleton, enemies.caveSpider, enemies.caveMonster, enemies.caveMage],
  },
  {
    number: 'Mundo3',
    name: 'Ruínas das Muralhas 🧱',
    background: castleBackground,
    enemies: [enemies.bronzeKnight, enemies.ghostKnight, enemies.cavallaryKnight, enemies.giantKnight],
  },
  // Adicione mais mundos aqui
];