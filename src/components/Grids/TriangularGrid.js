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

// Functions for drawing tiles of different sizes
const getTile = {
    'Rectangle': (index, x, y, width, height) =>
        <rect
            className="tile"
            key={index}
            x={x - width / 2}
            y={y - height / 2}
            width={width}
            height={height}
        />,
    'Circle': (index, x, y, width) =>
        <circle
            className="tile"
            key={index}
            cx={x}
            cy={y}
            r={width / 2}
        />,
    'Hexagon': (index, x, y, width) => {
        const deg60 = Math.PI / 3;
        const r = width * Math.sqrt(3) / 3;
        let d = "";
        for (let i = 0; i < 6; i++) {
            const px = x + r * Math.sin(i * deg60);
            const py = y + r * Math.cos(i * deg60);
            d += (i ? 'L' : 'M') + px + ' ' + py;
        }
        return <path className="tile" key={index} d={d + 'z'} />;
    }
};


const Page = () => {
    const tileShapes = Array.from(Object.keys(getTile));

    const [gridSize, setGridSize] = useState(10);
    const [tileWidth, setTileWidth] = useState(20);
    const [tileHeight, setTileHeight] = useState(20);
    const [tileShape, setTileShape] = useState(tileShapes[0]);

    const gridWidth = gridSize * tileWidth;
    const gridHeight = gridSize * tileHeight;

    const tileFunc = getTile[tileShape];
    const positions = getPositions(gridSize, gridWidth, tileWidth, tileHeight);
    const tiles = positions.map(
        ({x, y}, index) => tileFunc(index, x, y, tileWidth, tileHeight)
    );

    return <article>
        <section className="options">
            <h2>Triangular grid</h2>
            <form>
                <label>
                    Tile shape:
                    <select value={tileShape} onChange={evt => setTileShape(evt.target.value)}>
                        {
                            tileShapes.map(shape => <option key={shape}>{ shape }</option>)
                        }
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