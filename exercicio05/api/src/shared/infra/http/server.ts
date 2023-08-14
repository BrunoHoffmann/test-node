import { AppDataSource } from '../typeorm/data-source';
import app from './app';

const port = parseInt(process.env.APP_PORT) || 3333;

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.info('--------------------------------------------------'),
      console.info('--------------------------------------------------'),
      console.info('                                                  '),
      console.info('Hi, I am working here ;)', `http://localhost:${port}/`),
      console.info('                                                  '),
      console.info('--------------------------------------------------'),
      console.info('--------------------------------------------------');
  });
});
