const fetchPokemon = async () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  let data = await fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
      pokeImage("assets/pokemon_sad.gif");
    } else {
      return res.json();
    }
  });

  if (data) {
    console.log(data);
    let pokeImg = data.sprites.front_default;
    let pokeInfo = data.abilities;
    let pokeInfoName = data.name;
    let pokeInfoWeight = data.weight;
    let pokeInfoHeight = data.height;
    let pokeInfoType = data.types;
    let pokeInfoId = data.id;
    pokeImage(pokeImg);
    pokeData(pokeInfo);
    pokeNames(pokeInfoName);
    pokeWeight(pokeInfoWeight);
    pokeHeight(pokeInfoHeight);
    pokeType(pokeInfoType);
    pokeId(pokeInfoId);
    console.log(pokeImg);
  }
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const pokeData = (abilities) => {
  const pokeAbilities = document.getElementById("abilities");
  const abilitiesName = abilities.map((item) => item.ability.name);
  pokeAbilities.innerHTML = `<b> Habilidades: </b> ${abilitiesName}`;
};

const pokeNames = (namepokemon) => {
  const pokeNombre = document.getElementById("nombre");
  nameP = namepokemon;
  pokeNombre.innerHTML = "<b> Nombre: </b>" + nameP;
};

const pokeWeight = (weightpokemon) => {
  const pokeWeight = document.getElementById("weightPokemon");
  weightP = weightpokemon;
  pokeWeight.innerHTML = "<b> Peso:</b>" + weightP;
};

const pokeHeight = (heightpokemon) => {
  const pokeHeight = document.getElementById("heightPokemon");
  heightP = heightpokemon;
  pokeHeight.innerHTML = "<b> Altura:</b>" + heightP;
};

const pokeType = (typepokemon) => {
  const pokeType = document.getElementById("typePokemon");
  const typeP = typepokemon.map((item) => item.type.name);
  pokeType.innerHTML = "<b> Tipo: </b>" + typeP;
};

const pokeId = (idpokemon) => {
  const pokeId = document.getElementById("id");
  idP = idpokemon;
  pokeId.innerHTML = "<b> N°: </b>" + idP;
};
