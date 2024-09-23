export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  level: number;
  boost: number;
}

export const upgrades: Upgrade[] = [
  {
    id: 'upgradeItem',
    name: 'Refinar Equipamente',
    description: '+1',
    cost: 0,
    level: 0,
    boost: 0,
  },
  // upgrade dano
  {
    id: 'upgrade1',
    name: 'Força 🥊',
    description: '+1 🗡️',
    cost: 10,
    level: 0,
    boost: 1,
  },
  {
    id: 'upgrade3',
    name: 'Destreza 🏹',
    description: '+2 🗡️',
    cost: 30,
    level: 0,
    boost: 2,
  },
  {
    id: 'upgrade5',
    name: 'Fúria 💢',
    description: '+5 🗡️',
    cost: 100,
    level: 0,
    boost: 5,
  },
  {
    id: 'upgrade7',
    name: 'Berserk 🪓',
    description: '+10 🗡️',
    cost: 350,
    level: 0,
    boost: 10,
  },
  // upgrade poder
  {
    id: 'upgrade2',
    name: 'Mana 🌀',
    description: '+0.1 🔥',
    cost: 10,
    level: 0,
    boost: 0.1,
  },
  {
    id: 'upgrade4',
    name: 'Magia 🔮',
    description: '+0.2 🔥',
    cost: 30,
    level: 0,
    boost: 0.2,
  },
  {
    id: 'upgrade6',
    name: 'Energia ⚡️',
    description: '+0.5 🔥',
    cost: 100,
    level: 0,
    boost: 0.5,
  },
  {
    id: 'upgrade8',
    name: 'Ar 💨',
    description: '+1 🔥',
    cost: 350,
    level: 0,
    boost: 1,
  },
  //upgrades de poder
];
