
//this is function for dark mode and day mode
function myFunction1() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction2() {
   var element = document.body;
   element.classList.toggle("day-mode");
}


//this is apidata
let apiURL= "https://api.airtable.com/v0/appKam7Axli4qtEuj/book%20list?api_key=keyCQ5MVQ20V8rRHT";

//this is a global variable to store all the data from the database
let apiData;

//this is where you call your data

//asynchronous
async function getData(url){
 	let response = await fetch(url);
 	let jsonData = await response.json()
 	return jsonData;
}

async function main(){
	apiData = await getData(apiURL);
	console.log(apiData);
}

main();

