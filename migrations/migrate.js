#!/usr/bin/env node
/**
 * Script de migration SQL — Amygo
 * Usage : node migrations/migrate.js
 *
 * - Lit toutes les variables depuis .env
 * - Exécute dans l'ordre les fichiers *.sql du dossier migrations/
 * - Garde un suivi des migrations déjà exécutées dans la table `_migrations`
 */

const mysql = require('mysql2/promise');
const fs    = require('fs');
const path  = require('path');

// ─── Chargement .env ─────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) {
    console.error('❌  Fichier .env introuvable à :', envPath);
    process.exit(1);
  }
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .forEach(line => {
      const [key, ...rest] = line.split('=');
      if (key && key.trim() && !key.trim().startsWith('#')) {
        process.env[key.trim()] = rest.join('=').trim();
      }
    });
}

// ─── Connexion DB ─────────────────────────────────────────────────────────────

async function getConnection() {
  return mysql.createConnection({
    host    : process.env.DB_HOST     || 'localhost',
    port    : parseInt(process.env.DB_PORT || '3306', 10),
    user    : process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'amygo1',
    multipleStatements: true,
  });
}

// ─── Table de suivi des migrations ───────────────────────────────────────────

async function ensureMigrationsTable(conn) {
  await conn.execute(`
    CREATE TABLE IF NOT EXISTS \`_migrations\` (
      \`id\`         INT NOT NULL AUTO_INCREMENT,
      \`filename\`   VARCHAR(255) NOT NULL UNIQUE,
      \`applied_at\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

async function getApplied(conn) {
  const [rows] = await conn.execute('SELECT filename FROM `_migrations`');
  return new Set(rows.map(r => r.filename));
}

async function markApplied(conn, filename) {
  await conn.execute('INSERT INTO `_migrations` (filename) VALUES (?)', [filename]);
}

// ─── Runner principal ─────────────────────────────────────────────────────────

async function run() {
  loadEnv();

  const conn = await getConnection();
  console.log(`\n✅  Connecté à ${process.env.DB_DATABASE}@${process.env.DB_HOST}\n`);

  await ensureMigrationsTable(conn);
  const applied = await getApplied(conn);

  // Lister les fichiers .sql dans l'ordre alphabétique (001_, 002_, ...)
  const migDir = __dirname;
  const files = fs.readdirSync(migDir)
    .filter(f => f.endsWith('.sql'))
    .sort();

  if (files.length === 0) {
    console.log('ℹ️   Aucun fichier .sql trouvé dans migrations/');
    await conn.end();
    return;
  }

  let applied_count = 0;
  let skipped_count = 0;

  for (const file of files) {
    if (applied.has(file)) {
      console.log(`⏭️   Ignoré  (déjà appliqué) : ${file}`);
      skipped_count++;
      continue;
    }

    const sql = fs.readFileSync(path.join(migDir, file), 'utf8');
    console.log(`▶️   Application : ${file} ...`);

    try {
      await conn.execute(sql);
      await markApplied(conn, file);
      console.log(`✅  Succès       : ${file}`);
      applied_count++;
    } catch (err) {
      console.error(`❌  Erreur sur   : ${file}`);
      console.error('    ', err.message);
      await conn.end();
      process.exit(1);
    }
  }

  console.log(`\n📊  Résultat : ${applied_count} appliquée(s), ${skipped_count} ignorée(s)\n`);
  await conn.end();
}

run().catch(err => {
  console.error('❌  Erreur inattendue :', err.message);
  process.exit(1);
});
