var A = Number(prompt("Enter the lengs of first side :"));
var B = Number(prompt("Enter the lengs of second side :"));
var C = Number(prompt("Enter the lengs of third side :"));
var AB = A + B;
var AC = A + C;
var BC = B + C;
if ((A <= 0) || (B <= 0) || (C <= 0) || isNaN(A) || isNaN(B) || isNaN(C)) {
	console.log("Incorrect data!");
}
else {
	if ((AB > C) && (AC > B) && (BC > A)) {
		var type;
		var AA = A*A;
		var BB = B*B;
		var CC = C*C;
		var A2B2 = AA + BB;
		var A2C2 = AA + CC;
		var B2C2 = BB + CC;
		if((AA == B2C2) || (BB == A2C2) || (CC == A2B2)){
			type="Right triangle";
		}
		else{
			if(((A == B) && (B!=C)) || ((A == C) && (C!=B)) || ((B == C) && (C!=A))){
				type = "Isosceles";
			}
			else{
				if((A == B) && (B == C)){
					type = "Equilateral";
				}
				else{
					type = "Scalene";
				}
			}
		}
		var p = (A+B+C)/2;
		var area = Math.sqrt(p*(p-A)*(p-B)*(p-C));
		console.log("Type of triangle is", type, " and square is",parseFloat(area.toFixed(2)));
	}    
    else {
	    console.log("The triangle can not be formed !");
    }

 	
}