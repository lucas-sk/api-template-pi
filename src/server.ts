import express, { response } from 'express';
import { send } from 'process';

const app = express();

app.listen(3000, () => console.log('listening on port 3000'));
