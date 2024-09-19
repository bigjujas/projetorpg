export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  level: number;
  applyUpgrade: (playerDamage: number) => { newDamage: number };
}

  export const upgrades: Upgrade[] = [
    {
      id: 'upgradeItem',
      name: 'Refinar Equipamente',
      description: '+1',
      cost: 0,
      level: 0,
      applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
    },
    // upgrade dano
    {
    id: 'upgrade1',
    name: 'Destreza 🏹',
    description: '+1 🗡️',
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
  },
    {
    id: 'upgrade2',
    name: 'Força 🥊',
    description: '+2 🗡️',
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 2  }),
  },
    {
    id: 'upgrade3',
    name: 'Magia 🌀',
    description: '+5 🗡️',
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 5  }),
  },
    {
    id: 'upgrade4',
    name: 'Fúria 💢',
    description: '+10 🗡️',
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 10  }),
  },
    {
    id: 'upgrade5',
    name: 'Berserk 🪓',
    description: '+25 🗡️',
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 25  }),
  },
  //upgrades de poder
];
