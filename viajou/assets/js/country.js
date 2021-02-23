deck = [
    {
        id: 0,
        titleheader: "JAPÃO",
        imgheadersrc: "./images/japaoico.png",

        titlepag: "Cultura",
        imgtxt: "./images/cultura.jpg",
        txt1: "BLA BLA BLA BLA 1",
        txt2: "BLA BLA BLA BLA 2",

        titlepag2: "Idioma",
        imgtxt2: "./images/idioma.jpg",
        txt3: "BLA BLA BLA BLA 3",
        txt4: "BLA BLA BLA BLA 4",

        titlepag3: "Comida",
        imgtxt3: "./images/comida.jpg",
        txt5: "BLA BLA BLA BLA 5",
        txt6: "BLA BLA BLA BLA 6",
    },
    {
        id: 1,
        titleheader: "CANADÁ",
        imgheadersrc: "./images/canadaico.png",

        titlepag: "Cultura",
        imgtxt: "./images/cultura2.jpg",
        txt1: "BLA BLA BLA BLA 1",
        txt2: "BLA BLA BLA BLA 2",

        titlepag2: "Idioma",
        imgtxt2: "./images/idioma2.jpg",
        txt3: "BLA BLA BLA BLA 3",
        txt4: "BLA BLA BLA BLA 4",

        titlepag3: "Comida",
        imgtxt3: "./images/comida2.jpg",
        txt5: "BLA BLA BLA BLA 5",
        txt6: "BLA BLA BLA BLA 6",
    },

    {
        id: 2,
        titleheader: "FRANÇA",
        imgheadersrc: "./images/francaico.png",

        titlepag: "Cultura",
        imgtxt: "./images/cultura3.jpg",
        txt1: "BLA BLA BLA BLA 1",
        txt2: "BLA BLA BLA BLA 2",

        titlepag2: "Idioma",
        imgtxt2: "./images/idioma3.jpg",
        txt3: "BLA BLA BLA BLA 3",
        txt4: "BLA BLA BLA BLA 4",

        titlepag3: "Comida",
        imgtxt3: "./images/comida3.jpg",
        txt5: "BLA BLA BLA BLA 5",
        txt6: "BLA BLA BLA BLA 6",
    },
    {
        id: 3,
        titleheader: "ARGENTINA",
        imgheadersrc: "./images/argentinaico.png",

        titlepag: "Cultura",
        imgtxt: "./images/cultura4.jpg",
        txt1: "BLA BLA BLA BLA 1",
        txt2: "BLA BLA BLA BLA 2",

        titlepag2: "Idioma",
        imgtxt2: "./images/idioma4.jpg",
        txt3: "BLA BLA BLA BLA 3",
        txt4: "BLA BLA BLA BLA 4",

        titlepag3: "Comida",
        imgtxt3: "./images/comida4.jpg",
        txt5: "BLA BLA BLA BLA 5",
        txt6: "BLA BLA BLA BLA 6",
    },
]

function showcountry(id) {
let country = document.getElementById("countryjson");
country.innerHTML =  
`
<!-- Header -->
<header id="header">
<img id = "imgicon" src="${deck[id].imgheadersrc}" alt="" />
    <a id = "tituloheader" href="index.html" class="title">${deck[id].titleheader}</a> 
    <nav >
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./country.html" class="active">Países</a></li>
            <li><a href="./index.html#two">Cotação de moedas</a></li>
        </ul>
    </nav>
</header>

<!-- Wrapper -->
<div id="wrapper">

    <!-- Main -->
        <section id="main" class="wrapper">
            <div class="inner">
                <h1 class="major">${deck[id].titlepag}</h1>
                <span class="image fit"><img src="${deck[id].imgtxt}" alt="" /></span>
                <p>${deck[id].txt1}</p>
                <p>${deck[id].txt2}</p>
            </div>
        </section>
        <section id="main" class="wrapper">
            <div class="inner">
                <h1 class="major">${deck[id].titlepag2}</h1>
                <span class="image fit"><img src="${deck[id].imgtxt2}" alt="" /></span>
                <p>${deck[id].txt3}</p>
                <p>${deck[id].txt4}</p>
            </div>
        </section>
        <section id="main" class="wrapper">
            <div class="inner">
                <h1 class="major">${deck[id].titlepag3}</h1>
                <span class="image fit"><img src="${deck[id].imgtxt3}" alt="" /></span>
                <p>${deck[id].txt5}</p>
                <p>${deck[id].txt6}</p>
            </div>
        </section>

</div>

<!-- Footer -->
<footer id="footer" class="wrapper alt">
    <div class="inner">
        <ul class="menu">
            <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </div>
</footer>
`
}
// window.onload = showcountry;