let num1;
let num2;
let oper;

let calcInput = document.querySelector(".box");
let inputText = calcInput.value;
// inputText = "";

let one = document.querySelector(".btn-1");
let text1 = one.value;
one.addEventListener("click", () => {
    alert(text1);
});
let two = document.querySelector(".btn-2");
let text2 = two.value;
two.addEventListener("click", () => {
    alert(text2);
});
let three = document.querySelector(".btn-3");
let text3 = three.value;
three.addEventListener("click", () => {
    alert(text3);
});
let four = document.querySelector(".btn-4");
let text4 = four.value;
four.addEventListener("click", () => {
    alert(text4);
});
let five = document.querySelector(".btn-5");
let text5 = five.value;
five.addEventListener("click", () => {
    alert(text5);
});
let six = document.querySelector(".btn-6");
let text6 = six.value;
six.addEventListener("click", () => {
    alert(text6);
});
let seven = document.querySelector(".btn-7");
let text7 = seven.value;
seven.addEventListener("click", () => {
    alert(text7);
});
let eight = document.querySelector(".btn-8");
let text8 = eight.value;
eight.addEventListener("click", () => {
    alert(text8);
});
let nine = document.querySelector(".btn-9");
let text9 = nine.value;
nine.addEventListener("click", () => {
    alert(text9);
});
let zero = document.querySelector(".btn-0");
let text0 = zero.value;
zero.addEventListener("click", () => {
    alert(text0);
});

let opDiv = document.querySelector(".btn-div");
let textDiv = opDiv.value;
opDiv.addEventListener("click", () => {
    alert(textDiv);
});
let opMul = document.querySelector(".btn-mul");
let textMul = opMul.value;
opMul.addEventListener("click", () => {
    alert(textMul);
});
let opSub = document.querySelector(".btn-sub");
let textSub = opSub.value;
opSub.addEventListener("click", () => {
    alert(textSub);
});
let opAdd = document.querySelector(".btn-add");
let textAdd = opAdd.value;
opAdd.addEventListener("click", () => {
    alert(textAdd);
});

let opEqu = document.querySelector(".btn-equ");
let textEqu = opEqu.value;
opEqu.addEventListener("click", () => {
    alert(textEqu);
});
let opClear = document.querySelector(".btn-clear");

function operate() {
};


function add(input) {
    let nums = input.replace(/\s+/g, "").split(`${op}`);
    let result = nums.reduce((final, num) => +final + +num);
    alert(result);
};

function subtract(input) {
    let nums = input.replace(/\s+/g, "").split(`${op}`);
    let result = nums.reduce((final, num) => final - num);
    alert(result);
};

function multiply(input) {
    let nums = input.replace(/\s+/g, "").split(`${op}`);
    let result = nums.reduce((final, num) => final * num);
    alert(result);
};

function divide(input) {
    let nums = input.replace(/\s+/g, "").split(`${op}`);
    let result = nums.reduce((final, num) => final / num);
    alert(result);
};



