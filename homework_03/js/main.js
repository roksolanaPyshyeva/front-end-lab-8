function Company({name,owner,maxCompanySize}){
	this.maxCount = maxCompanySize;
	this.owner = owner;
	this.name = name;
	let _employees = [];
	this._dateOfCreation = Date(Date.now());
	let _logs = `${this.name} was created in ${this._dateOfCreation}\n`;
	this.addNewEmployee = function(employee){
		if (!(employee instanceof Employee)) {
            console.error("Please try to add Employee instance");
            return;
        };
        if(_employees.length >= this.maxCount){
        	let id = this.getLowestSalaryEmployee();
        	this.removeEmployee(id);
        }
        employee.hire(this.name);
        _employees.push(employee);
        let date = Date(Date.now());
		_logs += `${employee.name} starts working at ${this.name} in ${date}\n`;
	}
	this.getLowestSalaryEmployee = function(){
		let id = 0;
		for(let i=1;i<_employees.length;i++){
			if(_employees[i].salary< _employees[id].salary){
				id = i;
			}
		}
		return id;
	}
	this.removeEmployee = function(id){
		_employees[id].fire();
		let date = Date(Date.now());
		_logs += `${_employees[id].name} ends working at ${this.name} in ${date}\n`;
		_employees.splice(id, 1);
	}
	this.getAvarageSalary = function(){
		let salary = 0;
		for(let i = 0;i < _employees.length; i++){
			salary += _employees[i].salary;
		}
		return (salary/_employees.length);
	}
	this.getEmployees = function(){
		return _employees;
	}
	this.getFormattedListOfEmployees = function(){
		let formatedList = '';
		for(let i = 0; i< _employees.lengh; i++){
			formatedList += `${_employees[i].name} -  works in ${_employees[i].companyName.name} ${_employees[i].getTimeInCompany()} seconds\n`;
		}
	}
	this.getAvarageAge = function(){
		let age = 0;
		for(let i = 0;i < _employees.length; i++){
			age += _employees[i].age;
		}
		return (age/_employees.length);	
	}
	this.getHistory = function(){
		return _logs;
	}

}

function Employee({name, primarySkill, age, salary}){
	this.name = name;
	this.primarySkill = primarySkill;
	this.age = age;
	this.salary = salary;
	let _history = '';
	let _totalWorkTime = 0;
	let _currentCompanyName = '';
	let _startWorkTime = 0;
	function _checkNewSalary(oldSalary,newSalary){
		if(oldSalary < newSalary){
			return true;
		}else{
			return false;
		}
	}
	this.getSalary = function(){
		return this.salary;
	}
	this.setSalary = function(newSalary){
		if(_checkNewSalary(this.salary, newSalary)){
			this.salary = newSalary;
			_history += `change salary from ${this.salary} to ${newSalary}\n`;
		}else{
			_history += `try to change salary from ${this.salary} to ${newSalary}\n`;
		}
	}
	this.getWorkTimeInSeconds = function(){
		let total = 0;
        if (_currentCompanyName) {
            total += (Date.now() - _startWorkTime);
        };
        total += _totalWorkTime;
        return total / 1000;
	}
	this.hire = function( companyName){
		_currentCompanyName = companyName;
		_startWorkTime = Date.now();
		let startDate = new Date(Date.now());
		_history += `${this.name} is hired to ${_currentCompanyName} in ${startDate}\n`;
	}
	this.fire = function (){
		let lastDay = new Date(Date.now());
		_history += `${this.name} is fired from ${_currentCompanyName} in ${lastDay}\n`;
		_currentCompanyName = '';
		_totalWorkTime += (Date.now() - _startWorkTime);
	}
	this.getHistory = function(){
		return _history;
	}
	this.getTimeInCompany = function() {
        return (Date.now() - _startWorkTime) / 1000;
    };
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);
console.log(vasyl.getHistory());

console.log(epam.getAvarageSalary()); //
console.log(epam.getAvarageAge());  
epam.addNewEmployee(5,6,9,5); //

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); 
}, 5000);
vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());

