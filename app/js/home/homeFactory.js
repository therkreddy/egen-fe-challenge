  app.factory('HomeFactory', function() {
      // create a object using constructor function
      var HomeFactory = function() {
      var self = this; 
      self.navOpen = false; 
      var proto = HomeFactory.prototype;     
        // Attach methods to object
       proto.contactSubmit = function() {
          self.model.contactSubmitted = true;
       }
       proto.toggleNav = function() {
         if(!self.navOpen) {
           proto.openNav();
         } else if (self.navOpen) {
           proto.closeNav();
         }
       };
        proto.openNav = function() {
            self.navOpen = true;
            document.getElementById("menuDrawer").style.width = "250px";
            document.getElementById("main").style.marginRight = "250px";
        };
        proto.closeNav = function() {
            self.navOpen = false;
            document.getElementById("menuDrawer").style.width = "0";
            document.getElementById("main").style.marginRight= "0";
        };
      };
      // returning the factory object
      return new HomeFactory();
  });