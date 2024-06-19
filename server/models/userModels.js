const { Pool } = require('pg');

const PG_URI =
  'postgres://postgres.zjaqlrtfnadeddgsmqfd:appleorangeapple777@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString: PG_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

// testing if we are connection to DB
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to database');
    client.release();
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
};

testConnection();

// export an object with query property that returns an invocation of pool.query
// require it in controller to be the access point to our database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  testConnection: async () => {
    try {
      await pool.query('SELECT 1');
      console.log('Successfully connected to the database');
    } catch (err) {
      console.error('Error connecting to the database', err);
    }
  },
};
