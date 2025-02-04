const buttons = document.getElementsByTagName("button");
let num1 = "";
let num2 = "";
let oper = "";
let oper2 = "";
let flagSci = false;
let flagHis = false;
let flagBulb = false;
const PI = Math.PI;
const display = document.getElementById("screen");
for (let button = 0; button < buttons.length; button++) {
    buttons[button].addEventListener("click", (e) => {
        let element = e.target;
        calcul(element);
    });
}
function addDigit(button) {
    if (button.getAttribute("id") === "PI") {
        console.log("test");
        if (oper) {
            num2 = String(PI);
            display.innerHTML = num1 + oper + "&#120587;";
        }
        else {
            num1 = String(PI);
            display.innerHTML = "&#120587;" + oper + num2;
        }
    }
    else if (oper) {
        num2 += button.getAttribute("id");
        display.innerHTML = num1 + oper + num2;
    }
    else {
        num1 += button.getAttribute("id");
        display.innerHTML = num1 + oper + num2;
    }
}
function clearButton(button) {
    clearHistory();
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    oper = "";
    oper2 = "";
}
function equalButton(button) {
    if (num1 && num2 && oper) {
        display.innerHTML = eval(num1 + oper + num2);
        createHistory();
        num1 = eval(num1 + oper + num2);
        oper = "";
        num2 = "";
        oper2 = "";
    }
}
function dotButton(button) {
    if (!oper && !num1.includes(".")) {
        num1 = num1 + ".";
        display.innerHTML = num1;
    }
    else if (!num2.includes(".") && oper) {
        num2 = num2 + ".";
        display.innerHTML = num1 + oper + num2;
    }
}
function backButton(button) {
    if (num2) {
        num2 = num2.slice(0, -1);
        display.innerHTML = num1 + oper + num2;
    }
    else if (oper) {
        oper = "";
        display.innerHTML = num1 + oper + num2;
    }
    else {
        num1 = num1.slice(0, -1);
        display.innerHTML = num1 + oper + num2;
    }
}
function calcul(button) {
    if (button.getAttribute("class").includes("number")) {
        //check where to put the number in num1 or num2
        addDigit(button);
    }
    else if (button.getAttribute("class").includes("operator")) {
        //not allowed to put * or / if there no numbers
        if ("**/%".indexOf(button.getAttribute("id")) !== -1 && !num1) {
            return;
        }
        if (oper && num2) {
            //אם קיימים לי שני מספרים ואופרטור
            if (flagSci) {
                //אם אני נמצא במצב מדעי
                if (oper2 === "") {
                    //אם לא קיים אופרטור שני אז מכניס את מה שקיבלתי לאופרטור השני
                    num1 = num1 + oper + num2;
                    oper2 = oper;
                }
                else {
                    // קיים אופרטור שני אז עכשיו הוכנס השלישי אז מחשב את הסכום של הסכום הכולל ושם במספר1
                    createHistory();
                    num1 = eval(num1 + oper + num2);
                    oper2 = "";
                }
                oper = button.getAttribute("id");
                num2 = "";
                display.innerHTML = num1 + oper;
            }
            else {
                //לא במצב מדעי ויש אופרטור ומספר2 לכן עושה חישוב ודוחף למספר1 את התוצאה
                num1 = eval(num1 + oper + num2);
                createHistory();
                oper = button.getAttribute("id");
                num2 = "";
                display.innerHTML = num1 + oper;
            }
        }
        else {
            //אין אופרטור וזה האופרטור הראשון שהוכנס
            oper = button.getAttribute("id");
            display.innerHTML = num1 + oper;
        }
    }
    else if (button.getAttribute("id") === "c") {
        //clear button
        clearButton(button);
    }
    else if (button.getAttribute("id") === "=") {
        //equal button
        equalButton(button);
    }
    else if (button.getAttribute("id") === ".") {
        //dot button
        dotButton(button);
    }
    else if (button.getAttribute("id") === "back") {
        // back button
        backButton(button);
    }
}
//pow2
const sq = document.getElementsByClassName("Xsq")[0];
sq.addEventListener("click", () => {
    if (num1) {
        if (num2) {
            num2 = String(Number(num2) ** 2);
            display.innerHTML = num1 + oper + num2;
        }
        else {
            num1 = String(Number(num1) ** 2);
            display.innerHTML = num1 + oper + num2;
        }
    }
});
//root2
const sqroot = document.getElementsByClassName("Rsq")[0];
sqroot.addEventListener("click", () => {
    if (num1) {
        if (num2) {
            num2 = String(Number(num2) ** 0.5);
            display.innerHTML = num1 + oper + num2;
        }
        else {
            num1 = String(Number(num1) ** 0.5);
            display.innerHTML = num1 + oper + num2;
        }
    }
    //   console.log("hii");
    //   let x = num1;
    //   num1 = String(eval(num1 + oper + num2) ** 0.5);
    //   oper = "";
    //   num2 = "";
    //   display.innerHTML = num1 + oper + num2;
    //   let div = document.createElement("div");
    //   div.innerHTML = x + "**0.5" + "=" + eval(num1 + oper + num2);
    //   document.getElementById("left-container").appendChild(div);
});
