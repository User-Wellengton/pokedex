import axios from "axios";

const Id = document.getElementById("Id") as HTMLDivElement;
const Nome = document.getElementById("Nome") as HTMLDivElement;
const app = document.getElementById("app") as HTMLDivElement;


async function obterDadosJson(nome: string) {

  try {
    const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`, { responseType: "json" });

    const pokemon = resposta.data;

    const _id = document.createElement("h2");
    _id.innerText = pokemon.id;


    const _nome = document.createElement("h3");
    _nome.innerText = pokemon.species.name;


    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    

    Id.appendChild(_id);
    Nome.appendChild(_nome);
    app.appendChild(img);


  } catch (erros) {
    console.log(erros);
  }

}


const formulario = document.getElementById("formulario") as HTMLFormElement;

const txtNome = document.getElementById("txtNome") as HTMLInputElement;

formulario.addEventListener("submit", (evt: SubmitEvent) => {
  evt.preventDefault();

  

  obterDadosJson(txtNome.value)
});