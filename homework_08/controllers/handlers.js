const fs = require("fs");

exports.get = (req,res) =>{
	const data = JSON.parse(fs.readFileSync('./data/storage.json'));
	res.status(200).send(data);
};
exports.getById = (req,res) => {
	const data = JSON.parse(fs.readFileSync('./data/storage.json'));
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
	const data = JSON.parse(fs.readFileSync('./data/storage.json'));
	if(!req.body.name || !req.body.band || !req.body.instrument){
		res.status(400).send('The information is incorrect !');
	}
	 let star = data.find(function (element) {
        return (element.name === req.body.name && element.band === req.body.band && element.instrument === req.body.instrument);
    });
    if (star) {
        res.status(409).send({"message": "Musician already exist."});
    }else{
		let rockstar = {
			"id" : data.length + 1,
			"name": req.body.name,
			"band" : req.body.band,
			"instrument" : req.body.instrument
		};
		data.push(rockstar);
		fs.writeFile("./data/storage.json", JSON.stringify(data), (error) => {
        	if (error) {
        		return res.sendStatus(500);
        	}
    	});
		res.status(201).send(data);
	}

};
exports.put = (req,res) => {
	const data = JSON.parse(fs.readFileSync('./data/storage.json'));
	let  rockstar = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(!rockstar){
		res.status(404).send('The rockstar with given id was not found !');
	}
	rockstar.name = req.body.name;
	rockstar.band = req.body.band;
	rockstar.instrument = req.body.instrument;
	fs.writeFile("./data/storage.json", JSON.stringify(data), (error) => {
        if (error) {
        	return res.sendStatus(500);
        }
    });
	res.status(200).send(rockstar);
};

exports.delete = (req,res) => {
	const data = JSON.parse(fs.readFileSync('./data/storage.json'));
	const  rockstar = data.find((element) =>{
		return element.id === parseInt(req.params.id);
	});
	if(!rockstar){
		res.status(404).send('The rockstar with given id was not found !');
	}
	const index = data.indexOf(rockstar);
	data.splice(index,1);
	fs.writeFile("./data/storage.json", JSON.stringify(data), (error) => {
        if (error) {
        	return res.sendStatus(500);
        }
    });
	res.status(200).send({"message": "Musician has been successfully removed."});
};

