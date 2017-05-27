import sortResult from './sort-results';
import {deepEqual, equal, assert} from 'assert';

var emptyOldResults = [];
var goodNewResult = {
  airline: {
    code: 2,
    name: "Chan",
    thumbnail: "anUrl",
  },
  results: [{
    flightcode: "123",
    origin: "MDE",
    destination: "BOG",
    price: 14000,
    currency: "COP",
    date: "12:30 12-05-2017"
  }]
};
var expectedResult = [{
  code: 2,
  name: "Chan",
  thumbnail: "anUrl",
  flightcode: "123",
  origin: "MDE",
  destination: "BOG",
  price: 14000,
  currency: "COP",
  hour: "12:30",
  date: "12-05-2017"
}]


describe('sort method', function() {
  describe('when invoking with the expected structure', function() {
    it('should order with an empty old result', function() {
      let result = sortResult(emptyOldResults, goodNewResult);
      deepEqual(result, expectedResult)
    })
  })
})
