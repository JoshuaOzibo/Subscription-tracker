import express from 'express';
import { PORT } from './config/env';
const app = express();

app.get('/', (req, res) => {
  res.send('welcome to subscription tracker app');
});

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});

export default app;
