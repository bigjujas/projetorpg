import goblinImage from "/src/assets/goblin.jpg";
import goblin2Image from "/src/assets/goblin2.jpg";
import undeadForest from "/src/assets/undeadForest.jpg"
import forestTitan from "/src/assets/forestTitan.jpg"

export type Enemy = {
  name: string;
  health: number;
  maxHealth: number;
  coinsDropped: number;
  image: string;
};

export const enemies = {
  goblin: {
    name: 'Goblin',
    health: 100,
    maxHealth: 100,
    coinsDropped: 5,
    image: goblinImage,
  },
  goblin2: {
    name: 'Goblin Superior',
    health: 500,
    maxHealth: 500,
    coinsDropped: 20,
    image: goblin2Image,
  },
  undeadForest: {
    name: 'Morto-Vivo',
    health: 1200,
    maxHealth: 1200,
    coinsDropped: 40,
    image: undeadForest,
  },
  forestTitan: {
    name: 'Titã da Floresta',
    health: 5000,
    maxHealth: 5000,
    coinsDropped: 80,
    image: forestTitan,
  },
};
