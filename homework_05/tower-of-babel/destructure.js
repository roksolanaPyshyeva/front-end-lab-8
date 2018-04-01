var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
var {name, birth} = json;
var {family} = name;
var {day} = birth;
var familyName = family;
var birthDay = day;
console.log(familyName);
console.log(birthDay);