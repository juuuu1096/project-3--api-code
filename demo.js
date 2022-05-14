
//this is function for dark mode and day mode
function myFunction1() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction2() {
   var element = document.body;
   element.classList.toggle("day-mode");
}


// declare an array to hold all our data
let apiData=[];

let apiURL= "https://api.airtable.com/v0/appKam7Axli4qtEuj/book%20list?api_key=keyCQ5MVQ20V8rRHT";

//these will be unique categories based on your search functions
let bookShelf = [];

const select_menu = document.getElementById ("book_select");
const image_container = document.getElementById("image_container");

//only to request data from the api
async function fetchData(url){
   let response = await fetch(url);
   let jsonData = await response.json();
   return jsonData;
}

//which will also push data into apiData[] to make it more usable
async function getData(){
   let data = await fetchData(apiURL);
   // let data2= await fetchData(apiURL);

   //reducing the array and making it simpler
   for(let i = 0; i < data.records.length; i++){
       let record = data.records[i].fields;
       apiData.push(record);
    }

    console.log(apiData);

    makeDropdown();
 }

 getData();


 //getData();

 function makeDropdown(){
   //iritate over all the description(cartoon shows)
   for (let i = 0; i< apiData.length;i++){
        let bookName = apiData[i].BookName;
        bookShelf.push(bookName);
 }
  bookShelf = removeDuplicates(bookShelf);
  console.log(bookShelf);

  //for every show in booksehlf, add a new option in the select menbu
  bookShelf.forEach(element => {
      let new_option = document.createElement("option");
      new_option.className = "option";
      new_option.innerHTML = element;
      new_option.value = element;
      select_menu.appendChild(new_option);
  })

}

function removeDuplicates(arr){
   return arr.filter((item,index) => arr.indexOf(item) === index);
}

