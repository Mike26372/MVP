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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(TodoForm, { userId: this.state.userId,
          user: this.state.user,
          updateList: this.updateList }),
        React.createElement(TodoList, { list: this.state.list,
          updateList: this.updateList }),
        React.createElement(InspirationalQuote, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInVzZXJJZCIsInVzZXIiLCJsaXN0IiwidXBkYXRlTGlzdCIsImJpbmQiLCJhcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLENBREc7QUFFWEMsWUFBTSxTQUZLO0FBR1hDLFlBQU0sQ0FBQyxtQkFBRDtBQUhLLEtBQWI7QUFLQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBUFk7QUFRYjs7Ozt5Q0FFb0I7QUFDbkIsV0FBS0QsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRSxhQUFhLElBQWpCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGtCQUFVLE1BSEw7QUFJTEMsaUJBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QlIsa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxrQkFBUUMsR0FBUixDQUFZLEVBQUNPLFVBQUQsRUFBWjtBQUNBVCxxQkFBV1UsUUFBWCxDQUFvQixFQUFDYixNQUFNWSxJQUFQLEVBQXBCO0FBQ0QsU0FSSTtBQVNMRSxlQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJWLGtCQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsUUFBUSxLQUFLUixLQUFMLENBQVdDLE1BQTdCO0FBQ1UsZ0JBQU0sS0FBS0QsS0FBTCxDQUFXRSxJQUQzQjtBQUVVLHNCQUFZLEtBQUtFLFVBRjNCLEdBREY7QUFJRSw0QkFBQyxRQUFELElBQVUsTUFBTSxLQUFLSixLQUFMLENBQVdHLElBQTNCO0FBQ1Usc0JBQVksS0FBS0MsVUFEM0IsR0FKRjtBQU1FLDRCQUFDLGtCQUFEO0FBTkYsT0FERjtBQVVEOzs7O0VBNUNlYyxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VySWQ6IDEsXG4gICAgICB1c2VyOiAnTWljaGFlbCcsXG4gICAgICBsaXN0OiBbJ3N0YXRlIG5vdCB1cGRhdGVkJ11cbiAgICB9XG4gICAgdGhpcy51cGRhdGVMaXN0ID0gdGhpcy51cGRhdGVMaXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gIH1cblxuICB1cGRhdGVMaXN0KCkge1xuICAgIHZhciBhcHBDb250ZXh0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnVXBkYXRlIGxpc3QgY2FsbGVkIGZyb20gQXBwJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGlzdCB1cGRhdGUgcmVxdWVzdCBzdWNjZXNzIScpO1xuICAgICAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgICAgICBhcHBDb250ZXh0LnNldFN0YXRlKHtsaXN0OiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHVwZGF0ZSByZXF1ZXN0IGVycm9yIGJvb28nKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUb2RvRm9ybSB1c2VySWQ9e3RoaXMuc3RhdGUudXNlcklkfSBcbiAgICAgICAgICAgICAgICAgIHVzZXI9e3RoaXMuc3RhdGUudXNlcn1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH0vPlxuICAgICAgICA8VG9kb0xpc3QgbGlzdD17dGhpcy5zdGF0ZS5saXN0fVxuICAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdD17dGhpcy51cGRhdGVMaXN0fS8+XG4gICAgICAgIDxJbnNwaXJhdGlvbmFsUXVvdGUgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==