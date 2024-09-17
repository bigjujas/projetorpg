import React, { useState } from 'react';
import { drawItemFromChest, world1Chest, world2Chest, world3Chest, Item } from './arsenal';

import chestImage from '/src/assets/chestImage.png'

interface ChestsProps {
    playerGems: number;
    setPlayerGems: React.Dispatch<React.SetStateAction<number>>;
}

const ChestOpener: React.FC<ChestsProps> = ({ playerGems, setPlayerGems }) => {
    const [drawnItem, setDrawnItem] = useState<Item | null>(null);

    const openWorld1Chest = () => {
        const chestCost = 15; // Custo em gemas para abrir o baú comum

        if (playerGems >= chestCost) {
            const item = drawItemFromChest(world1Chest);
            if (item) {
                setPlayerGems(playerGems - chestCost);
                setDrawnItem(item);
            }
        }
    };

    const openWorld2Chest = () => {
        const chestCost = 100; // Custo em gemas para abrir o baú comum

        if (playerGems >= chestCost) {
            const item = drawItemFromChest(world2Chest);
            if (item) {
                setPlayerGems(playerGems - chestCost);
                setDrawnItem(item);
            }
        }
    };

    const openWorld3Chest = () => {
        const chestCost = 500; // Custo em gemas para abrir o baú comum

        if (playerGems >= chestCost) {
            const item = drawItemFromChest(world3Chest);
            if (item) {
                setPlayerGems(playerGems - chestCost);
                setDrawnItem(item);
            }
        }
    };

    return (
        <div className='chests__container'>
            <div className="chest__container" onClick={openWorld1Chest}>
                <h1>Tier I</h1>
                <h2>💼</h2>
                <h3><span className='gem'>15</span> 💎</h3>
            </div>
            <div className="chest__container" onClick={openWorld2Chest}>
                <h1>Tier II</h1>
                <h2>💼</h2>
                <h3><span className='gem'>100</span> 💎</h3>
            </div>
            <div className="chest__container" onClick={openWorld3Chest}>
                <h1>Tier III</h1>
                <h2>💼</h2>
                <h3><span className='gem'>500</span> 💎</h3>
            </div>
            {drawnItem && (
                <div className='drawn__display'>
                    <img src={drawnItem.image} alt="" draggable="false" />
                    <div className="draw__text">
                        <h1>{drawnItem.name}</h1>
                        <h2 className={drawnItem.rarity}>{drawnItem.rarity}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChestOpener;
