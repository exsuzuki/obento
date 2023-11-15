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
  drawReceipt(amount)
}
function drawReceipt(amount: Amount) {
  const cvs: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('receipt');
  const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>cvs.getContext('2d');
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  ctx.font = '20px san-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('領収書', cvs.width / 2, 5);
  ctx.font = '10px san-serif';
  ctx.textAlign = 'left';
  ctx.fillText('㈱EXstudio 様', 10, 30);
  ctx.fillText(new Date().toLocaleString('ja-JP-u-ca-japanese',
    { era: 'narrow', year: 'numeric', month: 'long', day: 'numeric' }),
    210, 30);
  ctx.font = 'bold 30px san-serif';
  ctx.textAlign = 'center';
  ctx.fillText('￥' + amount.IncludingTAX.toLocaleString() + '-', cvs.width / 2, 45);
  ctx.font = '8px san-serif';
  ctx.textAlign = 'left';
  ctx.fillText('消費税(8%): ' + amount.TAX.toLocaleString(), 10, 100);
  ctx.font = '9px san-serif';
  ctx.textAlign = 'center';
  ctx.fillText('但 お弁当代として', cvs.width / 2, 82.5);
  ctx.font = '8px san-serif';
  ctx.textAlign = 'left';
  ctx.fillText('住　　所: 〇〇〇〇〇〇〇〇〇〇〇', 100, 120);
  ctx.fillText('名　　前: 〇〇〇〇〇〇', 100, 140);
  ctx.fillText('登録番号: T〇〇〇〇〇〇〇〇〇〇〇〇', 100, 160);

}