import express, { Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.use(router)

app.listen(3000, () => console.log('listening on port 3000'));
