import { Amount } from "./Amount.js";
let amount: Amount;
const calc: HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
calc.addEventListener('click', calculation);

function calculation() {
  const InputPrice: number = parseInt((document.getElementById('InputPrice') as HTMLInputElement).value);
  amount = new Amount(InputPrice);
  (document.getElementById('ExcludingTAX') as HTMLTableCellElement).innerHTML = amount.ExcludingTAX.toLocaleString();
  (document.getElementById('TAX') as HTMLTableCellElement).innerHTML = amount.TAX.toLocaleString();
  (document.getElementById('IncludingTAX') as HTMLTableCellElement).innerHTML = amount.IncludingTAX.toLocaleString();

}