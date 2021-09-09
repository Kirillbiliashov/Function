'use strict';

const random = (min, max) => {
  if (max === undefined) max = min;
  if (max === min) return max;
   return Math.floor(Math.random() * max) + min;
};

module.exports = { random };
