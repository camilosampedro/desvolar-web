import {VIANCA_URL, CHAN_URL, TOPA_URL, IBA_COLOMBIA_URL} from './service-store';
import axios from 'axios';

export function submitSearch(filters, apiUrl) {
  let _this = this;
  return axios.post(apiUrl, filters).catch(error => console.log(error))
}

export function submitAllSearchs(filters) {
  let viancaResult = submitSearch(filters, VIANCA_URL);
  let chanResult = submitSearch(filters, CHAN_URL);
  let topaResult = submitSearch(filters, TOPA_URL);
  let ibaResult = submitSearch(filters, IBA_COLOMBIA_URL);
  let mergedResults = axios.all([viancaResult, chanResult, topaResult, ibaResult]);
  return mergedResults;
}
