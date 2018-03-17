function decypherPhrase(transformRules, str) {
	let newTransformRules = {};
	for (let key in transformRules){
		newTransformRules[transformRules[key]] = key;
    }
	let newStr = cypherPhrase(newTransformRules, str);
	return newStr;
}