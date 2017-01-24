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
    // this.updateCompleted = this.updateCompleted.bind(this);
    _this.spliceTodo = _this.spliceTodo.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateList();
      // this.updateCompleted();
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

      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/list/completed',
        dataType: 'json',
        success: function success(data) {
          console.log('Completed list update request success!');
          console.log({ data: data });
          appContext.setState({ completed: data });
        },
        error: function error(_error2) {
          console.log('Completed list update request error booo');
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
        React.createElement(CompletedList, { completed: this.state.completed,
          updateList: this.updateList,
          spliceTodo: this.spliceTodo }),
        React.createElement(InspirationalQuote, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInVzZXJJZCIsInVzZXIiLCJsaXN0IiwiY29tcGxldGVkIiwidXBkYXRlTGlzdCIsImJpbmQiLCJzcGxpY2VUb2RvIiwiYXBwQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImVycm9yIiwiaW5kZXgiLCJzbGljZSIsInNwbGljZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FERztBQUVYQyxZQUFNLFNBRks7QUFHWEMsWUFBTSxDQUFDLG1CQUFELENBSEs7QUFJWEMsaUJBQVcsQ0FBQyxvQkFBRDtBQUpBLEtBQWI7QUFNQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0E7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBVlk7QUFXYjs7Ozt5Q0FFb0I7QUFDbkIsV0FBS0QsVUFBTDtBQUNBO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUlHLGFBQWEsSUFBakI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxLQURIO0FBRUxDLGFBQUssNEJBRkE7QUFHTEMsa0JBQVUsTUFITDtBQUlMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCUixrQkFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0FELGtCQUFRQyxHQUFSLENBQVksRUFBQ08sVUFBRCxFQUFaO0FBQ0FULHFCQUFXVSxRQUFYLENBQW9CLEVBQUNmLE1BQU1jLElBQVAsRUFBcEI7QUFDRCxTQVJJO0FBU0xFLGVBQU8sZUFBU0EsTUFBVCxFQUFnQjtBQUNyQlYsa0JBQVFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNEO0FBWEksT0FBUDs7QUFjQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSyxzQ0FGQTtBQUdMQyxrQkFBVSxNQUhMO0FBSUxDLGlCQUFTLGlCQUFTQyxJQUFULEVBQWU7QUFDdEJSLGtCQUFRQyxHQUFSLENBQVksd0NBQVo7QUFDQUQsa0JBQVFDLEdBQVIsQ0FBWSxFQUFDTyxVQUFELEVBQVo7QUFDQVQscUJBQVdVLFFBQVgsQ0FBb0IsRUFBQ2QsV0FBV2EsSUFBWixFQUFwQjtBQUNELFNBUkk7QUFTTEUsZUFBTyxlQUFTQSxPQUFULEVBQWdCO0FBQ3JCVixrQkFBUUMsR0FBUixDQUFZLDBDQUFaO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7OzsrQkFFVVUsSyxFQUFPO0FBQ2hCLFVBQUlqQixPQUFPLEtBQUtILEtBQUwsQ0FBV0csSUFBWCxDQUFnQmtCLEtBQWhCLEVBQVg7QUFDQWxCLFdBQUttQixNQUFMLENBQVlGLEtBQVosRUFBbUIsQ0FBbkI7QUFDQSxXQUFLRixRQUFMLENBQWMsRUFBQ2YsTUFBTUEsSUFBUCxFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLFFBQVEsS0FBS0gsS0FBTCxDQUFXQyxNQUE3QjtBQUNVLGdCQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFEM0I7QUFFVSxzQkFBWSxLQUFLRyxVQUYzQixHQURGO0FBSUUsNEJBQUMsUUFBRCxJQUFVLE1BQU0sS0FBS0wsS0FBTCxDQUFXRyxJQUEzQjtBQUNVLHNCQUFZLEtBQUtFLFVBRDNCO0FBRVUsc0JBQVksS0FBS0UsVUFGM0IsR0FKRjtBQU9FLDRCQUFDLGFBQUQsSUFBZSxXQUFXLEtBQUtQLEtBQUwsQ0FBV0ksU0FBckM7QUFDVSxzQkFBWSxLQUFLQyxVQUQzQjtBQUVVLHNCQUFZLEtBQUtFLFVBRjNCLEdBUEY7QUFVRSw0QkFBQyxrQkFBRDtBQVZGLE9BREY7QUFjRDs7OztFQXhFZWdCLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VySWQ6IDEsXG4gICAgICB1c2VyOiAnTWljaGFlbCcsXG4gICAgICBsaXN0OiBbJ3N0YXRlIG5vdCB1cGRhdGVkJ10sXG4gICAgICBjb21wbGV0ZWQ6IFsnbm8gY29tcGxldGVkIHRhc2tzJ11cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlTGlzdCA9IHRoaXMudXBkYXRlTGlzdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMudXBkYXRlQ29tcGxldGVkID0gdGhpcy51cGRhdGVDb21wbGV0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNwbGljZVRvZG8gPSB0aGlzLnNwbGljZVRvZG8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgICAvLyB0aGlzLnVwZGF0ZUNvbXBsZXRlZCgpO1xuICB9XG5cbiAgdXBkYXRlTGlzdCgpIHtcbiAgICB2YXIgYXBwQ29udGV4dCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZSBsaXN0IGNhbGxlZCBmcm9tIEFwcCcpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xpc3QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xpc3QgdXBkYXRlIHJlcXVlc3Qgc3VjY2VzcyEnKTtcbiAgICAgICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICAgICAgYXBwQ29udGV4dC5zZXRTdGF0ZSh7bGlzdDogZGF0YX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnTGlzdCB1cGRhdGUgcmVxdWVzdCBlcnJvciBib29vJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0L2NvbXBsZXRlZCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcGxldGVkIGxpc3QgdXBkYXRlIHJlcXVlc3Qgc3VjY2VzcyEnKTtcbiAgICAgICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICAgICAgYXBwQ29udGV4dC5zZXRTdGF0ZSh7Y29tcGxldGVkOiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb21wbGV0ZWQgbGlzdCB1cGRhdGUgcmVxdWVzdCBlcnJvciBib29vJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzcGxpY2VUb2RvKGluZGV4KSB7XG4gICAgdmFyIGxpc3QgPSB0aGlzLnN0YXRlLmxpc3Quc2xpY2UoKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlzdDogbGlzdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9kb0Zvcm0gdXNlcklkPXt0aGlzLnN0YXRlLnVzZXJJZH0gXG4gICAgICAgICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnVwZGF0ZUxpc3R9Lz5cbiAgICAgICAgPFRvZG9MaXN0IGxpc3Q9e3RoaXMuc3RhdGUubGlzdH1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIHNwbGljZVRvZG89e3RoaXMuc3BsaWNlVG9kb30vPlxuICAgICAgICA8Q29tcGxldGVkTGlzdCBjb21wbGV0ZWQ9e3RoaXMuc3RhdGUuY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdD17dGhpcy51cGRhdGVMaXN0fVxuICAgICAgICAgICAgICAgICAgc3BsaWNlVG9kbz17dGhpcy5zcGxpY2VUb2RvfS8+XG4gICAgICAgIDxJbnNwaXJhdGlvbmFsUXVvdGUgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==