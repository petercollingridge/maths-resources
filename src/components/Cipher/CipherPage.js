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

function PlainText({ textHidden, setTextHidden, plainText, updatePlainText }) {
    if (textHidden) {
        return (
            <button onClick={() => (setTextHidden(false))}>
                Show message
            </button>
        );
    } else {
        return (
            <>
                <h2>Message</h2>
                <p>
                    Type your message. (It can't include any numbers.)
                    <button onClick={() => setTextHidden(!textHidden)}>Hide</button>
                </p>
                <textarea
                    className="cipher-message-box"
                    value={plainText}
                    onChange={updatePlainText}
                    placeholder="Type your message"
                />
            </>
        );
    }
}

function Page() {
    const [plainText, setPlainText] = useState('');
    const [textHidden, setTextHidden] = useState(false);
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
            <section className="no-print">
                <h2>Introduction</h2>
                <p>
                    Type a message in the box below and it will be encoded into numbers
                    using the code shown. Then hide the message and see if your friend
                    can decode it. To make things harder you can click on letters in the
                    code table to hide them.
                </p>

                <PlainText
                    textHidden={textHidden}
                    setTextHidden={setTextHidden}
                    plainText={plainText}
                    updatePlainText={updatePlainText}
                />
            </section>

            <section>
                <h2>Code</h2>
                <div className="no-print">
                    <button onClick={shuffleLetters}>New code</button>
                </div>
                <CipherMapping letters={shuffledLetters} plainText={plainText} />
            </section>

            <Message message={message} letters={shuffledLetters} />
        </>
    );
}

export default Page;
