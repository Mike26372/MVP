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
        task: this.props.listItem.task,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0VudHJ5LmpzeCJdLCJuYW1lcyI6WyJUb2RvRW50cnkiLCJzdWJtaXNzaW9uIiwiX2lkIiwicHJvcHMiLCJsaXN0SXRlbSIsInVzZXJJZCIsInVzZXIiLCJ0YXNrIiwiY29tcGxldGVkIiwidG9kb0VudHJ5Q29udGV4dCIsImNvbXBsZXRlZFN1Ym1pc3Npb24iLCJjcmVhdGVTdWJtaXNzaW9uT2JqIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVMaXN0IiwiZXJyb3IiLCJlcnIiLCJkZWxldGVTdWJtaXNzaW9uIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVDaGVja0NsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTtBQUdiOzs7OzBDQUVxQjtBQUNwQixVQUFJQyxhQUFhO0FBQ2ZDLGFBQUssS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixHQURWO0FBRWZHLGdCQUFRLEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsTUFGYjtBQUdmQyxjQUFNLEtBQUtILEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsSUFIWDtBQUlmQyxjQUFNLEtBQUtKLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkcsSUFKWDtBQUtmQyxtQkFBVyxLQUFLTCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JJO0FBTGhCLE9BQWpCO0FBT0EsYUFBT1AsVUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCO0FBQ0EsVUFBSVEsbUJBQW1CLElBQXZCO0FBQ0EsVUFBSUMsc0JBQXNCLEtBQUtDLG1CQUFMLEVBQTFCOztBQUVBRCwwQkFBb0JGLFNBQXBCLEdBQWdDLENBQUNFLG9CQUFvQkYsU0FBckQ7O0FBRUE7QUFDQUksUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSyw0QkFGQTtBQUdMQyxjQUFNQyxLQUFLQyxTQUFMLENBQWVSLG1CQUFmLENBSEQ7QUFJTFMscUJBQWEsa0JBSlI7QUFLTEMsaUJBQVMsaUJBQVNKLElBQVQsRUFBZTtBQUN0Qkssa0JBQVFDLEdBQVIsQ0FBWSw0QkFBWjtBQUNBYiwyQkFBaUJOLEtBQWpCLENBQXVCb0IsVUFBdkI7QUFDRCxTQVJJO0FBU0xDLGVBQU8sZUFBU0MsR0FBVCxFQUFjO0FBQ25CSixrQkFBUUcsS0FBUixDQUFjLDZCQUFkO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7Ozt3Q0FFbUI7QUFDbEIsVUFBSWYsbUJBQW1CLElBQXZCO0FBQ0EsVUFBSWlCLG1CQUFtQixLQUFLZixtQkFBTCxFQUF2QjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsUUFESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZVEsZ0JBQWYsQ0FIRDtBQUlMUCxxQkFBYSxrQkFKUjtBQUtMQyxpQkFBUyxpQkFBU0osSUFBVCxFQUFlO0FBQ3RCSyxrQkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FiLDJCQUFpQk4sS0FBakIsQ0FBdUJvQixVQUF2QjtBQUNELFNBUkk7QUFTTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJKLGtCQUFRRyxLQUFSLENBQWMsNkJBQWQ7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGlCQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQUcsU0FBUztBQUFBLHFCQUFNLE9BQUtHLGlCQUFMLEVBQU47QUFBQSxhQUFaO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQTVDLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDSyxlQUFLeEIsS0FBTCxDQUFXQyxRQUFYLENBQW9CRyxJQUR6QjtBQUVFO0FBQUE7QUFBQSxjQUFHLE1BQUssSUFBUjtBQUNHLHlCQUFVLG1CQURiO0FBRUUsMkNBQU8sTUFBSyxVQUFaO0FBQ0Esa0JBQUksS0FBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CRixHQUR4QjtBQUVBLHVCQUFTO0FBQUEsdUJBQU0sT0FBSzBCLGdCQUFMLEVBQU47QUFBQSxlQUZUO0FBR0EsdUJBQVMsS0FBS3pCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkksU0FBcEIsR0FBZ0MsU0FBaEMsR0FBNEMsRUFIckQsR0FGRjtBQU1FLDJDQUFPLFNBQVMsS0FBS0wsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixHQUFwQztBQU5GO0FBRkY7QUFGRixPQURGO0FBZ0JEOzs7O0VBM0VxQjJCLE1BQU1DLFMiLCJmaWxlIjoiVG9kb0VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBUb2RvRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICB9XG5cbiAgY3JlYXRlU3VibWlzc2lvbk9iaigpIHtcbiAgICB2YXIgc3VibWlzc2lvbiA9IHtcbiAgICAgIF9pZDogdGhpcy5wcm9wcy5saXN0SXRlbS5faWQsXG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMubGlzdEl0ZW0udXNlcklkLFxuICAgICAgdXNlcjogdGhpcy5wcm9wcy5saXN0SXRlbS51c2VyLFxuICAgICAgdGFzazogdGhpcy5wcm9wcy5saXN0SXRlbS50YXNrLFxuICAgICAgY29tcGxldGVkOiB0aGlzLnByb3BzLmxpc3RJdGVtLmNvbXBsZXRlZFxuICAgIH07XG4gICAgcmV0dXJuIHN1Ym1pc3Npb247XG4gIH1cblxuICBoYW5kbGVDaGVja0NsaWNrKCkge1xuICAgIC8vIENyZWF0ZSBzdWJtaXNzaW9uIGJlZm9yZSB0b2dnbGUgb2Ygc3RhdGVcbiAgICB2YXIgdG9kb0VudHJ5Q29udGV4dCA9IHRoaXM7XG4gICAgdmFyIGNvbXBsZXRlZFN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcblxuICAgIGNvbXBsZXRlZFN1Ym1pc3Npb24uY29tcGxldGVkID0gIWNvbXBsZXRlZFN1Ym1pc3Npb24uY29tcGxldGVkO1xuICAgIFxuICAgIC8vIE1ha2UgQUpBWCByZXF1ZXN0IHNvIHN0YXRlIGVxdWFscyB0aGUgZGF0YWJhc2UgcmVjb3JkXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRTdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2dnbGUgY29tcGxldGlvbiBzdWNjZXNzIScpO1xuICAgICAgICB0b2RvRW50cnlDb250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZ2dsZSBjb21wbGV0aW9uIGZhaWxlZCA6KCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlQ2xpY2soKSB7XG4gICAgdmFyIHRvZG9FbnRyeUNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBkZWxldGVTdWJtaXNzaW9uID0gdGhpcy5jcmVhdGVTdWJtaXNzaW9uT2JqKCk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkZWxldGVTdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGRlbGV0aW9uIHN1Y2Nlc3MhJyk7XG4gICAgICAgIHRvZG9FbnRyeUNvbnRleHQucHJvcHMudXBkYXRlTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9nZ2xlIGNvbXBsZXRpb24gZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVDbGljaygpfT48aSBjbGFzc05hbWU9XCJjbG9zZSBtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPjwvYT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0SXRlbS50YXNrfVxuICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIFxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY29uZGFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5saXN0SXRlbS5faWR9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGVja0NsaWNrKCl9XG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmxpc3RJdGVtLmNvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0vPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubGlzdEl0ZW0uX2lkfT48L2xhYmVsPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59Il19