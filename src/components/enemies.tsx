import goblin from "/src/assets/enemies/goblin.jpg";
import forestBandit from "/src/assets/enemies/forestBandit.jpg";
import forestUndead from "/src/assets/enemies/forestUndead.jpg"
import forestTitan from "/src/assets/enemies/forestTitan.jpg"

import caveSkeleton from "/src/assets/enemies/caveSkeleton.jpg"
import caveSpider from "/src/assets/enemies/caveSpider.jpg"
import caveMonster from "/src/assets/enemies/caveMonster.jpg"
import caveMage from "/src/assets/enemies/caveMage.jpg"

import bronzeKnight from "/src/assets/enemies/bronzeKnight.jpg"
import ghostKnight from "/src/assets/enemies/ghostKnight.jpg"
import cavallaryKnight from "/src/assets/enemies/cavallaryKnight.jpg"
import giantKnight from "/src/assets/enemies/giantKnight.jpg"

import plagueBeer from "/src/assets/enemies/plagueBeer.jpg"
import plagueUndeads from "/src/assets/enemies/plagueUndeads.jpg"
import plagueSkeleton from "/src/assets/enemies/plagueSkeleton.jpg"
import plagueDoctor from "/src/assets/enemies/plagueDoctor.jpg"

import capitalArmy from "/src/assets/enemies/capitalArmy.jpg"
import capitalGuardian from "/src/assets/enemies/capitalGuardian.jpg"
import capitalWarrior from "/src/assets/enemies/capitalWarrior.jpg"
import capitalDragon from "/src/assets/enemies/capitalDragon.jpg"

// tower
import abyssalKnight from "/src/assets/enemies/abyssalKnight.jpg"
import abyssalLion from "/src/assets/enemies/abyssalLion.jpg"
import abyssalWolf from "/src/assets/enemies/abyssalWolf.jpg"
import abyssalDragon from "/src/assets/enemies/abyssalDragon.jpg"
export const towerEnemyImages = [abyssalKnight, abyssalLion, abyssalWolf, abyssalDragon, capitalDragon, plagueDoctor, giantKnight, caveMage, forestTitan];


export type Enemy = {
  name: string;
  health: number;
  maxHealth: number;
  coinsDropped: number;
  gemsDropped: number;
  kills: number;
  image: string;
  tier?: number;
  prismsDropped?: number;
};

export const enemies = {
  // Mundo 1
  goblin: {
    name: 'Goblin',
    health: 25,
    maxHealth: 25,
    coinsDropped: 5,
    gemsDropped: 1,
    kills: 0,
    image: goblin,
  },
  forestBandit: {
    name: 'Bandido da Floresta',
    health: 150,
    maxHealth: 150,
    coinsDropped: 30,
    gemsDropped: 3,
    kills: 0,
    image: forestBandit,
  },
  forestUndead: {
    name: 'Morto-Vivo',
    health: 1000,
    maxHealth: 1000,
    coinsDropped: 200,
    gemsDropped: 5,
    kills: 0,
    image: forestUndead,
  },
  forestTitan: {
    name: 'Titã da Floresta 💀',
    health: 5000,
    maxHealth: 5000,
    coinsDropped: 1000,
    gemsDropped: 15,
    kills: 0,
    image: forestTitan,
  },
  // Mundo 2
  caveSkeleton: {
    name: 'Esqueleto',
    health: 10_000,
    maxHealth: 10_000,
    coinsDropped: 2000,
    gemsDropped: 20,
    kills: 0,
    image: caveSkeleton,
  },
  caveSpider: {
    name: 'Aranha',
    health: 16_000,
    maxHealth: 16_000,
    coinsDropped: 3_200,
    gemsDropped: 60,
    kills: 0,
    image: caveSpider,
  },
  caveMonster: {
    name: 'Serpente de Ossos',
    health: 32_000,
    maxHealth: 32_000,
    coinsDropped: 6_400,
    gemsDropped: 100,
    kills: 0,
    image: caveMonster,
  },
  caveMage: {
    name: 'Necromante 💀',
    health: 75_000,
    maxHealth: 75_000,
    coinsDropped: 15_000,
    gemsDropped: 300,
    kills: 0,
    image: caveMage,
  },
  // Mundo 3
  bronzeKnight: {
    name: 'Cavaleiro de Bronze',
    health: 35000,
    maxHealth: 35000,
    coinsDropped: 800,
    gemsDropped: 350,
    kills: 0,
    image: bronzeKnight,
  },
  ghostKnight: {
    name: 'Cavaleiro Fantasma',
    health: 50000,
    maxHealth: 50000,
    coinsDropped: 1000,
    gemsDropped: 700,
    kills: 0,
    image: ghostKnight,
  },
  cavallaryKnight: {
    name: 'Cavalaria',
    health: 75000,
    maxHealth: 75000,
    coinsDropped: 1500,
    gemsDropped: 1500,
    kills: 0,
    image: cavallaryKnight,
  },
  giantKnight: {
    name: 'General das Muralhas 💀',
    health: 120000,
    maxHealth: 120000,
    coinsDropped: 2500,
    gemsDropped: 4500,
    kills: 0,
    image: giantKnight,
  },
  // mundo 4
  plagueBeer: {
    name: 'Urso da Peste',
    health: 200_000,
    maxHealth: 200_000,
    coinsDropped: 3200,
    gemsDropped: 6000,
    kills: 0,
    image: plagueBeer,
  },
  plagueUndeads: {
    name: 'Horda da Praga',
    health: 300_000,
    maxHealth: 300_000,
    coinsDropped: 4000,
    gemsDropped: 12000,
    kills: 0,
    image: plagueUndeads,
  },
  plagueSkeleton: {
    name: 'Mega Morto-Vivo',
    health: 450_000,
    maxHealth: 450_000,
    coinsDropped: 5200,
    gemsDropped: 30000,
    kills: 0,
    image: plagueSkeleton,
  },
  plagueDoctor: {
    name: 'Doutor da Praga 💀',
    health: 750_000,
    maxHealth: 750_000,
    coinsDropped: 6500,
    gemsDropped: 70000,
    kills: 0,
    image: plagueDoctor,
  },
  // Mundo 5
  capitalArmy: {
    name: 'Exército de Elite',
    health: 1_000_000,
    maxHealth: 1_000_000,
    coinsDropped: 10000,
    gemsDropped: 80000,
    kills: 0,
    image: capitalArmy,
  },
  capitalGuardian: {
    name: 'Guardião da Capital',
    health: 1_500_000,
    maxHealth: 1_500_000,
    coinsDropped: 12500,
    gemsDropped: 160_000,
    kills: 0,
    image: capitalGuardian,
  },
  capitalWarrior: {
    name: 'Mão Direita do Rei',
    health: 3_000_000,
    maxHealth: 3_000_000,
    coinsDropped: 18000,
    gemsDropped: 400_000,
    kills: 0,
    image: capitalWarrior,
  },
  capitalDragon: {
    name: 'Protetor da Câmara 💀',
    health: 5_000_000,
    maxHealth: 5_000_000,
    coinsDropped: 25000,
    gemsDropped: 1_150_000,
    kills: 0,
    image: capitalDragon,
  },
  // bosses
  abyssalKnight: {
    name: 'Tier 1',
    health: 1_000_000,
    maxHealth: 1_000_000,
    coinsDropped: 0,
    gemsDropped: 0,
    kills: 0,
    image: towerEnemyImages[Math.floor(Math.random() * towerEnemyImages.length)],
    tier: 1,
    prismsDropped: 1,
  },
};

