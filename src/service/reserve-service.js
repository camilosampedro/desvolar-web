import axios from 'axios';
import {getAuthInfo} from './firebase-service';
import {VIANCA, CHAN, TOPA, IBA_COLOMBIA} from './service-store';

export const ERROR_RESULT = 'ERROR';
export const RESERVED_RESULT = 'R';
export const INSUFICIENT_RESULT = 'I';
export const NOT_FOUND_RESULT = 'NF';

export function submitReserve(reserve, airlineCode) {
  let _this = this;
  let apiUrl = getAirlineUrl(airlineCode);
  reserve.token = getAuthInfo().idToken;
  return axios.post(apiUrl, reserve).then(result => {
    if (!result.message) {
      console.error("No \"message\" attribute in result: ", result)
      return ERROR_RESULT;
    }
    return result.message;
  }).catch(error => console.log(error));
}

function getAirlineUrl(airlineCode) {
  switch (airlineCode) {
    case VIANCA.code:
      return VIANCA.submitReserveUrl;
    case CHAN.code:
      return CHAN.submitReserveUrl;
    case TOPA.code:
      return TOPA.submitReserveUrl;
    case IBA_COLOMBIA.code:
      return IBA_COLOMBIA.submitReserveUrl;
    default:

  }
}

export function searchForReserve(apiUrl) {
  let _this = this;
  let url = apiUrl + '?token=' + getAuthInfo().idToken; // + getToken();
  return axios.get(url);
}

export function submitAllReserveSearch() {
  console.log('Fetching reserve searchs');
  let viancaResult = searchForReserve(VIANCA.fetchReserves);
  let chanResult = searchForReserve(CHAN.fetchReserves);
  let topaResult = searchForReserve(TOPA.fetchReserves);
  let ibaResult = searchForReserve(IBA_COLOMBIA.fetchReserves);
  let mergedResults = axios.all([viancaResult, chanResult, topaResult, ibaResult]);
  return mergedResults;
}
