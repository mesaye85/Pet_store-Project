console.log("executed");

//object literal for the salon
const salon = {
  name: "The Fashion Pet",
  phone: "555-555-5555",
  address: {
    city: "Jacksonville",
    ave: "San Jose",
    number: "12"
  },
  pets: []
}

console.log(salon);
let {
  name,
  phone,
  address: {
    city,
    number,
    ave
  }
} = salon;
console.log(city);


//document.getElementById("info").innerHTML="<p>"+name+"<b>"+city+"</b></p>";

document.getElementById("info").innerHTML = `
<p class="footer-info"> ${name}
<b>${city}, ${ave} ${number} </b>
<br></br>
${phone}
</p>`; // template String

//object constructor for the pets
var c = 1;
class Pet {
  constructor(name, age, type, breed, gender, service, ownersName, contactPhone, email,date) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.ownerName = ownersName;
    this.contactPhone = contactPhone;
    this.email = email;
    this.date= date;
    this.id = c;
    c++;


  }
}
const scooby = new Pet("Scooby", 50, "Dog", "Dane", "Male", "Full service", "Shaggy", "555-555-5555", "davemat@gmail.com","08-20-2020");
console.log(scooby);
const scrapy = new Pet("Scrapy", 30, "Dog", "Dane", "male", "Nails cut", "Shaggy", "555-555-5555", "dogwhisperer@gmail.com","08-20-2020");
console.log(scrapy);
// add two more objects
// add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);

//get the inputs save in vars usint id
var txtpetname = document.getElementById("petname");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
var txtgender = document.getElementById("gender");
var txtservice = document.getElementById("service");
var txtowner = document.getElementById("owner");
var txtcontact = document.getElementById("contact");
var txtemail = document.getElementById("email");
var txtdate = document.getElementById("date");

//register function
function register() {

  console.log(txtpetname.value);
  console.log(txtage.value);
  console.log(txttype.value);
  console.log(txtbreed.value);
  console.log(txtgender.value);
  console.log(txtservice.value);
  console.log(txtowner.value);
  console.log(txtcontact.value);
  console.log(txtemail.value);
  console.log(txtdate.value);
  //get the value from the txt 

  //creat the pet object
  var thePet = new Pet(txtpetname.value, txtage.value, txttype.value, txtbreed.value, txtgender.value, txtservice.value, txtowner.value, txtcontact.value, txtemail.value,txtdate.value);
  console.log(thePet);
  //push the pet into the array
  salon.pets.push(thePet);
  //console.log(salon.pets);
  clear();
  displayTable(thePet);
  //display();

}




//clar the input

function clear() {
  txtpetname.val = "";
  txtage.val = "";
  txttype.val= "";
  txtbreed.val = "";
  txtgender.val = "";
  txtservice.val= "";
  txtowner.val = "";
  txtcontact.val = "";
  txtemail.val = "";
  txtdate.val="";
};


function displayTable(aPet) {
  var tbody = document.getElementById('rowPet');
  var row = `<tr id="${aPet.id}">
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.type}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.service}</td>
                <td>${aPet.contactPhone}</td>
                <td>${aPet.email}</td>
                <td>${aPet.date}</td>
                <td> <button type="button" class="btn btn-danger" onclick="deletePet(${aPet.id})">Delete</button></td>
                </tr>`;
  tbody.innerHTML += row;
}
displayTable(scooby);
displayTable(scrapy);

function deletePet(petID) {

  var tr = $('#' + petID);
  var indexDelete;

  for (var i = 0; i < salon.pets.length; i++) {
    var selected = salon.pets[i];
    if (selected.id === petID)
      indexDelete = i;
  }


  salon.pets.splice(indexDelete, 1);
  tr.remove();

  function searchPet() {
    var ss = $('#petSearch').val();
    var searchString = ss.toLowercase();
    if (selcted.name.toLowerCase() === searchString) {
      $("#" + selected.id).addClass('active');
    }
  }
}
function init(){

  displayTable(scooby);
  displayTable(scrapy);

  $('#btn-register').click(register);
  $('#contact').keypress(function(e){
    console.log(e.key);
    if(e.key==="Enter"){
      console.log("Add the pet");
      register();
    }
    });
  
}

$(document).ready(()=>init());


