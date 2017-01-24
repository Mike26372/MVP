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
      quote: null
    };
    return _this;
  }

  _createClass(InspirationalQuote, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var quoteContext = this;
      $.ajax({
        method: 'GET',
        url: '/quotes',
        success: function success(data) {
          console.log('Quote retrieval success!');
          console.log(data);
        },
        error: function error(err) {
          console.error('Quote retrieval error');
        }
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
          { className: 'header' },
          'Be Inspired'
        ),
        React.createElement(
          'div',
          { className: 'card horizontal hoverable' },
          React.createElement(
            'div',
            { className: 'card-image' },
            React.createElement('img', { src: 'http://lorempixel.com/100/190/nature/6' })
          ),
          React.createElement(
            'div',
            { className: 'card-stacked' },
            React.createElement(
              'div',
              { className: 'card-content' },
              React.createElement(
                'p',
                null,
                'I am a very simple card. I am good at containing small bits of information.'
              )
            ),
            React.createElement(
              'div',
              { className: 'card-action' },
              React.createElement(
                'a',
                { href: '#' },
                'This is a link'
              )
            )
          )
        )
      );
    }
  }]);

  return InspirationalQuote;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvSW5zcGlyYXRpb25hbFF1b3RlLmpzeCJdLCJuYW1lcyI6WyJJbnNwaXJhdGlvbmFsUXVvdGUiLCJzdGF0ZSIsInF1b3RlIiwicXVvdGVDb250ZXh0IiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGtCOzs7QUFDSixnQ0FBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZZO0FBS2I7Ozs7eUNBRW9COztBQUVuQixVQUFJQyxlQUFlLElBQW5CO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxLQURIO0FBRUxDLGFBQUssU0FGQTtBQUdMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0FELGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRCxTQU5JO0FBT0xHLGVBQU8sZUFBU0MsR0FBVCxFQUFjO0FBQ25CSCxrQkFBUUUsS0FBUixDQUFjLHVCQUFkO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxRQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHlDQUFLLEtBQUksd0NBQVQ7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQUpGO0FBRkYsT0FERjtBQWtCRDs7OztFQTNDOEJFLE1BQU1DLFMiLCJmaWxlIjoiSW5zcGlyYXRpb25hbFF1b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5zcGlyYXRpb25hbFF1b3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdW90ZTogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBcbiAgICB2YXIgcXVvdGVDb250ZXh0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9xdW90ZXMnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUXVvdGUgcmV0cmlldmFsIHN1Y2Nlc3MhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUXVvdGUgcmV0cmlldmFsIGVycm9yJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG03XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5CZSBJbnNwaXJlZDwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3Jpem9udGFsIGhvdmVyYWJsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vMTAwLzE5MC9uYXR1cmUvNlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPkkgYW0gYSB2ZXJ5IHNpbXBsZSBjYXJkLiBJIGFtIGdvb2QgYXQgY29udGFpbmluZyBzbWFsbCBiaXRzIG9mIGluZm9ybWF0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlRoaXMgaXMgYSBsaW5rPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiJdfQ==