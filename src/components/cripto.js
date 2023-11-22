import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import DeviceFingerprintComponent from './fingerprint';
// import SecurityComponent2 from './encript';

const SecurityComponent = () => {
    const [deviceIdentifier, setDeviceIdentifier] = useState('');
    const [encryptedData, setEncryptedData] = useState(null);
    const [hashedData, setHashedData] = useState(null);

    useEffect(() => {
        // Generate a unique device identifier based on some device characteristics
        const generateDeviceIdentifier = () => {
            const { userAgent, platform } = navigator;
            const deviceIdentifier = CryptoJS.SHA256(`${userAgent}${platform}`).toString();
            setDeviceIdentifier(deviceIdentifier);
        };

        generateDeviceIdentifier();
    }, []);
    console.log(" this is userAgent===>", navigator.userAgent);
    console.log(" this is platform ===>", navigator.platform);
    console.log(" this is navigator ===>", navigator);
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
        <div style={{ textAlign: 'center' }}>
            <p>Automatically Obtained Device Identifier: <br />
                <br />
                {deviceIdentifier}</p>
            <hr />
            <br />
            <button onClick={encryptData}>Encrypt Data</button>
            <button onClick={hashData}>Hash Data</button>
            <br />
            {encryptedData && <p>Encrypted Data:
                <br />
                <br /> {encryptedData}</p>}
            <hr />
            <br />
            {hashedData && <p>Hashed Data:
                <br />
                <br />
                <br />{hashedData}</p>}
            {/* <SecurityComponent2 /> */}
            <DeviceFingerprintComponent />

        </div>
    );
};

export default SecurityComponent;
