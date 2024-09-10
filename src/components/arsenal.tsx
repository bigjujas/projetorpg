import starterSword from '/src/assets/starterSword.jpg'
import starterArmor from '/src/assets/starterArmor.jpg'
import testSword from '/src/assets/testSword.jpg'


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
      name: 'Espada de Madeira',
      type: 'sword',
      damage: 1,
      description: '1x Dano',
      unlocked: false,
      image: starterSword,
    },
    testSword: {
      name: 'Espada Flamejante',
      type: 'sword',
      damage: 10,
      description: '10x Dano',
      unlocked: false,
      image: testSword,
    },
    starterArmor: {
      name: 'Viajante',
      type: 'armor',
      damage: 1,
      description: '1x Dano',
      unlocked: false,
      image: starterArmor,
    },
  };