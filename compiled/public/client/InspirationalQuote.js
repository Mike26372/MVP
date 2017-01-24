'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InspirationalQuote = function (_React$Component) {
  _inherits(InspirationalQuote, _React$Component);

  function InspirationalQuote() {
    _classCallCheck(this, InspirationalQuote);

    var _this = _possibleConstructorReturn(this, (InspirationalQuote.__proto__ || Object.getPrototypeOf(InspirationalQuote)).call(this));

    _this.state = {
      quote: {
        quoteText: '',
        quoteAuthor: ''
      }
    };
    return _this;
  }

  _createClass(InspirationalQuote, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var quoteContext = this;

      $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        }
      }).done(function (data) {
        console.log('Quote received!');
        quoteContext.setState({ quote: data });
      }).fail(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col s12 m7' },
        React.createElement(
          'h4',
          { className: 'header center-align' },
          'Be Inspired'
        ),
        React.createElement(
          'div',
          { className: 'card horizontal hoverable' },
          React.createElement(
            'div',
            { className: 'card-stacked' },
            React.createElement(
              'div',
              { className: 'card-content' },
              React.createElement(
                'p',
                { className: 'flow-text' },
                '"',
                this.state.quote.quoteText,
                '"'
              )
            ),
            React.createElement(
              'div',
              { className: 'card-action' },
              React.createElement(
                'a',
                { href: '#' },
                this.state.quote.quoteAuthor
              )
            )
          )
        )
      );
    }
  }]);

  return InspirationalQuote;
}(React.Component);

// <div className="card-image">
//   <img src="http://lorempixel.com/100/190/nature/6" />
// </div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvSW5zcGlyYXRpb25hbFF1b3RlLmpzeCJdLCJuYW1lcyI6WyJJbnNwaXJhdGlvbmFsUXVvdGUiLCJzdGF0ZSIsInF1b3RlIiwicXVvdGVUZXh0IiwicXVvdGVBdXRob3IiLCJxdW90ZUNvbnRleHQiLCIkIiwiYWpheCIsInVybCIsImpzb25wIiwiZGF0YVR5cGUiLCJkYXRhIiwibWV0aG9kIiwibGFuZyIsImZvcm1hdCIsImRvbmUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJmYWlsIiwiZXJyIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQUNMQyxtQkFBVyxFQUROO0FBRUxDLHFCQUFhO0FBRlI7QUFESSxLQUFiO0FBRlk7QUFRYjs7Ozt5Q0FFb0I7O0FBRW5CLFVBQUlDLGVBQWUsSUFBbkI7O0FBRUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLG9DQURBO0FBRUxDLGVBQU8sT0FGRjtBQUdMQyxrQkFBVSxPQUhMO0FBSUxDLGNBQU07QUFDSkMsa0JBQVEsVUFESjtBQUVKQyxnQkFBTSxJQUZGO0FBR0pDLGtCQUFRO0FBSEo7QUFKRCxPQUFQLEVBVUNDLElBVkQsQ0FVTSxVQUFTSixJQUFULEVBQWU7QUFDbkJLLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQVoscUJBQWFhLFFBQWIsQ0FBc0IsRUFBQ2hCLE9BQU9TLElBQVIsRUFBdEI7QUFDRCxPQWJELEVBY0NRLElBZEQsQ0FjTSxVQUFTQyxHQUFULEVBQWM7QUFDbEJKLGdCQUFRSyxLQUFSLENBQWNELEdBQWQ7QUFDRCxPQWhCRDtBQWtCRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLHFCQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxXQUFiO0FBQUE7QUFBMkIscUJBQUtuQixLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLFNBQTVDO0FBQUE7QUFBQTtBQURGLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFhLHFCQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFO0FBQTlCO0FBREY7QUFKRjtBQURGO0FBRkYsT0FERjtBQWVEOzs7O0VBbkQ4QmtCLE1BQU1DLFM7O0FBc0R2QztBQUNBO0FBQ0EiLCJmaWxlIjoiSW5zcGlyYXRpb25hbFF1b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBJbnNwaXJhdGlvbmFsUXVvdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdW90ZToge1xuICAgICAgICBxdW90ZVRleHQ6ICcnLFxuICAgICAgICBxdW90ZUF1dGhvcjogJydcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIFxuICAgIHZhciBxdW90ZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9hcGkuZm9yaXNtYXRpYy5jb20vYXBpLzEuMC8nLFxuICAgICAganNvbnA6ICdqc29ucCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb25wJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWV0aG9kOiAnZ2V0UXVvdGUnLFxuICAgICAgICBsYW5nOiAnZW4nLFxuICAgICAgICBmb3JtYXQ6ICdqc29ucCdcbiAgICAgIH1cbiAgICB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdRdW90ZSByZWNlaXZlZCEnKTtcbiAgICAgIHF1b3RlQ29udGV4dC5zZXRTdGF0ZSh7cXVvdGU6IGRhdGF9KTtcbiAgICB9KVxuICAgIC5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtN1wiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyIGNlbnRlci1hbGlnblwiPkJlIEluc3BpcmVkPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvcml6b250YWwgaG92ZXJhYmxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlwie3RoaXMuc3RhdGUucXVvdGUucXVvdGVUZXh0fVwiPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3RoaXMuc3RhdGUucXVvdGUucXVvdGVBdXRob3J9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbi8vICAgPGltZyBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vMTAwLzE5MC9uYXR1cmUvNlwiIC8+XG4vLyA8L2Rpdj4iXX0=