'use strict';

const methods = iface => {
  const res = [];
  const entries = Object.entries(iface);
  entries.forEach(([key, val]) => {
    if (typeof val === 'function') res.push([key, val.length]);
  });
  return res;
}

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
}

const iterated = methods(iface);

console.dir({ iterated });

module.exports = { methods };
