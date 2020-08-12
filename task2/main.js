fetch("https://randomuser.me/api/?results=10")
  .then((res) => res.json())
  .then((data) => {
    let profiles = data.results;
    console.log(profiles);

    // looping through
    profiles.map((user) => {
      //getting the div from the html file
      let outerDiv = document.getElementById("everything");

      //creating a card and imge-card divs
      let divCard = document.createElement("div");
      let divImage = document.createElement("div");
      let diVContent = document.createElement("div");
      let image = document.createElement("img");
      let title = document.createElement("span");
      let location = document.createElement("p");
      let cell = document.createElement("p");
      let gender = document.createElement("p");
      let age = document.createElement("p");
      let name = document.createElement("span");

      //giving the classnames
      divCard.className = "card";
      divImage.className = "card-image";
      diVContent.className = "card-content";

      // setting the values
      image.src = user.picture.medium;
      title.innerHTML = user.name.title;
      location.innerHTML = `City: ${user.location.city}`;
      age.innerHTML = `Age: ${user.dob.age}`;
      gender.innerHTML = `Gender: ${user.gender}`;
      cell.innerHTML = `Cell number: ${user.cell}`;
      name.innerHTML = `${user.name.first}`;

      //   appending the image and the divs
      divImage.appendChild(image);
      diVContent.appendChild(divImage);
      diVContent.appendChild(title);
      diVContent.appendChild(name);
      diVContent.appendChild(gender);
      diVContent.appendChild(age);
      diVContent.appendChild(location);
      diVContent.appendChild(cell);
      divCard.appendChild(diVContent);
      outerDiv.appendChild(divCard);
    });
  });
//   });
