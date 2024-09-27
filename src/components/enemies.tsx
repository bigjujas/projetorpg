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
    health: 50,
    maxHealth: 50,
    coinsDropped: 5,
    gemsDropped: 1,
    kills: 0,
    image: goblin,
  },
  forestBandit: {
    name: 'Bandido da Floresta',
    health: 300,
    maxHealth: 300,
    coinsDropped: 30,
    gemsDropped: 3,
    kills: 0,
    image: forestBandit,
  },
  forestUndead: {
    name: 'Morto-Vivo',
    health: 1500,
    maxHealth: 1500,
    coinsDropped: 150,
    gemsDropped: 5,
    kills: 0,
    image: forestUndead,
  },
  forestTitan: {
    name: 'Titã da Floresta 💀',
    health: 5000,
    maxHealth: 5000,
    coinsDropped: 500,
    gemsDropped: 15,
    kills: 0,
    image: forestTitan,
  },
  // Mundo 2
  caveSkeleton: {
    name: 'Esqueleto',
    health: 10_000,
    maxHealth: 10_000,
    coinsDropped: 1000,
    gemsDropped: 20,
    kills: 0,
    image: caveSkeleton,
  },
  caveSpider: {
    name: 'Aranha',
    health: 20_000,
    maxHealth: 20_000,
    coinsDropped: 2_000,
    gemsDropped: 60,
    kills: 0,
    image: caveSpider,
  },
  caveMonster: {
    name: 'Serpente de Ossos',
    health: 35_000,
    maxHealth: 35_000,
    coinsDropped: 3_500,
    gemsDropped: 100,
    kills: 0,
    image: caveMonster,
  },
  caveMage: {
    name: 'Necromante 💀',
    health: 85_000,
    maxHealth: 85_000,
    coinsDropped: 8_500,
    gemsDropped: 300,
    kills: 0,
    image: caveMage,
  },
  // Mundo 3
  bronzeKnight: {
    name: 'Cavaleiro de Bronze',
    health: 150_000,
    maxHealth: 150_000,
    coinsDropped: 15_000,
    gemsDropped: 350,
    kills: 0,
    image: bronzeKnight,
  },
  ghostKnight: {
    name: 'Cavaleiro Fantasma',
    health: 225_000,
    maxHealth: 225_000,
    coinsDropped: 22_500,
    gemsDropped: 700,
    kills: 0,
    image: ghostKnight,
  },
  cavallaryKnight: {
    name: 'Cavalaria',
    health: 320_000,
    maxHealth: 320_000,
    coinsDropped: 32_000,
    gemsDropped: 1500,
    kills: 0,
    image: cavallaryKnight,
  },
  giantKnight: {
    name: 'General das Muralhas 💀',
    health: 500_000,
    maxHealth: 500_000,
    coinsDropped: 50_000,
    gemsDropped: 4500,
    kills: 0,
    image: giantKnight,
  },
  // mundo 4
  plagueBeer: {
    name: 'Urso da Peste',
    health: 700_000,
    maxHealth: 700_000,
    coinsDropped: 70_000,
    gemsDropped: 6000,
    kills: 0,
    image: plagueBeer,
  },
  plagueUndeads: {
    name: 'Horda da Praga',
    health: 1_000_000,
    maxHealth: 1_000_000,
    coinsDropped: 100_000,
    gemsDropped: 12000,
    kills: 0,
    image: plagueUndeads,
  },
  plagueSkeleton: {
    name: 'Mega Morto-Vivo',
    health: 1_350_000,
    maxHealth: 1_350_000,
    coinsDropped: 135_000,
    gemsDropped: 30000,
    kills: 0,
    image: plagueSkeleton,
  },
  plagueDoctor: {
    name: 'O Doutor 💀',
    health: 2_000_000,
    maxHealth: 2_000_000,
    coinsDropped: 200_000,
    gemsDropped: 70000,
    kills: 0,
    image: plagueDoctor,
  },
  // Mundo 5
  capitalArmy: {
    name: 'Exército de Elite',
    health: 2_500_000,
    maxHealth: 2_500_000,
    coinsDropped: 250_000,
    gemsDropped: 80000,
    kills: 0,
    image: capitalArmy,
  },
  capitalGuardian: {
    name: 'Guardião da Capital',
    health: 3_500_000,
    maxHealth: 3_500_000,
    coinsDropped: 350_000,
    gemsDropped: 160_000,
    kills: 0,
    image: capitalGuardian,
  },
  capitalWarrior: {
    name: 'Mão Direita do Rei',
    health: 5_000_000,
    maxHealth: 5_000_000,
    coinsDropped: 500_000,
    gemsDropped: 400_000,
    kills: 0,
    image: capitalWarrior,
  },
  capitalDragon: {
    name: 'Protetor da Câmara 💀',
    health: 7_500_000,
    maxHealth: 7_500_000,
    coinsDropped: 750_000,
    gemsDropped: 1_150_000,
    kills: 0,
    image: capitalDragon,
  },
  // bosses
  abyssalKnight: {
    name: 'Tier 1',
    health: 2_500_000,
    maxHealth: 2_500_000,
    coinsDropped: 0,
    gemsDropped: 0,
    kills: 0,
    image: towerEnemyImages[Math.floor(Math.random() * towerEnemyImages.length)],
    tier: 1,
    prismsDropped: 1,
  },
};

