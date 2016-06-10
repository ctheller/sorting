describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single value', function(){
  	expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles an array of multiple non-repeating values', function(){
  	var exArr = [7,2,5,3,8,7,9,3];
    var before = bubbleSort(exArr);
    var after =  exArr.sort();
    console.log(before,after);
  	expect( bubbleSort(exArr) ).toEqual( exArr.sort() );
  });

  it('handles an array with repeating values', function(){
  	var repArr = [1,2,2,0,6,6,6,8,3];
  	expect( bubbleSort(repArr) ).toEqual( repArr.sort() );
  });

  it('makes the least number of necessary swaps', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([3,2,1]);
    expect(swap.calls.count()).toEqual(3);
  });

});