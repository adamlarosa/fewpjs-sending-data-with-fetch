// Add your code here

let destinationURL = "http://localhost:3000/users";

let formData = {
	dogName: "Byron",
	dogBreed: "Poodle"
};

let configurationObject = {
	//method: "POST",
	headers: {
	  "Content-Type": "application/json",
	  "Accept": "application/json"
	},
	body: JSON.stringify(formData)
};		


function submitData(name, email){
	return fetch(destinationURL, {
	    method: "POST",
	    headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	    },
	    body: JSON.stringify({
		name,
		email
	    })
	})
	    .then(response => {
		return response.json();
	    })
	    .then(object => {
	    	document.body.innerHTML = object["id"]
	    })
	    .catch(error => {
		document.body.innerHTML += error

	    })
	;
	let returnMessage = "MEOW";
	return returnMessage;
}


submitData();
