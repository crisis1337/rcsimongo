(function() {
  'use strict';

  angular
    .module('rcsiweb2')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($stateParams, $http) {
    var vmDetails = this;

    vmDetails.allPatients={};
    vmDetails.getPatients=getPatients;
function init(){
}
function getPatients(){
 $http.get('http://localhost:3000/getall', {}).
        then(function(response) {
            vmDetails.allPatients=response.data;

        });
}
init();
  }
})();
