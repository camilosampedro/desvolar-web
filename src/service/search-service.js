import {VIANCA, CHAN, TOPA, IBA_COLOMBIA} from './service-store';
import axios from 'axios';

export function submitSearch(filters, apiUrl) {
  let _this = this;
  return axios.post(apiUrl, filters, {timeout: 10000}).catch(error => console.log('Error on the request: ', error))
}

export function submitAllSearchs(filters) {
  let viancaResult = submitSearch(filters, VIANCA.searchURL);
  let chanResult = submitSearch(filters, CHAN.searchURL);
  let topaResult = submitSearch(filters, TOPA.searchURL);
  let ibaResult = submitSearch(filters, IBA_COLOMBIA.searchURL);
  let mergedResults = axios.all([viancaResult, chanResult, topaResult, ibaResult]);
  return mergedResults;
}
