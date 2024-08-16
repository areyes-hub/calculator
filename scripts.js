function operate(oper, num1, num2) {
    let result = eval?.(`"use strict";(${num1}${oper}${num2})`);
    return result;
};

let n1 = 16;
let n2 = 8;
let op = "/";


alert(operate(op, n1, n2));