// worlds.ts
import { enemies } from './enemies';

import forestBackground from '/src/assets/forestBackground.jpg'
import cavernBackground from '/src/assets/cavernBackground.jpg'

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
  // Adicione mais mundos aqui
];