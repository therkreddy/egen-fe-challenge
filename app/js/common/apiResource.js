  app.factory('ApiResource', function($http, $q) {
      // create a object using constructor function
      var ApiResource = function() {
      var self = this;  
      var proto = ApiResource.prototype;   
      proto.processPromise = function(params) {
        var deferred = $q.defer();
        $http(params).then(function(response) {
           deferred.resolve(response);
           }, function(response) {
           deferred.reject(response);
           });
         return deferred.promise;
      }; 
      proto.queryUsersList = function() {
         var params = {
            method : "GET",
            url : "http://mocker.egen.io/users"
         };
         var promise = proto.processPromise(params);
         return promise;
      };  
      proto.queryUser= function(id) {
         var params = {
            method : "GET",
            id : id,
            url : "http://mocker.egen.io/users/"+id
         };
         var promise = proto.processPromise(params);
         return promise;
      };  
      proto.addUser= function(payload) {
         var params = {
            method : "POST",
            data : payload,
            url : "http://mocker.egen.io/users"
         };
         var promise = proto.processPromise(params);
         return promise;
      };  

      proto.modifyUser= function(payload) {
         var id = '0e795d67-c729-4125-b9d9-95875fc5ad09';
         var payload ={};
         payload.lastName = 'jaldi';
         var params = {
            method : "PUT",
            data : payload,
            url : "http://mocker.egen.io/users/"+id
         };
         var promise = proto.processPromise(params);
         return promise;
      };  

      proto.deleteUser= function(id) {
         var params = {
            method : "DELETE",
            url : "http://mocker.egen.io/users/"+id
         };
         var promise = proto.processPromise(params);
         return promise;
      };  

      };
      // returning the factory object
      return new ApiResource();
  });