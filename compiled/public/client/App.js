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
      list: ['state not updated'],
      completed: ['no completed tasks']
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
          appContext.setState({ list: data });
        },
        error: function error(_error) {
          console.log('List update request error booo');
        }
      });

      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/list/completed',
        dataType: 'json',
        success: function success(data) {
          console.log('Completed list update request success!');
          appContext.setState({ completed: data });
        },
        error: function error(_error2) {
          console.log('Completed list update request error booo');
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
          updateList: this.updateList
        }),
        React.createElement(CompletedList, { completed: this.state.completed,
          updateList: this.updateList
        }),
        React.createElement(IntentionList, null),
        React.createElement(InspirationalQuote, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInVzZXJJZCIsInVzZXIiLCJsaXN0IiwiY29tcGxldGVkIiwidXBkYXRlTGlzdCIsImJpbmQiLCJzcGxpY2VUb2RvIiwiYXBwQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImVycm9yIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxDQURHO0FBRVhDLFlBQU0sU0FGSztBQUdYQyxZQUFNLENBQUMsbUJBQUQsQ0FISztBQUlYQyxpQkFBVyxDQUFDLG9CQUFEO0FBSkEsS0FBYjtBQU1BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBVFk7QUFVYjs7Ozt5Q0FFb0I7QUFDbkIsV0FBS0QsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRyxhQUFhLElBQWpCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGtCQUFVLE1BSEw7QUFJTEMsaUJBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QlIsa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRixxQkFBV1UsUUFBWCxDQUFvQixFQUFDZixNQUFNYyxJQUFQLEVBQXBCO0FBQ0QsU0FQSTtBQVFMRSxlQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJWLGtCQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQVZJLE9BQVA7O0FBYUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxLQURIO0FBRUxDLGFBQUssc0NBRkE7QUFHTEMsa0JBQVUsTUFITDtBQUlMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCUixrQkFBUUMsR0FBUixDQUFZLHdDQUFaO0FBQ0FGLHFCQUFXVSxRQUFYLENBQW9CLEVBQUNkLFdBQVdhLElBQVosRUFBcEI7QUFDRCxTQVBJO0FBUUxFLGVBQU8sZUFBU0EsT0FBVCxFQUFnQjtBQUNyQlYsa0JBQVFDLEdBQVIsQ0FBWSwwQ0FBWjtBQUNEO0FBVkksT0FBUDtBQVlEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBN0I7QUFDVSxnQkFBTSxLQUFLRCxLQUFMLENBQVdFLElBRDNCO0FBRVUsc0JBQVksS0FBS0csVUFGM0IsR0FERjtBQUlFLDRCQUFDLFFBQUQsSUFBVSxNQUFNLEtBQUtMLEtBQUwsQ0FBV0csSUFBM0I7QUFDVSxzQkFBWSxLQUFLRTtBQUQzQixVQUpGO0FBT0UsNEJBQUMsYUFBRCxJQUFlLFdBQVcsS0FBS0wsS0FBTCxDQUFXSSxTQUFyQztBQUNVLHNCQUFZLEtBQUtDO0FBRDNCLFVBUEY7QUFVRSw0QkFBQyxhQUFELE9BVkY7QUFXRSw0QkFBQyxrQkFBRDtBQVhGLE9BREY7QUFlRDs7OztFQWhFZWUsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJJZDogMSxcbiAgICAgIHVzZXI6ICdNaWNoYWVsJyxcbiAgICAgIGxpc3Q6IFsnc3RhdGUgbm90IHVwZGF0ZWQnXSxcbiAgICAgIGNvbXBsZXRlZDogWydubyBjb21wbGV0ZWQgdGFza3MnXVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVMaXN0ID0gdGhpcy51cGRhdGVMaXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zcGxpY2VUb2RvID0gdGhpcy5zcGxpY2VUb2RvLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0KCk7XG4gIH1cblxuICB1cGRhdGVMaXN0KCkge1xuICAgIHZhciBhcHBDb250ZXh0ID0gdGhpcztcbiAgICBjb25zb2xlLmxvZygnVXBkYXRlIGxpc3QgY2FsbGVkIGZyb20gQXBwJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGlzdCB1cGRhdGUgcmVxdWVzdCBzdWNjZXNzIScpO1xuICAgICAgICBhcHBDb250ZXh0LnNldFN0YXRlKHtsaXN0OiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHVwZGF0ZSByZXF1ZXN0IGVycm9yIGJvb28nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xpc3QvY29tcGxldGVkJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wbGV0ZWQgbGlzdCB1cGRhdGUgcmVxdWVzdCBzdWNjZXNzIScpO1xuICAgICAgICBhcHBDb250ZXh0LnNldFN0YXRlKHtjb21wbGV0ZWQ6IGRhdGF9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlZCBsaXN0IHVwZGF0ZSByZXF1ZXN0IGVycm9yIGJvb28nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9kb0Zvcm0gdXNlcklkPXt0aGlzLnN0YXRlLnVzZXJJZH0gXG4gICAgICAgICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnVwZGF0ZUxpc3R9Lz5cbiAgICAgICAgPFRvZG9MaXN0IGxpc3Q9e3RoaXMuc3RhdGUubGlzdH1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDxDb21wbGV0ZWRMaXN0IGNvbXBsZXRlZD17dGhpcy5zdGF0ZS5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICA8SW50ZW50aW9uTGlzdCAvPlxuICAgICAgICA8SW5zcGlyYXRpb25hbFF1b3RlIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=