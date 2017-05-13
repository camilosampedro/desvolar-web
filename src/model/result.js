export default class Result{
    constructor(flightCode, origin, destination, price, currency, date){
        this.flightCode = flightCode;
        this.origin = origin;
        this.destination = destination;
        this.price = price;
        this.currency = currency;
        this.date = date;
    }
}