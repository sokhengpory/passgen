const fs = require('fs'); // deal with file systems
const path = require('path'); // deal with path of your file system
const os = require('os'); // deal with some operating system property
const chalk = require('chalk');

const savePassword = (password) => {
  // fs.open = to open file (location and file to be saved,flag: a = append,permission,callbackFunction(event,id))
  // in the permission of the fs.open if you leave it then it doesn't need a permission to read the file but if you put 666 it will need permission to read the file
  // path.join(start from this directory,go up 2 level to the passgen folder,file name)
  // fs.write = save file to the directory (id,text to save,null,string unicode,callbackFunction)
  // os.EOL = put another line after
  // fs.close = exit the file when done (id,callbackFunction)
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to password.txt'));
      });
    });
  });
};

module.exports = savePassword;
