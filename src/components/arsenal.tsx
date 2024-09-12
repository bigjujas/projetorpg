//espadas
import starterSword from '/src/assets/starterSword.jpg'
import basicAxe from '/src/assets/basicAxe.jpg'
import forestSword from '/src/assets/forestSword.jpg'
import titanSword from '/src/assets/titanSword.jpg'
//armaduras
import starterArmor from '/src/assets/starterArmor.jpg'
import travellerArmor from '/src/assets/travellerArmor.jpg'
import forestSeeker from '/src/assets/forestSeeker.jpg'
import titanArmor from '/src/assets/titanArmor.jpg'

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

    // armas:

    starterSword: {
        name: 'Espada Básica',
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
        unlocked: true,
        image: starterSword,
    },
    basicAxe: {
        name: 'Machado Básico',
        type: 'sword',
        rarity: "Comum",
        damage: 5,
        initialDamage: 5, // Valor inicial de damage
        power: 0.5,
        initialPower: 0.5, // Valor inicial de power
        baseCost: 50,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+5 🗡️',
        descriptionP: '+0.5 🔥',
        unlocked: false,
        image: basicAxe,
    },
    forestSword: {
        name: 'Lâmina da Floresta',
        type: 'sword',
        rarity: "Raro",
        damage: 5,
        initialDamage: 5, // Valor inicial de damage
        power: 0.5,
        initialPower: 0.5, // Valor inicial de power
        baseCost: 50,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+5 🗡️',
        descriptionP: '+0.5 🔥',
        unlocked: false,
        image: forestSword,
    },
    titanSword: {
        name: 'Espada do Titã',
        type: 'sword',
        rarity: "Épico",
        damage: 12,
        initialDamage: 12, // Valor inicial de damage
        power: 1,
        initialPower: 1, // Valor inicial de power
        baseCost: 100,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+12 🗡️',
        descriptionP: '+1 🔥',
        unlocked: false,
        image: titanSword,
    },

    // Armaduras

    starterArmor: {
        name: 'Armadura Básica',
        type: 'armor',
        rarity: "Comum",
        damage: 1.00,
        initialDamage: 1.05, // Valor inicial de damage
        power: 1.00,
        initialPower: 1.05, // Valor inicial de power
        baseCost: 20,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+0% 🗡️',
        descriptionP: '+0% 🔥',
        unlocked: true,
        image: starterArmor,
    },
    travellerArmor: {
        name: 'Viajante',
        type: 'armor',
        rarity: "Comum",
        damage: 1.04,
        initialDamage: 1.04, // Valor inicial de damage
        power: 1.04,
        initialPower: 1.04, // Valor inicial de power
        baseCost: 35,
        initialBaseCost: 35, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+3% 🗡️',
        descriptionP: '+3% 🔥',
        unlocked: false,
        image: travellerArmor,
    },
    forestSeeker: {
        name: 'Perseguidor',
        type: 'armor',
        rarity: "Raro",
        damage: 1.075,
        initialDamage: 1.075, // Valor inicial de damage
        power: 1.075,
        initialPower: 1.075, // Valor inicial de power
        baseCost: 70,
        initialBaseCost: 70, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+7.5% 🗡️',
        descriptionP: '+7.5% 🔥',
        unlocked: false,
        image: forestSeeker,
    },
    titanArmor: {
        name: 'Armadura do Titã',
        type: 'armor',
        rarity: "Épico",
        damage: 1.1,
        initialDamage: 1.1, // Valor inicial de damage
        power: 1.1,
        initialPower: 1.1, // Valor inicial de power
        baseCost: 100,
        initialBaseCost: 100, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+10% 🗡️',
        descriptionP: '+10% 🔥',
        unlocked: false,
        image: titanArmor,
    },
};

// Função para sortear um item de um baú específico
export function drawItemFromChest(chest: { item: Item, probability: number }[]): Item | null {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const { item, probability } of chest) {
      cumulativeProbability += probability;
      if (random < cumulativeProbability) {
          item.unlocked = true;
          return item;
      }
  }

  return null; // Retorna null se nenhum item for sorteado
}


// Definição dos baús com diferentes itens e probabilidades
export const world1Chest = [
  { item: items.basicAxe, probability: 0.26 },
  { item: items.forestSword, probability: 0.2 },
  { item: items.titanSword, probability: 0.04 },
  { item: items.travellerArmor, probability: 0.26 },
  { item: items.forestSeeker, probability: 0.2 },
  { item: items.titanArmor, probability: 0.04 },
];