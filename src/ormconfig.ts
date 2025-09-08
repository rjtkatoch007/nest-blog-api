/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'bonjovi@786',
    database: 'nest-blog',
    entities: [__dirname + '/**/*.entity.{ts,js}'],
    synchronize: true, //don't use on production
}

export default config