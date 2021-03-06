angular.module('thesis.register', ['ngRoute'])

  .controller('RegisterController', ['$scope', '$location', '$window', 'UserService', '$cookies', '$rootScope',
    function AdminUserCtrl($scope, $location, $window, UserService, $cookies, $rootScope) {

      $scope.register = function register() {
        var email = $scope.user.email;
        var password = $scope.user.password;
        var nameFirst = $scope.user.nameFirst;
        var nameLast = $scope.user.nameLast;
        var username = $scope.user.username;
        if (email !== undefined && password !== undefined && nameFirst !== undefined && nameLast !== undefined) {

          UserService.signUp(email, password, nameFirst, nameLast, username).success(function(data) {
            $rootScope.$broadcast('userLoggedIn');
            $location.path("/profile");

          }).error(function(status, data) {
          });
        }
      };

      }]);
