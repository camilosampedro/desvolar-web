function sortResult(oldResults, newResult) {
  let airline = newResult.airline;
  let newResultTransformed = [];
  if (newResult && newResult.results) {
    for (let result of newResult.results) {
      result.code = airline.code;
      result.name = airline.name;
      result.thumbnail = airline.thumbnail;
      let d = result.date;
      result.date = d.substring(6);
      result.hour = d.substring(0, 5);
      newResultTransformed.push(result);
    }
  }
  let joinedResults = oldResults.concat(newResultTransformed);
  return joinedResults.sort(function(a, b) {
    return a.price < b.price
      ? -1
      : a.price > b.price
        ? 1
        : 0;
  });
}

export default sortResult;
