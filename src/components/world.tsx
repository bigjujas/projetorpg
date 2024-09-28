// World.tsx
import React from 'react';
import { formatNumber } from './utilities';
import { Enemy } from './enemies';
import { div } from 'framer-motion/client';

interface WorldProps {
  background: string;
  worldNumber: string;
  worldName: string;
  enemies: Enemy[];
  currentEnemy: Enemy;
  toggleMiddleTab: (tabIndex: number) => void;
  changeEnemy: (enemyName: string) => void;
  attackEnemy: (event: React.MouseEvent<HTMLDivElement>) => void;
  healthBarWidth: number;
  enemyVisible: boolean;
  setEnemyVisible: React.Dispatch<React.SetStateAction<boolean>>;
  timeLeft: number;
}

const World: React.FC<WorldProps> = ({
  background,
  worldNumber,
  worldName,
  enemies,
  currentEnemy,
  toggleMiddleTab,
  changeEnemy,
  attackEnemy,
  healthBarWidth,
  enemyVisible,
  timeLeft,
}) => {
  return (
    <div className={`world__container ${worldNumber}`} style={{ backgroundImage: `url(${background})` }}>
      <div className="world__name" onClick={() => toggleMiddleTab(1)}>
        <h2>{worldNumber}</h2>
        <h1>{worldName}</h1>
      </div>
      <div className="enemies__container">
        {enemies.map((enemy, index) => (
          <h3 className={enemy.name === currentEnemy.name ? 'active-enemy' : ''} key={index} onClick={() => changeEnemy(enemy.name)}>
            {index + 1}
          </h3>
        ))}
      </div>
      <h4>{currentEnemy.name}</h4>
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${healthBarWidth}%` }}></div>
        <p>❤️ {formatNumber(currentEnemy.health)} / {formatNumber(currentEnemy.maxHealth)}</p>
      </div>
      {enemyVisible && (
        <div className={`enemy ${!enemyVisible ? 'hidden' : ''}`}>
      <img onClick={attackEnemy} src={currentEnemy.image} alt={currentEnemy.name} draggable="false" />
      </div>
    )}
    {currentEnemy.tier! > 0 && (
      <div className='timer'>
      {timeLeft} ⏱️
    </div>
    )}
    </div>
  );
};

export default World;
