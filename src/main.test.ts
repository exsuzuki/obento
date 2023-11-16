import { Amount } from "./Amount"
describe('BaseCheck_1000', () => {
  describe('1000', () => {
    let amount: Amount = new Amount(1000);
    test('Input', () => { expect(amount.InputPrice).toEqual(1000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(926); })
    test('TAX', () => { expect(amount.TAX).toEqual(74); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(1000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('2000', () => {
    let amount: Amount = new Amount(2000);
    test('Input', () => { expect(amount.InputPrice).toEqual(2000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(1852); })
    test('TAX', () => { expect(amount.TAX).toEqual(148); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(2000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('3000', () => {
    let amount: Amount = new Amount(3000);
    test('Input', () => { expect(amount.InputPrice).toEqual(3000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(2778); })
    test('TAX', () => { expect(amount.TAX).toEqual(222); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(3000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('4000', () => {
    let amount: Amount = new Amount(4000);
    test('Input', () => { expect(amount.InputPrice).toEqual(4000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(3704); })
    test('TAX', () => { expect(amount.TAX).toEqual(296); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(4000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('5000', () => {
    let amount: Amount = new Amount(5000);
    test('Input', () => { expect(amount.InputPrice).toEqual(5000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(4630); })
    test('TAX', () => { expect(amount.TAX).toEqual(370); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(5000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('6000', () => {
    let amount: Amount = new Amount(6000);
    test('Input', () => { expect(amount.InputPrice).toEqual(6000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(5556); })
    test('TAX', () => { expect(amount.TAX).toEqual(444); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(6000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('7000', () => {
    let amount: Amount = new Amount(7000);
    test('Input', () => { expect(amount.InputPrice).toEqual(7000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(6482); })
    test('TAX', () => { expect(amount.TAX).toEqual(518); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(7000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('8000', () => {
    let amount: Amount = new Amount(8000);
    test('Input', () => { expect(amount.InputPrice).toEqual(8000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(7408); })
    test('TAX', () => { expect(amount.TAX).toEqual(592); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(8000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('9000', () => {
    let amount: Amount = new Amount(9000);
    test('Input', () => { expect(amount.InputPrice).toEqual(9000); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(8334); })
    test('TAX', () => { expect(amount.TAX).toEqual(666); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(9000); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
})
describe('Over_Error', () => {
  describe('512', () => {
    let amount: Amount = new Amount(512);
    test('Input', () => { expect(amount.InputPrice).toEqual(512); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(474); })
    test('TAX', () => { expect(amount.TAX).toEqual(38); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(512); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  describe('850', () => {
    let amount: Amount = new Amount(850);
    test('Input', () => { expect(amount.InputPrice).toEqual(850); })
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(787); })
    test('TAX', () => { expect(amount.TAX).toEqual(63); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(850); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  /*
  describe('',()=>{
    let amount:Amount=new Amount();
    test('Input',()=>{expect(amount.InputPrice).toEqual();})
    test('Exclude', () => { expect(amount.ExcludingTAX).toEqual(); })S
    test('TAX', () => { expect(amount.TAX).toEqual(); })
    test('IncludingTAX', () => { expect(amount.IncludingTAX).toEqual(); })
    test('PriceCheck', () => { expect(amount.InputPrice).toEqual(amount.IncludingTAX); })
  })
  */
})