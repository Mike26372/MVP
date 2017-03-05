var jsonp = require('jsonp');

module.exports = {
  fetchQuote: function(req, res, next) {
    console.log('inside Fetch Quote');

    jsonp('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=callback', 
      {
        timeout: 30000
      }, 
      function(err, data) {
        if (err) {
          console.error(err);
          res.status(404).end();
        } else {
          console.log(data);
          res.status(200).json(data);
        }
      });
  }
};