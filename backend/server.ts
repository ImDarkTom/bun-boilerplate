import express from 'express';

const app = express();
const PORT = 4003;

app.get('/status', (req, res) => {
    res.json({ message: 'API is running.' });
});

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});
