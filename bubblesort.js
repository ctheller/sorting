var bubbleSort = function(array){
	for (var i = 1; i < array.length; i++){
		var swapCounter = 0;
		for (var j = 0; j < array.length-i; j++)
		{
			if (array[j]>array[j+1]){
				swap(array, j, j+1)
				swapCounter++;
			}
		}
		if(swapCounter === 0) return array;
	}
	return array;
};

var swap = function(array,a,b){
	var holder = array[b];
	array[b] = array[a];
	array[a] = holder; 
	return array;
}

