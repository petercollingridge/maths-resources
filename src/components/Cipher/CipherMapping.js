/****************************************************************
 * Box showing the mapping/translation between letters and number
 * for the cipher. Has a button to random to randomise the mapping
 * and the option to hide letters.
*****************************************************************/

import React, { useState } from 'react';


function LetterTable({ letters, hiddenLetterState, startIndex=0 }) {
    const [hiddenLetters, setHiddenLetters] = hiddenLetterState;

    function updateHiddenLetters(letter) {
        if (hiddenLetters.has(letter)) {
            hiddenLetters.delete(letter);
        } else {
            hiddenLetters.add(letter);
        }
        setHiddenLetters(new Set(hiddenLetters));
    }

    return (
        <table className="cipher-table">
            <thead>
                <tr>
                    { letters.map((letter) => {
                        return (
                            <th key={letter} onClick={() => updateHiddenLetters(letter)}>
                                { hiddenLetters.has(letter) ? ' ' : letter }
                            </th>
                        );
                    })}
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
    const hiddenLetterState = useState(new Set());

    const n = Math.floor(letters.length / 2);
    const letters1 = letters.slice(0, n);
    const letters2 = letters.slice(n);

    return (
        <div>
            <LetterTable letters={letters1} hiddenLetterState={hiddenLetterState} />
            <LetterTable letters={letters2} hiddenLetterState={hiddenLetterState} startIndex={n} />
        </div>
    );
}

export default CipherMapping;
