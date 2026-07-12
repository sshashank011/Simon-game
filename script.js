let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let btns = ["purple", "red", "green", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranidx = Math.floor(Math.random() * 4);
    let rancol = btns[ranidx];
    let ranbtn = document.querySelector(`.${rancol}`);
    gameseq.push(rancol);
    console.log(gameseq);
    btnflash(ranbtn);
}

function checkAns(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        h2.innerHTML = `Game over! Your score was <b>${level}</b>. Press any key to start.`;
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    console.log("button was pressed");
    let btn = this;
    btnflash(btn);

    let btncolor = btn.getAttribute("id");
    userseq.push(btncolor);
    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}
