import dataSource from './utils';
import app from './app';

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(6000, () => {
    console.log(`server is running on ${6000}`);
  });
};

void start();
