import { useState, useEffect, useRef } from 'react';
import './App.css';
import './reset.css'
import { formatNumber } from './components/utilities';
import { worlds } from './components/worlds';
import World from './components/world';
import { Enemy, enemies } from './components/enemies'; // Importa o objeto de inimigos agrupados
import { Item, items, unlockItem, updateItemLevel, scaleItemAttributes } from './components/arsenal'; // Importa o objeto de armas e armaduras
import { Upgrade, upgrades } from './components/upgrades'; // Importa os upgrades
import ChestOpener from './components/ChestOpener';

import anvil from './assets/anvil.png'

export const App = () => {
  const [playerDamage, setPlayerDamage] = useState<number>(0) // Dano do Jogador
  const [playerPower, setPlayerPower] = useState<number>(0) // Poder do jogador
  const [playerLevel, setPlayerLevel] = useState<number>(0)
  const [playerXpPoint, setPlayerXpPoint] = useState<number>(0)
  const [playerCoins, setPlayerCoins] = useState<number>(0) // Moedas do jogador
  const [playerGems, setPlayerGems] = useState<number>(0) // Gemas do jogador

  const [autoAttackLevel, setAutoAttackLevel] = useState<number>(0)

  const [currentEnemy, setCurrentEnemy] = useState<Enemy>(enemies.goblin) // Inimigo inicial
  const [enemyVisible, setEnemyVisible] = useState(true)

  const [currentWeapon, setCurrentWeapon] = useState<Item>(items.starterSword) // Arma Inicial
  const [currentArmor, setCurrentArmor] = useState<Item>(items.starterArmor) // Armadura Inicial

  // coisas para ser salva ^^^^
  // funcao de save 

  const exportGameData = () => {
    // Dados que você quer salvar no arquivo JSON
    const gameData = {
      playerDamage,
      playerPower,
      playerLevel,
      playerXpPoint,
      playerCoins,
      playerGems,
      autoAttackLevel,
      currentWeapon,
      currentArmor,
      currentEnemy,
      items
    };

    // Converter os dados em string JSON
    const jsonData = JSON.stringify(gameData, null, 2);

    // Criar um arquivo de download
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "gameData.json";
    link.click();
  };

  const importGameData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return;

      const jsonData = e.target.result as string;

      // Parse o JSON para um objeto JavaScript
      const gameData = JSON.parse(jsonData);

      // Atualizar os estados do jogo com os dados importados
      setPlayerDamage(gameData.playerDamage);
      setPlayerPower(gameData.playerPower);
      setPlayerLevel(gameData.playerLevel);
      setPlayerXpPoint(gameData.playerXpPoint);
      setPlayerCoins(gameData.playerCoins);
      setPlayerGems(gameData.playerGems);
      setAutoAttackLevel(gameData.autoAttackLevel);
      setCurrentWeapon(gameData.currentWeapon);
      setCurrentArmor(gameData.currentArmor);
      setCurrentEnemy(gameData.currentEnemy);

      // Atualizar o objeto `items`
      Object.keys(gameData.items).forEach(itemId => {
        items[itemId] = gameData.items[itemId];
      });
    };

    reader.readAsText(file);
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
  };

  // save ^^^

  const [isAutoAttackActive, setIsAutoAttackActive] = useState(false)

  // mundo
  const [currentWorldIndex, setCurrentWorldIndex] = useState(0)
  const currentWorld = worlds[currentWorldIndex]

  const changeWorld = (index: number) => {
    setCurrentWorldIndex(index);
    setCurrentEnemy(worlds[index].enemies[0]); // Atualiza para o primeiro inimigo do novo mundo
    setCurrentMiddleTab(2)
  };


  // dano e poder

  const finalDamage = ((playerDamage + currentWeapon.damage) * currentArmor.damage)
  const finalPower = ((currentWeapon.power) * currentArmor.power)

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

  const powerNeeded = Math.floor(10 * Math.pow(1.10, playerLevel));
  const levelUp = () => {
    if (playerPower >= powerNeeded && playerLevel < 350) {
      setPlayerPower(playerPower - powerNeeded)
      setPlayerLevel(playerLevel + 1)
      setPlayerXpPoint(playerXpPoint + 1)
    }
  }

  const applyUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);

    if (upgrade && upgrade.level < 100 && playerXpPoint >= upgrade.cost) {
      const { newDamage } = upgrade.applyUpgrade(playerDamage);
      setPlayerDamage(newDamage);
      setPlayerXpPoint(playerXpPoint - upgrade.cost);
      upgrade.level += 1;
    }
  };

  // upgrade em items

  const applyArmorUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && currentArmor.level < 100 && upgrade.costType === 'coins' && playerCoins >= currentArmor.baseCost) {
      setPlayerCoins(playerCoins - currentArmor.baseCost);
      currentArmor.level += 1;
      scaleItemAttributes(currentArmor); // Aplica o escalonamento dos atributos
    }
  };

  const applyWeaponUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && currentWeapon.level < 100 && upgrade.costType === 'coins' && playerCoins >= currentWeapon.baseCost) {
      setPlayerCoins(playerCoins - currentWeapon.baseCost);
      currentWeapon.level += 1;
      scaleItemAttributes(currentWeapon); // Aplica o escalonamento dos atributos
    }
  };

  const upgradeItem = upgrades.find(upg => upg.id === 'upgradeItem');
  const upgrade1 = upgrades.find(upg => upg.id === 'upgrade1');
  const upgrade2 = upgrades.find(upg => upg.id === 'upgrade2');
  const upgrade3 = upgrades.find(upg => upg.id === 'upgrade3');

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

  useEffect(() => {
    let autoAttackInterval: ReturnType<typeof setInterval>;
    if (isAutoAttackActive) {
      autoAttackInterval = setInterval(() => {
        autoAttackEnemy();
      }, 1000); // Ataca a cada segundo
    }
    return () => clearInterval(autoAttackInterval);
  }, [isAutoAttackActive, autoAttackLevel]);

  const attackEnemy = () => {
    const currentTime = Date.now();

    if (currentTime - lastClickTime < timeWindow / clickLimit) {
      // Clique ignorado por exceder o limite
      return;
    }

    setLastClickTime(currentTime);
    setClickCount(prevCount => prevCount + 1);

    setCurrentEnemy(prevEnemy => {
      const newHealth = prevEnemy.health - finalDamage;
      if (newHealth <= 0) {
        // Inimigo derrotado, ganha moedas e poder
        setPlayerCoins(playerCoins + prevEnemy.coinsDropped);
        setPlayerGems(playerGems + prevEnemy.gemsDropped);

        // Inimigo derrotado, some por 0,5 segundos
        setEnemyVisible(false);
        setTimeout(() => {
          setEnemyVisible(true);
          // Respawn do inimigo com vida cheia
          setCurrentEnemy({
            ...prevEnemy,
            health: prevEnemy.maxHealth, // Inimigo volta com vida cheia
          });
        }, 350);
        return { ...prevEnemy, health: 0 };
      } else {
        return { ...prevEnemy, health: newHealth };
      }
    });

    setPlayerPower(prevPower => prevPower + finalPower);
  };

  const autoAttackEnemy = () => {
    setCurrentEnemy(prevEnemy => {
      const newHealth = prevEnemy.health - (finalDamage * autoAttackDamage);
      if (newHealth <= 0) {
        // Inimigo derrotado, ganha moedas e poder
        setPlayerCoins(playerCoins + prevEnemy.coinsDropped);
        setPlayerGems(playerGems + prevEnemy.gemsDropped);

        // Inimigo derrotado, some por 0,5 segundos
        setEnemyVisible(false);
        setTimeout(() => {
          setEnemyVisible(true);
          // Respawn do inimigo com vida cheia
          setCurrentEnemy({
            ...prevEnemy,
            health: prevEnemy.maxHealth, // Inimigo volta com vida cheia
          });
        }, 350);
        return { ...prevEnemy, health: 0 };
      } else {
        return { ...prevEnemy, health: newHealth };
      }
    });

    setPlayerPower(prevPower => prevPower + (finalPower * autoAttackDamage));
  };

  // Level do Auto Attack

  const autoAttackDamage = autoAttackLevel * 0.10

  const autoAttackLevelUp = () => {
    if (playerXpPoint >= 1 && autoAttackLevel < 50) {
      setAutoAttackLevel(autoAttackLevel + 1)
      setPlayerXpPoint(playerXpPoint - 1)
    }
  }

  // qol

  const changeEnemy = (enemyName: string) => {
    const enemy = worlds.flatMap(world => world.enemies).find(e => e.name === enemyName);
    if (enemy) {
      setCurrentEnemy(enemy);
    }
  };

  const changeWeapon = (itemKey: string) => {
    const selectedItem = items[itemKey];

    if (selectedItem) {
      if (selectedItem.unlocked) {
        setCurrentWeapon(selectedItem);
        setCurrentLeftTab(1);
      } else {
        console.error('O item não está desbloqueado.');
      }
    } else {
      console.error(`O item com a chave ${itemKey} não foi encontrado.`);
    }
  };

  const changeArmor = (itemKey: string) => {
    const selectedItem = items[itemKey];

    if (selectedItem) {
      if (selectedItem.unlocked) {
        setCurrentArmor(selectedItem);
        setCurrentLeftTab(1);
      } else {
        console.error('O item não está desbloqueado.');
      }
    } else {
      console.error(`O item com a chave ${itemKey} não foi encontrado.`);
    }
  };

  const healthBarWidth = (currentEnemy.health / currentEnemy.maxHealth) * 100; // Barra de Vida

  return (
    <>
      <header className='header'>
        <h1>Projeto RPG ⚔️ Alpha 1</h1>
        <div className="save__container">
          <h2 onClick={handleClick}> Importar Save
            <input
              id="fileInput"
              type="file"
              accept=".json"
              onChange={importGameData}
              style={{ display: 'none' }} // Esconde o input de arquivo
            />
          </h2>
          <h3 onClick={exportGameData}>Carregar Save</h3>
          </div>
      </header>
      <div className="game__container">
        <div className="left__container">
          <div className="display__status">
            <div className="display__status__container">
              <p>Dano</p>
              <h2>{formatNumber(finalDamage)} 🗡️</h2>
            </div>
            <div className="display__status__container">
              <p>Poder</p>
              <h2><span className='power'>{formatNumber(playerPower)}</span> 🔥</h2>
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
                    <div className="item__status">
                    <h3>{currentArmor.descriptionD}</h3>
                    <h4>{currentArmor.descriptionP}</h4>
                    </div>
                    <h5>Nv. {currentArmor.level}</h5>
                  </div>
                </div>
                <div className="display__skin">
                  <h1>{currentWeapon.name}</h1>
                  <img src={currentWeapon.image} onClick={() => toggleLeftTab(3)} alt="" draggable="false" />
                  <div className="equipped__status">
                    <h2 className={currentWeapon.rarity}>{currentWeapon.rarity}</h2>
                    <div className="item__status">
                    <h3>{currentWeapon.descriptionD}</h3>
                    <h4>{currentWeapon.descriptionP}</h4>
                    </div>
                    <h5>Nv. {currentWeapon.level}</h5>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentLeftTab === 2 && (
            <div className="arsenalTab">
              <h6>Arsenal</h6>
              {Object.entries(
                Object.keys(items)
                  .filter((key) => items[key].type === "armor")
                  .sort((a, b) => Number(items[b].unlocked) - Number(items[a].unlocked))
                  .reduce<Record<string, { key: string; item: Item }[]>>((acc, key) => {
                    const item = items[key];
                    const source = item.source;
                    if (!acc[source]) {
                      acc[source] = [];
                    }
                    acc[source].push({ key, item });
                    return acc;
                  }, {})
              ).map(([source, itemsInSource]) => (
                <div key={source} className="source__category">
                  <p>{source}</p>
                  <div className="items__grid">
                    {itemsInSource.map(({ key, item }) => (
                      <div
                        key={key}
                        className={`display__skin display__skin__arsenal ${item.unlocked ? "" : "Locked"}`}
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentLeftTab === 3 && (
            <div className="arsenalTab">
              <h6>Arsenal</h6>
              {Object.entries(
                Object.keys(items)
                  .filter((key) => items[key].type === "sword")
                  .sort((a, b) => Number(items[b].unlocked) - Number(items[a].unlocked))
                  .reduce<Record<string, { key: string; item: Item }[]>>((acc, key) => {
                    const item = items[key];
                    const source = item.source;
                    if (!acc[source]) {
                      acc[source] = [];
                    }
                    acc[source].push({ key, item });
                    return acc;
                  }, {})
              ).map(([source, itemsInSource]) => (
                <div key={source} className="source__category">
                  <p>{source}</p>
                  <div className="items__grid">
                    {itemsInSource.map(({ key, item }) => (
                      <div
                        key={key}
                        className={`display__skin display__skin__arsenal ${item.unlocked ? "" : "Locked"}`}
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
                    ))}
                  </div>
                </div>
              ))}
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
              enemyVisible={enemyVisible}
              setEnemyVisible={setEnemyVisible}
            />
          </div>
        )}
        <div className="right__container">
          <div className="display__status">
            <div className="display__status__container">
              <p>Ouro</p>
              <h2><span className="gold">{formatNumber(playerCoins)}</span> 💰</h2>
            </div>
            <div className="display__status__container">
              <p>Gemas</p>
              <h2><span className='gem'>{formatNumber(playerGems)}</span> 💎</h2>
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
                <div className="upgradeTab">
                  <h6>Nivel: {playerLevel}</h6>
                  <div onClick={levelUp} className="upgrade__container">
                    <h1 className='Raro'>+1 💠</h1>
                    <h2 className='Épico'>Level Up</h2>
                    <h3 className='power'>{formatNumber(powerNeeded)} 🔥</h3>
                  </div>
                  <h6>Pontos: {playerXpPoint} 💠</h6>
                  {upgrade1 && (
                    <div onClick={() => applyUpgrade('upgrade1')} className="upgrade__container">
                      <h1>{upgrade1.description}</h1>
                      <h2>{upgrade1.name}</h2>
                      <h4>Nv. {upgrade1.level}</h4>
                      <h3>{upgrade1.level === 100 ? "Max" : upgrade1.cost} 💠</h3>
                    </div>
                  )}
                  {upgrade1 && upgrade1.level >= 15 && upgrade2 && (
                    <div onClick={() => applyUpgrade('upgrade2')} className="upgrade__container">
                      <h1>{upgrade2.description}</h1>
                      <h2>{upgrade2.name}</h2>
                      <h4>Nv. {upgrade2.level}</h4>
                      <h3>{upgrade2.level === 100 ? "Max" : upgrade2.cost} 💠</h3>
                    </div>
                  )}
                  {upgrade2 && upgrade2.level >= 15 && upgrade3 && (
                    <div onClick={() => applyUpgrade('upgrade3')} className="upgrade__container">
                      <h1>{upgrade3.description}</h1>
                      <h2>{upgrade3.name}</h2>
                      <h4>Nv. {upgrade3.level}</h4>
                      <h3>{upgrade3.level === 100 ? "Max" : upgrade3.cost} 💠</h3>
                    </div>
                  )}
                </div>
                <div className="autoattack__container">
                  <h6>Auto Ataque ⚔️</h6>
                  <div className="autoattack__upgrade" onClick={autoAttackLevelUp}>
                    <h1>{(autoAttackDamage * 100).toFixed(0)}%</h1>
                    <h2>Nv. {autoAttackLevel}</h2>
                    <h3>{autoAttackLevel === 50 ? "Max" : "1"}💠</h3>
                  </div>
                  <div className={`autoattack__button ${autoAttackLevel > 0 ? '' : 'Locked'}`}>
                    <h2 className={isAutoAttackActive ? 'Ativado' : 'Desativado'} onClick={() => setIsAutoAttackActive(!isAutoAttackActive)}>{isAutoAttackActive ? 'Ativado' : 'Desativado'}</h2>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentRightTab === 2 && (
            <>
              <div className="forgeTab">
                <h6>Melhorar Equipamento</h6>
                <div className="displayForge__container">
                  <img src={anvil} alt="" className='anvil' />
                  <div onClick={() => applyWeaponUpgrade('upgradeItem')} className="upgradeForge__container">
                    <h1>+1 Nv.</h1>
                    <h2>Melhorar Arma</h2>
                    <h3>{currentWeapon.level === 100 ? "Max" : formatNumber(currentWeapon.baseCost)} 💰</h3>
                  </div>
                  <div onClick={() => applyArmorUpgrade('upgradeItem')} className="upgradeForge__container">
                    <h1>+1 Nv.</h1>
                    <h2>Melhorar Armadura</h2>
                    <h3>{currentArmor.level === 100 ? "Max" : formatNumber(currentArmor.baseCost)} 💰</h3>
                  </div>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 3 && (
            <>
              <div className="chestTab">
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
