function reverseNumber( number ){
	let numberString = Math.abs(number) + "";
	if(number< 0){
		numberString = numberString.split("").reverse().join("") ;
		numberString = "-" + numberString;
		return Number(numberString);
    }
    return Number(numberString.split("").reverse().join(""));
}