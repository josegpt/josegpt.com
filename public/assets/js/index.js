import { Elm } from "../../../src/Main.elm";

const storedLang = localStorage.getItem("josegpt-lang");
console.log(storedLang);

const app = Elm.Main.init({
  node: document.querySelector("#app"),
  flags: storedLang,
});

app.ports.setLang.subscribe((lang) => {
  console.log(lang);
  localStorage.setItem("josegpt-lang", lang);
});
