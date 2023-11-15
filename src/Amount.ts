const TAX_RATE: number = 0.08;
const REVERSE_TAX_RATE: number = 1 + TAX_RATE;

export class Amount {
  private _InputPrice: number = 0;
  private _ExcludingTAX: number = 0;
  private _TAX: number = 0;
  private _IncludingTAX: number = 0;
  public constructor(inputPrice: number) {
    this._InputPrice = inputPrice;
    this._ExcludingTAX = Math.ceil(inputPrice / REVERSE_TAX_RATE);
    this._TAX = Math.floor(this._ExcludingTAX * TAX_RATE);
    this._IncludingTAX = this._ExcludingTAX + this.TAX;
    if (this._InputPrice != this._IncludingTAX) {
      this._ExcludingTAX--;
      this._IncludingTAX = this._ExcludingTAX + this._TAX;
    }
  }
  get InputPrice(): number { return this._InputPrice; }
  get ExcludingTAX(): number { return this._ExcludingTAX; }
  get TAX(): number { return this._TAX; }
  get IncludingTAX(): number { return this._IncludingTAX; }
}