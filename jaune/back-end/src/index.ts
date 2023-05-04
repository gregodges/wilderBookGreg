import dataSource from './utils';
import app from './app';

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(5005, () => {
    console.log(`server is running on ${5005}`);
  });
};

void start();
