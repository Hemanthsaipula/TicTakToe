let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let hover = document.querySelector(".hover");
let para = document.querySelector(".para");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const resetGame = () => {
    turn0 = true;
    enableBoxes();
}
const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText="";
        hover.classList.add("hide");
    }
}

const showWinner = (winner) => {
    para.innerText = `Congratulations, The Winner is ${winner}`;
    hover.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
};
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
