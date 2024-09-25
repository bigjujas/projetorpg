import { useState, useEffect, useRef } from 'react';
import './App.css';
import './reset.css'
import { formatNumber } from './components/utilities';
import { worlds } from './components/worlds';
import World from './components/world';
import { Enemy, enemies, towerEnemyImages } from './components/enemies'; // Importa o objeto de inimigos agrupados
import { Item, items, unlockItem, updateItemLevel, scaleItemAttributes } from './components/arsenal'; // Importa o objeto de armas e armaduras
import { items as initialItems } from './components/arsenal';
import { Upgrade, upgrades } from './components/upgrades'; // Importa os upgrades
import ChestOpener from './components/ChestOpener';

import anvil from './assets/anvil.png'
import { time } from 'console';

export const App = () => {
  const [playerDamage, setPlayerDamage] = useState<number>(100000000) // Dano do Jogador
  const [playerPowerGain, setPlayerPowerGain] = useState<number>(0) // Poder do jogador
  const [playerPower, setPlayerPower] = useState<number>(0) // Poder do jogador
  const [playerLevel, setPlayerLevel] = useState<number>(0)
  const [playerCoins, setPlayerCoins] = useState<number>(0) // Moedas do jogador
  const [playerGems, setPlayerGems] = useState<number>(0) // Gemas do jogador
  const [playerPrisms, setPlayerPrisms] = useState<number>(0) // Prismas do jogador

  const [items, setItems] = useState<Record<string, Item>>(initialItems); // Pro Save Funcionar

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
      playerCoins,
      playerGems,
      playerPrisms,
      autoAttackLevel,
      currentWeapon,
      currentArmor,
      currentEnemy,
      items,
      upgrades
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
      setPlayerCoins(gameData.playerCoins);
      setPlayerGems(gameData.playerGems);
      setPlayerPrisms(gameData.playerPrisms);
      setAutoAttackLevel(gameData.autoAttackLevel);
      setCurrentWeapon(gameData.currentWeapon);
      setCurrentArmor(gameData.currentArmor);
      setCurrentEnemy(gameData.currentEnemy);

      setItems((prevItems) => {
        // Crie uma cópia do estado atual dos itens
        const updatedItems = { ...prevItems };
      
        // Atualize somente os itens desbloqueados
        Object.keys(gameData.items).forEach(itemId => {
          const newItem = gameData.items[itemId];
          if (newItem.unlocked) {
            updatedItems[itemId] = {
              ...prevItems[itemId], // Mantém as propriedades originais
              level: newItem.level,
              damage: newItem.damage,
              baseCost: newItem.baseCost,
              power: newItem.power,
              unlocked: newItem.unlocked
            }; // Atualiza apenas as propriedades necessárias
          }
          // Itens bloqueados não são atualizados
        });
      
        return updatedItems;
      });

      gameData.upgrades.forEach((importedUpgrade: any) => {
        const existingUpgrade = upgrades.find(upg => upg.id === importedUpgrade.id);
        if (existingUpgrade) {
          // Atualizar apenas os dados relevantes do upgrade
          existingUpgrade.level = importedUpgrade.level;
          existingUpgrade.cost = importedUpgrade.cost;
        }
      });
    };

    reader.readAsText(file);
  };

  const handleClick = () => {
    document.getElementById('fileInput')?.click();
  };

  // save ^^^

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
  const finalPower = ((playerPowerGain + currentWeapon.power) * currentArmor.power)

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


  // Função Level Up

  const getUpgradeCost = (cost: number, level: number) => {
    return Math.floor(cost * Math.pow(1.10, level));
  };

  // Função Upgrade

  const applyUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);

    if (upgrade && upgrade.level < 100) {
      const upgradeCost = getUpgradeCost(upgrade.cost, upgrade.level);

      if (playerPower >= upgradeCost) {
        setPlayerDamage(playerDamage + upgrade.boost);
        setPlayerLevel(playerLevel + 1);
        setPlayerPower(playerPower - upgradeCost);
        upgrade.level += 1;
      }
    }
  };

  const applyPowerUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);

    if (upgrade && upgrade.level < 100) {
      const upgradeCost = getUpgradeCost(upgrade.cost, upgrade.level);

      if (playerPower >= upgradeCost) {
        setPlayerPowerGain(playerPowerGain + upgrade.boost);
        setPlayerLevel(playerLevel + 1);
        setPlayerPower(playerPower - upgradeCost);
        upgrade.level += 1;
      }
    }
  };

  // upgrade em items

  const applyArmorUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && currentArmor.level < 100 && playerCoins >= currentArmor.baseCost) {
      setPlayerCoins(playerCoins - currentArmor.baseCost);
      currentArmor.level += 1;
      scaleItemAttributes(currentArmor); // Aplica o escalonamento dos atributos
    }
  };

  const applyWeaponUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(upg => upg.id === upgradeId);
    if (upgrade && currentWeapon.level < 100 && playerCoins >= currentWeapon.baseCost) {
      setPlayerCoins(playerCoins - currentWeapon.baseCost);
      currentWeapon.level += 1;
      scaleItemAttributes(currentWeapon); // Aplica o escalonamento dos atributos
    }
  };

  // Upgrades Finds

  const upgradeItem = upgrades.find(upg => upg.id === 'upgradeItem');
  const upgrade1 = upgrades.find(upg => upg.id === 'upgrade1');
  const upgrade2 = upgrades.find(upg => upg.id === 'upgrade2');
  const upgrade3 = upgrades.find(upg => upg.id === 'upgrade3');
  const upgrade4 = upgrades.find(upg => upg.id === 'upgrade4');
  const upgrade5 = upgrades.find(upg => upg.id === 'upgrade5');
  const upgrade6 = upgrades.find(upg => upg.id === 'upgrade6');
  const upgrade7 = upgrades.find(upg => upg.id === 'upgrade7');
  const upgrade8 = upgrades.find(upg => upg.id === 'upgrade8');


  // Função chamada ao atacar o inimigo

  const [isAutoAttackActive, setIsAutoAttackActive] = useState(false)

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
      // Verifica se o inimigo já foi derrotado
      if (prevEnemy.health <= 0) {
        return prevEnemy; // Não processa mais nada se o inimigo já está morto
      }
  
      const newHealth = prevEnemy.health - finalDamage;
      if (newHealth <= 0) {
        // Atualizando moedas e gemas corretamente
        setPlayerCoins(prevCoins => prevCoins + prevEnemy.coinsDropped);
        setPlayerGems(prevGems => prevGems + prevEnemy.gemsDropped);
  
        // Inimigo derrotado, some por 0,5 segundos
        setEnemyVisible(false);
        setTimeout(() => {
          setEnemyVisible(true);
  
          const upgradedEnemy = {
            ...prevEnemy,
            health: prevEnemy.maxHealth, // Inimigo volta com vida cheia
          };
  
          // Se o inimigo tiver a propriedade 'tier', aumente-a
          if (upgradedEnemy.tier !== undefined) {
            setPlayerPrisms(prevPrisms => prevPrisms + prevEnemy.prismsDropped!)
            upgradedEnemy.tier += 1; // Aumenta o tier
            upgradedEnemy.health = Math.round(upgradedEnemy.health * 1.2); // Aumenta a saúde em 20%
            upgradedEnemy.maxHealth = Math.round(upgradedEnemy.maxHealth * 1.2); // Aumenta o maxHealth em 20%
            upgradedEnemy.prismsDropped = (upgradedEnemy.prismsDropped! * 1.4); // Aumenta o maxHealth em 20%
            upgradedEnemy.name = `Tier ${upgradedEnemy.tier}`;
            upgradedEnemy.image = towerEnemyImages[Math.floor(Math.random() * towerEnemyImages.length)],
            setTimeLeft(30); 
          }
  
          // Respawn do inimigo com vida cheia e tier atualizado
          setCurrentEnemy(upgradedEnemy);
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
      // Verifica se o inimigo já foi derrotado
      if (prevEnemy.health <= 0) {
        return prevEnemy; // Não processa mais nada se o inimigo já está morto
      }
  
      const newHealth = prevEnemy.health - finalDamage * autoAttackDamage;
      if (newHealth <= 0) {
        // Atualizando moedas e gemas corretamente
        setPlayerCoins(prevCoins => prevCoins + prevEnemy.coinsDropped);
        setPlayerGems(prevGems => prevGems + prevEnemy.gemsDropped);
  
        // Inimigo derrotado, some por 0,5 segundos
        setEnemyVisible(false);
        setTimeout(() => {
          setEnemyVisible(true);
  
          const upgradedEnemy = {
            ...prevEnemy,
            health: prevEnemy.maxHealth, // Inimigo volta com vida cheia
          };
  
          // Se o inimigo tiver a propriedade 'tier', aumente-a
          if (upgradedEnemy.tier !== undefined) {
            setPlayerPrisms(prevPrisms => prevPrisms + prevEnemy.prismsDropped!)
            upgradedEnemy.tier += 1; // Aumenta o tier
            upgradedEnemy.health = Math.round(upgradedEnemy.health * 1.2); // Aumenta a saúde em 20%
            upgradedEnemy.maxHealth = Math.round(upgradedEnemy.maxHealth * 1.2); // Aumenta o maxHealth em 20%
            upgradedEnemy.prismsDropped = (upgradedEnemy.prismsDropped! * 1.4); // Aumenta o maxHealth em 20%
            upgradedEnemy.name = `Tier ${upgradedEnemy.tier}`;
            setTimeLeft(30); 
          }
  
          // Respawn do inimigo com vida cheia e tier atualizado
          setCurrentEnemy(upgradedEnemy);
        }, 350);
        return { ...prevEnemy, health: 0 };
      } else {
        return { ...prevEnemy, health: newHealth };
      }
    });
  
    setPlayerPower(prevPower => prevPower + finalPower * autoAttackDamage);
  };

  // Temporizador de Dungeon

  const [timeLeft, setTimeLeft] = useState(30); // Inicializa o timer apenas se tier existir

  // Efeito para o countdown do timer, somente se o inimigo tiver tier
  useEffect(() => {
    if (currentEnemy.tier && timeLeft > 0) { 
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Conta para baixo a cada segundo

      return () => clearInterval(timerInterval); // Limpa o timer quando o componente desmontar
    } else if (currentEnemy.tier && timeLeft === 0) {
      // Se o tempo acabar e o inimigo tiver tier, reseta
      resetEnemy();
    }
  }, [timeLeft, currentEnemy.tier]);

  // Função que reseta o inimigo para o tier 1 e restaura a vida
  const resetEnemy = () => {
    setCurrentEnemy((prev) => ({
      ...prev,
      health: 1000_000,
      maxHealth: 1_000_000,
      tier: 1, // Reseta para o tier 1
      prismsDropped: 1,
      name: "Tier 1"
    }));
    setTimeLeft(30); // Reseta o tempo visual
  };
  
  // Level do Auto Attack

  const autoAttackDamage = autoAttackLevel * 0.10
  const powerNeeded = Math.floor(10 * Math.pow(1.20, autoAttackLevel));

  const autoAttackLevelUp = () => {
    if (playerPower >= powerNeeded && autoAttackLevel < 50) {
      setAutoAttackLevel(autoAttackLevel + 1)
      setPlayerPower(playerPower - powerNeeded)
      setPlayerLevel(playerLevel + 1)
    }
  }

  // utilities

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
          <h3 onClick={exportGameData}>Exportar Save</h3>
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
              <p>Poder por Ataque: {formatNumber(finalPower)}</p>
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
                  <h1 className={currentArmor.rarity}>{currentArmor.name}</h1>
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
                  <h1 className={currentWeapon.rarity}>{currentWeapon.name}</h1>
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
                        <h1 className={item.rarity}>{item.name}</h1>
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
                        <h1 className={item.rarity}>{item.name}</h1>
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
              timeLeft={timeLeft}
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
            {playerPrisms > 0 && (
            <div className="display__status__container">
              <p>Prismas</p>
              <h2><span className='prism'>{formatNumber(playerPrisms)}</span> 🟣</h2>
            </div>
            )}
          </div>
          <div className="display__tabs">
            <p className={currentRightTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(1)}>Skills 🎯</p>
            <p className={currentRightTab === 2 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(2)}>Forja ⚒️</p>
            <p className={currentRightTab === 3 ? "tab_active" : "tab_inactive"} onClick={() => toggleRightTab(3)}>Mercado 📦</p>
          </div>
          {currentRightTab === 1 && (
            <>
              <div className="rightTab">
                  <p><span>Nivel:</span> {playerLevel}</p>
                <div className="upgradeTab">
                  <h6>Upgrades de Dano</h6>
                  {upgrade1 && (
                    <div onClick={() => applyUpgrade('upgrade1')} className="upgrade__container">
                      <h1>{upgrade1.description}</h1>
                      <h2>{upgrade1.name}</h2>
                      <h4>Nv. {upgrade1.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade1.cost, upgrade1.level) ? 'buyable' : 'expensive'}`}>{upgrade1.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade1.cost, upgrade1.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade1 && upgrade1.level >= 15 && upgrade3 && (
                    <div onClick={() => applyUpgrade('upgrade3')} className="upgrade__container">
                      <h1>{upgrade3.description}</h1>
                      <h2>{upgrade3.name}</h2>
                      <h4>Nv. {upgrade3.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade3.cost, upgrade3.level) ? 'buyable' : 'expensive'}`}>{upgrade3.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade3.cost, upgrade3.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade3 && upgrade3.level >= 15 && upgrade5 && (
                    <div onClick={() => applyUpgrade('upgrade5')} className="upgrade__container">
                      <h1>{upgrade5.description}</h1>
                      <h2>{upgrade5.name}</h2>
                      <h4>Nv. {upgrade5.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade5.cost, upgrade5.level) ? 'buyable' : 'expensive'}`}>{upgrade5.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade5.cost, upgrade5.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade5 && upgrade5.level >= 15 && upgrade7 && (
                    <div onClick={() => applyUpgrade('upgrade7')} className="upgrade__container">
                      <h1>{upgrade7.description}</h1>
                      <h2>{upgrade7.name}</h2>
                      <h4>Nv. {upgrade7.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade7.cost, upgrade7.level) ? 'buyable' : 'expensive'}`}>{upgrade7.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade7.cost, upgrade7.level))} 🔥</h3>
                    </div>
                  )}
                  </div>
                  {/* upgrades de poder abaixo */}
                  <div className="upgradeTab">
                  <h6>Upgrades de Poder</h6>
                  {upgrade2 && (
                    <div onClick={() => applyPowerUpgrade('upgrade2')} className="upgrade__container powerUpgrade">
                      <h1>{upgrade2.description}</h1>
                      <h2>{upgrade2.name}</h2>
                      <h4>Nv. {upgrade2.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade2.cost, upgrade2.level) ? 'buyable' : 'expensive'}`}>{upgrade2.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade2.cost, upgrade2.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade2 && upgrade2.level >= 15 && upgrade4 && (
                    <div onClick={() => applyPowerUpgrade('upgrade4')} className="upgrade__container powerUpgrade">
                      <h1>{upgrade4.description}</h1>
                      <h2>{upgrade4.name}</h2>
                      <h4>Nv. {upgrade4.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade4.cost, upgrade4.level) ? 'buyable' : 'expensive'}`}>{upgrade4.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade4.cost, upgrade4.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade4 && upgrade4.level >= 15 && upgrade6 && (
                    <div onClick={() => applyPowerUpgrade('upgrade6')} className="upgrade__container powerUpgrade">
                      <h1>{upgrade6.description}</h1>
                      <h2>{upgrade6.name}</h2>
                      <h4>Nv. {upgrade6.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade6.cost, upgrade6.level) ? 'buyable' : 'expensive'}`}>{upgrade6.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade6.cost, upgrade6.level))} 🔥</h3>
                    </div>
                  )}
                  {upgrade6 && upgrade6.level >= 15 && upgrade8 && (
                    <div onClick={() => applyPowerUpgrade('upgrade8')} className="upgrade__container powerUpgrade">
                      <h1>{upgrade8.description}</h1>
                      <h2>{upgrade8.name}</h2>
                      <h4>Nv. {upgrade8.level}</h4>
                      <h3 className={`${playerPower >= getUpgradeCost(upgrade8.cost, upgrade8.level) ? 'buyable' : 'expensive'}`}>{upgrade8.level === 100 ? "Max" : formatNumber(getUpgradeCost(upgrade8.cost, upgrade8.level))} 🔥</h3>
                    </div>
                  )}
                </div>
                <div className="autoattack__container">
                  <h6>Auto Ataque ⚔️</h6>
                  <div className="autoattack__upgrade" onClick={autoAttackLevelUp}>
                    <h1>{(autoAttackDamage * 100).toFixed(0)}%</h1>
                    <h2>Nv. {autoAttackLevel}</h2>
                    <h3 className={`${playerPower >= powerNeeded ? 'buyable' : 'expensive'}`}>{autoAttackLevel === 50 ? "Max" : formatNumber(powerNeeded)} 🔥</h3>
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
                    <h3 className={`${playerCoins >= currentWeapon.baseCost ? 'buyable' : 'expensive'}`}>{currentWeapon.level === 100 ? "Max" : formatNumber(currentWeapon.baseCost)} 💰</h3>
                  </div>
                  <div onClick={() => applyArmorUpgrade('upgradeItem')} className="upgradeForge__container">
                    <h1>+1 Nv.</h1>
                    <h2>Melhorar Armadura</h2>
                    <h3 className={`${playerCoins >= currentArmor.baseCost ? 'buyable' : 'expensive'}`}>{currentArmor.level === 100 ? "Max" : formatNumber(currentArmor.baseCost)} 💰</h3>
                  </div>
                </div>
              </div>
            </>
          )}
          {currentRightTab === 3 && (
            <>
              <div className="chestTab">
                <h6>Loja de Gemas</h6>
                <ChestOpener playerGems={playerGems} setPlayerGems={setPlayerGems} playerPrisms={playerPrisms} setPlayerPrisms={setPlayerPrisms} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
