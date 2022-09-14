import express from 'express';
import { router } from './routes';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, HOST);
