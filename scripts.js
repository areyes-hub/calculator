let calcInput = document.querySelector("input");
let inputText = calcInput.textContent;

let one = document.querySelector(".btn-1");
let text1 = one.textContent;
let two = document.querySelector(".btn-2");
let text2 = two.textContent;
let three = document.querySelector(".btn-3");
let text3 = three.textContent;
let four = document.querySelector(".btn-4");
let text4 = four.textContent;
let five = document.querySelector(".btn-5");
let text5 = five.textContent;
let six = document.querySelector(".btn-6");
let text6 = six.textContent;
let seven = document.querySelector(".btn-7");
let text7 = seven.textContent;
let eight = document.querySelector(".btn-8");
let text8 = eight.textContent;
let nine = document.querySelector(".btn-9");
let text9 = nine.textContent;
let zero = document.querySelector(".btn-0");
let text0 = zero.textContent;

let opDiv = document.querySelector(".btn-div");
let textDiv = opDiv.textContent;
let opMul = document.querySelector(".btn-mul");
let textMul = opMul.textContent;
let opSub = document.querySelector(".btn-sub");
let textSub = opSub.textContent;
let opAdd = document.querySelector(".btn-add");
let textAdd = opAdd.textContent;

let opEqu = document.querySelector(".btn-equ");
let textEqu = opEqu.textContent;
let opClear = document.querySelector(".btn-clear");
let textClear = opClear.textContent;

function operate() {
}


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




