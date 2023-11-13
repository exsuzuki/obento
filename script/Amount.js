const TAX_RATE = 0.08;
const REVERSE_TAX_RATE = 1 + TAX_RATE;
export class Amount {
    constructor(inputPrice) {
        this._InputPrice = 0;
        this._ExcludingTAX = 0;
        this._TAX = 0;
        this._IncludingTAX = 0;
        this._InputPrice = inputPrice;
        this._ExcludingTAX = Math.ceil(inputPrice / REVERSE_TAX_RATE);
        this._TAX = Math.floor(this._ExcludingTAX * TAX_RATE);
        this._IncludingTAX = this._ExcludingTAX + this.TAX;
    }
    get InputPrice() { return this._InputPrice; }
    get ExcludingTAX() { return this._ExcludingTAX; }
    get TAX() { return this._TAX; }
    get IncludingTAX() { return this._IncludingTAX; }
}
