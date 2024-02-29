import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  entities: [process.env.NODE_ENV === 'local' ? './src/entity/*.ts' : './dist/src/entity/*.js'],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export default dbConfig;
