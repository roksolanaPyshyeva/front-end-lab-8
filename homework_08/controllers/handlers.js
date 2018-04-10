const fs = require("fs");
let file = fs.readFileSync('./data/storage.json');
const data = JSON.parse(file);
exports.get = (req,res) =>{
	res.status(200).send(data);
};
exports.getById = (req,res) => {
	let  rockstar = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(!rockstar){
		res.status(404).send('The rockstar with given id was not found !');
	}else{
		res.status(200).send(rockstar);
	}
};
exports.post = (req,res) =>{
	if(!req.body.name || !req.body.band || !req.body.instrument){
		res.status(400).send('The information is incorrect !');
	}

	let  star = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(star){
		res.status(409).send('{"message": "Musician already exist."}');
		return;
	}else{
		let rockstar = {
			"id" : data.length + 1,
			"name": req.body.name,
			"band" : req.body.band,
			"instrument" : req.body.instrument
		};
		data.push(rockstar);
		res.status(201).send(data);
	}

};
exports.put = (req,res) => {
	let  rockstar = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(!rockstar){
		res.status(404).send('The rockstar with given id was not found !');
	}
	rockstar.name = req.body.name;
	rockstar.band = req.body.band;
	rockstar.instrument = req.body.instrument;
	res.status(200).send(rockstar);
};

exports.delete = (req,res) => {
	const  rockstar = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(!rockstar){
		res.status(404).send('The rockstar with given id was not found !');
	}
	const index = data.indexOf(rockstar);
	data.splice(index,1);
	res.status(200).send({"message": "Musician has been successfully removed."});
};

