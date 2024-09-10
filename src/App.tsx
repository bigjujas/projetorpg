import { useState } from 'react';
import './App.css';
import './reset.css'
import { Enemy, enemies } from './components/enemies'; // Importa o objeto de inimigos agrupados
import { Item, items, unlockItem } from './components/arsenal'; // Importa o objeto de armas e armaduras
import { Upgrade, upgrades } from './components/upgrades'; // Importa os upgrades

import forestBackground from './assets/forestBackground.jpg'

function App() {
  const [playerDamage, setPlayerDamage] = useState<number>(1); // Dano do Jogador
  const [playerPower, setPlayerPower] = useState<number>(0); // Poder do jogador
  const [playerCoins, setPlayerCoins] = useState<number>(0); // Moedas do jogador
  const [currentEnemy, setCurrentEnemy] = useState<Enemy>(enemies.goblin); // Inimigo inicial
  const [currentWeapon, setCurrentWeapon] = useState<Item>(items.starterSword) // Arma Inicial
  const [currentArmor, setCurrentArmor] = useState<Item>(items.starterArmor) // Armadura Inicial

  const finalDamage = playerDamage * currentWeapon.damage

  // Tabs

  const [currentRightTab, setCurrentRightTab] = useState<number>(1);
  const toggleRightTab = (tab: number) => {
    setCurrentRightTab(tab);
  };

  const [currentLeftTab, setCurrentLeftTab] = useState<number>(1);
  const toggleLeftTab = (tab: number) => {
    setCurrentLeftTab(tab);
  };

  // Função upgrade

  const applyUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && upgrade.costType === 'coins' && playerCoins >= upgrade.cost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerDamage(newDamage);
      setPlayerCoins(playerCoins - upgrade.cost);
      upgrade.level += 1;
    } else if (upgrade && upgrade.costType === 'power' && playerPower >= upgrade.cost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerDamage(newDamage);
      setPlayerPower(playerPower - upgrade.cost);
      upgrade.level += 1;
    }
  };

  const upgrade1 = upgrades.find(upg => upg.id === 'upgrade1');
  const upgrade2 = upgrades.find(upg => upg.id === 'upgrade2');

  // Função que desbloqueia items

  const checkUnlocks = () => {
    if (playerCoins >= 100) { // Exemplo de condição
      unlockItem('starterSword');
    }
  };

  // Função chamada ao atacar o inimigo

  const attackEnemy = () => {
    const newHealth = currentEnemy.health - (finalDamage);
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
        <h1>Projeto RPG ⚔️ Alpha 1</h1>
      </header>
      <div className="game__container">
        <div className="left__container">
          <div className="display__status">
            <div className="display__status__container">
              <p>Dano</p>
              <h2>{parseFloat(finalDamage.toFixed(1))} 🗡️</h2>
            </div>
            <div className="display__status__container">
              <p>Poder</p>
              <h2><span className='power'>{parseFloat(playerPower.toFixed(1))}</span> 🔥</h2>
            </div>
          </div>
          <div className="display__tabs">
            <p className={currentLeftTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleLeftTab(1)}>Inventário 📜</p>
            <p className={currentLeftTab === 2 ? "tab_active" : "tab_inactive"} onClick={() => toggleLeftTab(2)}>Conquistas 🏆</p>
          </div>
          {currentLeftTab === 1 && (
            <div className="leftTab">
              <div className="display__skin__container">
                <div className="display__skin">
                  <h1>{currentArmor.name}</h1>
                  <img src={currentArmor.image} alt="" draggable="false" />
                </div>
                <div className="display__skin">
                  <h1>{currentWeapon.name}</h1>
                  <img src={currentWeapon.image} alt="" draggable="false" />
                </div>
              </div>
              <div className="equipped__status">
                <h1>Status dos Equipamentos</h1>
                <div className="itemstatus__container">
                  <h2>Armadura</h2>
                  <h3>{currentArmor.description}</h3>
                </div>
                <div className="itemstatus__container">
                  <h2>Arma</h2>
                  <h3>{currentWeapon.description}</h3>
                </div>
              </div>
            </div>
          )}
          {currentLeftTab === 2 && (
            <div className="leftTab">
              <div className="upgrade__container">
                <h1>work</h1>
                <h2>in</h2>
                <h3>progress</h3>
                <h4>hehe</h4>
              </div>
            </div>
          )}
        </div>
        <div className="middle__container">
          <div className="world__container" style={{ backgroundImage: `url(${forestBackground})` }}>
            <div className="world__name">
              <h2>Mundo 1</h2>
              <h1>Bosque Sombrio 🌲</h1>
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
            <div className="display__status__container">
              <p>Ouro</p>
              <h2><span className="gold">{playerCoins}</span> 🪙</h2>
            </div>
            <div className="display__status__container">
              <p>Gemas</p>
              <h2><span className='gem'>0</span> 💎</h2>
            </div>
          </div>
          <div className="display__tabs">
            <p className={currentRightTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(1)}>Ferreiro 🛠️</p>
            <p className={currentRightTab === 2 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(2)}>Skills 🎯</p>
            <p className={currentRightTab === 3 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(3)}>Loja 🏪</p>
          </div>
          {currentRightTab === 1 && (
            <>
              <div className="rightTab">
                <div onClick={() => applyUpgrade('upgrade1')} className="upgrade__container">
                  <h1>{upgrade1?.description}</h1>
                  <h2>{upgrade1?.name}</h2>
                  <h3>{upgrade1?.cost} 🪙</h3>
                  <h4>Nv. {upgrade1?.level}</h4>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 2 && (
            <>
              <div className="rightTab">
                <div onClick={() => applyUpgrade('upgrade2')} className="upgrade__container upgrade__treinamento">
                  <h1>{upgrade2?.description}</h1>
                  <h2>{upgrade2?.name}</h2>
                  <h3>{upgrade2?.cost} 🔥</h3>
                  <h4>Nv. {upgrade2?.level}</h4>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 3 && (
            <>
              <div className="rightTab">
                <div className="upgrade__container">
                  <h3><span className='gem'>20</span> 💎</h3>
                  <h2>Abrir Caixa</h2>
                  <h4>Tier I</h4>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
