'use strict';

/**
 * @ngdoc function
 * @name planosSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the planosSiteApp
 */
angular.module('planosSiteApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.key = "6LdIWSETAAAAADBbtlAZ918lvNyWdJyANtb-h_D5";
    $scope.year = new Date().getFullYear();
    $scope.sent = false;
    $scope.error = false;
    $scope.sending = false;
    var c = {
      name: undefined,
      email: undefined,
      message: undefined
    };
    $scope.contact = angular.copy(c);

    $scope.enviar = function(){
      $scope.sending = true;
      emailjs.send("gmail","contatoplanos", $scope.contact).then(function(response) {
        $scope.$apply(function(){
          $scope.sending = false;
          $scope.sent = true;
          $scope.contact = angular.copy(c);
        });
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
        $scope.$apply(function(){
          $scope.sending = false;
          $scope.sent = false;
          $scope.error = true;
        })
        console.log("FAILED. error=", err);
      });
    };
  }]);
