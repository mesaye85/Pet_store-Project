function display() {

  var pets = salon.pets;
  const dogImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnviRH-MAE1UgsxWb0NiiS7ZqR1CUI76YwEw&usqp=CAU';
  const catImg = "cat.jpeg";
  const birdImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT25ZpWnuuBJS6682AZrTYMer7opOlggcflFg&usqp=CAU";
  const noTypeImg = "No Pet Selected";
  const petSection = document.getElementById('pets');
  var text = ""
  for (var i = 0; i < pets.length; i++) {

    if (pets[i].type.length === "Dog") {
      img = dogImg;
    } else if (pets[i].type === "cat") {
      img = catImg;
    } else if (pets[i].type === "bird") {
      img = birdImg;
    } else {
      img = noTypeImg;
    }

    console.log(pets[i]);
    text += `
        <div class="pet">
            <h2>${pets[i].name}</h2>
            <img class="img" src="${img}">
            <p>${pets[i].age}</p>
            <p>${pets[i].type}</p>
            <p>${pets[i].breed}</p>
            <p>${pets[i].gender}</p>
            <p>${pets[i].service}</p>
            <p>${pets[i].ownerName}</p>
            <p>${pets[i].contactPhone}</p>
            <p>${pets[i].email}</p>
            <p>${pets[i].date}</p>
     
        </div>
    `;

  }
  petSection.innerHTML = text;
}
display();