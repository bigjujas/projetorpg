// worlds.ts
import { enemies } from './enemies';

import forestBackground from '/src/assets/forestBackground.jpg'
import cavernBackground from '/src/assets/cavernBackground.jpg'
import castleBackground from '/src/assets/castleBackground.jpg'
import plagueBackground from '/src/assets/plagueBackground.jpg'
import capitalBackground from '/src/assets/capitalBackground.jpg'
import towerBackground from '/src/assets/towerBackground.jpg'

export const worlds = [
  {
    number: 'Mundo1',
    name: 'Bosque Sombrio 🪵',
    background: forestBackground,
    enemies: [enemies.goblin, enemies.forestBandit, enemies.forestUndead, enemies.forestTitan],
  },
  {
    number: 'Mundo2',
    name: 'Caverna da Fronteira 🌑',
    background: cavernBackground,
    enemies: [enemies.caveSkeleton, enemies.caveSpider, enemies.caveMonster, enemies.caveMage],
  },
  {
    number: 'Mundo3',
    name: 'Ruínas das Muralhas 🧱',
    background: castleBackground,
    enemies: [enemies.bronzeKnight, enemies.ghostKnight, enemies.cavallaryKnight, enemies.giantKnight],
  },
  {
    number: 'Mundo4',
    name: 'Terras Devastadas 🍄‍🟫',
    background: plagueBackground,
    enemies: [enemies.plagueBeer, enemies.plagueUndeads, enemies.plagueSkeleton, enemies.plagueDoctor],
  },
  {
    number: 'Mundo5',
    name: 'Capital Destruída 🐉',
    background: capitalBackground,
    enemies: [enemies.capitalArmy, enemies.capitalGuardian, enemies.capitalWarrior, enemies.capitalDragon],
  },
  // Adicione mais mundos aqui
  {
    number: 'Masmorra',
    name: 'Torre do Vazio 🌠',
    background: towerBackground,
    enemies: [enemies.abyssalKnight],
  },
];