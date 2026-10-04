import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pages = readdirSync(root).filter(f => f.endsWith('.html'));
assert.equal(pages.length, 7);
let links = 0;
for (const file of pages) {
  const html = readFileSync(resolve(root, file), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${file}: one h1`);
  assert.ok(html.includes('lang="en-GB"'), `${file}: language`);
  assert.ok(html.includes('class="skip-link"'), `${file}: skip link`);
  assert.ok(!html.includes('—'), `${file}: em dash`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('./') && !url.startsWith('#')) continue;
    const [path, fragment] = url.split('#');
    const target = path ? resolve(root, path) : resolve(root, file);
    assert.ok(existsSync(target), `${file}: missing ${url}`);
    if (fragment) assert.ok(readFileSync(target, 'utf8').includes(`id="${fragment}"`), `${file}: missing anchor ${url}`);
    links++;
  }
  for (const match of html.matchAll(/<img\b[^>]+>/g)) assert.match(match[0], /\balt="/, `${file}: image alt`);
}
assert.equal(readFileSync(resolve(root, 'CNAME'), 'utf8').trim(), 'mosaiccic.com');
assert.ok(existsSync(resolve(root, '.nojekyll')));
console.log(`PASS: ${pages.length} pages; ${links} local links/assets; page headings; image alternatives; domain config.`);
