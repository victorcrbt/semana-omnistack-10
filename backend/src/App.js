import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';

import './database';
import routes from './routes';
import WebSocket from './WebSocket';

class App {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.io = new WebSocket(this.server);

    this.middlewares();
    this.routes();
    this.io.onConnection();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      req.io = this.io;

      next();
    });
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
