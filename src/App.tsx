import { useState, useEffect } from 'react';
import './App.css';
import './reset.css'
import { worlds } from './components/worlds';
import World from './components/world';
import { Enemy, enemies } from './components/enemies'; // Importa o objeto de inimigos agrupados
import { Item, items, unlockItem, updateItemLevel, scaleItemAttributes } from './components/arsenal'; // Importa o objeto de armas e armaduras
import { Upgrade, upgrades } from './components/upgrades'; // Importa os upgrades
import ChestOpener from './components/ChestOpener';

import anvil from './assets/anvil.png'

export const App = () => {
  const [playerDamage, setPlayerDamage] = useState<number>(0); // Dano do Jogador
  const [playerPower, setPlayerPower] = useState<number>(0); // Poder do jogador
  const [playerCoins, setPlayerCoins] = useState<number>(0); // Moedas do jogador
  const [playerGems, setPlayerGems] = useState<number>(0); // Gemas do jogador
  const [currentEnemy, setCurrentEnemy] = useState<Enemy>(enemies.goblin); // Inimigo inicial
  const [currentWeapon, setCurrentWeapon] = useState<Item>(items.starterSword) // Arma Inicial
  const [currentArmor, setCurrentArmor] = useState<Item>(items.starterArmor) // Armadura Inicial

  // mundo
  const [currentWorldIndex, setCurrentWorldIndex] = useState(0);

  const changeWorld = (index: number) => {
    setCurrentWorldIndex(index);
    setCurrentEnemy(worlds[index].enemies[0]); // Atualiza para o primeiro inimigo do novo mundo
    setCurrentMiddleTab(2)
  };

  const currentWorld = worlds[currentWorldIndex];

 // dano e poder

  const finalDamage = (playerDamage + currentWeapon.damage) * currentArmor.damage
  const finalPower = (currentWeapon.power) * currentArmor.power

  // Tabs

  const [currentLeftTab, setCurrentLeftTab] = useState<number>(1);
  const toggleLeftTab = (tab: number) => {
    setCurrentLeftTab(tab);
  };

  const [currentMiddleTab, setCurrentMiddleTab] = useState<number>(1);
  const toggleMiddleTab = (tabIndex: number) => {
    setCurrentMiddleTab(tabIndex);
  };

  const [currentRightTab, setCurrentRightTab] = useState<number>(1);
  const toggleRightTab = (tab: number) => {
    setCurrentRightTab(tab);
  };


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
  
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const clickLimit = 12; // Limite de cliques por segundo
  const timeWindow = 1000; // Janela de tempo em milissegundos

  useEffect(() => {
    const interval = setInterval(() => {
      setClickCount(0);
    }, timeWindow);

    return () => clearInterval(interval);
  }, []);

  const attackEnemy = () => {
    const currentTime = Date.now();

    if (currentTime - lastClickTime < timeWindow / clickLimit) {
      // Clique ignorado por exceder o limite
      return;
    }

    setLastClickTime(currentTime);
    setClickCount(prevCount => prevCount + 1);

    const newHealth = currentEnemy.health - finalDamage;
    setPlayerPower(playerPower + finalPower);
    if (newHealth <= 0) {
      // Inimigo derrotado, ganha moedas e poder
      setPlayerCoins(playerCoins + currentEnemy.coinsDropped);
      setPlayerGems(playerGems + currentEnemy.gemsDropped)
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

  const changeEnemy = (enemyName: string) => {
    const enemy = worlds.flatMap(world => world.enemies).find(e => e.name === enemyName);
    if (enemy) {
      setCurrentEnemy(enemy);
    }
  };

  const changeWeapon = (itemName: keyof typeof items) => {
    const selectedItem = items[itemName];

    if (selectedItem.unlocked) {
        setCurrentWeapon(selectedItem);
        setCurrentLeftTab(1);
    } else {
        console.error('A arma não está desbloqueada.');
    }
};
const changeArmor = (itemName: keyof typeof items) => {
  const selectedItem = items[itemName];

  if (selectedItem.unlocked) {
      setCurrentArmor(selectedItem);
      setCurrentLeftTab(1);
  } else {
      console.error('A arma não está desbloqueada.');
  }
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
                  <h1>{currentArmor.name}</h1>
                  <img src={currentArmor.image} onClick={() => toggleLeftTab(2)} alt="" draggable="false" />
                  <div className="equipped__status">
                    <h2 className={currentArmor.rarity}>{currentArmor.rarity}</h2>
                    <h3>{currentArmor.descriptionD}</h3>
                    <h4>{currentArmor.descriptionP}</h4>
                    <h5>Nv. {currentArmor.level}</h5>
                  </div>
                </div>
                <div className="display__skin">
                  <h1>{currentWeapon.name}</h1>
                  <img src={currentWeapon.image} onClick={() => toggleLeftTab(3)} alt="" draggable="false" />
                  <div className="equipped__status">
                    <h2 className={currentWeapon.rarity}>{currentWeapon.rarity}</h2>
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
              <div className="arsenal__grid">
              {Object.keys(items)
              .filter(key => items[key].type === 'armor')
              .sort((a, b) => Number(items[b].unlocked) - Number(items[a].unlocked))
              .map((key) => {
                  const item = items[key];
                  return (
                    <div
                      key={key}
                      className={`display__skin display__skin__arsenal ${item.unlocked ? '' : 'Locked'}`}
                      onClick={() => changeArmor(key)}
                    >
                      <h1>{item.name}</h1>
                      <img src={item.image} alt={item.name} draggable="false" />
                      <div className="equipped__status">
                        <h2 className={item.rarity}>{item.rarity}</h2>
                        <h3>{item.descriptionD}</h3>
                        <h4>{item.descriptionP}</h4>
                        <h5>Nv. {item.level}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {currentLeftTab === 3 && (
            <div className="arsenalTab">
              <h6>Arsenal</h6>
              <div className="arsenal__grid">
              {Object.keys(items)
              .filter(key => items[key].type === 'sword')
              .sort((a, b) => Number(items[b].unlocked) - Number(items[a].unlocked))
              .map((key) => {
                  const item = items[key];
                  return (
                    <div
                      key={key}
                      className={`display__skin display__skin__arsenal ${item.unlocked ? '' : 'Locked'}`}
                      onClick={() => changeWeapon(key)}
                    >
                      <h1>{item.name}</h1>
                      <img src={item.image} alt={item.name} draggable="false" />
                      <div className="equipped__status">
                        <h2 className={item.rarity}>{item.rarity}</h2>
                        <h3>{item.descriptionD}</h3>
                        <h4>{item.descriptionP}</h4>
                        <h5>Nv. {item.level}</h5>
                      </div>
                    </div>
                  );
                })}
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
        {currentMiddleTab === 1 && (
        <div className="middle__container">
        <div className="world__selector__container">
        {worlds.map((world, index) => (
          <div className={`world__selector ${world.number}`} key={index} onClick={() => changeWorld(index)}>
            <h2>{world.number}</h2>
            <h1>{world.name}</h1>
          </div>
        ))}
      </div>
    </div>
    )}
    {currentMiddleTab === 2 && (
      <div className="middle__container">
      <World
        background={currentWorld.background}
        worldNumber={currentWorld.number}
        worldName={currentWorld.name}
        enemies={currentWorld.enemies}
        currentEnemy={currentEnemy}
        toggleMiddleTab={toggleMiddleTab}
        changeEnemy={changeEnemy}
        attackEnemy={attackEnemy}
        healthBarWidth={(currentEnemy.health / currentEnemy.maxHealth) * 100}
      />
      </div>
        )}
        <div className="right__container">
          <div className="display__status">
            <div className="display__status__container">
              <p>Ouro</p>
              <h2><span className="gold">{playerCoins.toFixed(1)}</span> 📀</h2>
            </div>
            <div className="display__status__container">
              <p>Gemas</p>
              <h2><span className='gem'>{playerGems}</span> 💎</h2>
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
              <div className="forgeTab">
                <h6>Melhorar Equipamento</h6>
                <div className="displayForge__container">
                  <img src={anvil} alt="" />
                  <div onClick={() => applyWeaponUpgrade('upgradeItem')} className="upgradeForge__container">
                    <h1>+1 Nv.</h1>
                    <h2>Melhorar Arma</h2>
                    <h3>{currentWeapon.baseCost} 📀</h3>
                  </div>
                  <div onClick={() => applyArmorUpgrade('upgradeItem')} className="upgradeForge__container">
                    <h1>+1 Nv.</h1>
                    <h2>Melhorar Armadura</h2>
                    <h3>{currentArmor.baseCost} 📀</h3>
                  </div>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 3 && (
            <>
              <div className="rightTab">
                <h6>Loja de Gemas</h6>  
                <ChestOpener playerGems={playerGems} setPlayerGems={setPlayerGems} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
