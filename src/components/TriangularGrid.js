import React, { useState } from 'react';
import './grid.css';


const Page = () => {
    const [gridSize, setGridSize] = useState(10);

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

    const setValidGridSize = (evt) => {
        if (evt.target.validity.valid) {
            setGridSize(evt.target.value);
        }
    }

    return <>
        <section class="options">
            <form>
                <label htmlFor="grid-size">Grid size:</label>
                <input
                    id="grid-size"
                    type="number"
                    min="1"
                    max="20"
                    value={gridSize}
                    onChange={setValidGridSize}
                >
                </input>
            </form>
        </section>
        <section>
            <svg style={{maxHeight: '80vh'}} className="grid" viewBox={`-1 -1 ${gridWidth + 2} ${gridHeight + 2}`}>
                { tiles }
            </svg>
        </section>
    </>
}

export default Page;