'use strict';

async function main () {
  const { default: foo } = await Promise.resolve().then(function () { return require('./foo-e17f2b22.js'); });
  console.log(foo);
}

module.exports = main;
