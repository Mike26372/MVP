'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function callback(data) {
  console.log(data);
}

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
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
        data: {
          method: "getQuote",
          lang: "en",
          format: "jsonp"
        }
      }).done(function (data) {
        console.log(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvSW5zcGlyYXRpb25hbFF1b3RlLmpzeCJdLCJuYW1lcyI6WyJjYWxsYmFjayIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSW5zcGlyYXRpb25hbFF1b3RlIiwic3RhdGUiLCJxdW90ZSIsInF1b3RlVGV4dCIsInF1b3RlQXV0aG9yIiwicXVvdGVDb250ZXh0IiwiJCIsImFqYXgiLCJ1cmwiLCJqc29ucCIsImRhdGFUeXBlIiwibWV0aG9kIiwibGFuZyIsImZvcm1hdCIsImRvbmUiLCJzZXRTdGF0ZSIsImZhaWwiLCJlcnIiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEJDLFVBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNEOztJQUVLRyxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQUNMQyxtQkFBVyxFQUROO0FBRUxDLHFCQUFhO0FBRlI7QUFESSxLQUFiO0FBRlk7QUFRYjs7Ozt5Q0FFb0I7O0FBRW5CLFVBQUlDLGVBQWUsSUFBbkI7O0FBRUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLG9DQURBO0FBRUxDLGVBQU8sT0FGRjtBQUdMQyxrQkFBVSxPQUhMO0FBSUxiLGNBQU07QUFDSmMsa0JBQVEsVUFESjtBQUVKQyxnQkFBTSxJQUZGO0FBR0pDLGtCQUFRO0FBSEo7QUFKRCxPQUFQLEVBVUNDLElBVkQsQ0FVTSxVQUFTakIsSUFBVCxFQUFlO0FBQ25CQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0FRLHFCQUFhVSxRQUFiLENBQXNCLEVBQUNiLE9BQU9MLElBQVIsRUFBdEI7QUFDRCxPQWJELEVBY0NtQixJQWRELENBY00sVUFBU0MsR0FBVCxFQUFjO0FBQ2xCbkIsZ0JBQVFvQixLQUFSLENBQWNELEdBQWQ7QUFDRCxPQWhCRDtBQWtCRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLHFCQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxXQUFiO0FBQUE7QUFBMkIscUJBQUtoQixLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLFNBQTVDO0FBQUE7QUFBQTtBQURGLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFhLHFCQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJFO0FBQTlCO0FBREY7QUFKRjtBQURGO0FBRkYsT0FERjtBQWVEOzs7O0VBbkQ4QmUsTUFBTUMsUzs7QUFzRHZDO0FBQ0E7QUFDQSIsImZpbGUiOiJJbnNwaXJhdGlvbmFsUXVvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjYWxsYmFjayhkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufVxuXG5jbGFzcyBJbnNwaXJhdGlvbmFsUXVvdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1b3RlOiB7XG4gICAgICAgIHF1b3RlVGV4dDogJycsXG4gICAgICAgIHF1b3RlQXV0aG9yOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcbiAgICB2YXIgcXVvdGVDb250ZXh0ID0gdGhpcztcblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiaHR0cDovL2FwaS5mb3Jpc21hdGljLmNvbS9hcGkvMS4wL1wiLFxuICAgICAganNvbnA6IFwianNvbnBcIixcbiAgICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRRdW90ZVwiLFxuICAgICAgICBsYW5nOiBcImVuXCIsXG4gICAgICAgIGZvcm1hdDogXCJqc29ucFwiXG4gICAgICB9XG4gICAgfSlcbiAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHF1b3RlQ29udGV4dC5zZXRTdGF0ZSh7cXVvdGU6IGRhdGF9KTtcbiAgICB9KVxuICAgIC5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtN1wiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyIGNlbnRlci1hbGlnblwiPkJlIEluc3BpcmVkPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvcml6b250YWwgaG92ZXJhYmxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsb3ctdGV4dFwiPlwie3RoaXMuc3RhdGUucXVvdGUucXVvdGVUZXh0fVwiPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3RoaXMuc3RhdGUucXVvdGUucXVvdGVBdXRob3J9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuLy8gICA8aW1nIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS8xMDAvMTkwL25hdHVyZS82XCIgLz5cbi8vIDwvZGl2PiJdfQ==