// declare an array to hold all our data
let apiData=[];

let apiURL= "https://api.airtable.com/v0/appKam7Axli4qtEuj/book%20list?api_key=keyCQ5MVQ20V8rRHT";

//these will be unique categories based on your search functions
let bookShelf = [];
let labelShelf = [];
let majorShelf = [];

//const select_menu = document.getElementById("id for select in html");
// const select1_Time = document.getElementById ("Time_dropdown");
const select1_Time = document.getElementById ("Time_dropdown");
const select2_Type = document.getElementById ("Type_dropdown");
const select3_Category = document.getElementById ("Category_dropdown");
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

    //adding an event listener to an html element
    select1_Time.addEventListener('change',function handleChange(event){
    imageSearch1();
    console.log("successfully searched");
   })
    select2_Type.addEventListener('change',function handleChange1(event){
    imageSearch2();
    console.log("successfully searched2");
   })
    select3_Category.addEventListener('change',function handleChange2(event){
    imageSearch3();
    console.log("successfully searched3");
   })
}

 getData();


 //getData();
 //let Label = apiData[i].Label;
//for labelcategory in Label{
//    labelshelf.push(labelcategory);
// }

 function makeDropdown(){
   //iritate over all the description(cartoon shows)
   for (let i = 0; i< apiData.length;i++){
        let TimeCreated = apiData[i].TimeCreated;
        bookShelf.push(TimeCreated);
 }
  bookShelf = removeDuplicates(bookShelf);
  console.log(bookShelf);



   for (let i = 0; i< apiData.length;i++){
        let LabelForMajor= apiData[i].LabelForMajor;
        labelShelf.push(LabelForMajor);
 }
  labelShelf = removeDuplicates(labelShelf);
  console.log(labelShelf);



   for (let i = 0; i< apiData.length;i++){
        let Major= apiData[i].Major;
        majorShelf.push(Major);
 }
  majorShelf = removeDuplicates(majorShelf);
  console.log(majorShelf);






  //for every show in booksehlf, add a new option in the select menbu
  bookShelf.forEach(element => {
      let new_option = document.createElement("option");
      new_option.className = "option";
      new_option.innerHTML = element;
      new_option.value = element;
      select1_Time.appendChild(new_option);
  })
   labelShelf.forEach(element => {
      let new_option = document.createElement("option");
      new_option.className = "option";
      new_option.innerHTML = element;
      new_option.value = element;
      select2_Type.appendChild(new_option);
  })
   majorShelf.forEach(element => {
      let new_option = document.createElement("option");
      new_option.className = "option";
      new_option.innerHTML = element;
      new_option.value = element;
      select3_Category.appendChild(new_option);
  })

}

function removeDuplicates(arr){
   return arr.filter((item,index) => arr.indexOf(item) === index);
}

// //to search for like correct cartoon characters and display their image
// function imageSearch1(){
//    console.log(select1_Time.value);

//    //filter
//    const results = apiData.filter((entry) => {
//       const TimeCreatedMatch = entry.TimeCreated.includes(select1_Time.value);
//       return TimeCreatedMatch;
//    });

//    const results1 = apiData.filter((entry) => {
//       const LabelMatch = entry.LabelForMajor.includes(select_menu2.value);
//       return LabelMatch;
//    });

//    const results2 = apiData.filter((entry) => {
//       const majorMatch = entry.Major.includes(select3_Category.value);
//       return majorMatch;
//    });

//    // renderSortedImages(results, image_container);
//    // renderSortedImages(results1, image_container);
//    renderSortedImages(results2, image_container);
// }

function imageSearch1(){
   console.log(select1_Time.value);

   //filter
   const results = apiData.filter((entry) => {
      const TimeCreatedMatch = entry.TimeCreated.includes(select1_Time.value);
      return TimeCreatedMatch;
   });
   renderSortedImages(results, image_container);

}

function imageSearch2(){
   console.log(select2_Type.value);

   //filter
   const results1 = apiData.filter((entry) => {
      const LabelMatch = entry.LabelForMajor.includes(select2_Type.value);
      return LabelMatch;
   });
   renderSortedImages(results1, image_container);
}

function imageSearch3(){
   console.log(select3_Category.value);

   //filter
   const results2 = apiData.filter((entry) => {
      const majorMatch = entry.Major.includes(select3_Category.value);
      return majorMatch;
   });
   renderSortedImages(results2, image_container);
}




function renderSortedImages(sortedData, container){
   container.innerHTML ="";

   sortedData.forEach((entry,index) => {
      const image = document.createElement("img");
      image.src= entry.Cover[0].url;
       container.appendChild(image);
       image.className = "coverCss";

       let title = document.createElement("h3");
       title.innerHTML = entry.BookName;
       container.appendChild(title);
       title.className = "titleCss";


       // // if something exist,show them.
       // if (entry.NoteFromMe) {
       //   let note = document.createElement("h4");
       //   note.innerHTML = entry.NoteFromMe;
       //   container.appendChild(note);
       //   note.className = "reviewCss";
       // }

   })
}

// -------------------------------------------------
//this is function for dark mode and day mode
function myFunction1() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction2() {
   var element = document.body;
   element.classList.toggle("day-mode");
}






















