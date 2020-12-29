/****************************************************************
 * Box showing the mapping/translation between letters and number
 * for the cipher. Has a button to random to randomise the mapping
 * and the option to hide letters.
*****************************************************************/

import React from 'react';


function LetterTable({ letters, startIndex=0 }) {
    return (
        <table className="cipher-table">
            <thead>
                <tr>
                    { letters.map((letter) => <th key={letter}>{ letter }</th>) }
                </tr>
            </thead>
            <tbody>
                <tr>
                    { letters.map((letter, index) => <td key={letter}>{ index + startIndex + 1 }</td>) }
                </tr>
            </tbody>
        </table>
    );
}

function CipherMapping({ letters }) {
    const n = Math.floor(letters.length / 2);
    const letters1 = letters.slice(0, n);
    const letters2 = letters.slice(n);

    return (
        <div>
            <LetterTable letters={letters1} />
            <LetterTable letters={letters2} startIndex={n} />
        </div>
    );
}

export default CipherMapping;
