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

    let h = 0;
    let z = 0;
    let y = 0;
    let interv = setInterval(() => {
        if (h != instruction_thief[z]) {
            h++;
            tmp_thief[z].innerText = h;
        } else {
            h = 0;
            z++;
        }

        if (z == instruction_thief.length) {
            z = 0;
            let interv_total = setInterval(() => {
                if (y != total) {
                    y++;
                    tmp_total.innerText = y;
                }

                if (y == total) {
                    clearInterval(interv_total);
                    if (y < police) {
                        alert("Vous vous êtes échapper");
                    } else {
                        alert("La police vous a attraper");
                    }
                }
            }, 10);

            clearInterval(interv);
        }
    }, 50);
}