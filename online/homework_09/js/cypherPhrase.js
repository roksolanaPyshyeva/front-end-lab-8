function cypherPhrase(transformRules, str) {
    let newStr = str.split('');
    getTransformedArray(newStr, (element) => {
        let someObj = Object.keys(transformRules);
        getTransformedArray(someObj, (el) => {
            if (element === el) {
            	newStr[newStr.indexOf(element)] = transformRules[el];
            }
        });
		return newStr;
    });
	return newStr.join('');
}