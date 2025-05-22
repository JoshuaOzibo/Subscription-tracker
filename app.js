import express from 'express';
import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './DataBase/MongoDb.js';

const app = express();

app.use('/api/vi/auth', authRouter);
app.use('/api/vi/users', userRouter);
app.use('/api/vi/subsriptions', subscriptionRouter);

// app.get('/', (req, res) => {
//   res.send('welcome to subscription tracker app');
// });

app.listen(PORT, async ()=> {
  console.log(`server running on port http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
