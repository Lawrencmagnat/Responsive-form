// // connecting our html to our Js using QuerySelector
// const generateMemeBtn = document.querySelector(
//     ".meme-generator .generate-meme-btn"
// );

// const memeImage = document.querySelector(".meme-generator img");
// const memeTitle = document.querySelector(".meme-generator .meme-title");
// const memeAuthor = document.querySelector(".meme-generate .meme-author");

// const updateDetails = (url, title, author) => {
//     memeImage.setAttribute("src", url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = author;
// }


// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//         .then((response) => response.json())
//         .then((data) => {
//             updateDetails(data.url, data.title, data.author);
//         })
// }


// // Adding an Event Listener...to activate the button when clicked
// generateMemeBtn.addEventListener("click", generateMeme);

// generateMeme();
// const generateMemeBtn = document.querySelector(
//     ".meme-generator .generate-meme-btn"
//   );
//   const memeImage = document.querySelector(".meme-generator img");
//   const memeTitle = document.querySelector(".meme-generator .meme-title");
//   const memeAuthor = document.querySelector(".meme-generator .meme-author");

//   const updateDetails = (url, title, author) => {
//     memeImage.setAttribute("src", url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = `Meme by: ${author}`;
//   };

//   const generateMeme = () => {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//       .then((response) => response.json())
//       .then((data) => {
//         updateDetails(data.url, data.title, data.author);
//       });
//   };

// fetch("https://official-joke-api.appspot.com/random_joke")
// .then(res=> res.json())

var setup = document.querySelector('#setup');
var punchline = document.querySelector('#punchline');
var punchlineBtn = document.querySelector('#punchlinebtn');
var img = document.querySelector('.img');
var reset = document.querySelector('.reset');
var setupBtn = document.querySelector('#setupBtn');

var joke = {}


const tellajoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(
            data => (
                (setup.innerHTML = data.setup, punchlineBtn.style.display = 'inline-block'),
                (joke = data)
            )
        )
    setupBtn.setAttribute('style', 'display: none');
}

const droppunchline = () => {
    punchline.innerHTML = joke.punchline;
    img.setAttribute('src', 'https://i.pinimg.com/originals/af/f5/a7/aff5a72c04f0ede20844215f689f70e2.gif');
    punchlineBtn.style.display = 'none';
    setupBtn.style.display = 'none';
    reset.classList.remove('reset');
}

setupBtn.addEventListener('click', e => {
    e.preventDefault();
    tellajoke();
});

punchlineBtn.addEventListener('click', e => {
    e.preventDefault();
    droppunchline();
})

reset.addEventListener('click', e => {
    e.preventDefault();
    punchline.innerHTML = '';
    tellajoke();
    img.setAttribute('src', 'https://monophy.com/media/hVn3MCkffhr9ZqyFie/monophy.gif');

    punchlineBtn.style.display = 'none';
    setupBtn.setAttribute('style', 'display: none');
    reset.classList.add('reset');
})