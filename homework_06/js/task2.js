let validateButton = document.getElementById('validate-btn');
let loadAnimation = document.getElementById('circularG');
let details = document.getElementById('ip-details');
let ipInput = document.getElementById('ip-input');
let h3 = document.getElementById('validation');
validateButton.style.display = "none";
loadAnimation.style.display = "none";
let data;
function trackIP(){
    loadAnimation.style.display = "block";
    let ip = ipInput.value;
    data = http.get(`https://ipapi.co/${ip}/json/`);
    data.then((data) =>{
        let table= document.createElement("table");
        loadAnimation.style.display = "none";
        let ipObject = JSON.parse(data) ;
        for(let key in ipObject){
            let tr = document.createElement('tr');
            let tdForKey = document.createElement('td');
            let tdForValue = document.createElement('td');
            tdForKey.innerHTML = key;
            tdForValue.innerHTML = ipObject[key];
            tr.appendChild(tdForKey);
            tr.appendChild(tdForValue);
            table.appendChild(tr);
        }
        details.appendChild(table);
    });
    validateButton.style.display = "block";
}

function validate(){
    loadAnimation.style.display = "block";
    let url = "https://shrouded-garden-94580.herokuapp.com/";
    data.then(data => {
        loadAnimation.style.display = "none";
        http.post(url, data).then(value => h3.innerHTML = value);
    });
}