const memeGeneratorBtn = document.querySelector(".main_meme_generatore .meme_generate_btn");
const memeGeneratorTitle = document.querySelector(".main_meme_generatore .meme_title");
const memeGeneratorImg = document.querySelector(".main_meme_generatore img");
const memeGeneratorAuthor = document.querySelector(".main_meme_generatore .memes_author");

memeGeneratorBtn.addEventListener("click", () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(res => res.json())
        .then(data => {
            memeGeneratorImg.src = data.url;
            memeGeneratorAuthor.innerText = `Meme by : ${data.author}`;
            memeGeneratorTitle.innerText =data.title;
        })
        .catch(error => {
            console.log(error);
        })
})
