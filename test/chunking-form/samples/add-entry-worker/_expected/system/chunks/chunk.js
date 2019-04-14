System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      const getWorkerMessage = exports('getWorkerMessage', () => new Promise(resolve => {
        const worker = new Worker(new URL('../worker.js', module.meta.url).href, {type: 'module'});
        worker.onmessage = resolve;
      }));

    }
  };
});
