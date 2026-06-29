const { spawn } = require('child_process');

const child = spawn('npx.cmd', ['surge', 'dist', 'mohamedeltobgy-portfolio.surge.sh'], { cwd: __dirname, shell: true });

child.stdout.on('data', (data) => {
  const output = data.toString();
  console.log('stdout:', output);
  
  if (output.toLowerCase().includes('email:')) {
    child.stdin.write('mohamed.eltobgy2026.dev@gmail.com\n');
  }
  if (output.toLowerCase().includes('password:')) {
    child.stdin.write('M.Eltobgy@2026_Secure!\n');
  }
});

child.stderr.on('data', (data) => {
  console.log('stderr:', data.toString());
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
