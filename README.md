# Amygo — API NestJS

API de la migration Amygo (PHP legacy → NestJS). Elle s'appuie sur la base MySQL/MariaDB du legacy (`amygo1`), sans synchronisation automatique du schéma.

## Organisation du dépôt `fusion/`

| Dossier | Rôle | Versionné |
|---|---|---|
| `amygo_sourcecode/` | Application PHP legacy, référence fonctionnelle (lecture seule) | non |
| `api-multi-service-app/` | Cette API NestJS | git |
| `admin-panel/` | Panneau d'administration React (Vite) | non |
| `MIGRATION_*.md`, `plan-XX-*.md` | Plans et suivi de migration | non |

Dans l'API :

- `src/<domaine>/` : un dossier par domaine (`users`, `transport`, `payments`, `stores`, `cms`…), chacun avec un `<domaine>.module.ts` qui agrège ses sous-modules ;
- `src/core_app/core/` : le socle transverse (`database/`, `config/`, `logging/`) ;
- `migrations/` : les scripts SQL numérotés (`NNN_description.sql`) et leur runner `migrate.js` ;
- `test/` : les tests e2e.

## Prérequis

- Node.js 20 ou plus, npm ;
- MySQL 5.7+ ou MariaDB 10.4+ avec la base `amygo1` (dump legacy).

## Environnements

Copier `.env.example` en `.env`. Le fichier `.env` est ignoré par git : aucun secret ne doit être versionné.

| Variable | dev | test | prod | Remarque |
|---|---|---|---|---|
| `NODE_ENV` | `development` | `test` | `production` | |
| `PORT` | opt. | opt. | opt. | 3000 par défaut |
| `DB_URL` ou `DB_HOST` + `DB_USERNAME` + `DB_DATABASE` (+ `DB_PORT`, `DB_PASSWORD`) | requis | requis | requis | vérifié au démarrage |
| `JWT_SECRET` | opt. | opt. | **requis** | repli sur un secret de dev hors production |
| `JWT_EXPIRES_IN` | opt. | opt. | opt. | `7d` par défaut |
| `CORS_ORIGINS` | opt. | opt. | **requis** | liste séparée par des virgules ; `*` si vide |
| `FIREBASE_SERVER_KEY` | opt. | opt. | requis pour les push | sinon les push sont ignorés |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER` | opt. | opt. | requis pour les SMS/OTP | hors production, l'OTP est renvoyé dans la réponse si l'envoi échoue |
| `GOOGLE_MAPS_API_KEY` | opt. | opt. | opt. | repli Haversine + 30 km/h |

La validation au démarrage (`src/core_app/core/config/env.validation.ts`) arrête l'application si une variable requise manque. La préproduction suit les règles de la production (`NODE_ENV=production`).

Les tests e2e exigent `NODE_ENV=test` et une base dont le nom contient `test` (garde-fou `test/e2e-guard.ts`), car ils vident des tables.

## Commandes

```bash
npm install            # dépendances
npm run start:dev      # développement (watch)
npm run typecheck      # vérification TypeScript sans build
npm run lint:check     # lint sans modification
npm run lint           # lint avec corrections automatiques
npm run format         # Prettier
npm test               # tests unitaires (Jest, sans base de données)
npm run test:e2e       # tests e2e (base de test uniquement)
npm run build          # build de production dans dist/
npm run start:prod     # lancement du build
npm run migrate        # applique les migrations SQL non encore jouées (suivi dans la table _migrations)
```

## Conventions

**Modules.** Un sous-module par table ou par fonctionnalité : `x.module.ts`, `x.controller.ts`, `x.service.ts`, `dto/`, `entities/`. Le module importe et exporte `TypeOrmModule.forFeature([...])`. Les fonctionnalités transverses (auth, panier, tarifs, géo, admin) ont leur propre module à la racine de `src/`.

**Entités.** Elles reprennent exactement les tables et colonnes du legacy (notation hongroise : `iUserId`, `vName`, `eStatus`, `tDate`…). Aucune modification de schéma en dehors d'un fichier `migrations/NNN_*.sql`, car `synchronize` est désactivé.

**Nommage.** Fichiers en kebab-case, classes en PascalCase, routes en kebab-case au pluriel (`/driver-docs`, `/admin/riders`). Les valeurs de statut reprennent celles du legacy telles quelles (`Active`/`Inactive` ou `active`/`inactive` selon la table).

**DTO et validation.** Un `ValidationPipe` global (`transform: true`) applique les décorateurs `class-validator`. Les nouveaux DTO doivent être décorés. La liste blanche (`whitelist`) n'est pas activée tant que les DTO générés ne sont pas tous décorés : elle supprimerait leurs propriétés. Les DTO de mise à jour utilisent `PartialType`.

**Réponses.**
- Ressource seule : l'objet.
- Liste paginée : `{ items, total, page, limit }`, avec les paramètres de requête `page` (à partir de 1) et `limit` (20 par défaut).
- Filtres : paramètres de requête nommés comme les colonnes (`eStatus`, `eUserType`) ou en clair (`search`, `status`).

**Erreurs.** Utiliser les exceptions HTTP de Nest (`NotFoundException`, `BadRequestException`…). Ne jamais inclure de secret, d'URL de connexion ou de données personnelles dans un message d'erreur.

**Format.** Prettier (guillemets simples, virgules finales, fins de ligne `auto` pour Windows) et ESLint (`recommendedTypeChecked`).

## Observabilité

- Chaque requête HTTP est journalisée (`RequestLoggerMiddleware`) : méthode, chemin sans la query string, statut et durée. Le niveau est `warn` pour les 4xx et `error` pour les 5xx.
- Chaque requête porte un identifiant `X-Request-Id` (repris de l'en-tête entrant ou généré), renvoyé dans la réponse et présent dans le log.
- Les appels externes (Twilio, FCM, Google Maps) passent par un `Logger` Nest nommé d'après le service.
- Ne jamais journaliser de mot de passe, de token, de code OTP ni de corps de requête complet.

## Dette connue

- Aucune route n'est protégée par un guard : l'authentification et les autorisations sont traitées à l'étape 3 du plan.
- Environ 300 erreurs de lint `no-unsafe-*` (typage `any`) restent dans `fare`, `cart`, `geo`, `user-profile`, `admin-panel` et leurs specs. Elles seront corrigées avec chaque domaine.
- Les specs e2e `orders` et `users` sont des squelettes à réécrire (étape 18).
