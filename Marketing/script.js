const back = document.querySelector('#back');
const next = document.querySelector('#next');

console.log(back);
console.log(next);

const pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

console.log(pics);

let i=0;

next.addEventListener("click", () => {
    i++;
    if (i > pics.length-1) {
        i=0;
    }
    document.querySelector("#pics").src = pics[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0 ) {
        i = pics.length-1;
    }
    document.querySelector("#pics").src = pics[i];
})


