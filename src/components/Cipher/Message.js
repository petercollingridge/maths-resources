import React from 'react';


function Message({ message }) {
    return (
        <div className="cipher-message">
            { message.map(character => {
                const className = (character === ' ' || isNaN(character)) ? null : "cipher-code";
                return (
                    <span key="index" className="cipher-character">
                        <span className={className}>{ character }</span>
                    </span>
                );
            })}
        </div>
    );
}

export default Message;
