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
      id: 'upgrade1',
      name: 'Refinar Equipamente',
      description: '+1',
      costType: "coins",
      cost: 20,
      level: 0,
      applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
    },
    {
    id: 'upgrade2',
    name: 'Combate',
    description: '+1 🗡️',
    costType: "power",
    cost: 20,
    level: 0,
    applyUpgrade: (playerDamage) => ({ newDamage: playerDamage + 1  }),
  },
];
