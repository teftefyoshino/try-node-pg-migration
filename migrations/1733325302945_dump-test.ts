import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';
import { execSync } from 'child_process';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    // get select sql result
    const result = await pgm.db.query('SELECT * FROM myuser;');
    console.log(result.rowCount); // 1
    console.log(result.rows); // [{id: 1, name: 'a'}]

    // use pgm chain method example
    pgm.createTable('example_table', {
        id: 'id',
        createdAt: { type: 'timestamp', notNull: true, default: pgm.func('CURRENT_TIMESTAMP') },
    });
    pgm.addColumns('example_table', { age: 'integer' });

    // get dump
    // required installed postgresql in client exec environment
    const stdout = execSync('pg_dumpa postgres > ./dump.sql');
    if(stdout) {
        console.error(stdout.toString())
        throw new Error()
    }
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    // no op
}
