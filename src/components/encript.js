import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const SecurityComponent = () => {
    const [userInput, setUserInput] = useState('');
    const [deviceIdentifier, setDeviceIdentifier] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [hashedData, setHashedData] = useState(null);

    useEffect(() => {
        // Generate a unique device identifier based on some device characteristics
        const generateDeviceIdentifier = () => {
            const { userAgent, platform } = navigator;

            // Modify the platform value (e.g., replace spaces with underscores)
            const modifiedPlatform = platform.replace(/\s/g, '_');

            // Combine userAgent and modified platform for a unique identifier
            const uniqueIdentifier = `${userAgent}_${modifiedPlatform}`;

            const deviceIdentifier = CryptoJS.SHA256(uniqueIdentifier).toString();
            setDeviceIdentifier(deviceIdentifier);
        };

        generateDeviceIdentifier();
    }, []);

    const encryptData = () => {
        const key = CryptoJS.enc.Utf8.parse('a1b2c3d4e5f6g7h8'); // Replace with a secure key
        const encrypted = CryptoJS.AES.encrypt(deviceIdentifier, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        setEncryptedData(encrypted.toString());
    };

    const hashData = () => {
        const hashed = CryptoJS.SHA256(deviceIdentifier).toString();
        setHashedData(hashed);
    };

    return (
        <div>
            <p>Automatically Obtained Device Identifier: {deviceIdentifier}</p>
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
