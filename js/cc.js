let plnElement = document.querySelector(".js-pln");
let selectElement = document.querySelector(".js-select");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = plnElement.value;
    let select = selectElement.value;
    let EUR = 4.67;
    let USD = 4.38;
    let GBP = 5.29;
    if (select === "EUR") {
        result = pln / EUR;
        result = result.toFixed(2);
        resultElement.innerText = `${result} EUR`;
    } else if ((select === "USD")) {
        result = pln / USD;
        result = result.toFixed(2);
        resultElement.innerText = `${result} USD`;
    } else{
        result = pln / GBP;
        result = result.toFixed(2);
        resultElement.innerText = `${result} GBP`;
    }


})