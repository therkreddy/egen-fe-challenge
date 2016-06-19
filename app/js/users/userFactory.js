  app.factory('UserFactory', function($log, ApiResource) {
      // create a object using constructor function
      var UserFactory = function() {
      var self = this;  
      var proto = UserFactory.prototype;

      proto.buildPayload = function() {
        var payload = {};
        payload.firstName = self.model.firstName,
        payload.lastName = self.model.lastName,
        payload.email = self.model.email,
        payload.address = self.model.address,
        payload.company = self.model.company,
        payload.dateCreated = moment();
        return payload;
      };

      proto.getUsersList = function() {
         ApiResource.queryUsersList().then(function(response) {
         self.model.usersList = response.data;
         }, function(response) {
         $log.error('User service down', response);
         });
      };

       proto.getUser = function(id) {
         ApiResource.queryUser(id).then(function(response) {
         self.model.user = response.data;
         }, function(response) {
         $log.error('User detail not found', response);
         });
      };

      proto.addUser = function(payload) {
         ApiResource.addUser(payload).then(function(response) {
         }, function(response) {
         $log.error('User detail not posted', response);
         });
      };

      proto.modifyUser = function(payload) {
         ApiResource.modifyUser(payload).then(function(response) {
         }, function(response) {
         $log.error('User detail not modified', response);
         });
      };

      proto.deleteUser = function(id) {
         ApiResource.deleteUser(id).then(function(response) {
         }, function(response) {
         $log.error('User detail not deleted', response);
         });
      };
       
      proto.submitUser = function() {
        var payload = proto.buildPayload();
        proto.addUser(payload);
      }


      };
      // returning the factory object
      return new UserFactory();
  });