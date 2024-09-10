import starterSword from '/src/assets/starterSword.jpg'
import starterArmor from '/src/assets/starterArmor.jpg'
import testSword from '/src/assets/testSword.jpg'

export type Item  = {
    name: string;
    type: string;
    rarity: string;
    damage: number;
    initialDamage: number;
    power: number;
    initialPower: number;
    baseCost: number;
    initialBaseCost: number;
    level: number;
    descriptionD: string;
    descriptionP: string;
    unlocked: boolean;
    image: string;
  };

  export const unlockItem = (itemId: string) => {
    if (items[itemId]) {
      items[itemId].unlocked = true;
    }
  };

  export const scaleItemAttributes = (item: Item) => {
    const increasePercentage = 0.10; // 10% de aumento
    
    if (item.type === 'armor') {
    item.damage = ((item.damage + ((item.initialDamage - 1)) * increasePercentage));
    item.power = ((item.power + ((item.initialPower - 1)) * increasePercentage));
    item.baseCost = ((item.baseCost + (item.initialBaseCost) * increasePercentage * 5));

    item.descriptionD = `+${parseFloat(((item.damage - 1) * 100).toFixed(1))}% 🗡️`;
    item.descriptionP = `+${parseFloat(((item.power - 1) * 100).toFixed(1))}% 🔥`;

    } else if (item.type === 'sword') {
      item.damage = ((item.damage + ((item.initialDamage)) * increasePercentage));
      item.power = ((item.power + ((item.initialPower)) * increasePercentage));
      item.baseCost = ((item.baseCost + (item.initialBaseCost) * increasePercentage * 5));

      item.descriptionD = `+${parseFloat((item.damage).toFixed(2))} 🗡️`;
      item.descriptionP = `+${parseFloat((item.power).toFixed(2))} 🔥`;
    }
};
  
  export const updateItemLevel = (itemId: string, newLevel: number) => {
    if (items[itemId]) {
      items[itemId].level = newLevel;
      scaleItemAttributes(items[itemId]);
    }
  };

  export const items: { [key: string]: Item } = {
    starterSword: {
        name: 'Espada de Madeira',
        type: 'sword',
        rarity: "Comum",
        damage: 1,
        initialDamage: 1, // Valor inicial de damage
        power: 0.1,
        initialPower: 0.1, // Valor inicial de power
        baseCost: 20,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+1 🗡️',
        descriptionP: '+0.1 🔥',
        unlocked: false,
        image: starterSword,
    },
    testSword: {
        name: 'Espada Flamejante',
        type: 'sword',
        rarity: "Lendário",
        damage: 10,
        initialDamage: 10, // Valor inicial de damage
        power: 1,
        initialPower: 1, // Valor inicial de power
        baseCost: 20,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '10x 🗡️',
        descriptionP: '1x 🔥',
        unlocked: false,
        image: testSword,
    },
    starterArmor: {
        name: 'Viajante',
        type: 'armor',
        rarity: "Comum",
        damage: 1.05,
        initialDamage: 1.05, // Valor inicial de damage
        power: 1.05,
        initialPower: 1.05, // Valor inicial de power
        baseCost: 20,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+5% 🗡️',
        descriptionP: '+5% 🔥',
        unlocked: false,
        image: starterArmor,
    },
};