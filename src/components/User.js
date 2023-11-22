import React, { useState, useEffect } from 'react';

const DeviceInfo = () => {
  const [deviceId, setDeviceId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const response = await fetch('/api/deviceInfo');
        const text = await response.text();
        console.log('Full Response:', text);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setDeviceId(data.deviceId);
      } catch (error) {
        console.error('Error fetching device information:', error.message);
        setError('Error fetching device information');
      }
    };

    fetchDeviceInfo();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>Device ID: {deviceId}</p>
      )}
    </div>
  );
};

export default DeviceInfo;
