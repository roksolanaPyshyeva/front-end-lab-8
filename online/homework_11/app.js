var rootNode = document.getElementById("root");

let master = document.createElement("ul");
function createTree(el, parent) {
	for( let i=0; i< el.length; i++){
		let ul = document.createElement("ul");
	    let li = document.createElement("li");
	    let h4 = document.createElement("h4");
	    let icon = document.createElement("i");
	    
	    icon.className = "material-icons";
	    if (el[i].folder) {
      		icon.innerHTML = "folder";
    	} else {
     		icon.innerHTML = "insert_drive_file";
     		h4.className = "file";
    	}
    	let span = document.createElement("span");
	    span.innerHTML = el[i].title;
	    h4.appendChild(icon);
	    h4.appendChild(span);
	    li.appendChild(h4);
	    parent.appendChild(li);
	    h4.addEventListener("click", open);
	    if (el[i].children) {
	    	li.appendChild(ul);
	    	if (el[i].folder) {
	      		icon.innerHTML = "folder";
	    	} else {
	        	icon.innerHTML = "insert_drive_file";
	        	h4.className = "file";
	    	}
	    	ul.style.display = "none";
	    	createTree(el[i].children, ul);
    	} else if (el[i].folder && !el[i].children) {
      		parent.appendChild(ul);
      		let emptyFolder= document.createElement("li");
			emptyFolder.innerHTML = "Folder is empty";
			li.appendChild(emptyFolder);
			emptyFolder.className = "empty";
			emptyFolder.style.display = "none";
    	}

	}
 
}
function open(elem) {
	if (this.nextSibling.style.display === "none") {
		this.nextSibling.style.display = "block";
		this.firstChild.innerHTML = "folder_open";
	} else {
		this.nextSibling.style.display = "none";
		this.firstChild.innerHTML = "folder";
	}

}

createTree(structure, master);
rootNode.appendChild(master);