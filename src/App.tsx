import { useState } from 'react';
import './App.css';
import './reset.css'
import { Enemy, enemies } from './components/enemies'; // Importa o objeto de inimigos agrupados

import forestBackground from './assets/forestBackground.jpg'

function App() {
  const [playerPower, setPlayerPower] = useState<number>(1); // Poder do jogador
  const [playerCoins, setPlayerCoins] = useState<number>(0); // Moedas do jogador
  const [currentEnemy, setCurrentEnemy] = useState<Enemy>(enemies.goblin); // Inimigo inicial

  // Função chamada ao atacar o inimigo

  const attackEnemy = () => {
    const newHealth = currentEnemy.health - playerPower;
    setPlayerPower(playerPower + 0.1);
    if (newHealth <= 0) {
      // Inimigo derrotado, ganha moedas e poder
      setPlayerCoins(playerCoins + currentEnemy.coinsDropped);
      // Respawn do inimigo com vida cheia
      setCurrentEnemy({
        ...currentEnemy,
        health: currentEnemy.maxHealth, // Inimigo volta com vida cheia
      });
    } else {
      setCurrentEnemy({ ...currentEnemy, health: newHealth });
    }
  };

  // qol

  const changeEnemy = (enemyName: keyof typeof enemies) => {   // funcao pra mudar inimigo
    setCurrentEnemy(enemies[enemyName]);
  };

  const healthBarWidth = (currentEnemy.health / currentEnemy.maxHealth) * 100; // Barra de Vida

  return (
    <>
      <header className='header'>
        <h1>Projeto RPG ⚔️ Alpha 0.1</h1>
      </header>
      <div className="game__container">
        <div className="left__container">
          <div className="left__menu">
          <div className="display__status">
          <p>Dano: {playerPower.toFixed(1)} 🗡️</p>
          <p>Poder: {playerPower.toFixed(1)} 🔥</p>
          </div>
          <div className="display__tabs">
            <p>Inventário 🎒</p>
            <p>Skins 🧢</p>
            <p>Conquistas 🏆</p>
          </div>
          </div>
        </div>
        <div className="middle__container">
          <div className="world__container" style={{ backgroundImage: `url(${forestBackground})` }}>
            <div className="world__name">
            <h2>Mundo 1</h2>
            <h1>Floresta Verdejante 🌲</h1>
            </div>
            <div className="enemies__container">
              <h3 onClick={() => changeEnemy('goblin')}>1</h3>
              <h3 onClick={() => changeEnemy('goblin2')}>2</h3>
              <h3 onClick={() => changeEnemy('undeadForest')}>3</h3>
              <h3 onClick={() => changeEnemy('forestTitan')}>💀</h3>
            </div>
             <h4>{currentEnemy.name}</h4>
             <div className="health-bar-container">
             <div className="health-bar" style={{ width: `${healthBarWidth}%` }}></div>
             <p>❤️ {currentEnemy.health.toFixed(0)} / {currentEnemy.maxHealth}</p>
             </div>
             <img className="enemy" onClick={attackEnemy} src={currentEnemy.image} alt={currentEnemy.name} draggable="false" /> 
          </div>
        </div>
        <div className="right__container">
        <div className="display__status">
          <p>Ouro: {playerCoins} 🪙</p>
          <p>Gemas: 0 💎</p>
          </div>
          <div className="display__tabs">
            <p>Ferreiro 🛠️</p>
            <p>Treinamento 🎯</p>
            <p>Loja 🏪</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
