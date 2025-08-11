import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

config({
  path: '.env.local',
});

const runMigrate = async () => {
  // Skip migrations in build environment if POSTGRES_URL is not available
  if (!process.env.POSTGRES_URL) {
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.log('⏭️ Skipping migrations in build environment - will run at runtime');
      process.exit(0);
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('⚠️ POSTGRES_URL not found in development - skipping migrations');
      console.log('💡 Set up your database and add POSTGRES_URL to .env.local');
      process.exit(0);
    }
    throw new Error('POSTGRES_URL is not defined');
  }

  const connection = postgres(process.env.POSTGRES_URL, { max: 1 });
  const db = drizzle(connection);

  console.log('⏳ Running migrations...');

  const start = Date.now();
  try {
    await migrate(db, { migrationsFolder: './lib/db/migrations' });
    const end = Date.now();
    console.log('✅ Migrations completed in', end - start, 'ms');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  } finally {
    await connection.end();
  }

  process.exit(0);
};

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});
