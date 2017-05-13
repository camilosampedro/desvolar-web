export default class SearchService {
    static submitSearch(filters, apiUrl) {
        let _this = this;
        axios
            .post(apiUrl, filters)
            .then(rawResponse => rawResponse.json())
            .catch(error => console.log(error))
    }
}