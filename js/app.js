let police = Math.floor(Math.random() * (60 - 20)) + 20;

let broken_trunk = Math.floor(Math.random() * (police - 5)) + 5;
let hack = Math.floor(Math.random() * (police - 5)) + 5;
let money = Math.floor(Math.random() * (police - 5)) + 5;
let run = Math.floor(Math.random() * (police - 5)) + 5;

let instruction_thief = [broken_trunk, hack, money, run];

let tmp_total = document.getElementById("total");
let tmp_thief = document.getElementsByClassName("tmp_thief");
let tmp_police = document.getElementById("tmp_police");
tmp_police.innerText = police;

let total = 0;

for (let i = 0; i < tmp_thief.length; i++) {
    total += instruction_thief[i];
}

let h = 0;
let z = 0;
let interv = setInterval(() => {
    if (h != instruction_thief[z]) {
        tmp_thief[z].innerText = h;
        h++;
    } else {
        h = 0;
        z++;
    }

    if (z == tmp_thief.length) {
        z = 0;
        clearInterval(interv);
    }
}, 50);

if (z == tmp_thief.length-1) {
    let y = 0;
    setInterval(() => {
        if (y != total) {
            tmp_total.innerText = y;
            y++;
        }
    }, 10);
}