function generateHaiku(event) {
  event.preventDefault();

  let element = document.querySelector("#example");
  element.remove();

  new Typewriter("#haiku", {
    strings: `Generating...`,
    autoStart: true,
    cursor: "",
  });
}

let prompt = document.querySelector("#search-form");
prompt.addEventListener("submit", generateHaiku);
