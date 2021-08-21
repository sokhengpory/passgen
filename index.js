#!/usr/bin/env node
const program = require('commander'); // add command line
const chalk = require('chalk'); // add color to the output from the command line
const clipboardy = require('clipboardy'); // save file from the command line
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

// .version = set version
// .description = set description
program.version('1.0.0').description('Simple Password Generator');

// .option = put option that can be use in your program (option,description,defaultValue)
// if the option need to take some argument that you can specify it next to the option
// in the boolean option you can not set the default value, the defualt value will be true
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatePassword = createPassword(length, numbers, symbols);

// save generated password to the user clipboard
clipboardy.writeSync(generatePassword);

// Log the password to the console
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatePassword));
console.log(chalk.yellow('Password copied to the clipboard!'));

// Save the password to the current directory
if (save) {
  savePassword(generatePassword);
}
