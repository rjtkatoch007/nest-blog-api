/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'bonjovi@786',
    database: 'nest-blog',
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migrations/**/*.ts'],
}

const AppDataSource = new DataSource(config)

export { AppDataSource }

export default config