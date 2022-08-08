// const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default () => ({
  entry: './src/index.js',
  target: 'web',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: '/home/ivo/isomorphic-ws/example/webpack/dist/',
    filename: 'main.js',
  },
});
