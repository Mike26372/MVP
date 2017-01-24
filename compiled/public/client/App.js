'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      userId: 1,
      user: 'Michael',
      list: ['state not updated']
    };
    _this.updateList = _this.updateList.bind(_this);
    _this.spliceTodo = _this.spliceTodo.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateList();
    }
  }, {
    key: 'updateList',
    value: function updateList() {
      var appContext = this;
      console.log('Update list called from App');
      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/list',
        dataType: 'json',
        success: function success(data) {
          console.log('List update request success!');
          console.log({ data: data });
          appContext.setState({ list: data });
        },
        error: function error(_error) {
          console.log('List update request error booo');
        }
      });
    }
  }, {
    key: 'spliceTodo',
    value: function spliceTodo(index) {
      var list = this.state.list.slice();
      list.splice(index, 1);
      this.setState({ list: list });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(TodoForm, { userId: this.state.userId,
          user: this.state.user,
          updateList: this.updateList }),
        React.createElement(TodoList, { list: this.state.list,
          updateList: this.updateList,
          spliceTodo: this.spliceTodo }),
        React.createElement(InspirationalQuote, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInVzZXJJZCIsInVzZXIiLCJsaXN0IiwidXBkYXRlTGlzdCIsImJpbmQiLCJzcGxpY2VUb2RvIiwiYXBwQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImVycm9yIiwiaW5kZXgiLCJzbGljZSIsInNwbGljZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FERztBQUVYQyxZQUFNLFNBRks7QUFHWEMsWUFBTSxDQUFDLG1CQUFEO0FBSEssS0FBYjtBQUtBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBUlk7QUFTYjs7Ozt5Q0FFb0I7QUFDbkIsV0FBS0QsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRyxhQUFhLElBQWpCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGtCQUFVLE1BSEw7QUFJTEMsaUJBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QlIsa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxrQkFBUUMsR0FBUixDQUFZLEVBQUNPLFVBQUQsRUFBWjtBQUNBVCxxQkFBV1UsUUFBWCxDQUFvQixFQUFDZCxNQUFNYSxJQUFQLEVBQXBCO0FBQ0QsU0FSSTtBQVNMRSxlQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJWLGtCQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OytCQUVVVSxLLEVBQU87QUFDaEIsVUFBSWhCLE9BQU8sS0FBS0gsS0FBTCxDQUFXRyxJQUFYLENBQWdCaUIsS0FBaEIsRUFBWDtBQUNBakIsV0FBS2tCLE1BQUwsQ0FBWUYsS0FBWixFQUFtQixDQUFuQjtBQUNBLFdBQUtGLFFBQUwsQ0FBYyxFQUFDZCxNQUFNQSxJQUFQLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQTdCO0FBQ1UsZ0JBQU0sS0FBS0QsS0FBTCxDQUFXRSxJQUQzQjtBQUVVLHNCQUFZLEtBQUtFLFVBRjNCLEdBREY7QUFJRSw0QkFBQyxRQUFELElBQVUsTUFBTSxLQUFLSixLQUFMLENBQVdHLElBQTNCO0FBQ1Usc0JBQVksS0FBS0MsVUFEM0I7QUFFVSxzQkFBWSxLQUFLRSxVQUYzQixHQUpGO0FBT0UsNEJBQUMsa0JBQUQ7QUFQRixPQURGO0FBV0Q7Ozs7RUFwRGVnQixNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcklkOiAxLFxuICAgICAgdXNlcjogJ01pY2hhZWwnLFxuICAgICAgbGlzdDogWydzdGF0ZSBub3QgdXBkYXRlZCddXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxpc3QgPSB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwbGljZVRvZG8gPSB0aGlzLnNwbGljZVRvZG8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3QoKSB7XG4gICAgdmFyIGFwcENvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgbGlzdCBjYWxsZWQgZnJvbSBBcHAnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHVwZGF0ZSByZXF1ZXN0IHN1Y2Nlc3MhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtkYXRhfSk7XG4gICAgICAgIGFwcENvbnRleHQuc2V0U3RhdGUoe2xpc3Q6IGRhdGF9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xpc3QgdXBkYXRlIHJlcXVlc3QgZXJyb3IgYm9vbycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3BsaWNlVG9kbyhpbmRleCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5zdGF0ZS5saXN0LnNsaWNlKCk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xpc3Q6IGxpc3R9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRvZG9Gb3JtIHVzZXJJZD17dGhpcy5zdGF0ZS51c2VySWR9IFxuICAgICAgICAgICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VyfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdD17dGhpcy51cGRhdGVMaXN0fS8+XG4gICAgICAgIDxUb2RvTGlzdCBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICBzcGxpY2VUb2RvPXt0aGlzLnNwbGljZVRvZG99Lz5cbiAgICAgICAgPEluc3BpcmF0aW9uYWxRdW90ZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==