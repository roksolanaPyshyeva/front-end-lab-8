var N = Number(prompt("Enter the natural number (0-20) :"));
var block = "[~]";
var space = "   ";
var pyramid = "";
if(((N % 1) != 0) || (N <= 0) || (N > 20)){
	console.error("Incorrect data!");
}else{
	
	for(var b = 1, s = (N-1); b <= (N*2-1); b+=2, s--){
		for( var i = s; i>0; i--){
			pyramid += space;
		}
		for(i = 1; i <= b; i++){
			pyramid += block;
		}
		pyramid += "\n"
	}
	console.log(pyramid);	
}