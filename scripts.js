let expression = "";
let oper = "";

let calcInput = document.querySelector(".box");

function operate() {
    let one = document.querySelector(".btn-1");
    one.addEventListener("click", () => {
        calcInput.textContent += 1;
        expression += 1;
    });
    let two = document.querySelector(".btn-2");
    two.addEventListener("click", () => {
        calcInput.textContent += 2;
        expression += 2;
    });
    let three = document.querySelector(".btn-3");
    three.addEventListener("click", () => {
        calcInput.textContent += 3;
        expression += 3;
    });
    let four = document.querySelector(".btn-4");
    four.addEventListener("click", () => {
        calcInput.textContent += 4;
        expression += 4;
    });
    let five = document.querySelector(".btn-5");
    five.addEventListener("click", () => {
        calcInput.textContent += 5;
        expression += 5;
    });
    let six = document.querySelector(".btn-6");
    six.addEventListener("click", () => {
        calcInput.textContent += 6;
        expression += 6;
    });
    let seven = document.querySelector(".btn-7");
    seven.addEventListener("click", () => {
        calcInput.textContent += 7;
        expression += 7;
    });
    let eight = document.querySelector(".btn-8");
    eight.addEventListener("click", () => {
        calcInput.textContent += 8;
        expression += 8;
    });
    let nine = document.querySelector(".btn-9");
    nine.addEventListener("click", () => {
        calcInput.textContent += 9;
        expression += 9;
    });

    let point = document.querySelector(".btn-point");
    point.addEventListener("click", () => {
        calcInput.textContent += ".";
        expression += ".";
    });

    let zero = document.querySelector(".btn-0");
    zero.addEventListener("click", () => {
        calcInput.textContent += 0;
        expression += 0;
    });

    let opDiv = document.querySelector(".btn-div");
    opDiv.addEventListener("click", () => {
        oper = "/";
        calcInput.textContent += "/";
        expression += "/";
    });
    let opMul = document.querySelector(".btn-mul");
    opMul.addEventListener("click", () => {
        oper = "*";
        calcInput.textContent += "*";
        expression += "*";
    });
    let opSub = document.querySelector(".btn-sub");
    opSub.addEventListener("click", () => {
        oper = "-";
        calcInput.textContent += "-";
        expression += "-";
    });
    let opAdd = document.querySelector(".btn-add");
    opAdd.addEventListener("click", () => {
        oper = "+";
        calcInput.textContent += "+";
        expression += "+";
    });

    let opEqu = document.querySelector(".btn-equ");
    opEqu.addEventListener("click", () => {
        if (oper === "/") {
            divide(expression);
        }
        else if (oper === "*") {
            multiply(expression);
        }
        else if (oper === "-") {
            subtract(expression);
        }
        else if (oper === "+") {
            add(expression);
        }
    });
    let opClear = document.querySelector(".btn-clear");
    opClear.addEventListener("click", () => {
        calcInput.textContent = "";
        expression = "";
    });
};


function add(input) {
    let nums = input.split(`${oper}`);
    let result = nums.reduce((final, num) => +final + +num);
    expression = result;
    calcInput.textContent = result;
};

function subtract(input) {
    let nums = input.split(`${oper}`);
    let result = nums.reduce((final, num) => final - num);
    expression = result;
    calcInput.textContent = result;
};

function multiply(input) {
    let nums = input.split(`${oper}`);
    let result = nums.reduce((final, num) => final * num);
    expression = result;
    calcInput.textContent = result;
};

function divide(input) {
    let nums = input.split(`${oper}`);
    let result = nums.reduce((final, num) => final / num);
    expression = result;
    calcInput.textContent = result;
};

operate();

