export const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    dbHost: process.env.PG_HOST,
    dbUser: process.env.PG_USER,
    dbPass: process.env.PG_PASS,
    dbName: process.env.PG_DB,
    dbPort: process.env.PG_PORT,
}