import {ConnectionOptions} from "typeorm"

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mediumclone',
    password: '421517475',
    database: 'mediumclone',
    entities: [__dirname + '/**/*.entity{.ts,.js}']
}

export default config;