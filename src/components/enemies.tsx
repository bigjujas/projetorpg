import goblin from "/src/assets/enemies/goblin.jpg";
import forestBandit from "/src/assets/enemies/forestBandit.jpg";
import forestUndead from "/src/assets/enemies/forestUndead.jpg"
import forestTitan from "/src/assets/enemies/forestTitan.jpg"

import caveSkeleton from "/src/assets/enemies/caveSkeleton.jpg"
import caveSpider from "/src/assets/enemies/caveSpider.jpg"
import caveMonster from "/src/assets/enemies/caveMonster.jpg"
import caveMage from "/src/assets/enemies/caveMage.jpg"

import bronzeKnight from "/src/assets/enemies/bronzeKnight.jpg"
import ghostKnight from "/src/assets/enemies/ghostKnight.jpg"
import cavallaryKnight from "/src/assets/enemies/cavallaryKnight.jpg"
import giantKnight from "/src/assets/enemies/giantKnight.jpg"



export type Enemy = {
  name: string;
  health: number;
  maxHealth: number;
  coinsDropped: number;
  gemsDropped: number;
  kills: number;
  image: string;
};

export const enemies = {
  // Mundo 1
  goblin: {
    name: 'Goblin',
    health: 100,
    maxHealth: 100,
    coinsDropped: 5,
    gemsDropped: 0,
    kills: 0,
    image: goblin,
  },
  forestBandit: {
    name: 'Bandido da Floresta',
    health: 500,
    maxHealth: 500,
    coinsDropped: 20,
    gemsDropped: 0,
    kills: 0,
    image: forestBandit,
  },
  forestUndead: {
    name: 'Morto-Vivo',
    health: 1500,
    maxHealth: 1500,
    coinsDropped: 40,
    gemsDropped: 0,
    kills: 0,
    image: forestUndead,
  },
  forestTitan: {
    name: 'Titã da Floresta',
    health: 5000,
    maxHealth: 5000,
    coinsDropped: 80,
    gemsDropped: 2,
    kills: 0,
    image: forestTitan,
  },
  // Mundo 2
  caveSkeleton: {
    name: 'Esqueleto',
    health: 7500,
    maxHealth: 7500,
    coinsDropped: 150,
    gemsDropped: 0,
    kills: 0,
    image: caveSkeleton,
  },
  caveSpider: {
    name: 'Aranha',
    health: 12000,
    maxHealth: 12000,
    coinsDropped: 250,
    gemsDropped: 0,
    kills: 0,
    image: caveSpider,
  },
  caveMonster: {
    name: 'Serpente de Ossos',
    health: 18000,
    maxHealth: 18000,
    coinsDropped: 400,
    gemsDropped: 0,
    kills: 0,
    image: caveMonster,
  },
  caveMage: {
    name: 'Necromante',
    health: 25000,
    maxHealth: 25000,
    coinsDropped: 650,
    gemsDropped: 12,
    kills: 0,
    image: caveMage,
  },
  // Mundo 3
  bronzeKnight: {
    name: 'Cavaleiro de Bronze',
    health: 35000,
    maxHealth: 35000,
    coinsDropped: 150,
    gemsDropped: 0,
    kills: 0,
    image: bronzeKnight,
  },
  ghostKnight: {
    name: 'Cavaleiro Fantasma',
    health: 50000,
    maxHealth: 50000,
    coinsDropped: 250,
    gemsDropped: 0,
    kills: 0,
    image: ghostKnight,
  },
  cavallaryKnight: {
    name: 'Cavalaria',
    health: 75000,
    maxHealth: 75000,
    coinsDropped: 400,
    gemsDropped: 0,
    kills: 0,
    image: cavallaryKnight,
  },
  giantKnight: {
    name: 'General das Muralhas',
    health: 120000,
    maxHealth: 120000,
    coinsDropped: 650,
    gemsDropped: 65,
    kills: 0,
    image: giantKnight,
  },
};
