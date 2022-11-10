import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
    "index"
]

const config = {
  mode: 'development',
  watch: true,
  entry: pages.reduce((acc, page) => {
    acc[page] = `./src/client/scripts/${page}.js`;
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