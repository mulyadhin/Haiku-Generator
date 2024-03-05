function getHaiku() {
  let text = document.getElementById("prompt").value;
  let haiku = document.querySelector("#haiku");
  console.log(text);

  // new Typewriter("#haiku", {
  // strings: `${response}`,
  // autoStart: true,
  //});
}

let submit = document.querySelector("#prompt");
submit.addEventListener("submit", getHaiku);
