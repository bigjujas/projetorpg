export interface Upgrade {
  id: string;
  name: string;
  description: string;
  costType: "coins" | "power";
  cost: number;
  level: number;
  applyUpgrade: (playerDamage: number) => { newDamage: number };
}

  export const upgrades: Upgrade[] = [
    {
      id: 'upgradeItem',
      name: 'Refinar Equipamente',
      description: '+1',
      costType: "coins",
      cost: 0,
      level: 0,
      applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
    },
    {
    id: 'upgrade1',
    name: 'Destreza 🏹',
    description: '+1 🗡️',
    costType: "power",
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
  },
    {
    id: 'upgrade2',
    name: 'Força 🥊',
    description: '+2 🗡️',
    costType: "power",
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 2  }),
  },
    {
    id: 'upgrade3',
    name: 'Fúria 💢',
    description: '+5 🗡️',
    costType: "power",
    cost: 1,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 5  }),
  },
];
