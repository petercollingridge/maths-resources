import React, { useState } from 'react';
import CipherMapping from './CipherMapping';
import Message from './Message';
import { shuffle } from '../../utils/utils';

import './cipherStyles.css';

const letters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const validCharacters = new Set(letters);
Array.from(' .?!,()[]:;"\'').forEach(item => validCharacters.add(item));

// Convert message to uppercase and strip out invalid characters
function cleanText(message) {
    message = message.toUpperCase();
    return Array
        .from(message)
        .filter(char => validCharacters.has(char))
        .join('');
}

function translate(plainText, code) {
    return Array
        .from(plainText)
        .map(character => {
            const index = code.indexOf(character);
            return index === -1 ? character : index + 1;
        });
}

function Page() {
    const [plainText, setPlainText] = useState('');
    const [message, setMessage] = useState([]);
    const [shuffledLetters, setShuffledLetters] = useState(shuffle(letters));

    function shuffleLetters() {
        const newLetters = shuffle(letters);
        setShuffledLetters(newLetters);
        setMessage(translate(plainText, newLetters));
    }

    function updatePlainText(evt) {
        const newText = cleanText(evt.target.value)
        setPlainText(newText);
        setMessage(translate(newText, shuffledLetters));
    }

    return (
        <>
            <h2>Code</h2>
            <div className="no-print">
                <button onClick={shuffleLetters}>New code</button>
            </div>
            <CipherMapping letters={shuffledLetters} />

            <div className="no-print">
                <h2>Message</h2>
                <p>Type your message. (It can't include any numbers)</p>
                <textarea
                    className="cipher-message-box"
                    value={plainText}
                    onChange={updatePlainText}
                    placeholder="Type your message"
                />
            </div>

            <h2>Coded message</h2>
            <Message message={message} />
        </>
    );
}

export default Page;
