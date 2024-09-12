import goblin from "/src/assets/goblin.jpg";
import forestBandit from "/src/assets/forestBandit.jpg";
import forestUndead from "/src/assets/forestUndead.jpg"
import forestTitan from "/src/assets/forestTitan.jpg"

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
};
