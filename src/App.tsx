import { useState, useEffect } from 'react';
import './App.css';
import './reset.css'
import { Enemy, enemies } from './components/enemies'; // Importa o objeto de inimigos agrupados
import { Item, items, unlockItem, updateItemLevel, scaleItemAttributes } from './components/arsenal'; // Importa o objeto de armas e armaduras
import { Upgrade, upgrades } from './components/upgrades'; // Importa os upgrades

import forestBackground from './assets/forestBackground.jpg'
import anvil from './assets/anvil.png'

function App() {
  const [playerDamage, setPlayerDamage] = useState<number>(0); // Dano do Jogador
  const [playerPower, setPlayerPower] = useState<number>(100); // Poder do jogador
  const [playerCoins, setPlayerCoins] = useState<number>(1000); // Moedas do jogador
  const [currentEnemy, setCurrentEnemy] = useState<Enemy>(enemies.goblin); // Inimigo inicial
  const [currentWeapon, setCurrentWeapon] = useState<Item>(items.starterSword) // Arma Inicial
  const [currentArmor, setCurrentArmor] = useState<Item>(items.starterArmor) // Armadura Inicial

  const finalDamage = (playerDamage + currentWeapon.damage) * currentArmor.damage
  const finalPower = (currentWeapon.power) * currentArmor.power

  // Tabs

  const [currentRightTab, setCurrentRightTab] = useState<number>(1);
  const toggleRightTab = (tab: number) => {
    setCurrentRightTab(tab);
  };

  const [currentLeftTab, setCurrentLeftTab] = useState<number>(1);
  const toggleLeftTab = (tab: number) => {
    setCurrentLeftTab(tab);
  };

  // Escalanamento

  // Função upgrade

  const applyUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);

   if (upgrade && upgrade.costType === 'power' && playerPower >= upgrade.cost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerDamage(newDamage);
      setPlayerPower(playerPower - upgrade.cost);
      upgrade.level += 1;
    }
  };

  const applyArmorUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && upgrade.costType === 'coins' && playerCoins >= currentArmor.baseCost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerCoins(playerCoins - currentArmor.baseCost);
      currentArmor.level += 1;
      scaleItemAttributes(currentArmor); // Aplica o escalonamento dos atributos
    }
  };

  const applyWeaponUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && upgrade.costType === 'coins' && playerCoins >= currentWeapon.baseCost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerCoins(playerCoins - currentWeapon.baseCost);
      currentWeapon.level += 1;
      scaleItemAttributes(currentWeapon); // Aplica o escalonamento dos atributos
    }
  };

  const upgradeItem = upgrades.find(upg => upg.id === 'upgradeItem');
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
    setPlayerPower(playerPower + finalPower);
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

  const changeWeapon = (itemName: keyof typeof items) => {
    setCurrentWeapon(items[itemName]);
    setCurrentLeftTab(1)
  };
  const changeArmor = (itemName: keyof typeof items) => {
    setCurrentArmor(items[itemName]);
    setCurrentLeftTab(1)
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
              <h2>{parseFloat(finalDamage.toFixed(2))} 🗡️</h2>
            </div>
            <div className="display__status__container">
              <p>Poder</p>
              <h2><span className='power'>{parseFloat(playerPower.toFixed(1))}</span> 🔥</h2>
            </div>
          </div>
          <div className="display__tabs">
            <p className={currentLeftTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleLeftTab(1)}>Inventário 📜</p>
            <p className={currentLeftTab === 4 ? "tab_active" : "tab_inactive"} onClick={() => toggleLeftTab(4)}>Conquistas 🏆</p>
          </div>
          {currentLeftTab === 1 && (
            <div className="leftTab">
                <h6>Itens Equipados</h6>
              <div className="display__skin__container">
                <div className="display__skin">
                  <img src={currentArmor.image} onClick={() => toggleLeftTab(2)} alt="" draggable="false" />
                  <div className="equipped__status">
                  <h1>{currentArmor.name}</h1>
                  <h2>{currentArmor.rarity}</h2>
                  <h3>{currentArmor.descriptionD}</h3>
                  <h4>{currentArmor.descriptionP}</h4>
                  <h5>Nv. {currentArmor.level}</h5>
                  </div>
                </div>
                <div className="display__skin">
                  <img src={currentWeapon.image} onClick={() => toggleLeftTab(3)} alt="" draggable="false" />
                  <div className="equipped__status">
                  <h1>{currentWeapon.name}</h1>
                  <h2>{currentWeapon.rarity}</h2>
                  <h3>{currentWeapon.descriptionD}</h3>
                  <h4>{currentWeapon.descriptionP}</h4>
                  <h5>Nv. {currentWeapon.level}</h5>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentLeftTab === 2 && (
            <div className="arsenalTab">
              <h6>Arsenal</h6>
              <div className="arsenal__slide">
                <div className="display__skin display__skin__arsenal" onClick={() => changeArmor('starterArmor')}>
                  <img src={items.starterArmor.image} alt="" draggable="false" />
                  <div className="equipped__status">
                  <h1>{items.starterArmor.name}</h1>
                  <h2>{items.starterArmor.rarity}</h2>
                  <h3>{items.starterArmor.descriptionD}</h3>
                  <h4>{items.starterArmor.descriptionP}</h4>
                  <h5>Nv. {items.starterArmor.level}</h5>
                  </div>
                 </div>                
              </div>
            </div>
          )}
          {currentLeftTab === 3 && (
            <div className="arsenalTab">
              <h6>Arsenal</h6>
              <div className="arsenal__slide">
                <div className="display__skin display__skin__arsenal" onClick={() => changeWeapon('starterSword')}>
                  <img src={items.starterSword.image} alt="" draggable="false" />
                  <div className="equipped__status">
                  <h1>{items.starterSword.name}</h1>
                  <h2>{items.starterSword.rarity}</h2>
                  <h3>{items.starterSword.descriptionD}</h3>
                  <h4>{items.starterSword.descriptionP}</h4>
                  <h5>Nv. {items.starterSword.level}</h5>
                  </div>
                 </div>                
              </div>
            </div>
          )}
          {currentLeftTab === 4 && (
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
              <h3 onClick={() => changeEnemy('forestBandit')}>2</h3>
              <h3 onClick={() => changeEnemy('forestUndead')}>3</h3>
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
              <h2><span className="gold">{playerCoins.toFixed(1)}</span> 🥮</h2>
            </div>
            <div className="display__status__container">
              <p>Gemas</p>
              <h2><span className='gem'>0</span> 💎</h2>
            </div>
          </div>
          <div className="display__tabs">
            <p className={currentRightTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(1)}>Skills 🎯</p>
            <p className={currentRightTab === 2 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(2)}>Forja ⚒️</p>
            <p className={currentRightTab === 3 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(3)}>Loja 🏪</p>
          </div>
          {currentRightTab === 1 && (
            <>
              <div className="rightTab">
                <h6>Melhorar Habilidades</h6>
                <div onClick={() => applyUpgrade('upgrade2')} className="upgrade__container upgrade__treinamento">
                  <h1>{upgrade2?.description}</h1>
                  <h2>{upgrade2?.name}</h2>
                  <h3>{upgrade2?.cost} 🔥</h3>
                  <h4>Nv. {upgrade2?.level}</h4>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 2 && (
            <>
              <div className="rightTab">
                <h6>Melhorar Equipamento</h6>
                <div className="displayForge__container">
                <img src={anvil} alt="" />
                <div onClick={() => applyWeaponUpgrade('upgradeItem')} className="upgradeForge__container">
                  <h1>+1 Nv.</h1>
                  <h2>Melhorar Arma</h2>
                  <h3>{currentWeapon.baseCost} 🥮</h3>
                </div>
                <div onClick={() => applyArmorUpgrade('upgradeItem')} className="upgradeForge__container">
                  <h1>+1 Nv.</h1>
                  <h2>Melhorar Armadura</h2>
                  <h3>{currentArmor.baseCost} 🥮</h3>
                </div>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 3 && (
            <>
              <div className="rightTab">
                <h6>Loja da Cidade</h6>
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
