import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "d927051dc8dc4557b55310e520bc283c";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(search, begin_date, end_date) {
    console.log(`Here is the query: ${BASEURL}q=${search}&begin_date=${begin_date}&end_date=${end_date}&api-key=${APIKEY}`);
    return axios.get(`${BASEURL}q=${search}&begin_date=${begin_date}&end_date=${end_date}&api-key=${APIKEY}`);
  }
};