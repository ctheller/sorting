var split = function (arr) {
	if(arr.length<2) {
		return arr;
	}
	else {
		var halfLength = Math.floor(arr.length/2);
		return [arr.slice(0,halfLength),arr.slice(halfLength)];

	}
}


var merge = function (arr, arr2) {
	var new_array = [];
	while (arr.length && arr2.length){		
		if (arr[0]>arr2[0]){
			new_array.push(arr2.shift());
		}
		else if (arr[0]<arr2[0]){
			new_array.push(arr.shift());
		}
		else {
			new_array.push(arr.shift());
			new_array.push(arr2.shift());
		}
	}
	if (arr.length){
		new_array = new_array.concat(arr);
	}
	else{
		new_array = new_array.concat(arr2);
	}
	return new_array;
};

var mergeSort = function(array){
	var retArray = [];
	if(array.length<2)
		return array;
	else
		return merge(mergeSort(split(array)[0]),(mergeSort(split(array)[1])));
}