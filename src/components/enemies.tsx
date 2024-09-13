import goblin from "/src/assets/goblin.jpg";
import forestBandit from "/src/assets/forestBandit.jpg";
import forestUndead from "/src/assets/forestUndead.jpg"
import forestTitan from "/src/assets/forestTitan.jpg"

import caveSkeleton from "/src/assets/caveSkeleton.jpg"
import caveSpider from "/src/assets/caveSpider.jpg"
import caveMonster from "/src/assets/caveMonster.jpg"
import caveMage from "/src/assets/caveMage.jpg"

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
    health: 1200,
    maxHealth: 1200,
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
    gemsDropped: 5,
    kills: 0,
    image: forestTitan,
  },
  // Mundo 2
  caveSkeleton: {
    name: 'Esqueleto',
    health: 7000,
    maxHealth: 7000,
    coinsDropped: 150,
    gemsDropped: 0,
    kills: 0,
    image: caveSkeleton,
  },
  caveSpider: {
    name: 'Aranha',
    health: 10000,
    maxHealth: 10000,
    coinsDropped: 250,
    gemsDropped: 0,
    kills: 0,
    image: caveSpider,
  },
  caveMonster: {
    name: 'Serpente de Ossos',
    health: 15000,
    maxHealth: 15000,
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
    gemsDropped: 15,
    kills: 0,
    image: caveMage,
  },
};
