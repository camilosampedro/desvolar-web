import {VIANCA_URL, CHAN_URL, TOPA_URL, IBA_COLOMBIA_URL} from './service-store';
export function submitSearch(filters, apiUrl) {
  let _this = this;
  axios.post(apiUrl, filters).then(rawResponse => rawResponse.json()).catch(error => console.log(error))
}

export function submitAllSearchs(filters) {
  let viancaResult = this.submitSearch(filters, VIANCA_URL);
  let chanResult = this.submitSearch(filters, CHAN_URL);
  let topaResult = this.submitSearch(filters, TOPA_URL);
  let ibaResult = this.submitSearch(filters, IBA_COLOMBIA_URL);
  let mergedResults = Rx.Observable.merge(viancaResult, chanResult, topaResult, ibaResult);
  return mergedResults;
}
