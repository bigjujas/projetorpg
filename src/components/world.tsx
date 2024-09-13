// World.tsx
import React from 'react';
import { Enemy } from './enemies';

interface WorldProps {
  background: string;
  worldNumber: string;
  worldName: string;
  enemies: Enemy[];
  currentEnemy: Enemy;
  toggleMiddleTab: (tabIndex: number) => void;
  changeEnemy: (enemyName: string) => void;
  attackEnemy: () => void;
  healthBarWidth: number;
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
}) => {
  return (
    <div className={`world__container ${worldNumber}`} style={{ backgroundImage: `url(${background})` }}>
      <div className="world__name" onClick={() => toggleMiddleTab(1)}>
        <h2>{worldNumber}</h2>
        <h1>{worldName}</h1>
      </div>
      <div className="enemies__container">
        {enemies.map((enemy, index) => (
          <h3 key={index} onClick={() => changeEnemy(enemy.name)}>
            {index + 1}
          </h3>
        ))}
      </div>
      <h4>{currentEnemy.name}</h4>
      <div className="health-bar-container">
        <div className="health-bar" style={{ width: `${healthBarWidth}%` }}></div>
        <p>❤️ {currentEnemy.health.toFixed(0)} / {currentEnemy.maxHealth}</p>
      </div>
      <img className="enemy" onClick={attackEnemy} src={currentEnemy.image} alt={currentEnemy.name} draggable="false" />
    </div>
  );
};

export default World;
