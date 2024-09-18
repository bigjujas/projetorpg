import { formatNumber } from './utilities'

//espadas
import starterSword from '/src/assets/weapons/starterSword.jpg'
import basicAxe from '/src/assets/weapons/basicAxe.jpg'
import forestSword from '/src/assets/weapons/forestSword.jpg'
import titanSword from '/src/assets/weapons/titanSword.jpg'

import boneSword from '/src/assets/weapons/boneSword.jpg'
import boneCutlass from '/src/assets/weapons/boneCutlass.jpg'
import boneSmasher from '/src/assets/weapons/boneSmasher.jpg'
import boneStaff from '/src/assets/weapons/boneStaff.jpg'

import darksteelSword from '/src/assets/weapons/darksteelSword.jpg'
import royalSword from '/src/assets/weapons/royalSword.jpg'
import greatSword from '/src/assets/weapons/greatSword.jpg'
import aureaSword from '/src/assets/weapons/aureaSword.jpg'
import fireSword from '/src/assets/weapons/fireSword.jpg'

//armaduras
import starterArmor from '/src/assets/armor/starterArmor.jpg'
import travellerArmor from '/src/assets/armor/travellerArmor.jpg'
import forestSeeker from '/src/assets/armor/forestSeeker.jpg'
import titanArmor from '/src/assets/armor/titanArmor.jpg'
import edecio from '/src/assets/armor/edecio.jpg'

import steelArmor from '/src/assets/armor/steelArmor.jpg'
import darkSteelArmor from '/src/assets/armor/darkSteelArmor.jpg'
import bloodArmor from '/src/assets/armor/bloodArmor.jpg'

import darkKnightArmor from '/src/assets/armor/darkKnightArmor.jpg'
import royalArmor from '/src/assets/armor/royalArmor.jpg'
import warriorArmor from '/src/assets/armor/warriorArmor.jpg'
import darkRoyalArmor from '/src/assets/armor/darkRoyalArmor.jpg'
import fireArmor from '/src/assets/armor/fireArmor.jpg'

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
    source: string;
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
    item.baseCost = ((item.baseCost + (item.initialBaseCost) * increasePercentage * 3));

    item.descriptionD = `+${parseFloat(((item.damage - 1) * 100).toFixed(1))}% 🗡️`;
    item.descriptionP = `+${parseFloat(((item.power - 1) * 100).toFixed(1))}% 🔥`;

    } else if (item.type === 'sword') {
      item.damage = ((item.damage + ((item.initialDamage)) * increasePercentage));
      item.power = ((item.power + ((item.initialPower)) * increasePercentage));
      item.baseCost = ((item.baseCost + (item.initialBaseCost) * increasePercentage * 5));

      item.descriptionD = `+${(formatNumber(item.damage))} 🗡️`;
      item.descriptionP = `+${(formatNumber(item.power, 2))} 🔥`;
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


    // mundo 1
    starterSword: {
        name: 'Espada Básica',
        type: 'sword',
        rarity: "Comum",
        damage: 1,
        initialDamage: 1, // Valor inicial de damage
        power: 0.1,
        initialPower: 0.1, // Valor inicial de power
        baseCost: 5,
        initialBaseCost: 5, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+1 🗡️',
        descriptionP: '+0.1 🔥',
        unlocked: true,
        source: "Mundo 1",
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
        baseCost: 20,
        initialBaseCost: 20, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+5 🗡️',
        descriptionP: '+0.5 🔥',
        unlocked: false,
        source: "Mundo 1",
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
        baseCost: 45,
        initialBaseCost: 45, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+5 🗡️',
        descriptionP: '+0.5 🔥',
        unlocked: false,
        source: "Mundo 1",
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
        initialBaseCost: 100, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+12 🗡️',
        descriptionP: '+1 🔥',
        unlocked: false,
        source: "Mundo 1",
        image: titanSword,
    },
    // mundo 2
    boneSword: {
      name: 'Espada de Ossos',
      type: 'sword',
      rarity: "Comum",
      damage: 20,
      initialDamage: 20, // Valor inicial de damage
      power: 2,
      initialPower: 2, // Valor inicial de power
      baseCost: 300,
      initialBaseCost: 300, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+20 🗡️',
      descriptionP: '+2 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: boneSword,
  },
    boneCutlass: {
      name: 'Ossos Retorcidos',
      type: 'sword',
      rarity: "Raro",
      damage: 25,
      initialDamage: 25, // Valor inicial de damage
      power: 2.2,
      initialPower: 2.2, // Valor inicial de power
      baseCost: 350,
      initialBaseCost: 350, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+25 🗡️',
      descriptionP: '+2.2 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: boneCutlass,
  },
    boneSmasher: {
      name: 'Esmaga Crânios',
      type: 'sword',
      rarity: "Épico",
      damage: 40,
      initialDamage: 40, // Valor inicial de damage
      power: 2.5,
      initialPower: 2.5, // Valor inicial de power
      baseCost: 500,
      initialBaseCost: 500, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+40 🗡️',
      descriptionP: '+2.5 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: boneSmasher,
  },
    boneStaff: {
      name: 'Cajado de Sangue',
      type: 'sword',
      rarity: "Lendário",
      damage: 60,
      initialDamage: 60, // Valor inicial de damage
      power: 3,
      initialPower: 3, // Valor inicial de power
      baseCost: 800,
      initialBaseCost: 800, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+60 🗡️',
      descriptionP: '+3 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: boneStaff,
  },
  // mundo 3
    darksteelSword: {
      name: 'Aço Negro',
      type: 'sword',
      rarity: "Comum",
      damage: 50,
      initialDamage: 50, // Valor inicial de damage
      power: 2.7,
      initialPower: 2.7, // Valor inicial de power
      baseCost: 650,
      initialBaseCost: 650, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+50 🗡️',
      descriptionP: '+2.7 🔥',
      unlocked: false,
      source: "Mundo 3",
      image: darksteelSword,
  },
    royalSword: {
      name: 'Espada Real',
      type: 'sword',
      rarity: "Raro",
      damage: 75,
      initialDamage: 75, // Valor inicial de damage
      power: 3.2,
      initialPower: 3.2, // Valor inicial de power
      baseCost: 1000,
      initialBaseCost: 1000, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+75 🗡️',
      descriptionP: '+3.2 🔥',
      unlocked: false,
      source: "Mundo 3",
      image: royalSword,
  },
    greatSword: {
      name: 'Grande Espada',
      type: 'sword',
      rarity: "Épico",
      damage: 100,
      initialDamage: 100, // Valor inicial de damage
      power: 4,
      initialPower: 4, // Valor inicial de power
      baseCost: 1500,
      initialBaseCost: 1500, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+100 🗡️',
      descriptionP: '+4 🔥',
      unlocked: false,
      source: "Mundo 3",
      image: greatSword,
  },
    aureaSword: {
      name: 'Espada da Ordem',
      type: 'sword',
      rarity: "Lendário",
      damage: 135,
      initialDamage: 135, // Valor inicial de damage
      power: 5,
      initialPower: 5, // Valor inicial de power
      baseCost: 2000,
      initialBaseCost: 2000, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+135 🗡️',
      descriptionP: '+5 🔥',
      unlocked: false,
      source: "Mundo 3",
      image: aureaSword,
  },
    fireSword: {
      name: 'Fogo Ancestral',
      type: 'sword',
      rarity: "Mítico",
      damage: 220,
      initialDamage: 220, // Valor inicial de damage
      power: 8,
      initialPower: 8, // Valor inicial de power
      baseCost: 5000,
      initialBaseCost: 5000, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+220 🗡️',
      descriptionP: '+8 🔥',
      unlocked: false,
      source: "Mundo 3",
      image: fireSword,
  },

    // Armaduras
    //mundo1
    starterArmor: {
        name: 'Armadura Básica',
        type: 'armor',
        rarity: "Comum",
        damage: 1.00,
        initialDamage: 1.05, // Valor inicial de damage
        power: 1.00,
        initialPower: 1.05, // Valor inicial de power
        baseCost: 5,
        initialBaseCost: 5, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+0% 🗡️',
        descriptionP: '+0% 🔥',
        unlocked: true,
        source: "Mundo 1",
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
        source: "Mundo 1",
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
        source: "Mundo 1",
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
        source: "Mundo 1",
        image: titanArmor,
    },
    edecioArmor: {
        name: 'Edecio',
        type: 'armor',
        rarity: "Secreto",
        damage: 2,
        initialDamage: 2, // Valor inicial de damage
        power: 2,
        initialPower: 2, // Valor inicial de power
        baseCost: 10000,
        initialBaseCost: 10000, // Valor inicial de baseCost
        level: 0,
        descriptionD: '+100% 🗡️',
        descriptionP: '+100% 🔥',
        unlocked: false,
        source: "Mundo 1",
        image: edecio,
    },
    //mundo2
    steelArmor: {
      name: 'Armadura de Aço',
      type: 'armor',
      rarity: "Raro",
      damage: 1.16,
      initialDamage: 1.16, // Valor inicial de damage
      power: 1.16,
      initialPower: 1.16, // Valor inicial de power
      baseCost: 300,
      initialBaseCost: 300, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+16% 🗡️',
      descriptionP: '+16% 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: steelArmor,
  },
    darkSteelArmor: {
      name: 'Aço Negro',
      type: 'armor',
      rarity: "Épico",
      damage: 1.22,
      initialDamage: 1.22, // Valor inicial de damage
      power: 1.22,
      initialPower: 1.22, // Valor inicial de power
      baseCost: 500,
      initialBaseCost: 500, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+22% 🗡️',
      descriptionP: '+22% 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: darkSteelArmor,
  },
    bloodArmor: {
      name: 'Armadura Sangrenta',
      type: 'armor',
      rarity: "Lendário",
      damage: 1.30,
      initialDamage: 1.30, // Valor inicial de damage
      power: 1.30,
      initialPower: 1.30, // Valor inicial de power
      baseCost: 750,
      initialBaseCost: 750, // Valor inicial de baseCost
      level: 0,
      descriptionD: '+30% 🗡️',
      descriptionP: '+30% 🔥',
      unlocked: false,
      source: "Mundo 2",
      image: bloodArmor,
  },
  //mundo 3
  darkKnightArmor: {
    name: 'Cavaleiro Simples',
    type: 'armor',
    rarity: "Comum",
    damage: 1.28,
    initialDamage: 1.28, // Valor inicial de damage
    power: 1.28,
    initialPower: 1.28, // Valor inicial de power
    baseCost: 750,
    initialBaseCost: 750, // Valor inicial de baseCost
    level: 0,
    descriptionD: '+28% 🗡️',
    descriptionP: '+28% 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkKnightArmor,
},
  royalArmor: {
    name: 'Armadura Real',
    type: 'armor',
    rarity: "Raro",
    damage: 1.35,
    initialDamage: 1.35, // Valor inicial de damage
    power: 1.35,
    initialPower: 1.35, // Valor inicial de power
    baseCost: 1000,
    initialBaseCost: 1000, // Valor inicial de baseCost
    level: 0,
    descriptionD: '+35% 🗡️',
    descriptionP: '+35% 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: royalArmor,
},
  warriorArmor: {
    name: 'Guerreiro Feroz',
    type: 'armor',
    rarity: "Épico",
    damage: 1.45,
    initialDamage: 1.45, // Valor inicial de damage
    power: 1.45,
    initialPower: 1.45, // Valor inicial de power
    baseCost: 1500,
    initialBaseCost: 1500, // Valor inicial de baseCost
    level: 0,
    descriptionD: '+45% 🗡️',
    descriptionP: '+45% 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: warriorArmor,
},
  darkRoyalArmor: {
    name: 'Ordem Letal',
    type: 'armor',
    rarity: "Lendário",
    damage: 1.55,
    initialDamage: 1.55, // Valor inicial de damage
    power: 1.55,
    initialPower: 1.55, // Valor inicial de power
    baseCost: 2200,
    initialBaseCost: 2200, // Valor inicial de baseCost
    level: 0,
    descriptionD: '+55% 🗡️',
    descriptionP: '+55% 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkRoyalArmor,
},
  fireArmor: {
    name: 'Fogo Ancestral',
    type: 'armor',
    rarity: "Mítico",
    damage: 1.80,
    initialDamage: 1.80, // Valor inicial de damage
    power: 1.80,
    initialPower: 1.80, // Valor inicial de power
    baseCost: 5000,
    initialBaseCost: 5000, // Valor inicial de baseCost
    level: 0,
    descriptionD: '+80% 🗡️',
    descriptionP: '+80% 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: fireArmor,
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
  { item: items.titanArmor, probability: 0.0399 },
  { item: items.edecio, probability: 0.0001 },
];

export const world2Chest = [
  { item: items.boneSword, probability: 0.55 },
  { item: items.boneCutlass, probability: 0.175 },
  { item: items.boneSmasher, probability: 0.04 },
  { item: items.boneStaff, probability: 0.01 },

  { item: items.steelArmor, probability: 0.175 },
  { item: items.darkSteelArmor, probability: 0.04 },
  { item: items.bloodArmor, probability: 0.01 },
];

export const world3Chest = [
  { item: items.darksteelSword, probability: 0.275 },
  { item: items.royalSword, probability: 0.175 },
  { item: items.greatSword, probability: 0.04 },
  { item: items.aureaSword, probability: 0.009 },
  { item: items.fireSword, probability: 0.001 },

  { item: items.darkKnightArmor, probability: 0.275 },
  { item: items.royalArmor, probability: 0.175 },
  { item: items.warriorArmor, probability: 0.04 },
  { item: items.darkRoyalArmor, probability: 0.009 },
  { item: items.fireArmor, probability: 0.001 },
];