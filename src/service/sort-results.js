function sortResult(oldResults, newResult){
  let airline = newResult.airline;
  let newResultTransformed = [];
  for(let result of newResult.results) {
    result.code = airline.code;
    result.name = airline.name;
    result.thumbnail = airline.thumbnail;
    newResultTransformed.push(result);
  }
  let joinedResults = oldResults.concat(newResultTransformed);
  return joinedResults.sort(function (a, b){
    return a.price < b.price ? -1: a.price > b.price ? 1: 0;
  });
}

export default sortResult;
