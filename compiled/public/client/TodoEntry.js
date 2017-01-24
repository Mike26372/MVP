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
      // this.props.spliceTodo(this.props.index);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0VudHJ5LmpzeCJdLCJuYW1lcyI6WyJUb2RvRW50cnkiLCJzdWJtaXNzaW9uIiwiX2lkIiwicHJvcHMiLCJsaXN0SXRlbSIsInVzZXJJZCIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJjb21wbGV0ZWQiLCJ0b2RvRW50cnlDb250ZXh0IiwiY29tcGxldGVkU3VibWlzc2lvbiIsImNyZWF0ZVN1Ym1pc3Npb25PYmoiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsImRlbGV0ZVN1Ym1pc3Npb24iLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUNoZWNrQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxTOzs7QUFDSix1QkFBYztBQUFBOztBQUFBO0FBR2I7Ozs7MENBRXFCO0FBQ3BCLFVBQUlDLGFBQWE7QUFDZkMsYUFBSyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBRFY7QUFFZkcsZ0JBQVEsS0FBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxNQUZiO0FBR2ZDLGNBQU0sS0FBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxJQUhYO0FBSWZDLGNBQU0sS0FBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CSSxLQUpYO0FBS2ZDLG1CQUFXLEtBQUtOLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQks7QUFMaEIsT0FBakI7QUFPQSxhQUFPUixVQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakI7QUFDQSxVQUFJUyxtQkFBbUIsSUFBdkI7O0FBRUEsVUFBSUMsc0JBQXNCLEtBQUtDLG1CQUFMLEVBQTFCO0FBQ0E7O0FBRUFELDBCQUFvQkYsU0FBcEIsR0FBZ0MsQ0FBQ0Usb0JBQW9CRixTQUFyRDs7QUFFQTtBQUNBSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZVIsbUJBQWYsQ0FIRDtBQUlMUyxxQkFBYSxrQkFKUjtBQUtMQyxpQkFBUyxpQkFBU0osSUFBVCxFQUFlO0FBQ3RCSyxrQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0FiLDJCQUFpQlAsS0FBakIsQ0FBdUJxQixVQUF2QjtBQUNELFNBUkk7QUFTTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJKLGtCQUFRRyxLQUFSLENBQWMsNkJBQWQ7QUFDRDtBQVhJLE9BQVA7QUFhRDs7O3dDQUVtQjtBQUNsQixVQUFJZixtQkFBbUIsSUFBdkI7QUFDQSxVQUFJaUIsbUJBQW1CLEtBQUtmLG1CQUFMLEVBQXZCO0FBQ0FDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxRQURIO0FBRUxDLGFBQUssNEJBRkE7QUFHTEMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlUSxnQkFBZixDQUhEO0FBSUxQLHFCQUFhLGtCQUpSO0FBS0xDLGlCQUFTLGlCQUFTSixJQUFULEVBQWU7QUFDdEJLLGtCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDQWIsMkJBQWlCUCxLQUFqQixDQUF1QnFCLFVBQXZCO0FBQ0QsU0FSSTtBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkosa0JBQVFHLEtBQVIsQ0FBYyw2QkFBZDtBQUNEO0FBWEksT0FBUDtBQWFEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsaUJBQWQ7QUFDRTtBQUFBO0FBQUEsWUFBRyxTQUFTO0FBQUEscUJBQU0sT0FBS0csaUJBQUwsRUFBTjtBQUFBLGFBQVo7QUFBNEM7QUFBQTtBQUFBLGNBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUE7QUFBNUMsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNLLGVBQUt6QixLQUFMLENBQVdDLFFBQVgsQ0FBb0JHLElBRHpCO0FBRUU7QUFBQTtBQUFBLGNBQUcsTUFBSyxJQUFSO0FBQ0cseUJBQVUsbUJBRGI7QUFFRSwyQ0FBTyxNQUFLLFVBQVo7QUFDQSxrQkFBSSxLQUFLSixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBRHhCO0FBRUEsdUJBQVM7QUFBQSx1QkFBTSxPQUFLMkIsZ0JBQUwsRUFBTjtBQUFBLGVBRlQ7QUFHQSx1QkFBUyxLQUFLMUIsS0FBTCxDQUFXQyxRQUFYLENBQW9CSyxTQUFwQixHQUFnQyxTQUFoQyxHQUE0QyxFQUhyRCxHQUZGO0FBTUUsMkNBQU8sU0FBUyxLQUFLTixLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBQXBDO0FBTkY7QUFGRjtBQUZGLE9BREY7QUFnQkQ7Ozs7RUE3RXFCNEIsTUFBTUMsUyIsImZpbGUiOiJUb2RvRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFRvZG9FbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gIH1cblxuICBjcmVhdGVTdWJtaXNzaW9uT2JqKCkge1xuICAgIHZhciBzdWJtaXNzaW9uID0ge1xuICAgICAgX2lkOiB0aGlzLnByb3BzLmxpc3RJdGVtLl9pZCxcbiAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy5saXN0SXRlbS51c2VySWQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLmxpc3RJdGVtLnVzZXIsXG4gICAgICB0YXNrOiB0aGlzLnByb3BzLmxpc3RJdGVtLnZhbHVlLFxuICAgICAgY29tcGxldGVkOiB0aGlzLnByb3BzLmxpc3RJdGVtLmNvbXBsZXRlZFxuICAgIH07XG4gICAgcmV0dXJuIHN1Ym1pc3Npb247XG4gIH1cblxuICBoYW5kbGVDaGVja0NsaWNrKCkge1xuICAgIC8vIENyZWF0ZSBzdWJtaXNzaW9uIGJlZm9yZSB0b2dnbGUgb2Ygc3RhdGVcbiAgICB2YXIgdG9kb0VudHJ5Q29udGV4dCA9IHRoaXM7XG5cbiAgICB2YXIgY29tcGxldGVkU3VibWlzc2lvbiA9IHRoaXMuY3JlYXRlU3VibWlzc2lvbk9iaigpO1xuICAgIC8vIHRoaXMucHJvcHMuc3BsaWNlVG9kbyh0aGlzLnByb3BzLmluZGV4KTtcblxuICAgIGNvbXBsZXRlZFN1Ym1pc3Npb24uY29tcGxldGVkID0gIWNvbXBsZXRlZFN1Ym1pc3Npb24uY29tcGxldGVkO1xuICAgIFxuICAgIC8vIE1ha2UgQUpBWCByZXF1ZXN0IHNvIHN0YXRlIGVxdWFscyB0aGUgZGF0YWJhc2UgcmVjb3JkXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRTdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2dnbGUgY29tcGxldGlvbiBzdWNjZXNzIScpO1xuICAgICAgICB0b2RvRW50cnlDb250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZ2dsZSBjb21wbGV0aW9uIGZhaWxlZCA6KCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlQ2xpY2soKSB7XG4gICAgdmFyIHRvZG9FbnRyeUNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBkZWxldGVTdWJtaXNzaW9uID0gdGhpcy5jcmVhdGVTdWJtaXNzaW9uT2JqKCk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkZWxldGVTdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGRlbGV0aW9uIHN1Y2Nlc3MhJyk7XG4gICAgICAgIHRvZG9FbnRyeUNvbnRleHQucHJvcHMudXBkYXRlTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9nZ2xlIGNvbXBsZXRpb24gZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVDbGljaygpfT48aSBjbGFzc05hbWU9XCJjbG9zZSBtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPjwvYT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0SXRlbS50YXNrfVxuICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIFxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY29uZGFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5saXN0SXRlbS5faWR9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGVja0NsaWNrKCl9XG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmxpc3RJdGVtLmNvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubGlzdEl0ZW0uX2lkfT48L2xhYmVsPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59Il19