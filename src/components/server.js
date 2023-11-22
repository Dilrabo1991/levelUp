const express = require('express');
const app = express();
const port = 3001;

app.get('/api/deviceInfo', (req, res) => {
  try {
    // // Simulating an error for demonstration purposes
    // // Remove this line in your actual implementation
    // throw new Error('Simulated error');

    // const deviceId = 'exampleDeviceId';
    // res.json({ deviceId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
