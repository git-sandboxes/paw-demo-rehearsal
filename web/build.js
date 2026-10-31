require('fs').mkdirSync('dist', { recursive: true });
require('fs').writeFileSync('dist/index.html', '<h1>안녕하세요, paw 데모입니다</h1>');
