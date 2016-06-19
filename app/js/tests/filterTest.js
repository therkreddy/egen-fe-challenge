describe('data filter', function(){

  var filter;

  var input = '';
  var Result = 'No Data returned';

  beforeEach(function(){
    module.apply('app');

    inject(function($injector){
      filter = $injector.get($filter)('dataFilter');
    });
  });

  it('should return no data returned', function(){
    expect(filter(input)).toBe(Result);
  });
});
