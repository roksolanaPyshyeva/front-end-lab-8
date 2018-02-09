var eur = Number(prompt("Enter the amount of EURO :"));
var usd = Number(prompt("Enter the amount of USD :"));
var eurER = 33.8565;
var usdER = 27.4609;
if((eur >= 0) && (usd >= 0)){""
	console.log("",parseFloat(eur.toFixed(2)), "euros are equal", parseFloat((eur*eurER).toFixed(2)), "UAH,", parseFloat(usd.toFixed(2)), "dollars are equal", parseFloat((usd*usdER).toFixed(2)), "UAH, one euro is equal", parseFloat((eurER/usdER).toFixed(2)), " dollars.");
}
else{
	console.log("Incorrect data");
}