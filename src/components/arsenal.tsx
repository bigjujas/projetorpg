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

import plagueHammer from '/src/assets/weapons/plagueHammer.jpg'
import thornSword from '/src/assets/weapons/thornSword.jpg'
import plagueDaggers from '/src/assets/weapons/plagueDaggers.jpg'
import plagueScythe from '/src/assets/weapons/plagueScythe.jpg'
import plagueSword from '/src/assets/weapons/plagueSword.jpg'

import goldenAxe from '/src/assets/weapons/goldenAxe.jpg'
import shockSword from '/src/assets/weapons/shockSword.jpg'
import dragonLance from '/src/assets/weapons/dragonLance.jpg'
import dragonSword from '/src/assets/weapons/dragonSword.jpg'
import goldenSword from '/src/assets/weapons/goldenSword.jpg'

import voidSword from '/src/assets/weapons/voidSword.jpg'
import voidFlame from '/src/assets/weapons/voidFlame.jpg'
import voidThunder from '/src/assets/weapons/voidThunder.jpg'
import voidLordSword from '/src/assets/weapons/voidLordSword.jpg'

//armaduras
import starterArmor from '/src/assets/armor/starterArmor.jpg'
import travellerArmor from '/src/assets/armor/travellerArmor.jpg'
import forestSeeker from '/src/assets/armor/forestSeeker.jpg'
import titanArmor from '/src/assets/armor/titanArmor.jpg'

import steelArmor from '/src/assets/armor/steelArmor.jpg'
import darkSteelArmor from '/src/assets/armor/darkSteelArmor.jpg'
import bloodArmor from '/src/assets/armor/bloodArmor.jpg'

import darkKnightArmor from '/src/assets/armor/darkKnightArmor.jpg'
import royalArmor from '/src/assets/armor/royalArmor.jpg'
import warriorArmor from '/src/assets/armor/warriorArmor.jpg'
import darkRoyalArmor from '/src/assets/armor/darkRoyalArmor.jpg'
import fireArmor from '/src/assets/armor/fireArmor.jpg'

import plagueWarrior from '/src/assets/armor/plagueWarrior.jpg'
import thornArmor from '/src/assets/armor/thornArmor.jpg'
import plagueDoctorArmor from '/src/assets/armor/plagueDoctorArmor.jpg'
import plagueArmor from '/src/assets/armor/plagueArmor.jpg'

import goldenArmor from '/src/assets/armor/goldenArmor.jpg'
import goldenRobe from '/src/assets/armor/goldenRobe.jpg'
import capitalArmor from '/src/assets/armor/capitalArmor.jpg'
import dragonWarrior from '/src/assets/armor/dragonWarrior.jpg'
import dragonArmor from '/src/assets/armor/dragonArmor.jpg'

import voidArmor from '/src/assets/armor/voidArmor.jpg'
import voidRogue from '/src/assets/armor/voidRogue.jpg'
import voidKnight from '/src/assets/armor/voidKnight.jpg'
import voidLord from '/src/assets/armor/voidLord.jpg'

// reliquias

import nullRelic from '/src/assets/relics/nullRelic.jpg'

import relicIronRing from '/src/assets/relics/relicIronRing.jpg'
import relicForestNeck from '/src/assets/relics/relicForestNeck.jpg'
import relicForestPendant from '/src/assets/relics/relicForestPendant.jpg'
import relicForestBook from '/src/assets/relics/relicForestBook.jpg'

import relicStoneRing from '/src/assets/relics/relicStoneRing.jpg'
import relicSkullSpear from '/src/assets/relics/relicSkullSpear.jpg'
import relicBloodSkull from '/src/assets/relics/relicBloodSkull.jpg'

export type Item = {
  name: string;
  type: string;
  rarity: string;
  boost: number;
  initialBoost: number;
  baseCost: number;
  initialBaseCost: number;
  level: number;
  description: string;
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

  if (item.type === 'armor') {
    item.boost = item.initialBoost * Math.pow(1.10, item.level)
    item.baseCost = Math.floor(item.initialBaseCost * Math.pow(1.30, item.level))

    item.description = `+${formatNumber(item.boost)} 🔥`

  } else if (item.type === 'sword') {
    item.boost = item.initialBoost * Math.pow(1.10, item.level)
    item.baseCost = Math.floor(item.initialBaseCost * Math.pow(1.30, item.level))

    item.description = `+${formatNumber(item.boost)} 🗡️`

  } else if (item.type === 'relic') {
    item.boost = item.initialBoost * Math.pow(1.10, item.level)
    item.baseCost = Math.floor(item.initialBaseCost * Math.pow(2, item.level))

    item.description = `x${formatNumber(item.boost)}`
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
    boost: 1,
    initialBoost: 1, // Valor inicial de boost
    baseCost: 5,
    initialBaseCost: 5, // Valor inicial de baseCost
    level: 0,
    description: '+1 🗡️',
    unlocked: true,
    source: "Mundo 1",
    image: starterSword,
  },
  basicAxe: {
    name: 'Machado Básico',
    type: 'sword',
    rarity: "Comum",
    boost: 3,
    initialBoost: 3, // Valor inicial de boost
    baseCost: 30,
    initialBaseCost: 30, // Valor inicial de baseCost
    level: 0,
    description: '+3 🗡️',
    unlocked: false,
    source: "Mundo 1",
    image: basicAxe,
  },
  forestSword: {
    name: 'Lâmina da Floresta',
    type: 'sword',
    rarity: "Raro",
    boost: 10,
    initialBoost: 10, // Valor inicial de boost
    baseCost: 200,
    initialBaseCost: 200, // Valor inicial de baseCost
    level: 0,
    description: '+10 🗡️',
    unlocked: false,
    source: "Mundo 1",
    image: forestSword,
  },
  titanSword: {
    name: 'Espada do Titã',
    type: 'sword',
    rarity: "Épico",
    boost: 16,
    initialBoost: 16, // Valor inicial de boost
    baseCost: 1000,
    initialBaseCost: 1000, // Valor inicial de baseCost
    level: 0,
    description: '+16 🗡️',
    unlocked: false,
    source: "Mundo 1",
    image: titanSword,
  },
  // mundo 2
  boneSword: {
    name: 'Espada de Ossos',
    type: 'sword',
    rarity: "Comum",
    boost: 18,
    initialBoost: 18, // Valor inicial de boost
    baseCost: 150,
    initialBaseCost: 150, // Valor inicial de baseCost
    level: 0,
    description: '+18 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneSword,
  },
  boneCutlass: {
    name: 'Ossos Retorcidos',
    type: 'sword',
    rarity: "Raro",
    boost: 20,
    initialBoost: 20, // Valor inicial de boost
    baseCost: 300,
    initialBaseCost: 300, // Valor inicial de baseCost
    level: 0,
    description: '+25 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneCutlass,
  },
  boneSmasher: {
    name: 'Esmaga Crânios',
    type: 'sword',
    rarity: "Épico",
    boost: 30,
    initialBoost: 30, // Valor inicial de boost
    baseCost: 450,
    initialBaseCost: 450, // Valor inicial de baseCost
    level: 0,
    description: '+30 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneSmasher,
  },
  boneStaff: {
    name: 'Cajado de Sangue',
    type: 'sword',
    rarity: "Lendário",
    boost: 45,
    initialBoost: 45, // Valor inicial de boost
    baseCost: 675,
    initialBaseCost: 675, // Valor inicial de baseCost
    level: 0,
    description: '+45 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneStaff,
  },
  // mundo 3
  darksteelSword: {
    name: 'Aço Negro',
    type: 'sword',
    rarity: "Comum",
    boost: 50,
    initialBoost: 50, // Valor inicial de boost
    baseCost: 650,
    initialBaseCost: 650, // Valor inicial de baseCost
    level: 0,
    description: '+50 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: darksteelSword,
  },
  royalSword: {
    name: 'Espada Real',
    type: 'sword',
    rarity: "Raro",
    boost: 75,
    initialBoost: 75, // Valor inicial de boost
    baseCost: 1000,
    initialBaseCost: 1000, // Valor inicial de baseCost
    level: 0,
    description: '+75 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: royalSword,
  },
  greatSword: {
    name: 'Grande Espada',
    type: 'sword',
    rarity: "Épico",
    boost: 100,
    initialBoost: 100, // Valor inicial de boost
    baseCost: 1500,
    initialBaseCost: 1500, // Valor inicial de baseCost
    level: 0,
    description: '+100 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: greatSword,
  },
  aureaSword: {
    name: 'Espada da Ordem',
    type: 'sword',
    rarity: "Lendário",
    boost: 135,
    initialBoost: 135, // Valor inicial de boost
    baseCost: 2000,
    initialBaseCost: 2000, // Valor inicial de baseCost
    level: 0,
    description: '+135 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: aureaSword,
  },
  fireSword: {
    name: 'Fogo Ancestral',
    type: 'sword',
    rarity: "Mítico",
    boost: 235,
    initialBoost: 235, // Valor inicial de boost
    baseCost: 5000,
    initialBaseCost: 5000, // Valor inicial de baseCost
    level: 0,
    description: '+235 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: fireSword,
  },
  plagueHammer: {
    name: 'Martelo Devastado',
    type: 'sword',
    rarity: "Comum",
    boost: 120,
    initialBoost: 120, // Valor inicial de boost
    baseCost: 1800,
    initialBaseCost: 1800, // Valor inicial de baseCost
    level: 0,
    description: '+120 🗡️',
    unlocked: false,
    source: "Mundo 4",
    image: plagueHammer,
  },
  thornSword: {
    name: 'Espada Espinhosa',
    type: 'sword',
    rarity: "Raro",
    boost: 150,
    initialBoost: 150, // Valor inicial de boost
    baseCost: 2600,
    initialBaseCost: 2600, // Valor inicial de baseCost
    level: 0,
    description: '+150 🗡️',
    unlocked: false,
    source: "Mundo 4",
    image: thornSword,
  },
  plagueDaggers: {
    name: 'Adagas da Praga',
    type: 'sword',
    rarity: "Épico",
    boost: 180,
    initialBoost: 180, // Valor inicial de boost
    baseCost: 3500,
    initialBaseCost: 3500, // Valor inicial de baseCost
    level: 0,
    description: '+180 🗡️',
    unlocked: false,
    source: "Mundo 4",
    image: plagueDaggers,
  },
  plagueScythe: {
    name: 'Foice da Praga',
    type: 'sword',
    rarity: "Lendário",
    boost: 220,
    initialBoost: 220, // Valor inicial de boost
    baseCost: 5000,
    initialBaseCost: 5000, // Valor inicial de baseCost
    level: 0,
    description: '+220 🗡️',
    unlocked: false,
    source: "Mundo 4",
    image: plagueScythe,
  },
  plagueSword: {
    name: 'A Praga',
    type: 'sword',
    rarity: "Mítico",
    boost: 350,
    initialBoost: 350, // Valor inicial de boost
    baseCost: 10000,
    initialBaseCost: 10000, // Valor inicial de baseCost
    level: 0,
    description: '+350 🗡️',
    unlocked: false,
    source: "Mundo 4",
    image: plagueSword,
  },
  // mundo 5
  goldenAxe: {
    name: 'Machado Prismático',
    type: 'sword',
    rarity: "Comum",
    boost: 200,
    initialBoost: 200, // Valor inicial de boost
    baseCost: 4200,
    initialBaseCost: 4200, // Valor inicial de baseCost
    level: 0,
    description: '+200 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: goldenAxe,
  },
  shockSword: {
    name: 'Lâmina Elétrica',
    type: 'sword',
    rarity: "Raro",
    boost: 250,
    initialBoost: 250, // Valor inicial de boost
    baseCost: 5500,
    initialBaseCost: 5500, // Valor inicial de baseCost
    level: 0,
    description: '+250 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: shockSword,
  },
  dragonLance: {
    name: 'Lança do Dragão',
    type: 'sword',
    rarity: "Épico",
    boost: 300,
    initialBoost: 300, // Valor inicial de boost
    baseCost: 7500,
    initialBaseCost: 7500, // Valor inicial de baseCost
    level: 0,
    description: '+300 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: dragonLance,
  },
  dragonSword: {
    name: 'Espada Dracônica',
    type: 'sword',
    rarity: "Lendário",
    boost: 340,
    initialBoost: 340, // Valor inicial de boost
    baseCost: 9000,
    initialBaseCost: 9000, // Valor inicial de baseCost
    level: 0,
    description: '+340 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: dragonSword,
  },
  goldenSword: {
    name: 'Era Dourada',
    type: 'sword',
    rarity: "Mítico",
    boost: 420,
    initialBoost: 420, // Valor inicial de boost
    baseCost: 15000,
    initialBaseCost: 15000, // Valor inicial de baseCost
    level: 0,
    description: '+420 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: goldenSword,
  },
  // masmorra torre
  voidSword: {
    name: 'Espada do Vazio',
    type: 'sword',
    rarity: "Raro",
    boost: 375,
    initialBoost: 375, // Valor inicial de boost
    baseCost: 12000,
    initialBaseCost: 12000, // Valor inicial de baseCost
    level: 0,
    description: '+375 🗡️',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidSword,
  },
  voidFlame: {
    name: 'Chama Vazia',
    type: 'sword',
    rarity: "Épico",
    boost: 400,
    initialBoost: 400, // Valor inicial de boost
    baseCost: 15000,
    initialBaseCost: 15000, // Valor inicial de baseCost
    level: 0,
    description: '+400 🗡️',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidFlame,
  },
  voidThunder: {
    name: 'Raio Negro',
    type: 'sword',
    rarity: "Lendário",
    boost: 450,
    initialBoost: 450, // Valor inicial de boost
    baseCost: 20000,
    initialBaseCost: 20000, // Valor inicial de baseCost
    level: 0,
    description: '+450 🗡️',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidThunder,
  },
  voidLordSword: {
    name: 'Lorde do Vazio',
    type: 'sword',
    rarity: "Mítico",
    boost: 520,
    initialBoost: 520, // Valor inicial de boost
    baseCost: 30000,
    initialBaseCost: 30000, // Valor inicial de baseCost
    level: 0,
    description: '+520 🗡️',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidLordSword,
  },
  // Armaduras
  //mundo1
  starterArmor: {
    name: 'Armadura Básica',
    type: 'armor',
    rarity: "Comum",
    boost: 1.,
    initialBoost: 1, // Valor inicial de boost
    baseCost: 5,
    initialBaseCost: 5, // Valor inicial de baseCost
    level: 0,
    description: '+1 🔥',
    unlocked: true,
    source: "Mundo 1",
    image: starterArmor,
  },
  travellerArmor: {
    name: 'Viajante',
    type: 'armor',
    rarity: "Comum",
    boost: 3,
    initialBoost: 3, // Valor inicial de boost
    baseCost: 30,
    initialBaseCost: 30, // Valor inicial de baseCost
    level: 0,
    description: '+3 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: travellerArmor,
  },
  forestSeeker: {
    name: 'Perseguidor',
    type: 'armor',
    rarity: "Raro",
    boost: 10,
    initialBoost: 10, // Valor inicial de boost
    baseCost: 200,
    initialBaseCost: 200, // Valor inicial de baseCost
    level: 0,
    description: '+10 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: forestSeeker,
  },
  titanArmor: {
    name: 'Armadura do Titã',
    type: 'armor',
    rarity: "Épico",
    boost: 16,
    initialBoost: 16, // Valor inicial de boost
    baseCost: 1000,
    initialBaseCost: 1000, // Valor inicial de baseCost
    level: 0,
    description: '+16 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: titanArmor,
  },
  //mundo2
  steelArmor: {
    name: 'Armadura de Aço',
    type: 'armor',
    rarity: "Raro",
    boost: 20,
    initialBoost: 20, // Valor inicial de boost
    baseCost: 300,
    initialBaseCost: 300, // Valor inicial de baseCost
    level: 0,
    description: '+20 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: steelArmor,
  },
  darkSteelArmor: {
    name: 'Aço Negro',
    type: 'armor',
    rarity: "Épico",
    boost: 30,
    initialBoost: 30, // Valor inicial de boost
    baseCost: 450,
    initialBaseCost: 450, // Valor inicial de baseCost
    level: 0,
    description: '+30 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: darkSteelArmor,
  },
  bloodArmor: {
    name: 'Armadura Sangrenta',
    type: 'armor',
    rarity: "Lendário",
    boost: 45,
    initialBoost: 45, // Valor inicial de boost
    baseCost: 675,
    initialBaseCost: 675, // Valor inicial de baseCost
    level: 0,
    description: '+45 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: bloodArmor,
  },
  //mundo 3
  darkKnightArmor: {
    name: 'Cavaleiro Simples',
    type: 'armor',
    rarity: "Comum",
    boost: 1.28,
    initialBoost: 1.28, // Valor inicial de boost
    baseCost: 750,
    initialBaseCost: 750, // Valor inicial de baseCost
    level: 0,
    description: '+1.28 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkKnightArmor,
  },
  royalArmor: {
    name: 'Armadura Real',
    type: 'armor',
    rarity: "Raro",
    boost: 1.35,
    initialBoost: 1.35, // Valor inicial de boost
    baseCost: 1000,
    initialBaseCost: 1000, // Valor inicial de baseCost
    level: 0,
    description: '+1.35 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: royalArmor,
  },
  warriorArmor: {
    name: 'Guerreiro Feroz',
    type: 'armor',
    rarity: "Épico",
    boost: 1.45,
    initialBoost: 1.45, // Valor inicial de boost
    baseCost: 1500,
    initialBaseCost: 1500, // Valor inicial de baseCost
    level: 0,
    description: '+1.45 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: warriorArmor,
  },
  darkRoyalArmor: {
    name: 'Ordem Letal',
    type: 'armor',
    rarity: "Lendário",
    boost: 1.55,
    initialBoost: 1.55, // Valor inicial de boost
    baseCost: 2200,
    initialBaseCost: 2200, // Valor inicial de baseCost
    level: 0,
    description: '+1.55 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkRoyalArmor,
  },
  fireArmor: {
    name: 'Fogo Ancestral',
    type: 'armor',
    rarity: "Mítico",
    boost: 1.80,
    initialBoost: 1.80, // Valor inicial de boost
    baseCost: 5000,
    initialBaseCost: 5000, // Valor inicial de baseCost
    level: 0,
    description: '+1.8 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: fireArmor,
  },
  // mundo 4
  plagueWarrior: {
    name: 'Caçador Devasto',
    type: 'armor',
    rarity: "Raro",
    boost: 1.50,
    initialBoost: 1.50, // Valor inicial de boost
    baseCost: 2000,
    initialBaseCost: 2000, // Valor inicial de baseCost
    level: 0,
    description: '+1.5 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueWarrior,
  },
  thornArmor: {
    name: 'Manto Espinhoso',
    type: 'armor',
    rarity: "Épico",
    boost: 1.65,
    initialBoost: 1.65, // Valor inicial de boost
    baseCost: 2800,
    initialBaseCost: 2800, // Valor inicial de baseCost
    level: 0,
    description: '+1.65 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: thornArmor,
  },
  plagueDoctorArmor: {
    name: 'Doutor da Praga',
    type: 'armor',
    rarity: "Lendário",
    boost: 1.75,
    initialBoost: 1.75, // Valor inicial de boost
    baseCost: 4000,
    initialBaseCost: 4000, // Valor inicial de baseCost
    level: 0,
    description: '+1.75 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueDoctorArmor,
  },
  plagueArmor: {
    name: 'A Praga',
    type: 'armor',
    rarity: "Mítico",
    boost: 2,
    initialBoost: 2, // Valor inicial de boost
    baseCost: 10000,
    initialBaseCost: 10000, // Valor inicial de baseCost
    level: 0,
    description: '+2 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueArmor,
  },
  // mundo 5
  goldenArmor: {
    name: 'Armadura Dourada',
    type: 'armor',
    rarity: "Comum",
    boost: 1.70,
    initialBoost: 1.70, // Valor inicial de boost
    baseCost: 4000,
    initialBaseCost: 4000, // Valor inicial de baseCost
    level: 0,
    description: '+1.7 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: goldenArmor,
  },
  goldenRobe: {
    name: 'Vestes Pristinas',
    type: 'armor',
    rarity: "Raro",
    boost: 1.82,
    initialBoost: 1.82, // Valor inicial de boost
    baseCost: 6000,
    initialBaseCost: 6000, // Valor inicial de baseCost
    level: 0,
    description: '+1.82 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: goldenRobe,
  },
  capitalArmor: {
    name: 'Guarda Real',
    type: 'armor',
    rarity: "Épico",
    boost: 1.90,
    initialBoost: 1.90, // Valor inicial de boost
    baseCost: 8000,
    initialBaseCost: 8000, // Valor inicial de baseCost
    level: 0,
    description: '+1.9 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: capitalArmor,
  },
  dragonWarrior: {
    name: 'Armadura Dracônica',
    type: 'armor',
    rarity: "Lendário",
    boost: 1.98,
    initialBoost: 1.98, // Valor inicial de boost
    baseCost: 9500,
    initialBaseCost: 9500, // Valor inicial de baseCost
    level: 0,
    description: '+1.96 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: dragonWarrior,
  },
  dragonArmor: {
    name: 'Era Dourada',
    type: 'armor',
    rarity: "Mítico",
    boost: 2.30,
    initialBoost: 2.30, // Valor inicial de boost
    baseCost: 15000,
    initialBaseCost: 15000, // Valor inicial de baseCost
    level: 0,
    description: '+2.3 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: dragonArmor,
  },
  // torre do vazio
  voidArmor: {
    name: 'Armadura do Vazio',
    type: 'armor',
    rarity: "Raro",
    boost: 2.10,
    initialBoost: 2.10, // Valor inicial de boost
    baseCost: 12000,
    initialBaseCost: 12000, // Valor inicial de baseCost
    level: 0,
    description: '+2.1 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidArmor,
  },
  voidRogue: {
    name: 'Assassino Vazio',
    type: 'armor',
    rarity: "Épico",
    boost: 2.25,
    initialBoost: 2.25, // Valor inicial de boost
    baseCost: 16000,
    initialBaseCost: 16000, // Valor inicial de baseCost
    level: 0,
    description: '+2.25 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidRogue,
  },
  voidKnight: {
    name: 'Cavaleiro Abissal',
    type: 'armor',
    rarity: "Lendário",
    boost: 2.50,
    initialBoost: 2.50, // Valor inicial de boost
    baseCost: 20000,
    initialBaseCost: 20000, // Valor inicial de baseCost
    level: 0,
    description: '+2.5 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidKnight,
  },
  voidLord: {
    name: 'Lorde do Vazio',
    type: 'armor',
    rarity: "Mítico",
    boost: 3,
    initialBoost: 3, // Valor inicial de boost
    baseCost: 30000,
    initialBaseCost: 30000, // Valor inicial de baseCost
    level: 0,
    description: '+3 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidLord,
  },
  // Reliquias
  nullRelic: {
    name: '---',
    type: '',
    rarity: "---",
    boost: 1,
    initialBoost: 1, // Valor inicial de boost
    baseCost: 0,
    initialBaseCost: 0, // Valor inicial de baseCost
    level: 0,
    description: '---',
    unlocked: false,
    source: "",
    image: nullRelic,
  },
  //mundo1
  relicIronRing: {
    name: 'Anel Básico',
    type: 'relic',
    rarity: "Comum",
    boost: 1,
    initialBoost: 1, // Valor inicial de boost
    baseCost: 50,
    initialBaseCost: 50, // Valor inicial de baseCost
    level: 0,
    description: 'x1',
    unlocked: true,
    source: "Mundo 1",
    image: relicIronRing,
  },
  relicForestNeck: {
    name: 'Colar da Foresta',
    type: 'relic',
    rarity: "Raro",
    boost: 1.1,
    initialBoost: 1.1, // Valor inicial de boost
    baseCost: 75,
    initialBaseCost: 75, // Valor inicial de baseCost
    level: 0,
    description: 'x1',
    unlocked: false,
    source: "Mundo 1",
    image: relicForestNeck,
  },
  relicForestPendant: {
    name: 'Pingente Verde',
    type: 'relic',
    rarity: "Épico",
    boost: 1.25,
    initialBoost: 1.25, // Valor inicial de boost
    baseCost: 90,
    initialBaseCost: 90, // Valor inicial de baseCost
    level: 0,
    description: 'x1.2',
    unlocked: false,
    source: "Mundo 1",
    image: relicForestPendant,
  },
  relicForestBook: {
    name: 'Magia Florestal',
    type: 'relic',
    rarity: "Lendário",
    boost: 1.40,
    initialBoost: 1.40, // Valor inicial de boost
    baseCost: 110,
    initialBaseCost: 110, // Valor inicial de baseCost
    level: 0,
    description: 'x1.4',
    unlocked: false,
    source: "Mundo 1",
    image: relicForestBook,
  },
  //mundo 2
  relicStoneRing: {
    name: 'Anel da Caverna',
    type: 'relic',
    rarity: "Raro",
    boost: 1.30,
    initialBoost: 1.30, // Valor inicial de boost
    baseCost: 120,
    initialBaseCost: 120, // Valor inicial de baseCost
    level: 0,
    description: 'x1.3',
    unlocked: false,
    source: "Mundo 2",
    image: relicStoneRing,
  },
  relicSkullSpear: {
    name: 'Caveira Empalada',
    type: 'relic',
    rarity: "Épico",
    boost: 1.38,
    initialBoost: 1.38, // Valor inicial de boost
    baseCost: 250,
    initialBaseCost: 250, // Valor inicial de baseCost
    level: 0,
    description: 'x1.38',
    unlocked: false,
    source: "Mundo 2",
    image: relicSkullSpear,
  },
  relicBloodSkull: {
    name: 'Morte Vermelha',
    type: 'relic',
    rarity: "Lendário",
    boost: 1.50,
    initialBoost: 1.50, // Valor inicial de boost
    baseCost: 500,
    initialBaseCost: 500, // Valor inicial de baseCost
    level: 0,
    description: 'x1.50',
    unlocked: false,
    source: "Mundo 2",
    image: relicBloodSkull,
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
  //comuns (52%)
  { item: items.basicAxe, probability: 0.26 },
  { item: items.travellerArmor, probability: 0.26 },
  //raros (38%)
  { item: items.forestSword, probability: 0.1267 },
  { item: items.forestSeeker, probability: 0.1267 },
  { item: items.relicForestNeck, probability: 0.1266 },
  //épicos (8%)
  { item: items.titanSword, probability: 0.03 },
  { item: items.titanArmor, probability: 0.025 },
  { item: items.relicForestPendant, probability: 0.025 },
  //lendarios (2%)
  { item: items.relicForestBook, probability: 0.02 },
];

export const world2Chest = [
  //comuns (52%)
  { item: items.boneSword, probability: 0.52 },
  //raros (38%)
  { item: items.boneCutlass, probability: 0.1267 },
  { item: items.steelArmor, probability: 0.1267 },
  { item: items.relicStoneRing, probability: 0.1266 },
  //épicos (8%)
  { item: items.boneSmasher, probability: 0.0267 },
  { item: items.darkSteelArmor, probability: 0.0267 },
  { item: items.relicSkullSpear, probability: 0.0266 },
  //lendarios (2%)
  { item: items.boneStaff, probability: 0.0067 },
  { item: items.bloodArmor, probability: 0.0067 },
  { item: items.relicBloodSkull, probability: 0.0066 },
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

export const world4Chest = [
  { item: items.plagueHammer, probability: 0.55 },
  { item: items.thornSword, probability: 0.175 },
  { item: items.plagueDaggers, probability: 0.04 },
  { item: items.plagueScythe, probability: 0.009 },
  { item: items.plagueSword, probability: 0.001 },

  { item: items.plagueWarrior, probability: 0.175 },
  { item: items.thornArmor, probability: 0.04 },
  { item: items.plagueDoctorArmor, probability: 0.009 },
  { item: items.plagueArmor, probability: 0.001 },
];

export const world5Chest = [
  { item: items.goldenAxe, probability: 0.275 },
  { item: items.shockSword, probability: 0.175 },
  { item: items.dragonLance, probability: 0.04 },
  { item: items.dragonSword, probability: 0.009 },
  { item: items.goldenSword, probability: 0.001 },

  { item: items.goldenArmor, probability: 0.275 },
  { item: items.goldenRobe, probability: 0.175 },
  { item: items.capitalArmor, probability: 0.04 },
  { item: items.dragonWarrior, probability: 0.009 },
  { item: items.dragonArmor, probability: 0.001 },
];

export const voidTowerChest = [
  { item: items.voidSword, probability: 0.450 },
  { item: items.voidFlame, probability: 0.04 },
  { item: items.voidThunder, probability: 0.009 },
  { item: items.voidLordSword, probability: 0.001 },

  { item: items.voidArmor, probability: 0.450 },
  { item: items.voidRogue, probability: 0.04 },
  { item: items.voidKnight, probability: 0.009 },
  { item: items.voidLord, probability: 0.001 },
];