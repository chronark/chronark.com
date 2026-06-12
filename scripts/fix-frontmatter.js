const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'content', 'projects');
if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir);
  process.exit(1);
}

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.mdx')) continue;
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, 'utf8');
  const original = s;
  // normalize CRLF -> LF
  s = s.replace(/\r\n/g, '\n');
  // remove stray carriage returns
  s = s.replace(/\r/g, '');
  // fix quoted published values => boolean true
  s = s.replace(/published:\s*["']\s*true\s*["']/ig, 'published: true');
  s = s.replace(/published:\s*"true\s*"/ig, 'published: true');
  s = s.replace(/published:\s*'true\s*'/ig, 'published: true');
  // also handle published: "true \n" or similar
  s = s.replace(/published:\s*"\s*true\s*\n/ig, 'published: true\n');

  if (s !== original) {
    fs.writeFileSync(p, s, 'utf8');
    console.log('fixed', f);
  } else {
    console.log('no change', f);
  }
}

console.log('done');
