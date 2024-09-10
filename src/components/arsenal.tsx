import swordTest from '/src/assets/swordTest.jpg'
import skinTest from '/src/assets/skinTest.jpg'


export type Item  = {
    name: string;
    type: string;
    damage: number;
    description: string;
    unlocked: boolean;
    image: string;
  };

  export const unlockItem = (itemId: string) => {
    if (items[itemId]) {
      items[itemId].unlocked = true;
    }
  };

  export const items: { [key: string]: Item } = {
    starterSword: {
      name: 'Espada Iniciante',
      type: 'sword',
      damage: 1,
      description: '1x Dano',
      unlocked: false,
      image: swordTest,
    },
    starterArmor: {
      name: 'Armadura Iniciante',
      type: 'armor',
      damage: 1,
      description: '1x Dano',
      unlocked: false,
      image: skinTest,
    },
  };