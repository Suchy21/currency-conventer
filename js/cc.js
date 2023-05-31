{
    const calculateResult = (pln, select) => {
        const EUR = 4.67;
        const USD = 4.38;
        const GBP = 5.29;
        let result;
        if (select === "EUR") {
            result = pln / EUR;
            return result.toFixed(2);
        } else if (select === "USD") {
            result = pln / USD;
            return result.toFixed(2);
        } else {
            result = pln / GBP;
            return result.toFixed(2);
        }
    };
    
    const updateResultText = (convertedResult, select) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${convertedResult} ${select}`;
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const plnElement = document.querySelector(".js-pln");
        const selectElement = document.querySelector(".js-select");
    
        const pln = plnElement.value;
        const select = selectElement.value;
        const convertedResult = calculateResult(parseFloat(pln), select);
    
        updateResultText(convertedResult, select);
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    
    
    init();

}