'use strict';

var jsonp = require('jsonp');

module.exports = {
  fetchQuote: function fetchQuote(req, res, next) {
    console.log('inside Fetch Quote');

    jsonp('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=callback', {
      timeout: 30000
    }, function (err, data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3F1b3RlQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJqc29ucCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmV0Y2hRdW90ZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwidGltZW91dCIsImVyciIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsImVuZCIsImpzb24iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsY0FBWSxvQkFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUNuQ0MsWUFBUUMsR0FBUixDQUFZLG9CQUFaOztBQUVBVCxVQUFNLG1HQUFOLEVBQ0E7QUFDRVUsZUFBUztBQURYLEtBREEsRUFJQSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDbEIsVUFBSUQsR0FBSixFQUFTO0FBQ1BILGdCQUFRSyxLQUFSLENBQWNGLEdBQWQ7QUFDQUwsWUFBSVEsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0QsT0FIRCxNQUdPO0FBQ0xQLGdCQUFRQyxHQUFSLENBQVlHLElBQVo7QUFDQU4sWUFBSVEsTUFBSixDQUFXLEdBQVgsRUFBZ0JFLElBQWhCLENBQXFCSixJQUFyQjtBQUNEO0FBQ0YsS0FaRDtBQWFEO0FBakJjLENBQWpCIiwiZmlsZSI6InF1b3RlQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBqc29ucCA9IHJlcXVpcmUoJ2pzb25wJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZXRjaFF1b3RlOiBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgRmV0Y2ggUXVvdGUnKTtcblxuICAgIGpzb25wKCdodHRwOi8vYXBpLmZvcmlzbWF0aWMuY29tL2FwaS8xLjAvP21ldGhvZD1nZXRRdW90ZSZrZXk9NDU3NjUzJmZvcm1hdD1qc29ucCZsYW5nPWVuJmpzb25wPWNhbGxiYWNrJywgXG4gICAge1xuICAgICAgdGltZW91dDogMzAwMDBcbiAgICB9LCBcbiAgICBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSJdfQ==