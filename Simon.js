let GameSeq = [];
let UserSeq = [];
let start = false;
let level = 0;
let col = ["purple", "red", "green", "yellow"]
let HighScore = 0;
HS = document.querySelector(".HS");
HS.innerText = `Highscore:${HighScore}`;
let key=document.getElementById("h3");
key.addEventListener("click", function () {
    if (start == false) {
        console.log("started");
        start = true;
        levelUp();
    }
});
let h3 = document.querySelector("h3");

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}
function userflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}
function over(btn) {
    btn.classList.add("over");
    setTimeout(function () {
        btn.classList.remove("over");
    }, 200);
    setTimeout(function () {
        btn.classList.add("over");
    }, 200);
    setTimeout(function () {
        btn.classList.remove("over");
    }, 200);
}

function levelUp() {
    level++;
    UserSeq = [];
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randcol = col[randIdx]
    let randbtn = document.querySelector(`.${randcol}`)
    GameSeq.push(randcol);
    flash(randbtn);
}
function check(idx) {
    if (GameSeq[idx] === UserSeq[idx]) {
        if (GameSeq.length == UserSeq.length) {
            setTimeout(levelUp, 200);
        }
    }
    else {
        body = document.querySelector("body");
        over(body);
        h3.innerText = `Game Over! Your Score ${level}, Press this key to start again`;
        reset();
    }
}

function reset() {
    start = false;
    GameSeq = [];
    UserSeq = [];
    HighScore = Math.max(level, HighScore);
    HS.innerText = `Highscore:${HighScore}`
    level = 0;
}

function btnpress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    check(UserSeq.length - 1);
}

let btns = document.querySelectorAll(".button");
for (btn of btns) {
    btn.addEventListener("click", btnpress);
}

