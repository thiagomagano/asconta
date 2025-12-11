import { sql } from "bun";

const accountSchema = await sql`
  CREATE TABLE IF NOT EXISTS accounts (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      initial_balance NUMERIC(12,2) NOT NULL,
      current_balance NUMERIC(12,2) NOT NULL,
      color TEXT,
      icon TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
  `;

const categorySchema = await sql`
  CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
      color TEXT,
      icon TEXT,
      is_default BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
  `;

const transactionSchema = await sql`
  CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,

      account_id INTEGER NOT NULL,
      category_id INTEGER NOT NULL,

      type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
      amount NUMERIC(12,2) NOT NULL CHECK (amount > 0),

      description TEXT NOT NULL,
      date TIMESTAMP NOT NULL,

      notes TEXT,

      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

      CONSTRAINT fk_transaction_account
          FOREIGN KEY (account_id)
          REFERENCES accounts(id)
          ON DELETE CASCADE,

      CONSTRAINT fk_transaction_category
          FOREIGN KEY (category_id)
          REFERENCES categories(id)
          ON DELETE SET NULL
  );
  `
