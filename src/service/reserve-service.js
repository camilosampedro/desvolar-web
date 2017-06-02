import axios from 'axios';

export const ERROR_RESULT = 'ERROR';
export const RESERVED_RESULT = 'R';
export const INSUFICIENT_RESULT = 'I';
export const NOT_FOUND_RESULT = 'NF';

export function submitReserve(reserve, apiUrl) {
  let _this = this;
  return axios.post(apiUrl, reserve).then(result => {
    if (!result.message) {
      console.error("No \"message\" attribute in result: ", result)
      return ERROR_RESULT;
    }
    return result.message;
  }).catch(error => console.log(error));
}

export function searchForReserve(apiUrl) {
  let _this = this;
  let url = apiUrl + '?token=';// + getToken();
  return axios.get();
}
