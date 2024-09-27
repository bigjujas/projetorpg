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

import relicKnightShield from '/src/assets/relics/relicKnightShield.jpg'
import relicKnightHelmet from '/src/assets/relics/relicKnightHelmet.jpg'
import relicKnightHorse from '/src/assets/relics/relicKnightHorse.jpg'
import relicKnightFire from '/src/assets/relics/relicKnightFire.jpg'

import relicPlagueMask from '/src/assets/relics/relicPlagueMask.jpg'
import relicPlagueRune from '/src/assets/relics/relicPlagueRune.jpg'
import relicPlagueFlask from '/src/assets/relics/relicPlagueFlask.jpg'
import relicPlagueCrow from '/src/assets/relics/relicPlagueCrow.jpg'

import relicCapitalShield from '/src/assets/relics/relicCapitalShield.jpg'
import relicCapitalEmblem from '/src/assets/relics/relicCapitalEmblem.jpg'
import relicCapitalSkull from '/src/assets/relics/relicCapitalSkull.jpg'
import relicCapitalRing from '/src/assets/relics/relicCapitalRing.jpg'

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
    item.boost = item.initialBoost * Math.pow(1.05, item.level)
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
    baseCost: 80,
    initialBaseCost: 80, // Valor inicial de baseCost
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
    boost: 8,
    initialBoost: 8, // Valor inicial de boost
    baseCost: 750,
    initialBaseCost: 750, // Valor inicial de baseCost
    level: 0,
    description: '+8 🗡️',
    unlocked: false,
    source: "Mundo 1",
    image: forestSword,
  },
  titanSword: {
    name: 'Espada do Titã',
    type: 'sword',
    rarity: "Épico",
    boost: 12,
    initialBoost: 12, // Valor inicial de boost
    baseCost: 1500,
    initialBaseCost: 1500, // Valor inicial de baseCost
    level: 0,
    description: '+12 🗡️',
    unlocked: false,
    source: "Mundo 1",
    image: titanSword,
  },
  // mundo 2
  boneSword: {
    name: 'Espada de Ossos',
    type: 'sword',
    rarity: "Comum",
    boost: 20,
    initialBoost: 20, // Valor inicial de boost
    baseCost: 3000,
    initialBaseCost: 3000, // Valor inicial de baseCost
    level: 0,
    description: '+20 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneSword,
  },
  boneCutlass: {
    name: 'Ossos Retorcidos',
    type: 'sword',
    rarity: "Raro",
    boost: 30,
    initialBoost: 30, // Valor inicial de boost
    baseCost: 7000,
    initialBaseCost: 7000, // Valor inicial de baseCost
    level: 0,
    description: '+30 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneCutlass,
  },
  boneSmasher: {
    name: 'Esmaga Crânios',
    type: 'sword',
    rarity: "Épico",
    boost: 45,
    initialBoost: 45, // Valor inicial de boost
    baseCost: 12_500,
    initialBaseCost: 12_500, // Valor inicial de baseCost
    level: 0,
    description: '+45 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneSmasher,
  },
  boneStaff: {
    name: 'Cajado de Sangue',
    type: 'sword',
    rarity: "Lendário",
    boost: 70,
    initialBoost: 70, // Valor inicial de boost
    baseCost: 25_000,
    initialBaseCost: 25_000, // Valor inicial de baseCost
    level: 0,
    description: '+70 🗡️',
    unlocked: false,
    source: "Mundo 2",
    image: boneStaff,
  },
  // mundo 3
  darksteelSword: {
    name: 'Aço Negro',
    type: 'sword',
    rarity: "Comum",
    boost: 60,
    initialBoost: 60, // Valor inicial de boost
    baseCost: 20_000,
    initialBaseCost: 20_000, // Valor inicial de baseCost
    level: 0,
    description: '+60 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: darksteelSword,
  },
  royalSword: {
    name: 'Espada Real',
    type: 'sword',
    rarity: "Raro",
    boost: 85,
    initialBoost: 85, // Valor inicial de boost
    baseCost: 32_000,
    initialBaseCost: 32_000, // Valor inicial de baseCost
    level: 0,
    description: '+85 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: royalSword,
  },
  greatSword: {
    name: 'Grande Espada',
    type: 'sword',
    rarity: "Épico",
    boost: 110,
    initialBoost: 110, // Valor inicial de boost
    baseCost: 65_000,
    initialBaseCost: 65_000, // Valor inicial de baseCost
    level: 0,
    description: '+110 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: greatSword,
  },
  aureaSword: {
    name: 'Espada da Ordem',
    type: 'sword',
    rarity: "Lendário",
    boost: 140,
    initialBoost: 140, // Valor inicial de boost
    baseCost: 100_000,
    initialBaseCost: 100_000, // Valor inicial de baseCost
    level: 0,
    description: '+140 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: aureaSword,
  },
  fireSword: {
    name: 'Fogo Ancestral',
    type: 'sword',
    rarity: "Mítico",
    boost: 250,
    initialBoost: 250, // Valor inicial de boost
    baseCost: 400_000,
    initialBaseCost: 400_000, // Valor inicial de baseCost
    level: 0,
    description: '+250 🗡️',
    unlocked: false,
    source: "Mundo 3",
    image: fireSword,
  },
  //mundo 4
  plagueHammer: {
    name: 'Martelo Devastado',
    type: 'sword',
    rarity: "Comum",
    boost: 125,
    initialBoost: 125, // Valor inicial de boost
    baseCost: 100_000,
    initialBaseCost: 100_000, // Valor inicial de baseCost
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
    baseCost: 150_000,
    initialBaseCost: 150_000, // Valor inicial de baseCost
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
    baseCost: 220_000,
    initialBaseCost: 220_000, // Valor inicial de baseCost
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
    boost: 225,
    initialBoost: 225, // Valor inicial de boost
    baseCost: 300_000,
    initialBaseCost: 300_000, // Valor inicial de baseCost
    level: 0,
    description: '+225 🗡️',
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
    baseCost: 750_000,
    initialBaseCost: 750_000, // Valor inicial de baseCost
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
    baseCost: 300_000,
    initialBaseCost: 300_000, // Valor inicial de baseCost
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
    boost: 240,
    initialBoost: 240, // Valor inicial de boost
    baseCost: 450_000,
    initialBaseCost: 450_000, // Valor inicial de baseCost
    level: 0,
    description: '+240 🗡️',
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
    baseCost: 650_000,
    initialBaseCost: 650_000, // Valor inicial de baseCost
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
    boost: 350,
    initialBoost: 350, // Valor inicial de boost
    baseCost: 900_000,
    initialBaseCost: 900_000, // Valor inicial de baseCost
    level: 0,
    description: '+350 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: dragonSword,
  },
  goldenSword: {
    name: 'Era Dourada',
    type: 'sword',
    rarity: "Mítico",
    boost: 450,
    initialBoost: 450, // Valor inicial de boost
    baseCost: 1_800_000,
    initialBaseCost: 1_800_000, // Valor inicial de baseCost
    level: 0,
    description: '+450 🗡️',
    unlocked: false,
    source: "Mundo 5",
    image: goldenSword,
  },
  // masmorra torre
  voidSword: {
    name: 'Espada do Vazio',
    type: 'sword',
    rarity: "Raro",
    boost: 320,
    initialBoost: 320, // Valor inicial de boost
    baseCost: 1_000_000,
    initialBaseCost: 1_000_000, // Valor inicial de baseCost
    level: 0,
    description: '+320 🗡️',
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
    baseCost: 1_500_000,
    initialBaseCost: 1_500_000, // Valor inicial de baseCost
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
    baseCost: 2_000_000,
    initialBaseCost: 2_000_000, // Valor inicial de baseCost
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
    baseCost: 5_000_000,
    initialBaseCost: 5_000_000, // Valor inicial de baseCost
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
    baseCost: 80,
    initialBaseCost: 80, // Valor inicial de baseCost
    level: 0,
    description: '+2 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: travellerArmor,
  },
  forestSeeker: {
    name: 'Perseguidor',
    type: 'armor',
    rarity: "Raro",
    boost: 5,
    initialBoost: 5, // Valor inicial de boost
    baseCost: 750,
    initialBaseCost: 750, // Valor inicial de baseCost
    level: 0,
    description: '+5 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: forestSeeker,
  },
  titanArmor: {
    name: 'Armadura do Titã',
    type: 'armor',
    rarity: "Épico",
    boost: 8,
    initialBoost: 8, // Valor inicial de boost
    baseCost: 1500,
    initialBaseCost: 1500, // Valor inicial de baseCost
    level: 0,
    description: '+8 🔥',
    unlocked: false,
    source: "Mundo 1",
    image: titanArmor,
  },
  //mundo2
  steelArmor: {
    name: 'Armadura de Aço',
    type: 'armor',
    rarity: "Raro",
    boost: 15,
    initialBoost: 15, // Valor inicial de boost
    baseCost: 7000,
    initialBaseCost: 7000, // Valor inicial de baseCost
    level: 0,
    description: '+15 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: steelArmor,
  },
  darkSteelArmor: {
    name: 'Aço Negro',
    type: 'armor',
    rarity: "Épico",
    boost: 25,
    initialBoost: 25, // Valor inicial de boost
    baseCost: 12_500,
    initialBaseCost: 12_500, // Valor inicial de baseCost
    level: 0,
    description: '+25 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: darkSteelArmor,
  },
  bloodArmor: {
    name: 'Armadura Sangrenta',
    type: 'armor',
    rarity: "Lendário",
    boost: 40,
    initialBoost: 40, // Valor inicial de boost
    baseCost: 25_000,
    initialBaseCost: 25_000, // Valor inicial de baseCost
    level: 0,
    description: '+40 🔥',
    unlocked: false,
    source: "Mundo 2",
    image: bloodArmor,
  },
  //mundo 3
  darkKnightArmor: {
    name: 'Cavaleiro Simples',
    type: 'armor',
    rarity: "Comum",
    boost: 32,
    initialBoost: 32, // Valor inicial de boost
    baseCost: 20_000,
    initialBaseCost: 20_000, // Valor inicial de baseCost
    level: 0,
    description: '+32 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkKnightArmor,
  },
  royalArmor: {
    name: 'Armadura Real',
    type: 'armor',
    rarity: "Raro",
    boost: 50,
    initialBoost: 50, // Valor inicial de boost
    baseCost: 32_000,
    initialBaseCost: 32_000, // Valor inicial de baseCost
    level: 0,
    description: '+50 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: royalArmor,
  },
  warriorArmor: {
    name: 'Guerreiro Feroz',
    type: 'armor',
    rarity: "Épico",
    boost: 65,
    initialBoost: 65, // Valor inicial de boost
    baseCost: 65_000,
    initialBaseCost: 65_000, // Valor inicial de baseCost
    level: 0,
    description: '+65 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: warriorArmor,
  },
  darkRoyalArmor: {
    name: 'Ordem Letal',
    type: 'armor',
    rarity: "Lendário",
    boost: 85,
    initialBoost: 85, // Valor inicial de boost
    baseCost: 100_000,
    initialBaseCost: 100_000, // Valor inicial de baseCost
    level: 0,
    description: '+85 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: darkRoyalArmor,
  },
  fireArmor: {
    name: 'Fogo Ancestral',
    type: 'armor',
    rarity: "Mítico",
    boost: 150,
    initialBoost: 150, // Valor inicial de boost
    baseCost: 400_000,
    initialBaseCost: 400_000, // Valor inicial de baseCost
    level: 0,
    description: '+150 🔥',
    unlocked: false,
    source: "Mundo 3",
    image: fireArmor,
  },
  // mundo 4
  plagueWarrior: {
    name: 'Caçador Devasto',
    type: 'armor',
    rarity: "Raro",
    boost: 90,
    initialBoost: 90, // Valor inicial de boost
    baseCost: 150_000,
    initialBaseCost: 150_000, // Valor inicial de baseCost
    level: 0,
    description: '+90 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueWarrior,
  },
  thornArmor: {
    name: 'Manto Espinhoso',
    type: 'armor',
    rarity: "Épico",
    boost: 100,
    initialBoost: 100, // Valor inicial de boost
    baseCost: 220_000,
    initialBaseCost: 220_000, // Valor inicial de baseCost
    level: 0,
    description: '+100 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: thornArmor,
  },
  plagueDoctorArmor: {
    name: 'Doutor da Praga',
    type: 'armor',
    rarity: "Lendário",
    boost: 125,
    initialBoost: 125, // Valor inicial de boost
    baseCost: 300_000,
    initialBaseCost: 300_000, // Valor inicial de baseCost
    level: 0,
    description: '+125 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueDoctorArmor,
  },
  plagueArmor: {
    name: 'A Praga',
    type: 'armor',
    rarity: "Mítico",
    boost: 225,
    initialBoost: 225, // Valor inicial de boost
    baseCost: 750_000,
    initialBaseCost: 750_000, // Valor inicial de baseCost
    level: 0,
    description: '+225 🔥',
    unlocked: false,
    source: "Mundo 4",
    image: plagueArmor,
  },
  // mundo 5
  goldenArmor: {
    name: 'Armadura Dourada',
    type: 'armor',
    rarity: "Comum",
    boost: 110,
    initialBoost: 110, // Valor inicial de boost
    baseCost: 300_000,
    initialBaseCost: 300_000, // Valor inicial de baseCost
    level: 0,
    description: '+110 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: goldenArmor,
  },
  goldenRobe: {
    name: 'Vestes Pristinas',
    type: 'armor',
    rarity: "Raro",
    boost: 130,
    initialBoost: 130, // Valor inicial de boost
    baseCost: 450_000,
    initialBaseCost: 450_000, // Valor inicial de baseCost
    level: 0,
    description: '+130 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: goldenRobe,
  },
  capitalArmor: {
    name: 'Guarda Real',
    type: 'armor',
    rarity: "Épico",
    boost: 150,
    initialBoost: 150, // Valor inicial de boost
    baseCost: 650_000,
    initialBaseCost: 650_000, // Valor inicial de baseCost
    level: 0,
    description: '+150 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: capitalArmor,
  },
  dragonWarrior: {
    name: 'Armadura Dracônica',
    type: 'armor',
    rarity: "Lendário",
    boost: 175,
    initialBoost: 175, // Valor inicial de boost
    baseCost: 900_000,
    initialBaseCost: 900_000, // Valor inicial de baseCost
    level: 0,
    description: '+175 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: dragonWarrior,
  },
  dragonArmor: {
    name: 'Era Dourada',
    type: 'armor',
    rarity: "Mítico",
    boost: 250,
    initialBoost: 250, // Valor inicial de boost
    baseCost: 1_800_000,
    initialBaseCost: 1_800_000, // Valor inicial de baseCost
    level: 0,
    description: '+250 🔥',
    unlocked: false,
    source: "Mundo 5",
    image: dragonArmor,
  },
  // torre do vazio
  voidArmor: {
    name: 'Armadura do Vazio',
    type: 'armor',
    rarity: "Raro",
    boost: 175,
    initialBoost: 175, // Valor inicial de boost
    baseCost: 1_000_000,
    initialBaseCost: 1_000_000, // Valor inicial de baseCost
    level: 0,
    description: '+175 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidArmor,
  },
  voidRogue: {
    name: 'Assassino Vazio',
    type: 'armor',
    rarity: "Épico",
    boost: 200,
    initialBoost: 200, // Valor inicial de boost
    baseCost: 1_500_000,
    initialBaseCost: 1_500_000, // Valor inicial de baseCost
    level: 0,
    description: '+200 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidRogue,
  },
  voidKnight: {
    name: 'Cavaleiro Abissal',
    type: 'armor',
    rarity: "Lendário",
    boost: 245,
    initialBoost: 245, // Valor inicial de boost
    baseCost: 2_000_000,
    initialBaseCost: 2_000_000, // Valor inicial de baseCost
    level: 0,
    description: '+245 🔥',
    unlocked: false,
    source: "Torre do Vazio",
    image: voidKnight,
  },
  voidLord: {
    name: 'Lorde do Vazio',
    type: 'armor',
    rarity: "Mítico",
    boost: 300,
    initialBoost: 300, // Valor inicial de boost
    baseCost: 5_000_000,
    initialBaseCost: 5_000_000, // Valor inicial de baseCost
    level: 0,
    description: '+300 🔥',
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
    baseCost: 150,
    initialBaseCost: 150, // Valor inicial de baseCost
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
    baseCost: 350,
    initialBaseCost: 350, // Valor inicial de baseCost
    level: 0,
    description: 'x1.25',
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
    baseCost: 500,
    initialBaseCost: 500, // Valor inicial de baseCost
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
    baseCost: 700,
    initialBaseCost: 700, // Valor inicial de baseCost
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
    baseCost: 1250,
    initialBaseCost: 1250, // Valor inicial de baseCost
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
    baseCost: 2000,
    initialBaseCost: 2000, // Valor inicial de baseCost
    level: 0,
    description: 'x1.50',
    unlocked: false,
    source: "Mundo 2",
    image: relicBloodSkull,
  },
  // mundo 3
  relicKnightShield: {
    name: 'Escudo Fiel',
    type: 'relic',
    rarity: "Raro",
    boost: 1.42,
    initialBoost: 1.42, // Valor inicial de boost
    baseCost: 2500,
    initialBaseCost: 2500, // Valor inicial de baseCost
    level: 0,
    description: 'x1.42',
    unlocked: false,
    source: "Mundo 3",
    image: relicKnightShield,
  },
  relicKnightHelmet: {
    name: 'Elmo do Cavaleiro',
    type: 'relic',
    rarity: "Épico",
    boost: 1.50,
    initialBoost: 1.50, // Valor inicial de boost
    baseCost: 3200,
    initialBaseCost: 3200, // Valor inicial de baseCost
    level: 0,
    description: 'x1.50',
    unlocked: false,
    source: "Mundo 3",
    image: relicKnightHelmet,
  },
  relicKnightHorse: {
    name: 'Montaria Aurea',
    type: 'relic',
    rarity: "Lendário",
    boost: 1.65,
    initialBoost: 1.65, // Valor inicial de boost
    baseCost: 4000,
    initialBaseCost: 4000, // Valor inicial de baseCost
    level: 0,
    description: 'x1.65',
    unlocked: false,
    source: "Mundo 3",
    image: relicKnightHorse,
  },
  relicKnightFire: {
    name: 'Rosa do Fogo',
    type: 'relic',
    rarity: "Mítico",
    boost: 2,
    initialBoost: 2, // Valor inicial de boost
    baseCost: 12000,
    initialBaseCost: 12000, // Valor inicial de baseCost
    level: 0,
    description: 'x2',
    unlocked: false,
    source: "Mundo 3",
    image: relicKnightFire,
  },
  // mundo 4
  relicPlagueMask: {
    name: 'Mascara do Doutor',
    type: 'relic',
    rarity: "Raro",
    boost: 1.50,
    initialBoost: 1.50, // Valor inicial de boost
    baseCost: 4500,
    initialBaseCost: 4500, // Valor inicial de baseCost
    level: 0,
    description: 'x1.5',
    unlocked: false,
    source: "Mundo 4",
    image: relicPlagueMask,
  },
  relicPlagueRune: {
    name: 'Runa da Podridão',
    type: 'relic',
    rarity: "Épico",
    boost: 1.65,
    initialBoost: 1.65, // Valor inicial de boost
    baseCost: 5800,
    initialBaseCost: 5800, // Valor inicial de baseCost
    level: 0,
    description: 'x1.65',
    unlocked: false,
    source: "Mundo 4",
    image: relicPlagueRune,
  },
  relicPlagueFlask: {
    name: 'Frasco da Morte',
    type: 'relic',
    rarity: "Lendário",
    boost: 1.75,
    initialBoost: 1.75, // Valor inicial de boost
    baseCost: 7000,
    initialBaseCost: 7000, // Valor inicial de baseCost
    level: 0,
    description: 'x1.75',
    unlocked: false,
    source: "Mundo 4",
    image: relicPlagueFlask,
  },
  relicPlagueCrow: {
    name: 'A Praga',
    type: 'relic',
    rarity: "Mítico",
    boost: 2.3,
    initialBoost: 2.3, // Valor inicial de boost
    baseCost: 20_000,
    initialBaseCost: 20_000, // Valor inicial de baseCost
    level: 0,
    description: 'x2.3',
    unlocked: false,
    source: "Mundo 4",
    image: relicPlagueCrow,
  },
  //mundo 5
  relicCapitalShield: {
    name: 'Escudo Antigo',
    type: 'relic',
    rarity: "Raro",
    boost: 1.65,
    initialBoost: 1.65, // Valor inicial de boost
    baseCost: 8500,
    initialBaseCost: 8500, // Valor inicial de baseCost
    level: 0,
    description: 'x1.65',
    unlocked: false,
    source: "Mundo 5",
    image: relicCapitalShield,
  },
  relicCapitalEmblem: {
    name: 'Emblema da Ordem',
    type: 'relic',
    rarity: "Épico",
    boost: 1.75,
    initialBoost: 1.75, // Valor inicial de boost
    baseCost: 9500,
    initialBaseCost: 9500, // Valor inicial de baseCost
    level: 0,
    description: 'x1.75',
    unlocked: false,
    source: "Mundo 5",
    image: relicCapitalEmblem,
  },
  relicCapitalSkull: {
    name: 'Caveira Prístina',
    type: 'relic',
    rarity: "Lendário",
    boost: 1.90,
    initialBoost: 1.90, // Valor inicial de boost
    baseCost: 12000,
    initialBaseCost: 12000, // Valor inicial de baseCost
    level: 0,
    description: 'x1.90',
    unlocked: false,
    source: "Mundo 5",
    image: relicCapitalSkull,
  },
  relicCapitalRing: {
    name: 'Era Dourada',
    type: 'relic',
    rarity: "Mítico",
    boost: 2.6,
    initialBoost: 2.6, // Valor inicial de boost
    baseCost: 30000,
    initialBaseCost: 30000, // Valor inicial de baseCost
    level: 0,
    description: 'x2.6',
    unlocked: false,
    source: "Mundo 5",
    image: relicCapitalRing,
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
  //comum (52%)
  { item: items.darksteelSword, probability: 0.26 },
  { item: items.darkKnightArmor, probability: 0.26 },
  //raro (38%)
  { item: items.royalSword, probability: 0.1266 },
  { item: items.royalArmor, probability: 0.1266 },
  { item: items.relicKnightShield, probability: 0.1266 },
  //épico (8%)
  { item: items.greatSword, probability: 0.02666 },
  { item: items.warriorArmor, probability: 0.02666 },
  { item: items.relicKnightHelmet, probability: 0.02666 },
  //lendário (2%)
  { item: items.aureaSword, probability: 0.0066 },
  { item: items.darkRoyalArmor, probability: 0.0066 },
  { item: items.relicKnightHorse, probability: 0.0066 },
  //mítico (0.1%)
  { item: items.fireSword, probability: 0.00033 },
  { item: items.fireArmor, probability: 0.00033 },
  { item: items.relicKnightFire, probability: 0.00034 },
];

export const world4Chest = [
  // Comum (52%)
  { item: items.plagueHammer, probability: 0.52 },
  // Raro (38%)
  { item: items.plagueWarrior, probability: 0.12666 },
  { item: items.thornSword, probability: 0.12666 },
  { item: items.relicPlagueMask, probability: 0.12666 },
  // Épico (7.99%)
  { item: items.plagueDaggers, probability: 0.02666 },
  { item: items.thornArmor, probability: 0.02666 },
  { item: items.relicPlagueRune, probability: 0.02666 },
  // Lendário (2%)
  { item: items.plagueScythe, probability: 0.00666 },
  { item: items.plagueDoctorArmor, probability: 0.00666 },
  { item: items.relicPlagueFlask, probability: 0.00666 },
  // Mítico (0.1%)
  { item: items.plagueSword, probability: 0.00033 },
  { item: items.plagueArmor, probability: 0.00033 },
  { item: items.relicPlagueCrow, probability: 0.00034 },
];

export const world5Chest = [
  // Comum (58%)
  { item: items.goldenAxe, probability: 0.29 },
  { item: items.goldenArmor, probability: 0.29 },
  // Raro (32%)
  { item: items.shockSword, probability: 0.10666 },
  { item: items.goldenRobe, probability: 0.10666 },
  { item: items.relicCapitalShield, probability: 0.10666 },
  // Épico (7.99%)
  { item: items.dragonLance, probability: 0.02666 },
  { item: items.capitalArmor, probability: 0.02666 },
  { item: items.relicCapitalEmblem, probability: 0.02666 },
  // Lendário (2%)
  { item: items.dragonSword, probability: 0.00666 },
  { item: items.dragonWarrior, probability: 0.00666 },
  { item: items.relicCapitalSkull, probability: 0.00666 },
  // Mítico (1%)
  { item: items.dragonArmor, probability: 0.00333 },
  { item: items.goldenSword, probability: 0.00333 },
  { item: items.relicCapitalRing, probability: 0.00334 },
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