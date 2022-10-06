import express from 'express';
import { router } from './routes';
import cors from "cors";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(PORT, () => console.log('server listening on port ' + PORT));
