import express from 'express';
import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

import connectToDatabase from './DataBase/MongoDb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

//express default error handler
app.use(express.json()); // this allow the app to allow json data send-in request or api calls
app.use(express.urlencoded({extended: false}));  // this help to process the form data sent by an html form  in a simple format
app.use(cookieParser());  // this read cookies from incoming requests so app can store incoming data

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);



//use middleware here 
app.use(errorMiddleware);

// app.get('/', (req, res) => {
//   res.send('welcome to subscription tracker app');
// });

app.listen(PORT, async ()=> {
  console.log(`server running on port http://localhost:${PORT}`);

  await connectToDatabase();
});

export default app;
