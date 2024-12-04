import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';
import * as fs from 'fs';
import path from 'path';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  const migrationFilePath = path.join(__dirname, "up","1733066975768_alter-birthday.sql")
  const migrationSql = fs.readFileSync(migrationFilePath, "utf-8");
  pgm.sql(migrationSql);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  const migrationFilePath = path.join(__dirname, "down","1733066975768_alter-birthday.sql")
  const migrationSql = fs.readFileSync(migrationFilePath, "utf-8");
  pgm.sql(migrationSql);
}
