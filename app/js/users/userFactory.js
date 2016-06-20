  app.factory('UserFactory', function($log, $window, ApiResource) {
      // create a object using constructor function
      var UserFactory = function() {
      var self = this;  
      self.detailStatus = "userFormShowing";
      var proto = UserFactory.prototype;

      proto.buildPayload = function() {
        var payload = {};
        payload.firstName = self.model.firstName;
        payload.lastName = self.model.lastName;
        payload.email = self.model.email;
        payload.address = self.model.city;
        payload.company = self.model.company;
        payload.dateCreated = moment();
        payload.profilePic = "http://lorempixel.com/640/480/people/";
        return payload;
      };

      proto.getUsersList = function() {
         ApiResource.queryUsersList().then(function(response) {
         self.model.usersList = response.data;
         }, function(response) {
         $log.error('User service down', response);
         });
      };

      proto.getUser = function(user) {
         ApiResource.queryUser(user.id).then(function(response) {
         self.model.user = response.data;
         proto.getUserDetail();
         }, function(response) {
         $log.error('User detail not found', response);
         });
      };

      proto.getUserDetail = function() {
         if(self.model.user.firstName && self.model.user.lastName) {
           self.model.user.name = self.model.user.firstName + ' ' + self.model.user.lastName;
         }
         if(self.model.user.address && self.model.user.address.street && self.model.user.address.city && self.model.user.address.zip 
            && self.model.user.address.state && self.model.user.address.country) {
           self.model.user.addressDetail = self.model.user.address.street + ' ,' + self.model.user.address.city + ' ,' +
           self.model.user.address.zip + ' ,' + self.model.user.address.state + ' ,' + self.model.user.address.country;
           }
         if(self.model.user.company && self.model.user.company.name && self.model.user.company.website) {
           self.model.user.companyDetail = self.model.user.company.name + '- ' + self.model.user.company.website;
         }
      };

      proto.addUser = function(payload) {
         ApiResource.addUser(payload).then(function(response) {
          self.detailStatus = "userFormAdded";
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
        var confirmDeletion = $window.confirm('Are you sure you want to delete the user?');
        if (confirmDeletion) {
          ApiResource.deleteUser(id).then(function(response) {
          self.detailStatus = "userDeleted";
          }, function(response) {
          $log.error('User detail not deleted', response);
          });
         }
      };

      proto.gotoUserRegister = function() {
        self.detailStatus = "userFormShowing";
        self.state.go('register');
      };

      proto.gotoUsersList = function() {
        self.state.go('users');
      }

      proto.goToUserDetail = function(user) {
        self.detailStatus = "userShowing";
        proto.getUser(user);
        self.state.go('userDetail');
      }
       
      proto.submitUser = function() {
        var payload = proto.buildPayload();
        proto.addUser(payload);
      }


      };
      // returning the factory object
      return new UserFactory();
  });