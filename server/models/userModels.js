const { Pool } = require('pg');

const PG_URI = 'postgres://postgres.xphlyerxoizugteqxrsa:iMk9sUV8EK0ijmSd@aws-0-us-east-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString: PG_URI,
});

// export an object with query property that returns an invocation of pool.query
// require it in controller to be the access point to our database 
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}