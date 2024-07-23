import pg from 'pg'
const { Client } = pg

async function getConnection(){
    const client = new Client({
        host:'localhost',
        port:5432,
        user:'admin',
        password:'admin1234',
        database:'store'
    });
    await client.connect()
    return client;
}

export default getConnection;