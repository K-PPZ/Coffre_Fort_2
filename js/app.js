let police = Math.floor(Math.random() * (60 - 20)) + 20;

let broken_trunk = Math.floor(Math.random() * (police - 5)) + 5;
let hack = Math.floor(Math.random() * (police - 5)) + 5;
let money = Math.floor(Math.random() * (police - 5)) + 5;
let run = Math.floor(Math.random() * (police - 5)) + 5;

let instruction_thief = [broken_trunk, hack, money, run];

let tmp_thief = document.getElementsByClassName("tmp_thief");