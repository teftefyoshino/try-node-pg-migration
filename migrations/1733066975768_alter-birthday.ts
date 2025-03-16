import type { MigrationBuilder } from 'node-pg-migrate';
import * as fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function up(pgm: MigrationBuilder): void {
  const migrationFilePath = join(__dirname, "up","1733066975768_alter-birthday.sql")
  const migrationSql = fs.readFileSync(migrationFilePath, "utf-8");
  pgm.sql(migrationSql);
}

export function down(pgm: MigrationBuilder): void {
  const migrationFilePath = join(__dirname, "down","1733066975768_alter-birthday.sql")
  const migrationSql = fs.readFileSync(migrationFilePath, "utf-8");
  pgm.sql(migrationSql);
}
