'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoEntry = function (_React$Component) {
  _inherits(TodoEntry, _React$Component);

  function TodoEntry() {
    _classCallCheck(this, TodoEntry);

    return _possibleConstructorReturn(this, (TodoEntry.__proto__ || Object.getPrototypeOf(TodoEntry)).call(this));
  }

  _createClass(TodoEntry, [{
    key: 'createSubmissionObj',
    value: function createSubmissionObj() {
      var submission = {
        _id: this.props.listItem._id,
        userId: this.props.listItem.userId,
        user: this.props.listItem.user,
        task: this.props.listItem.value,
        completed: this.props.listItem.completed
      };
      return submission;
    }
  }, {
    key: 'handleCheckClick',
    value: function handleCheckClick() {
      // Create submission before toggle of state
      var todoEntryContext = this;

      var completedSubmission = this.createSubmissionObj();
      completedSubmission.completed = !completedSubmission.completed;

      // Make AJAX request so state equals the database record
      $.ajax({
        method: 'PUT',
        url: 'http://127.0.0.1:3000/list',
        data: JSON.stringify(completedSubmission),
        contentType: 'application/json',
        success: function success(data) {
          console.log('Toggle completion success!');
          todoEntryContext.props.updateList();
        },
        error: function error(err) {
          console.error('Toggle completion failed :(');
        }
      });
    }
  }, {
    key: 'handleDeleteClick',
    value: function handleDeleteClick() {
      var todoEntryContext = this;
      var deleteSubmission = this.createSubmissionObj();
      $.ajax({
        method: 'DELETE',
        url: 'http://127.0.0.1:3000/list',
        data: JSON.stringify(deleteSubmission),
        contentType: 'application/json',
        success: function success(data) {
          console.log('Data deletion success!');
          todoEntryContext.props.updateList();
        },
        error: function error(err) {
          console.error('Toggle completion failed :(');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'li',
        { className: 'collection-item' },
        React.createElement(
          'a',
          { onClick: function onClick() {
              return _this2.handleDeleteClick();
            } },
          React.createElement(
            'i',
            { className: 'close material-icons' },
            'close'
          )
        ),
        React.createElement(
          'span',
          null,
          this.props.listItem.task,
          React.createElement(
            'a',
            { href: '#!',
              className: 'secondary-content' },
            React.createElement('input', { type: 'checkbox',
              id: this.props.listItem._id,
              onClick: function onClick() {
                return _this2.handleCheckClick();
              },
              checked: this.props.listItem.completed ? "checked" : "" }),
            React.createElement('label', { htmlFor: this.props.listItem._id })
          )
        )
      );
    }
  }]);

  return TodoEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0VudHJ5LmpzeCJdLCJuYW1lcyI6WyJUb2RvRW50cnkiLCJzdWJtaXNzaW9uIiwiX2lkIiwicHJvcHMiLCJsaXN0SXRlbSIsInVzZXJJZCIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJjb21wbGV0ZWQiLCJ0b2RvRW50cnlDb250ZXh0IiwiY29tcGxldGVkU3VibWlzc2lvbiIsImNyZWF0ZVN1Ym1pc3Npb25PYmoiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsImRlbGV0ZVN1Ym1pc3Npb24iLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUNoZWNrQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxTOzs7QUFDSix1QkFBYztBQUFBOztBQUFBO0FBR2I7Ozs7MENBRXFCO0FBQ3BCLFVBQUlDLGFBQWE7QUFDZkMsYUFBSyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBRFY7QUFFZkcsZ0JBQVEsS0FBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxNQUZiO0FBR2ZDLGNBQU0sS0FBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxJQUhYO0FBSWZDLGNBQU0sS0FBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CSSxLQUpYO0FBS2ZDLG1CQUFXLEtBQUtOLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQks7QUFMaEIsT0FBakI7QUFPQSxhQUFPUixVQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakI7QUFDQSxVQUFJUyxtQkFBbUIsSUFBdkI7O0FBRUEsVUFBSUMsc0JBQXNCLEtBQUtDLG1CQUFMLEVBQTFCO0FBQ0FELDBCQUFvQkYsU0FBcEIsR0FBZ0MsQ0FBQ0Usb0JBQW9CRixTQUFyRDs7QUFFQTtBQUNBSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZVIsbUJBQWYsQ0FIRDtBQUlMUyxxQkFBYSxrQkFKUjtBQUtMQyxpQkFBUyxpQkFBU0osSUFBVCxFQUFlO0FBQ3RCSyxrQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0FiLDJCQUFpQlAsS0FBakIsQ0FBdUJxQixVQUF2QjtBQUNELFNBUkk7QUFTTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJKLGtCQUFRRyxLQUFSLENBQWMsNkJBQWQ7QUFDRDtBQVhJLE9BQVA7QUFhRDs7O3dDQUVtQjtBQUNsQixVQUFJZixtQkFBbUIsSUFBdkI7QUFDQSxVQUFJaUIsbUJBQW1CLEtBQUtmLG1CQUFMLEVBQXZCO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxRQURIO0FBRUxDLGFBQUssNEJBRkE7QUFHTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlUSxnQkFBZixDQUhEO0FBSUxQLHFCQUFhLGtCQUpSO0FBS0xDLGlCQUFTLGlCQUFTSixJQUFULEVBQWU7QUFDdEJLLGtCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQWIsMkJBQWlCUCxLQUFqQixDQUF1QnFCLFVBQXZCO0FBQ0QsU0FSSTtBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkosa0JBQVFHLEtBQVIsQ0FBYyw2QkFBZDtBQUNEO0FBWEksT0FBUDtBQWFEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsaUJBQWQ7QUFDRTtBQUFBO0FBQUEsWUFBRyxTQUFTO0FBQUEscUJBQU0sT0FBS0csaUJBQUwsRUFBTjtBQUFBLGFBQVo7QUFBNEM7QUFBQTtBQUFBLGNBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUE7QUFBNUMsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNLLGVBQUt6QixLQUFMLENBQVdDLFFBQVgsQ0FBb0JHLElBRHpCO0FBRUU7QUFBQTtBQUFBLGNBQUcsTUFBSyxJQUFSO0FBQ0cseUJBQVUsbUJBRGI7QUFFRSwyQ0FBTyxNQUFLLFVBQVo7QUFDQSxrQkFBSSxLQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBRHhCO0FBRUEsdUJBQVM7QUFBQSx1QkFBTSxPQUFLMkIsZ0JBQUwsRUFBTjtBQUFBLGVBRlQ7QUFHQSx1QkFBUyxLQUFLMUIsS0FBTCxDQUFXQyxRQUFYLENBQW9CSyxTQUFwQixHQUFnQyxTQUFoQyxHQUE0QyxFQUhyRCxHQUZGO0FBTUUsMkNBQU8sU0FBUyxLQUFLTixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBQXBDO0FBTkY7QUFGRjtBQUZGLE9BREY7QUFnQkQ7Ozs7RUEzRXFCNEIsTUFBTUMsUyIsImZpbGUiOiJUb2RvRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFRvZG9FbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gIH1cblxuICBjcmVhdGVTdWJtaXNzaW9uT2JqKCkge1xuICAgIHZhciBzdWJtaXNzaW9uID0ge1xuICAgICAgX2lkOiB0aGlzLnByb3BzLmxpc3RJdGVtLl9pZCxcbiAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy5saXN0SXRlbS51c2VySWQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLmxpc3RJdGVtLnVzZXIsXG4gICAgICB0YXNrOiB0aGlzLnByb3BzLmxpc3RJdGVtLnZhbHVlLFxuICAgICAgY29tcGxldGVkOiB0aGlzLnByb3BzLmxpc3RJdGVtLmNvbXBsZXRlZFxuICAgIH1cbiAgICByZXR1cm4gc3VibWlzc2lvbjtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQ2xpY2soKSB7XG4gICAgLy8gQ3JlYXRlIHN1Ym1pc3Npb24gYmVmb3JlIHRvZ2dsZSBvZiBzdGF0ZVxuICAgIHZhciB0b2RvRW50cnlDb250ZXh0ID0gdGhpcztcblxuICAgIHZhciBjb21wbGV0ZWRTdWJtaXNzaW9uID0gdGhpcy5jcmVhdGVTdWJtaXNzaW9uT2JqKCk7XG4gICAgY29tcGxldGVkU3VibWlzc2lvbi5jb21wbGV0ZWQgPSAhY29tcGxldGVkU3VibWlzc2lvbi5jb21wbGV0ZWQ7XG4gICAgXG4gICAgLy8gTWFrZSBBSkFYIHJlcXVlc3Qgc28gc3RhdGUgZXF1YWxzIHRoZSBkYXRhYmFzZSByZWNvcmRcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFN1Ym1pc3Npb24pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZ2dsZSBjb21wbGV0aW9uIHN1Y2Nlc3MhJyk7XG4gICAgICAgIHRvZG9FbnRyeUNvbnRleHQucHJvcHMudXBkYXRlTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9nZ2xlIGNvbXBsZXRpb24gZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGVDbGljaygpIHtcbiAgICB2YXIgdG9kb0VudHJ5Q29udGV4dCA9IHRoaXM7XG4gICAgdmFyIGRlbGV0ZVN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRlbGV0ZVN1Ym1pc3Npb24pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgZGVsZXRpb24gc3VjY2VzcyEnKTtcbiAgICAgICAgdG9kb0VudHJ5Q29udGV4dC5wcm9wcy51cGRhdGVMaXN0KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgY29tcGxldGlvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbVwiPlxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKCl9PjxpIGNsYXNzTmFtZT1cImNsb3NlIG1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9hPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3RJdGVtLnRhc2t9XG4gICAgICAgICAgPGEgaHJlZj1cIiMhXCIgXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmxpc3RJdGVtLl9pZH0gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoZWNrQ2xpY2soKX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlzdEl0ZW0uY29tcGxldGVkID8gXCJjaGVja2VkXCIgOiBcIlwifS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5saXN0SXRlbS5faWR9PjwvbGFiZWw+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufSJdfQ==