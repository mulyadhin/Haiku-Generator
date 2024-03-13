function generateHaiku(event) {
  event.preventDefault();

  let apiKey = `9b523c80eead3e092o98fa4bbt7a0e84`;
  let context = `You're a renowned poet who specialises in the japanese style of poems called Haiku, which is consisting of three lines with a total of seventeen syllables. display the haiku in basic html
  ALWAYS follow this distinct pattern Using the prompt to give the topic of the short poem. Write the heading with 30px`;
  let prompt = `Write a haiku`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(writeHaiku);

  function writeHaiku(response) {
    loading.classList.add("hidden");
    let haiku = response.data.answer;
    new Typewriter("#haiku", {
      strings: `${haiku}`,
      autoStart: true,
      cursor: "",
    });
  }

  let element = document.querySelector("#example");
  element.classList.add("hidden");

  let loading = document.querySelector("#loader");
  loading.classList.remove("hidden");
}

let prompt = document.querySelector("#search-form");
prompt.addEventListener("submit", generateHaiku);
