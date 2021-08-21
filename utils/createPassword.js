const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const createPassword = (length, hasNumbers, hasSymbols) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let passwords = '';
  for (let i = 0; i < length; i++) {
    passwords += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return passwords;
};

module.exports = createPassword;
