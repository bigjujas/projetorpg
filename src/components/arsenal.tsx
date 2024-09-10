import starterSword from '/src/assets/starterSword.jpg'
import starterArmor from '/src/assets/starterArmor.jpg'
import testSword from '/src/assets/testSword.jpg'

export type Item  = {
    name: string;
    type: string;
    rarity: string;
    damage: number;
    power: number;
    level: number;
    baseCost: number;
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
    const levelMultiplier = 1.15; // Ajuste o multiplicador conforme necessário
    item.damage = parseFloat((item.damage * levelMultiplier).toFixed(1));
    item.power = parseFloat((item.power * levelMultiplier).toFixed(1));
    item.baseCost = parseFloat((item.baseCost * levelMultiplier).toFixed(1));
    item.descriptionD = `${item.damage}x Dano`; // Atualiza a descrição com o novo valor de dano
    item.descriptionP = `${item.power}x Poder`; // Atualiza a descrição com o novo valor de poder
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
      power: 1,
      level: 0,
      baseCost: 20,
      descriptionD: '1x Dano',
      descriptionP: '1x Poder',
      unlocked: false,
      image: starterSword,
    },
    testSword: {
      name: 'Espada Flamejante',
      type: 'sword',
      rarity: "Lendário",
      damage: 10,
      power: 1,
      level: 0,
      baseCost: 20,
      descriptionD: '10x Dano',
      descriptionP: '1x Poder',
      unlocked: false,
      image: testSword,
    },
    starterArmor: {
      name: 'Viajante',
      type: 'armor',
      rarity: "Comum",
      damage: 1,
      power: 1,
      level: 0,
      baseCost: 20,
      descriptionD: '1x Dano',
      descriptionP: '1x Poder',
      unlocked: false,
      image: starterArmor,
    },
  };