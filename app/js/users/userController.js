 app.controller('UserController', function($scope, $state, $log, UserFactory) {
      $scope.UserFactory = UserFactory;
      // clear the model by initialzing with an empty object each time controller called.
      UserFactory.model = {};
      UserFactory.state = $state;
      //Get user data from service 
      UserFactory.getUsersList();              
    }
  );