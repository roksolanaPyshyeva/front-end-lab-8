class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}
function AddRequiredValidation (object){
	if(!object.value){
		console.log("The input value is not correct!");
		object.valid = false;
	}else{
		console.log("Passed required validation!");
		object.valid  = true;
	}
}
function AddMaxLengthValidation (object, maxLength){
	if(object.value.toString().length > maxLength){
		console.log(`The input value is longer then ${maxLength}!`);
		object.valid = false;
	}else{
		console.log("Passed length validation!");
		object.valid  = true;
	}
}
function AddNumberValidation (object){
	if(typeof object.value !== 'number'){
		console.log("The input value is not a number!");
		object.valid = false;
	}else{
		console.log("Passed type validation!");
		object.valid  = true;
	}
}

let numberInput = new NumberInput("Type numbers...");
AddRequiredValidation(numberInput);
console.log(numberInput.valid); //---> false, because of required validator
numberInput.setValue("1");
AddNumberValidation(numberInput);
console.log(numberInput.valid);// ---> false, because of number validator
numberInput.setValue(1);
AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 10);
AddNumberValidation(numberInput);
console.log(numberInput.valid); //---> true, all validators pass
numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput, 10);
console.log(numberInput.valid); //---> false, because of max length validator
