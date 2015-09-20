var axios = window.axios;

(function (axios) {

  var API_URL = 'http://api.github.com';

  function getRepositories (username, callback) {
    axios.get(API_URL + '/users/claydiffrient/repos?type=public')
         .then(function (response) {
           callback(response.data);
         });
  }

  return {
    getRepositories: getRepositories
  };

})(axios);
