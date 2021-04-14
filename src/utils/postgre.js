class Postgre {

    constructor() {
        const { Client } = require('pg');
        const connectionString = 'postgres://efweehwrocivfz:13f5e5b0ce44c8fdfc7fddd90215d4363a8a287f932392feffc3d4255b8ab767@ec2-52-1-115-6.compute-1.amazonaws.com:5432/daatqbq9sf35kv';

        this.client = new Client({
            connectionString: connectionString,
            ssl: {
                rejectUnauthorized: false
            }
        });

        this.client.connect();
    }
    
    async executeQuery(query){
        let dbResponse = await this.client.query(query)
        return dbResponse.rows
    }
}

module.exports = new Postgre()