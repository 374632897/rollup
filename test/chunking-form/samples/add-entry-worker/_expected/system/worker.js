System.register([], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			postMessage('from worker');

		}
	};
});