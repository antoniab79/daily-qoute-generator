function displayQoute(response) {
    new Typewriter("#qoute", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 30,
    });
}

function generateQoute(event) {
    event.preventDefault();

    let userTopic = document.querySelector("#user-topic");
    let apiKey = "1e5e2f20350d3toa44fe9d489eb954a7";
    let prompt = `Please generate a daily qoute of the day about ${userTopic.value} but don't include the title`; 
    let context = "You are a creative AI assistant who loves to generate qoutes. Generate your answer in basic HTML but don't mention HTML in your answer. Sign your qoute at the bottom: Generated by SheCodes AI in a <strong> element.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let qouteElement = document.querySelector("#qoute");
    qouteElement.classList.remove("hidden");
    qouteElement.innerHTML = `<span class="blink">🍾 Generating a daily qoute about ${userTopic.value} for you</span>`;


    axios.get(apiUrl).then(displayQoute);
}

let qouteFormElement = document.querySelector("#qoute-generator");
qouteFormElement.addEventListener("submit", generateQoute);