import React, { useState, useEffect } from 'react';
import Fingerprint2 from 'fingerprintjs2';

const DeviceFingerprintComponent = () => {
    const [fingerprint, setFingerprint] = useState('');

    useEffect(() => {
        // Fingerprintni generatsiya qilish
        const generateFingerprint = async () => {
            const components = await Fingerprint2.getPromise();
            const values = components.map((component) => component.value);
            const fingerprint = Fingerprint2.x64hash128(values.join(''), 31);
            setFingerprint(fingerprint);
        };

        generateFingerprint();
    }, []);

    return (
        <div>
            <p>Device Fingerprint: {fingerprint}</p>
            {/* Qo'shimcha kodlar... */}
        </div>
    );
};

export default DeviceFingerprintComponent;
