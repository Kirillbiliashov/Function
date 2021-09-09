'use strict';

const methods = iface => {
  const entries = Object.entries(iface);
  entries.map(arr => {
    const value = arr[1];
    if (typeof value === 'function') {
       arr[1] =  value.length
    }
  })
  return entries
  }

  const iface = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
  }
  
  const iterated = methods(iface);

module.exports = { methods };
