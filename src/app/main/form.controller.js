(function() {
  'use strict';

  angular
    .module('rcsiweb2')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($stateParams, $http) {
    var vmForm = this;
    vmForm.data={};
    vmForm.addNewChoice= addNewChoice;
    vmForm.removeChoice= removeChoice;
    vmForm.removeBackground=removeBackground;
    vmForm.addNewBackground=addNewBackground;
    vmForm.addNewAllergy=addNewAllergy;
    vmForm.removeAllergy=removeAllergy;
    vmForm.addNewMed=addNewMed;
    vmForm.removeMed=removeMed;
    vmForm.postData=postData;
vmForm.data.presentingcomplaints =[{'id':'complaint 1'}];
vmForm.data.background=[{'id':'background 1'}];
vmForm.data.allergies=[{'id':'allergy 1'}];
vmForm.data.medication=[{'id':'med 1'}];
vmForm.complaintsList=[{'name':'Chest pain'},
                       {'name':'Shortness of breath'},
                       {'name':'Dysuria'},
                       {'name':'Neck swelling'},
                       {'name':'Cough'},
                       {'name':'Leg swelling'},
                       {'name':'Headache'},
                       {'name':'Arm weakness'},
                      {'name': 'Rash'},
                       {'name':'Diarrhea'},
                      {'name': 'Constipation'},
                      {'name': 'haematemesis'},
                      {'name': 'Dizziness'},
                       {'name':'Flank pain'},
                       {'name':'seizures'},
                       {'name':'abdominal pain'}];

function init(){

}

  function addNewChoice(){
    var newItemNo = vmForm.data.presentingcomplaints.length+1;
   vmForm.data.presentingcomplaints.push({'id':'complaint '+newItemNo});
  }

  function removeChoice() {
      var lastItem = vmForm.data.presentingcomplaints.length-1;
      vmForm.data.presentingcomplaints.splice(lastItem);
    };

      function addNewBackground(){
        var newItemNo = vmForm.data.background.length+1;
       vmForm.data.background.push({'id':'background '+newItemNo});
      }

      function removeBackground() {
          var lastItem = vmForm.data.background.length-1;
          vmForm.data.background.splice(lastItem);
        };

              function addNewAllergy(){
                var newItemNo = vmForm.data.allergies.length+1;
               vmForm.data.allergies.push({'id':'allergy '+newItemNo});
              }

              function removeAllergy() {
                  var lastItem = vmForm.data.allergies.length-1;
                  vmForm.data.allergies.splice(lastItem);
                };

  function addNewMed(){
                var newItemNo = vmForm.data.medication.length+1;
               vmForm.data.medication.push({'id':'med '+newItemNo});
              }

              function removeMed() {
                  var lastItem = vmForm.data.medication.length-1;
                  vmForm.data.medication.splice(lastItem);
                };
function postData(){
 $http.put('http://localhost:3000/savepatient', vmForm.data).
        then(function(response) {
            console.log(vmForm.data);
            console.log( response.data);

        });
}
  }
})();
