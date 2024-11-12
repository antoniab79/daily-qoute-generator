function generateQoute(event) {
    event.preventDefault();

    new Typewriter("#qoute", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 30,
    });
}

let qouteFormElement = document.querySelector("#qoute-generator-form");
qouteFormElement.addEventListener("submit", generateQoute);