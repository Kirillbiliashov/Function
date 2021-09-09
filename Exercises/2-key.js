'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possible.length);
    key += possible[randomIndex];
  };
  return key;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key.length)
console.log(key); // eg599gb60q926j8i


module.exports = { generateKey };
