const frecciaSinistraHtml = document.getElementById("frecciaSinistra")
const frecciaDestraHtml = document.getElementById("frecciaDestra")



let figureHtml = document.getElementById("figureImg");
const mainImage = document.getElementById("mainImage");

let indiceCorrente = 0;
const intervalloTempo = 3000;


const arrayImg = [
    './assets/img/NIke Mercurial Superfly 9-PhotoRoom.png-PhotoRoom.png',

    './assets/img/Nike Phatom GX 2-PhotoRoom.png-PhotoRoom.png',

    './assets/img/NIke Phatom GX-PhotoRoom.png-PhotoRoom.png',

    './assets/img/NIke Tiempo legend 9 -PhotoRoom.png-PhotoRoom.png',

    './assets/img/Nike Jr.mercurial -PhotoRoom.png-PhotoRoom.png',
]


for (let i = 0; i < arrayImg.length; i++) {

    figureHtml.innerHTML += `<figure  class="col-6 p-0 border border-1 rounded-4 p-2  ">
  <img src="${arrayImg[i]}"
      alt="immagine scarpa da calcio">
</figure>`


}

function visualizzaImmagine(indice) {
    const oggettoScarpa = arrayDettagliScarpa[indice];

    mainImage.innerHTML = `
        <div class="col-10 p-0 d-flex m-0 w-100 flex-column">
            <div class="d-flex p-3">
                <h1 id="nomeScarpa" class="text-capitalize text-white">${oggettoScarpa.nome}</h1>
            </div>
            <figure class="align-self-center d-flex mt-5">
                <img id="immagineScarpa" src="${oggettoScarpa.immagine}" class="d-block" alt="immagine scarpa da calcio">
            </figure>
            <div class="p-3 w-75 mb-5">
                <p id="descrizioneScarpa" class="text-white text-capitalize">${oggettoScarpa.descrizione}</p>
            </div>
        </div>`;
}
function cambiaImmagineSuccessiva() {
    indiceCorrente = (indiceCorrente + 1) % arrayDettagliScarpa.length;
    visualizzaImmagine(indiceCorrente);
}

const intervalloSlideshow = setInterval(cambiaImmagineSuccessiva, intervalloTempo);

frecciaSinistraHtml.addEventListener('click', function (event) {
    indiceCorrente = (indiceCorrente - 1 + arrayDettagliScarpa.length) % arrayDettagliScarpa.length;
    visualizzaImmagine(indiceCorrente);
});

frecciaDestraHtml.addEventListener('click', function (event) {
    indiceCorrente = (indiceCorrente + 1) % arrayDettagliScarpa.length;
    visualizzaImmagine(indiceCorrente);
});



const arrayDettagliScarpa = [
    {
        nome: 'Nike Mercurial Superfly 9',
        descrizione: 'Fai la differenza in campo con il design inconfondibile di Superfly 9 Elite FG. Abbiamo aggiunto un unità Zoom Air, pensata specificamente per il calcio, e una texture aderente sulla parte superiore per un tocco eccezionale, così potrai dare il massimo nei minuti finali della partita, quando conta di più.',
        immagine: './assets/img/NIke Mercurial Superfly 9-PhotoRoom.png-PhotoRoom.png',
    },
    {
        nome: 'Nike Phatom GX 2',
        descrizione: "Hai l'ossessione della perfezione? L'abbiamo fatto per te. Nel bel mezzo della tempesta, con il caos che imperversava tutto intorno, hai tranquillamente trovato l'ultimo terzo del campo, grazie al tuo prodigioso mix di astuzia e grazia sulla palla.",
        immagine: './assets/img/Nike Phatom GX 2-PhotoRoom.png-PhotoRoom.png',

    },
    {
        nome: 'Nike Phatom GX',
        descrizione: "Fai sul serio? La scarpa da calcio Pro è perfetta per superare le difese con tiri a giro chirurgici, ma anche per dribbling imprendibili all'insegna della creatività.",
        immagine: './assets/img/NIke Phatom GX-PhotoRoom.png-PhotoRoom.png',
    },
    {
        nome: 'Nike Tiempo legend 9',
        descrizione: "1 delle Tiempo più leggere mai realizzati, Nike Tiempo Legend 9 Elite SG-Pro AC è perfetta per dare il massimo in campo, grazie al design a basso profilo, reinventato per gli attaccanti",
        immagine: './assets/img/NIke Tiempo legend 9 -PhotoRoom.png-PhotoRoom.png',
    },
    {
        nome: 'Nike Jr.mercurial',
        descrizione: "Il campo è tuo quando le Nike jr.mercurial. Abbiamo aggiunto un'unità Zoom Air, pensata specificamente per il calcio, e una texture aderente sulla parte superiore per un tocco eccezionale, così potrai dare il massimo nei minuti finali della partita, quando conta di più.",
        immagine: './assets/img/Nike Jr.mercurial -PhotoRoom.png-PhotoRoom.png',
    },

]



figureHtml.addEventListener("mouseover", function (event) {

    let oggettoScarpa;

    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.getAttribute("src");

        oggettoScarpa = arrayDettagliScarpa.find(
            (oggetto) => oggetto.immagine === imgSrc
        );
    }

    if (oggettoScarpa) {
        mainImage.innerHTML = ` 
        <div class="col-10 p-0 d-flex m-0 w-100 flex-column">

        <div class="d-flex p-3">
          <h1 id="nomeScarpa" class="text-capitalize text-white">${oggettoScarpa.nome}</h1>
        </div>

        <figure class="align-self-center d-flex mt-5 ">
          <img id="immagineScarpa" src="${oggettoScarpa.immagine}" class="d-block" alt="immagine scarpa da calcio">
        </figure>

        <div class="p-3 w-75 mb-5">
          <p id="descrizioneScarpa" class="text-white text-capitalize ">${oggettoScarpa.descrizione}</p>
        </div>

      </div>`;
    }

})


