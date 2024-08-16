#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function deleteNodeModules() {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');

  console.log(`Attempting to delete: ${nodeModulesPath}`);

  fs.rm(nodeModulesPath, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`Failed to delete node_modules: ${err.message}`);
    } else {
      console.log('node_modules directory has been deleted successfully.');
    }
  });
}

module.exports = deleteNodeModules;
