function getTransformedArray( arr, someFunction){
    let transformedArr = [];
    forEach( arr, (el) => { 
    	transformedArr.push( someFunction(el))
    });
	return transformedArr;
}