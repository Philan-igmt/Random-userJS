fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //storing the data to results
    let results = data.results;
    console.log(results);

    //getting the unOrdered list from the html file
    let list = document.getElementById("list");
    results.map((individual) => {
      //creating the li for the UL and the link
      let li = document.createElement("li");
      let link = document.createElement("a");

      link.innerHTML = individual.name;
      link.href = individual.url;

      li.className = "eachPokemon";
      //pushing the link an dthe li to the ul
      li.appendChild(link);
      list.appendChild(li);
    });
  });
