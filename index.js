
async function getQuote() {
    // Get the quote from the API
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

function updateImage(image) {
    // Update the image on the page
    const img = document.querySelector('#image');
    img.src = image;
}

function updateQuote(quote) {
    // Update the quote on the page
    const quoteElement = document.querySelector('#quote');
    quoteElement.innerText = quote;
}

const data = await getQuote();

if (data[0]) {
    const { image, quote, character } = data[0];
    updateImage(image)
    updateQuote(quote)
}

const button = document.querySelector('#quote-button');

button.addEventListener('click', async () => {
    const data = await getQuote();
    if (data[0]) {
        const { image, quote, character } = data[0];
        updateImage(image)
        updateQuote(quote)
    }
}
)

console.log(data)