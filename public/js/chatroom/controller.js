angular.module('thesis.chatroom', ['luegg.directives', 'emoji', 'vkEmojiPicker', 'mgcrea.ngStrap'])

.controller('ChatroomController', ['$scope', '$location', '$window', '$cookies', '$rootScope', '$http', 'UserService',
  function AdminUserCtrl($scope, $location, $window, $cookies, $rootScope, $http, UserService) {
    $scope.users = [];
    $scope.messages = [];
    $scope.id = $rootScope.id;
    var chatId = $scope.id;

    $scope.leavechat = function() {
          UserService.removeUser($cookies.get('id'));
    }

    var refreshUsers = function() {
      $http({
        method: 'GET',
        url: '/joinchat'
      }).then(function successCallback(response) {
        $scope.users = $.map(response.data, function(chat) {
            console.log(chat.idChatroom);
            console.log(chatId);
          if (chat.idChatroom === "4b4e7802f964a520dfee26e3") {
            return chat;
          }
        });
        setTimeout(refreshUsers, 1000);
      });
    };
    var refreshMsgs = function() {
      $http({
        method: 'GET',
        url: '/createMSG'
      }).then(function successCallback(response) {
        $scope.messages = $.map(response.data, function(data) {
          if (data.idChatroom === "4b4e7802f964a520dfee26e3") {
            return data;
          }
        });
        setTimeout(refreshMsgs, 1000);
      });
    };
    refreshUsers();
    refreshMsgs();
    $scope.createMSG = function(msg) {
      UserService.createMSG(msg, chatId, $cookies.get('id')).then(function(data) {});
      $scope.message = "";
    };

  }
]);
