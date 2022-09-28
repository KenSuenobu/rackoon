import * as fs from "fs";

/**
 * This is a simple SQL file loader that loads in SQL statements and applies them to a Sqlite3 database.
 */
export class Loader {

    /**
     * Creates a Sqlite3 file from a script.  Statements ending in a ";" will be applied to the Sqlite3 database
     * instance, and cleared once run.  Any statements that begin with "--" indicate a comment, and will not be
     * included in the SQL statements.
     *
     * @param dbFile The name of the destination Sqlite3 database.
     * @param scriptFile The script file to process.
     */
    public static loadSql(dbFile: string, scriptFile: string) {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database(dbFile);
        const sqlScript = fs.readFileSync(scriptFile, 'utf8');
        let sqlStatement = '';

        console.log(`Applying ${scriptFile} to ${dbFile} Sqlite3 database.`);

        db.serialize(() => {
            for (const sqlLine of sqlScript.split('\n')) {
                if (sqlLine.trim().startsWith('--')) {
                    continue;
                }

                sqlStatement += `${sqlLine}\n`;

                if (sqlLine.trim().endsWith(';')) {
                    db.run(sqlStatement);
                    sqlStatement = '';
                }
            }
        });

        db.close();
    }

}