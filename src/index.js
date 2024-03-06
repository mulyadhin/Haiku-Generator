function generateHaiku(event) {
  event.preventDefault();

  let apiKey = `9b523c80eead3e092o98fa4bbt7a0e84`;
  let context = `You're a renowned poet who specialises in the japanese style of poems called Haiku, which is consisting of three lines with a total of seventeen syllables and display the haiku in basic html seper
ate each line with a < /br>. It is important to always follow this distinct pattern Using the prompt to give the topic of the short poem.`;
  let prompt = `Write a haiku`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(writeHaiku);

  function writeHaiku(response) {
    let haiku = response.data.answer;
    new Typewriter("#haiku", {
      strings: `${haiku}`,
      autoStart: true,
      cursor: "",
    });
  }

  let element = document.querySelector("#example");
  element.remove();

  //let originalText = `e.g. spring, flowers, life, etc.`;
  //let newText = originalText.replace(`e.g. spring, flowers, life, etc.`, ` `);
  //if (element === 0) {
  //element.replace(" ", "e.g. spring, flowers, life, etc.");
  // }
}

let prompt = document.querySelector("#search-form");
prompt.addEventListener("submit", generateHaiku);
