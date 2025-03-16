import { runner as migrate, type RunnerOption } from 'node-pg-migrate';
import * as dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function migrateDb() {
    const databaseUrl = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
    const dbConfig = {
        databaseUrl,
        dir: join(__dirname, '..', 'migrations'),
        direction: 'up',
        migrationsTable: 'pgmigrations',
        checkOrder: false,
        // count: Infinity,
        log: console.log,
      } as RunnerOption;

      try {
        await migrate(dbConfig);
      } catch (error) {
        console.error('Migration failed:', error);
      }
}

migrateDb();
