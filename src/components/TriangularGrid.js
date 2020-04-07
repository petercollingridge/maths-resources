import React from 'react';
import './grid.css';


const Page = () => {
    const gridSize = 10;
    const tileWidth = 20;
    const tileHeight = 20;
    const gridWidth = gridSize * tileWidth;
    const gridHeight = gridSize * tileHeight;

    const tiles = [];
    for (let i = 0; i < gridSize; i++) {
        const y = i * tileHeight;
        for (let j = 0; j <= i; j++) {
            const x = (gridWidth - i * tileWidth) / 2 + (j - 0.5) * tileWidth;
            tiles.push(
                <rect
                    className="tile"
                    key={`${i}-${j}`}
                    x={x}
                    y={y}
                    width={tileWidth}
                    height={tileHeight}
                />
            );
        }
    }

    return <section className="print-section">
        <svg className="grid" viewBox={`-1 -1 ${gridWidth + 2} ${gridHeight + 2}`}>
            { tiles }
        </svg>
    </section>
}

export default Page;