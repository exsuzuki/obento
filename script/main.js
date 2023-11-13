import { Amount } from "./Amount.js";
let amount;
const calc = document.getElementById('btn');
calc.addEventListener('click', calculation);
function calculation() {
    const InputPrice = parseInt(document.getElementById('InputPrice').value);
    amount = new Amount(InputPrice);
    document.getElementById('ExcludingTAX').innerHTML = amount.ExcludingTAX.toLocaleString();
    document.getElementById('TAX').innerHTML = amount.TAX.toLocaleString();
    document.getElementById('IncludingTAX').innerHTML = amount.IncludingTAX.toLocaleString();
}
