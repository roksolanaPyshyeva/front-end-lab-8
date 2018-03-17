function  collectIds( arr ){
    let filteredArr = getFilteredArray( arr, (item) => { 
    	return item.rating > 3;
    });
	filteredArr = getTransformedArray( filteredArr, (item) =>{ 
		return item.id;
	});
	return filteredArr;
}