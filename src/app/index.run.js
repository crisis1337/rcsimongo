(function() {
  'use strict';

  angular
    .module('rcsiweb2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
