import React from 'react';


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

function Word({ characters }) {
    return (
        <span className="cipher-word">
            { characters.map((character, index) => {
                const className = isCodeCharacter(character) ? "cipher-code" : null;
                return (
                    <span key={index} className="cipher-character">
                        <span className={className}>{ character }</span>
                    </span>
                );
            })}
        </span>
    );
}

function Message({ message }) {
    const words = splitIntoWords(message);
    return (
        <div className="cipher-message">
            { words.map((word, index) => <Word key={index} characters={word}/>) }
        </div>
    );
}

export default Message;
