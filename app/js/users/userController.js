 app.controller('UserController', function($scope, $state, $log, UserFactory) {
      $scope.UserFactory = UserFactory;
      // clear the model by initialzing with an empty object each time controller called.
      UserFactory.model = {};
      UserFactory.state = $state;
      //Get user data from service 
      // UserFactory.getUsersList();              
      // var id = '0e795d67-c729-4125-b9d9-95875fc5ad09';
      // UserFactory.getUser(id);
      // UserFactory.deleteUser(id);
      // UserFactory.addUser();
      // UserFactory.modifyUser();
    }
  );