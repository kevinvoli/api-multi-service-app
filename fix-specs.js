/**
 * fix-specs.js — Corrige tous les specs boilerplate NestJS
 *
 * Problèmes corrigés :
 *  1. Regex avec \b pour éviter que "CreateEntityDto" matche "Entity"
 *  2. Support multi-repositories (services avec plusieurs @InjectRepository)
 */

const fs = require('fs');
const path = require('path');

// ─── Helpers ─────────────────────────────────────────────────────────────────

function findFiles(dir, pattern) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findFiles(full, pattern));
    else if (pattern.test(entry.name)) results.push(full);
  }
  return results;
}

const readFile = (p) => fs.readFileSync(p, 'utf8');
const writeFile = (p, c) => fs.writeFileSync(p, c, 'utf8');

/**
 * Extrait TOUS les @InjectRepository(EntityClass) du service
 * Retourne [{ entityClass, importPath }]
 */
function extractAllRepositories(serviceContent) {
  const repos = [];
  const injectRegex = /@InjectRepository\((\w+)\)/g;
  let match;
  while ((match = injectRegex.exec(serviceContent)) !== null) {
    const entityClass = match[1];
    // Recherche le chemin d'import avec \b pour éviter les sous-chaînes
    const importRegex = new RegExp(
      `import\\s*\\{[^}]*\\b${entityClass}\\b[^}]*\\}\\s*from\\s*['"]([^'"]+)['"]`
    );
    const importMatch = serviceContent.match(importRegex);
    if (importMatch) {
      repos.push({ entityClass, importPath: importMatch[1] });
    }
  }
  return repos;
}

/** Vérifie si le spec est boilerplate (pas encore corrigé) */
function isBoilerplate(specContent) {
  return !specContent.includes('getRepositoryToken') &&
         !specContent.includes('useValue:') &&
         !specContent.includes('useFactory:');
}

const MOCK_REPO_DECL = `const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};`;

// ─── Correction des service specs ────────────────────────────────────────────

function fixServiceSpec(specPath) {
  const specContent = readFile(specPath);

  const dir = path.dirname(specPath);
  const base = path.basename(specPath, '.service.spec.ts');
  const servicePath = path.join(dir, `${base}.service.ts`);
  if (!fs.existsSync(servicePath)) return false;

  const serviceContent = readFile(servicePath);
  const repos = extractAllRepositories(serviceContent);
  if (repos.length === 0) return false;

  const serviceClassMatch = specContent.match(/import\s*\{\s*(\w+Service)\s*\}/);
  if (!serviceClassMatch) return false;
  const serviceClass = serviceClassMatch[1];

  const entityImports = repos
    .map(r => `import { ${r.entityClass} } from '${r.importPath}';`)
    .join('\n');

  const repoProviders = repos
    .map(r => `        { provide: getRepositoryToken(${r.entityClass}), useValue: mockRepo },`)
    .join('\n');

  const newSpec = `import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ${serviceClass} } from './${base}.service';
${entityImports}

${MOCK_REPO_DECL}

describe('${serviceClass}', () => {
  let service: ${serviceClass};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ${serviceClass},
${repoProviders}
      ],
    }).compile();

    service = module.get<${serviceClass}>(${serviceClass});
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
`;

  writeFile(specPath, newSpec);
  return true;
}

// ─── Correction des controller specs ─────────────────────────────────────────

function fixControllerSpec(specPath) {
  const specContent = readFile(specPath);

  const dir = path.dirname(specPath);
  const base = path.basename(specPath, '.controller.spec.ts');
  const servicePath = path.join(dir, `${base}.service.ts`);
  const controllerPath = path.join(dir, `${base}.controller.ts`);
  if (!fs.existsSync(servicePath) || !fs.existsSync(controllerPath)) return false;

  const serviceContent = readFile(servicePath);
  const repos = extractAllRepositories(serviceContent);
  if (repos.length === 0) return false;

  const controllerClassMatch = specContent.match(/import\s*\{\s*(\w+Controller)\s*\}/);
  const serviceClassMatch = specContent.match(/import\s*\{\s*(\w+Service)\s*\}/);
  if (!controllerClassMatch || !serviceClassMatch) return false;

  const controllerClass = controllerClassMatch[1];
  const serviceClass = serviceClassMatch[1];

  const entityImports = repos
    .map(r => `import { ${r.entityClass} } from '${r.importPath}';`)
    .join('\n');

  const repoProviders = repos
    .map(r => `        { provide: getRepositoryToken(${r.entityClass}), useValue: mockRepo },`)
    .join('\n');

  const newSpec = `import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ${controllerClass} } from './${base}.controller';
import { ${serviceClass} } from './${base}.service';
${entityImports}

${MOCK_REPO_DECL}

describe('${controllerClass}', () => {
  let controller: ${controllerClass};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${controllerClass}],
      providers: [
        ${serviceClass},
${repoProviders}
      ],
    }).compile();

    controller = module.get<${controllerClass}>(${controllerClass});
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
`;

  writeFile(specPath, newSpec);
  return true;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const srcDir = path.join(__dirname, 'src');

const handwrittenSpecs = new Set([
  'auth.service.spec.ts',
  'cart.service.spec.ts',
  'geo.service.spec.ts',
  'admin-panel.service.spec.ts',
  'app.controller.spec.ts',
]);

let fixedServices = 0;
let fixedControllers = 0;
let skipped = 0;
let errors = 0;

const serviceSpecs = findFiles(srcDir, /\.service\.spec\.ts$/);
for (const specPath of serviceSpecs) {
  if (handwrittenSpecs.has(path.basename(specPath))) { skipped++; continue; }
  try {
    if (fixServiceSpec(specPath)) fixedServices++;
  } catch (e) {
    console.error(`ERREUR service: ${specPath} — ${e.message}`);
    errors++;
  }
}

const controllerSpecs = findFiles(srcDir, /\.controller\.spec\.ts$/);
for (const specPath of controllerSpecs) {
  if (handwrittenSpecs.has(path.basename(specPath))) { skipped++; continue; }
  try {
    if (fixControllerSpec(specPath)) fixedControllers++;
  } catch (e) {
    console.error(`ERREUR controller: ${specPath} — ${e.message}`);
    errors++;
  }
}

console.log(`\n✅ Service specs corrigés  : ${fixedServices}`);
console.log(`✅ Controller specs corrigés: ${fixedControllers}`);
console.log(`⏭  Specs manuels ignorés   : ${skipped}`);
console.log(`❌ Erreurs                 : ${errors}`);
