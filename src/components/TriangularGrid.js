import React, { useState } from 'react';
import './grid.css';


const checkValidity = callback =>
    (evt) => {
        if (evt.target.validity.valid) {
            callback(evt.target.value);
        }
    }

const Page = () => {
    const [gridSize, setGridSize] = useState(10);
    const [tileWidth, setTileWidth] = useState(20);
    const [tileHeight, setTileHeight] = useState(20);

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

    return <article>
        <section class="options">
            <h2>Triangular grid</h2>
            <form>
                <label>
                    Grid size:
                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={gridSize}
                        onChange={checkValidity(setGridSize)}
                    />
                </label>
                <label>
                    Tile width:
                    <input
                        type="number"
                        min="10"
                        max="100"
                        value={tileWidth}
                        onChange={checkValidity(setTileWidth)}
                    />
                </label>
                <label>
                    Tile height:
                    <input
                        type="number"
                        min="10"
                        max="100"
                        value={tileHeight}
                        onChange={checkValidity(setTileHeight)}
                    />
                </label>
            </form>
            <button onClick={window.print}>Print</button>
        </section>

        <section className="image">
            <svg style={{maxHeight: '80vh'}} className="grid" viewBox={`-1 -1 ${gridWidth + 2} ${gridHeight + 2}`}>
                { tiles }
            </svg>
        </section>
    </article>
}

export default Page;