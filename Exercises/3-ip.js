'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.').map(el => +el).reduce((a, b, i) => {
  for (i; i < 3; i++) {
     b <<= 8;
  };
return a + b;
}, 0);

module.exports = { ipToInt };
