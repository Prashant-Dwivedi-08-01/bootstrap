console.log("Welcome to Food-Bike-Travel");

// Text Aniamtion on First Carousle
let t1 = [['E', 'a', 't', ' ', ' ', ' '],
['T', 'r', 'a', 'v', 'e', 'l', ' ', ' ', ' '],
['R', 'i', 'd', 'e', ' ', ' ', ' ']
]

function text_animation() {
    let txt = t1
    h2 = document.getElementById("carousel_heading");
    console.log(h2);
    let i = 0;
    let j = 0;
    setInterval(() => {
        if (j == (txt[i].length - 1)) {
            j = 0;
            h2.innerText = ''
            i++;
            if (i == 3)
                i = 0
        }
        node = document.createTextNode(txt[i][j]);
        h2.appendChild(node);
        j++;
    }, 200);
}
text_animation();

// Aniamtion
