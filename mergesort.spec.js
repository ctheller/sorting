describe('Merge Sort', function(){
  it('is able to split an array into two arrays', function(){
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1,6],[3,4])).toEqual([1,3,4,6]);
    expect(merge([1,2],[3,4,5])).toEqual([1,2,3,4,5]);
    expect(merge([1,3,4,8],[2,5,6,6,6,7,9])).toEqual([1,2,3,4,5,6,6,6,7,8,9]);
    expect(merge([2,3,4,7],[1,2,5,6])).toEqual([1,2,2,3,4,5,6,7]);
  });

  it('sorts an array using the split and merge functions recursively', function(){
  	expect(mergeSort([2,5,2,8,3,1])).toEqual([1,2,2,3,5,8]);
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    expect(mergeSort([5,4,3])).toEqual([3,4,5]);
  });

  it('calls itself recursively', function(){
    spyOn(window, 'mergeSort').and.callThrough();
    mergeSort([3,2,1,4]);
    expect(mergeSort.calls.count()).toEqual(7);
  })

});
