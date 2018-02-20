function getFilteredArray( arr, somePredicateFunction){
    let filteredArr = [];
    forEach( arr, (el) => { 
		if(somePredicateFunction(el) === true){
			filteredArr.push(el);
        }
	});
	return filteredArr;
}