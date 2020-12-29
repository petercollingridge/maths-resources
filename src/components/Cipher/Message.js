import React, { useState } from 'react';


function isCodeCharacter(character) {
    return character !== ' ' && !isNaN(character);
}

function splitIntoWords(message) {
    const words = [];
    let currentWord = [];
    let isBreak = false;
    message.forEach(character => {
        const isCode = isCodeCharacter(character);
        if (isBreak && isCode) {
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = [];
                isBreak = false;
            }
        }
        isBreak = !isCode;
        currentWord.push(character);
    })

    if (currentWord.length > 0) {
        words.push(currentWord);
    }

    return words;
}

function Word({ characters, showLetters, letters }) {
    return (
        <span className="cipher-word">
            { characters.map((character, index) => {
                if (isCodeCharacter(character)) {
                    let letter = '';
                    if (showLetters) {
                        letter = letters[character - 1];
                    }
                    return (
                        <span key={index} className="cipher-character">
                            <span className="cipher-letter">
                                <span className="no-print">{ letter }</span>
                            </span>
                            <span>{ character }</span>
                        </span>
                    );
                } else {
                    return (
                        <span key={index} className="cipher-character">
                            <span>{ character }</span>
                        </span>
                    );
                }
            })}
        </span>
    );
}

function Message({ message, letters }) {
    const [showLetters, setShowLetters] = useState(false);
    const words = splitIntoWords(message);

    return (
        <section>
            <h2>Coded message</h2>
            <div className="no-print">
                <input
                    id="show-letters"
                    type="checkbox"
                    checked={showLetters}
                    onChange={() => setShowLetters(!showLetters)}
                />
                <label htmlFor="show-letters"> Show known letters</label>
            </div>
            <div className="cipher-message">
                { words.map((word, index) => (
                    <Word
                        key={index}
                        characters={word}
                        letters={letters}
                        showLetters={showLetters}
                    />
                ))}
            </div>
        </section>
    );
}

export default Message;
