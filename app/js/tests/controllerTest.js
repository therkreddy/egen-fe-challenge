
describe('HomeController', function() {

    var $rootScope, $scope, $controller,HomeController;

    beforeEach(module('app'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        HomeController = $controller('HomeController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should exist', function() {
        expect(HomeController).toBeDefined();
    });
});