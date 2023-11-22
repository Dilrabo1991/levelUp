import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const SecurityComponent = () => {
    const [userInput, setUserInput] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [hashedData, setHashedData] = useState(null);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const encryptData = () => {
        const key = CryptoJS.enc.Utf8.parse('a1b2c3d4e5f6g7h8'); // Replace with a secure key
        const encrypted = CryptoJS.AES.encrypt(userInput, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        setEncryptedData(encrypted.toString());
    };

    const hashData = () => {
        const hashed = CryptoJS.SHA256(userInput).toString();
        setHashedData(hashed);
    };

    console.log(userInput);
    console.log(encryptedData);
    console.log(hashedData);

    return (
        <div>
            <label>
                Enter your private information:
                <input type="text" value={userInput} onChange={handleInputChange} />
            </label>
            <br />
            <button onClick={encryptData}>Encrypt Data</button>
            <button onClick={hashData}>Hash Data</button>
            <br />
            {encryptedData && <p>Encrypted Data: {encryptedData}</p>}

            {hashedData && <p>Hashed Data: {hashedData}</p>}

        </div>

    );
};

export default SecurityComponent;
