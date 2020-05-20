import express, { request, response } from 'express';

import { home } from './routes';

const app = express();

app.get('/', home);

app.listen(3333);
