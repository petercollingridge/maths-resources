import React, { useState } from 'react';
import './grid.css';


const checkValidity = callback =>
    (evt) => {
        if (evt.target.validity.valid) {
            callback(evt.target.value);
        }
    }

// Get an array of (x, y) coordinates for the center of tiles in a triangular grid
const getPositions = (size, width, tileWidth, tileHeight) => {
    const positions = [];

    for (let i = 0; i < size; i++) {
        const y = (i + 0.5) * tileHeight + 1;
        for (let j = 0; j <= i; j++) {
            const x = (width - i * tileWidth) / 2 + j * tileWidth + 1;
            positions.push({x, y});
        }
    }

    return positions;
}

const getRectTiles = (x, y, width, height, index) => {
    return <rect
        className="tile"
        key={index}
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
    />
}

const Page = () => {
    const [gridSize, setGridSize] = useState(10);
    const [tileWidth, setTileWidth] = useState(20);
    const [tileHeight, setTileHeight] = useState(20);

    const gridWidth = gridSize * tileWidth;
    const gridHeight = gridSize * tileHeight;

    const positions = getPositions(gridSize, gridWidth, tileWidth, tileHeight);
    const tiles = positions.map(
        ({x, y}, index) => getRectTiles(x, y, tileWidth, tileHeight, index)
    );

    return <article>
        <section className="options">
            <h2>Triangular grid</h2>
            <form>
                <label>
                    Tile shape:
                    <select>
                        <option>Square</option>
                        <option>Rectangle</option>
                        <option>Hexagon</option>
                    </select>
                </label>
                <label>
                    Grid size:
                    <input
                        type="number"
                        min="1"
                        max="32"
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
            <svg className="grid" width={gridWidth + 2} height={gridHeight + 2}>
                { tiles }
            </svg>
        </section>
    </article>
}

export default Page;