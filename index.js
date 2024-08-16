#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = function (folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
};

deleteFolderRecursive('node_modules');
console.log('🧹✨node_modules folder deleted successfully.');
