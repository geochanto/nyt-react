import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "d927051dc8dc4557b55310e520bc283c";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query, begin_date, end_date) {
    return axios.get(`${BASEURL} ${query} &begin_date ${begin_date} &end_date ${end_date} &api-key=${APIKEY}`);
  }
};