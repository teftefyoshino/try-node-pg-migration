import type { MigrationBuilder } from 'node-pg-migrate';
import { execSync } from 'child_process';

export async function up(pgm: MigrationBuilder): Promise<void> {
    // use pgm chain method example
    pgm.dropTable('example_table');
    pgm.createTable('example_table', {
        id: 'id',
        createdAt: { type: 'timestamp', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') },
    });
    pgm.addColumns('example_table', { age: 'integer' });

}

export function down(pgm: MigrationBuilder): void {
    // no op
}
