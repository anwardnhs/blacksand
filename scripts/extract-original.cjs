const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('src/pages/About.tsx', 'utf8');
function extract(name) {
  const match = source.match(new RegExp('const ' + name + '[^=]*= (\\[[\\s\\S]*?\\n\\]);'));
  if (!match) throw new Error('Missing source array: ' + name);
  return vm.runInNewContext('(' + match[1] + ')');
}
const data = { board: extract('boardMembers'), executives: extract('executives'), milestones: extract('milestones') };
fs.writeFileSync('src/site/original-content.json', JSON.stringify(data, null, 2));
for (const name of ['components', 'pages', 'theme']) {
  fs.cpSync('src/' + name, 'archive/pre-redesign/' + name, { recursive: true });
}
for (const name of ['App.tsx', 'index.css']) fs.copyFileSync('src/' + name, 'archive/pre-redesign/' + name);
console.log('Preserved original sources; extracted board, executives and history.');
