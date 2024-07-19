import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export default {
  entry: {
    "bundle": './src/index.js'
  },
  output: {
    filename: "./[name]-bundle.js",
    path: path.resolve(dirname(fileURLToPath(import.meta.url)), "dist")
  },
};
