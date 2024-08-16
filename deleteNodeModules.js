const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, 'node_modules');

fs.rm(nodeModulesPath, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(`Failed to delete node_modules: ${err.message}`);
  } else {
    console.log('node_modules directory has been deleted successfully.');
  }
});
