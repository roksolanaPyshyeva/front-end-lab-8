// Your code goes here

let root = document.getElementById('root');

let container = document.createElement('div');
root.appendChild (container);
container.className = "thumbnails";
function tankPreview ( elem, parent){
  let heading = document.createElement('h1');
  heading.innerHTML = 'Most popular tanks';
  parent.appendChild(heading);
  let flexBox = document.createElement('div');
  flexBox.className = 'flex-box';
  tanks.forEach(key => {
    let boxItem = document.createElement('div');
    let tankImg = document.createElement('img');
        let countryFlag = document.createElement('img');
        boxItem.className = 'box-item';
        tankImg.className = 'tank-img';
        countryFlag.className = 'country-flag';
        countryFlag.setAttribute('title', key.country);
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        let level = document.createElement('h4');
        level.className = 'level';
        h4.className = 'name';
        level.innerHTML = key.level;
        h4.innerHTML = key.model;
        h4.setAttribute('title', key.model);
        div.appendChild(countryFlag);
        div.appendChild(level);
        div.appendChild(h4);
        div.className = 'model';
        
        countryFlag.src = key.country_image;
        tankImg.src = key.preview;
        boxItem.appendChild(tankImg);
        //boxItem.appendChild(countryFlag);
        boxItem.appendChild(div);
        flexBox.appendChild(boxItem);
        
        boxItem.addEventListener('click', () => {
            location.hash = key.model;
        });
       
  });
  parent.appendChild(flexBox);
  return parent;
}

function details(tank) {
    let details = tank.details;
    return ` <div class="tank-details">
            <div class="first-div">
              <h1>
                <img class="detail-flag" src="${tank.country_image}" title="${tank.country}"/>${tank.model} (level ${tank.level})
              </h1>
               <h1 class="preview">Preview</h1>
               <img class="tank-model" src="${tank.preview}">
               <span class="back-link">Back to list view</span>
               </div>
               
               <div class="second-div">
               <h1 class="preview-table">Characteristic</h1>
               <table>
                <tr>
                    <th>
                        damage
                    </th>
                    <th>
                        ${details.damage}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        breoning
                    </th>
                    <th>
                        ${details.breoning}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        attack speed
                    </th>
                    <th>
                        ${details.attack_speed}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        time of targeting
                    </th>
                    <th>
                        ${details.time_of_targeting}
                    </th>
                </tr>
                
                  <tr>
                    <th>
                        ammunition
                    </th>
                    <th>
                        ${details.ammunition}
                    </th>
                </tr>
               </table>
              </div>
           </div>`
}

function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(el => {
        if (el.model === model) {
            root.innerHTML = details(el);
        }
    });
    const backLink = document.getElementsByClassName('back-link');
    backLink[0].addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
}

tankPreview ( tanks, container );
root.appendChild (container);
window.onhashchange = tankDetail;


