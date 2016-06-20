"use strict";

describe("mocker egen service", function () {
  var apiResourceService, httpBackend;
  var id = '16d1f7ea-c8b3-48f8-af86-72ae36aa7f9d';

  beforeEach(module('app'));

  beforeEach(inject(function (_ApiResource_, $httpBackend) {
    apiResourceService = _ApiResource_;
    httpBackend = $httpBackend;
  }));

  // set up mock data for the service call 
  it("should test the service response", function () {
    httpBackend.whenGET("http://mocker.egen.io/users/16d1f7ea-c8b3-48f8-af86-72ae36aa7f9d").respond({
        data: {
            id: "16d1f7ea-c8b3-48f8-af86-72ae36aa7f9d",
            firstName: "Ola",
            lastName: "Greenholt",
            email: "Mustafa.Sauer39@yahoo.com",
            address: {
            street: "3917 Ramona Freeway",
            city: "North Kyler",
            zip: "84446-6023",
            state: "WI",
            country: "USA"
            }
        }
    });
    // Call the service method whose response is mocked above
    apiResourceService.queryUser(id).then(function(response) {
      expect(response.data.firstName).toEqual('Ola');
    });
    httpBackend.flush();
  });

});