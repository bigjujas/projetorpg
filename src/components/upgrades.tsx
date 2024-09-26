export interface Upgrade {
  id: string;
  name: string;
  description: string;
  cost: number;
  level: number;
  boost: number;
  baseBoost: number;
}

export const scaleUpgradeBoost = (upgrade: Upgrade) => {
  const levelMultiplier = Math.floor(upgrade.level / 10);
  upgrade.boost = upgrade.baseBoost * Math.pow(2, levelMultiplier);
  upgrade.description = `+${upgrade.boost} 🗡️`;
};

export const updateUpgradeLevel = (upgradeId: string, newLevel: number) => {
  const upgrade = upgrades.find(u => u.id === upgradeId);
  if (upgrade) {
    upgrade.level = newLevel;
    scaleUpgradeBoost(upgrade);
  }
};

export const upgrades: Upgrade[] = [
  {
    id: 'upgradeItem',
    name: 'Refinar Equipamente',
    description: '+1',
    cost: 0,
    level: 0,
    boost: 0,
    baseBoost: 0,
  },
  // upgrade dano
  {
    id: 'upgrade1',
    name: 'Força 🥊',
    description: '+1 🗡️',
    cost: 100,
    level: 0,
    boost: 1,
    baseBoost: 1,
  },
  {
    id: 'upgrade2',
    name: 'Destreza 🏹',
    description: '+30 🗡️',
    cost: 10000,
    level: 0,
    boost: 30,
    baseBoost: 30,
  },
  {
    id: 'upgrade3',
    name: 'Fúria 💢',
    description: '+5 🗡️',
    cost: 1000,
    level: 0,
    boost: 5,
    baseBoost: 5,
  },
];