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
      completed: ['no completed tasks'],
      goals: ['no aspirations here']
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

      $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/goal',
        dataType: 'json',
        success: function success(data) {
          console.log('Goals update request success!');
          appContext.setState({ goals: data });
        },
        error: function error(_error3) {
          console.log('Goals update request error booo');
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
          updateList: this.updateList
        }),
        React.createElement(TodoList, { list: this.state.list,
          updateList: this.updateList
        }),
        React.createElement(CompletedList, { completed: this.state.completed,
          updateList: this.updateList
        }),
        React.createElement(GoalForm, { userId: this.state.userId,
          user: this.state.user,
          updateList: this.updateList
        }),
        React.createElement(GoalList, { goals: this.state.goals,
          updateList: this.updateList
        }),
        React.createElement(InspirationalQuote, null)
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJzdGF0ZSIsInVzZXJJZCIsInVzZXIiLCJsaXN0IiwiY29tcGxldGVkIiwiZ29hbHMiLCJ1cGRhdGVMaXN0IiwiYmluZCIsImFwcENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwic2V0U3RhdGUiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsQ0FERztBQUVYQyxZQUFNLFNBRks7QUFHWEMsWUFBTSxDQUFDLG1CQUFELENBSEs7QUFJWEMsaUJBQVcsQ0FBQyxvQkFBRCxDQUpBO0FBS1hDLGFBQU8sQ0FBQyxxQkFBRDtBQUxJLEtBQWI7QUFPQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBVFk7QUFVYjs7Ozt5Q0FFb0I7QUFDbkIsV0FBS0QsVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJRSxhQUFhLElBQWpCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGtCQUFVLE1BSEw7QUFJTEMsaUJBQVMsaUJBQVNDLElBQVQsRUFBZTtBQUN0QlIsa0JBQVFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRixxQkFBV1UsUUFBWCxDQUFvQixFQUFDZixNQUFNYyxJQUFQLEVBQXBCO0FBQ0QsU0FQSTtBQVFMRSxlQUFPLGVBQVNBLE1BQVQsRUFBZ0I7QUFDckJWLGtCQUFRQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQVZJLE9BQVA7O0FBYUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxLQURIO0FBRUxDLGFBQUssc0NBRkE7QUFHTEMsa0JBQVUsTUFITDtBQUlMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCUixrQkFBUUMsR0FBUixDQUFZLHdDQUFaO0FBQ0FGLHFCQUFXVSxRQUFYLENBQW9CLEVBQUNkLFdBQVdhLElBQVosRUFBcEI7QUFDRCxTQVBJO0FBUUxFLGVBQU8sZUFBU0EsT0FBVCxFQUFnQjtBQUNyQlYsa0JBQVFDLEdBQVIsQ0FBWSwwQ0FBWjtBQUNEO0FBVkksT0FBUDs7QUFhQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSyw0QkFGQTtBQUdMQyxrQkFBVSxNQUhMO0FBSUxDLGlCQUFTLGlCQUFTQyxJQUFULEVBQWU7QUFDdEJSLGtCQUFRQyxHQUFSLENBQVksK0JBQVo7QUFDQUYscUJBQVdVLFFBQVgsQ0FBb0IsRUFBQ2IsT0FBT1ksSUFBUixFQUFwQjtBQUNELFNBUEk7QUFRTEUsZUFBTyxlQUFTQSxPQUFULEVBQWdCO0FBQ3JCVixrQkFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0Q7QUFWSSxPQUFQO0FBWUQ7Ozs2QkFHUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLFFBQVEsS0FBS1YsS0FBTCxDQUFXQyxNQUE3QjtBQUNVLGdCQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFEM0I7QUFFVSxzQkFBWSxLQUFLSTtBQUYzQixVQURGO0FBS0UsNEJBQUMsUUFBRCxJQUFVLE1BQU0sS0FBS04sS0FBTCxDQUFXRyxJQUEzQjtBQUNVLHNCQUFZLEtBQUtHO0FBRDNCLFVBTEY7QUFRRSw0QkFBQyxhQUFELElBQWUsV0FBVyxLQUFLTixLQUFMLENBQVdJLFNBQXJDO0FBQ1Usc0JBQVksS0FBS0U7QUFEM0IsVUFSRjtBQVdFLDRCQUFDLFFBQUQsSUFBVSxRQUFRLEtBQUtOLEtBQUwsQ0FBV0MsTUFBN0I7QUFDVSxnQkFBTSxLQUFLRCxLQUFMLENBQVdFLElBRDNCO0FBRVUsc0JBQVksS0FBS0k7QUFGM0IsVUFYRjtBQWVFLDRCQUFDLFFBQUQsSUFBVSxPQUFPLEtBQUtOLEtBQUwsQ0FBV0ssS0FBNUI7QUFDVSxzQkFBWSxLQUFLQztBQUQzQixVQWZGO0FBa0JFLDRCQUFDLGtCQUFEO0FBbEJGLE9BREY7QUFzQkQ7Ozs7RUFwRmVjLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VySWQ6IDEsXG4gICAgICB1c2VyOiAnTWljaGFlbCcsXG4gICAgICBsaXN0OiBbJ3N0YXRlIG5vdCB1cGRhdGVkJ10sXG4gICAgICBjb21wbGV0ZWQ6IFsnbm8gY29tcGxldGVkIHRhc2tzJ10sXG4gICAgICBnb2FsczogWydubyBhc3BpcmF0aW9ucyBoZXJlJ10sXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxpc3QgPSB0aGlzLnVwZGF0ZUxpc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3QoKSB7XG4gICAgdmFyIGFwcENvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKCdVcGRhdGUgbGlzdCBjYWxsZWQgZnJvbSBBcHAnKTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHVwZGF0ZSByZXF1ZXN0IHN1Y2Nlc3MhJyk7XG4gICAgICAgIGFwcENvbnRleHQuc2V0U3RhdGUoe2xpc3Q6IGRhdGF9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xpc3QgdXBkYXRlIHJlcXVlc3QgZXJyb3IgYm9vbycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdC9jb21wbGV0ZWQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlZCBsaXN0IHVwZGF0ZSByZXF1ZXN0IHN1Y2Nlc3MhJyk7XG4gICAgICAgIGFwcENvbnRleHQuc2V0U3RhdGUoe2NvbXBsZXRlZDogZGF0YX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcGxldGVkIGxpc3QgdXBkYXRlIHJlcXVlc3QgZXJyb3IgYm9vbycpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvZ29hbCcsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnR29hbHMgdXBkYXRlIHJlcXVlc3Qgc3VjY2VzcyEnKTtcbiAgICAgICAgYXBwQ29udGV4dC5zZXRTdGF0ZSh7Z29hbHM6IGRhdGF9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dvYWxzIHVwZGF0ZSByZXF1ZXN0IGVycm9yIGJvb28nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VG9kb0Zvcm0gdXNlcklkPXt0aGlzLnN0YXRlLnVzZXJJZH0gXG4gICAgICAgICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICA8VG9kb0xpc3QgbGlzdD17dGhpcy5zdGF0ZS5saXN0fVxuICAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdD17dGhpcy51cGRhdGVMaXN0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgPENvbXBsZXRlZExpc3QgY29tcGxldGVkPXt0aGlzLnN0YXRlLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDxHb2FsRm9ybSB1c2VySWQ9e3RoaXMuc3RhdGUudXNlcklkfSBcbiAgICAgICAgICAgICAgICAgIHVzZXI9e3RoaXMuc3RhdGUudXNlcn1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDxHb2FsTGlzdCBnb2Fscz17dGhpcy5zdGF0ZS5nb2Fsc31cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDxJbnNwaXJhdGlvbmFsUXVvdGUgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==