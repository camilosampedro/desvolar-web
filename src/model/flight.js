export default class Flight {
    constructor(departureDate, arrivalDate, origin, destination, passengers, roundTrip) {
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.origin = origin;
        this.destination = destination;
        this.passengers = passengers;
        this.roundTrip = roundTrip;
    }
}