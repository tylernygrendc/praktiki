import path from 'path';
import * as fs from 'node:fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scripts = fs.readdirSync(path.join(__dirname, "./src/scripts"));

const config = {
  mode: 'development',
  watch: true,
  entry: scripts.reduce((acc, script) => {
    acc[script] = `./src/scripts/${script}`;
    return acc;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  experiments: {
    "topLevelAwait": true
  }
};

export default config;