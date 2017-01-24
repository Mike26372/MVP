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
      this.props.spliceTodo(this.props.index);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0VudHJ5LmpzeCJdLCJuYW1lcyI6WyJUb2RvRW50cnkiLCJzdWJtaXNzaW9uIiwiX2lkIiwicHJvcHMiLCJsaXN0SXRlbSIsInVzZXJJZCIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJjb21wbGV0ZWQiLCJ0b2RvRW50cnlDb250ZXh0IiwiY29tcGxldGVkU3VibWlzc2lvbiIsImNyZWF0ZVN1Ym1pc3Npb25PYmoiLCJzcGxpY2VUb2RvIiwiaW5kZXgiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsImRlbGV0ZVN1Ym1pc3Npb24iLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUNoZWNrQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxTOzs7QUFDSix1QkFBYztBQUFBOztBQUFBO0FBR2I7Ozs7MENBRXFCO0FBQ3BCLFVBQUlDLGFBQWE7QUFDZkMsYUFBSyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLEdBRFY7QUFFZkcsZ0JBQVEsS0FBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxNQUZiO0FBR2ZDLGNBQU0sS0FBS0gsS0FBTCxDQUFXQyxRQUFYLENBQW9CRSxJQUhYO0FBSWZDLGNBQU0sS0FBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CSSxLQUpYO0FBS2ZDLG1CQUFXLEtBQUtOLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQks7QUFMaEIsT0FBakI7QUFPQSxhQUFPUixVQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakI7QUFDQSxVQUFJUyxtQkFBbUIsSUFBdkI7O0FBRUEsVUFBSUMsc0JBQXNCLEtBQUtDLG1CQUFMLEVBQTFCO0FBQ0EsV0FBS1QsS0FBTCxDQUFXVSxVQUFYLENBQXNCLEtBQUtWLEtBQUwsQ0FBV1csS0FBakM7O0FBRUFILDBCQUFvQkYsU0FBcEIsR0FBZ0MsQ0FBQ0Usb0JBQW9CRixTQUFyRDs7QUFFQTtBQUNBTSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZVYsbUJBQWYsQ0FIRDtBQUlMVyxxQkFBYSxrQkFKUjtBQUtMQyxpQkFBUyxpQkFBU0osSUFBVCxFQUFlO0FBQ3RCSyxrQkFBUUMsR0FBUixDQUFZLDRCQUFaO0FBQ0FmLDJCQUFpQlAsS0FBakIsQ0FBdUJ1QixVQUF2QjtBQUNELFNBUkk7QUFTTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJKLGtCQUFRRyxLQUFSLENBQWMsNkJBQWQ7QUFDRDtBQVhJLE9BQVA7QUFhRDs7O3dDQUVtQjtBQUNsQixVQUFJakIsbUJBQW1CLElBQXZCO0FBQ0EsVUFBSW1CLG1CQUFtQixLQUFLakIsbUJBQUwsRUFBdkI7QUFDQUcsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLFFBREg7QUFFTEMsYUFBSyw0QkFGQTtBQUdMQyxjQUFNQyxLQUFLQyxTQUFMLENBQWVRLGdCQUFmLENBSEQ7QUFJTFAscUJBQWEsa0JBSlI7QUFLTEMsaUJBQVMsaUJBQVNKLElBQVQsRUFBZTtBQUN0Qkssa0JBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBZiwyQkFBaUJQLEtBQWpCLENBQXVCdUIsVUFBdkI7QUFDRCxTQVJJO0FBU0xDLGVBQU8sZUFBU0MsR0FBVCxFQUFjO0FBQ25CSixrQkFBUUcsS0FBUixDQUFjLDZCQUFkO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxpQkFBZDtBQUNFO0FBQUE7QUFBQSxZQUFHLFNBQVM7QUFBQSxxQkFBTSxPQUFLRyxpQkFBTCxFQUFOO0FBQUEsYUFBWjtBQUE0QztBQUFBO0FBQUEsY0FBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQUE1QyxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0ssZUFBSzNCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkcsSUFEekI7QUFFRTtBQUFBO0FBQUEsY0FBRyxNQUFLLElBQVI7QUFDRyx5QkFBVSxtQkFEYjtBQUVFLDJDQUFPLE1BQUssVUFBWjtBQUNBLGtCQUFJLEtBQUtKLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsR0FEeEI7QUFFQSx1QkFBUztBQUFBLHVCQUFNLE9BQUs2QixnQkFBTCxFQUFOO0FBQUEsZUFGVDtBQUdBLHVCQUFTLEtBQUs1QixLQUFMLENBQVdDLFFBQVgsQ0FBb0JLLFNBQXBCLEdBQWdDLFNBQWhDLEdBQTRDLEVBSHJELEdBRkY7QUFNRSwyQ0FBTyxTQUFTLEtBQUtOLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsR0FBcEM7QUFORjtBQUZGO0FBRkYsT0FERjtBQWdCRDs7OztFQTdFcUI4QixNQUFNQyxTIiwiZmlsZSI6IlRvZG9FbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgVG9kb0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgfVxuXG4gIGNyZWF0ZVN1Ym1pc3Npb25PYmooKSB7XG4gICAgdmFyIHN1Ym1pc3Npb24gPSB7XG4gICAgICBfaWQ6IHRoaXMucHJvcHMubGlzdEl0ZW0uX2lkLFxuICAgICAgdXNlcklkOiB0aGlzLnByb3BzLmxpc3RJdGVtLnVzZXJJZCxcbiAgICAgIHVzZXI6IHRoaXMucHJvcHMubGlzdEl0ZW0udXNlcixcbiAgICAgIHRhc2s6IHRoaXMucHJvcHMubGlzdEl0ZW0udmFsdWUsXG4gICAgICBjb21wbGV0ZWQ6IHRoaXMucHJvcHMubGlzdEl0ZW0uY29tcGxldGVkXG4gICAgfVxuICAgIHJldHVybiBzdWJtaXNzaW9uO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tDbGljaygpIHtcbiAgICAvLyBDcmVhdGUgc3VibWlzc2lvbiBiZWZvcmUgdG9nZ2xlIG9mIHN0YXRlXG4gICAgdmFyIHRvZG9FbnRyeUNvbnRleHQgPSB0aGlzO1xuXG4gICAgdmFyIGNvbXBsZXRlZFN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcbiAgICB0aGlzLnByb3BzLnNwbGljZVRvZG8odGhpcy5wcm9wcy5pbmRleCk7XG5cbiAgICBjb21wbGV0ZWRTdWJtaXNzaW9uLmNvbXBsZXRlZCA9ICFjb21wbGV0ZWRTdWJtaXNzaW9uLmNvbXBsZXRlZDtcbiAgICBcbiAgICAvLyBNYWtlIEFKQVggcmVxdWVzdCBzbyBzdGF0ZSBlcXVhbHMgdGhlIGRhdGFiYXNlIHJlY29yZFxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xpc3QnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVG9nZ2xlIGNvbXBsZXRpb24gc3VjY2VzcyEnKTtcbiAgICAgICAgdG9kb0VudHJ5Q29udGV4dC5wcm9wcy51cGRhdGVMaXN0KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgY29tcGxldGlvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZUNsaWNrKCkge1xuICAgIHZhciB0b2RvRW50cnlDb250ZXh0ID0gdGhpcztcbiAgICB2YXIgZGVsZXRlU3VibWlzc2lvbiA9IHRoaXMuY3JlYXRlU3VibWlzc2lvbk9iaigpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xpc3QnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGVsZXRlU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBkZWxldGlvbiBzdWNjZXNzIScpO1xuICAgICAgICB0b2RvRW50cnlDb250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZ2dsZSBjb21wbGV0aW9uIGZhaWxlZCA6KCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtXCI+XG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsZXRlQ2xpY2soKX0+PGkgY2xhc3NOYW1lPVwiY2xvc2UgbWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT48L2E+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGlzdEl0ZW0udGFza31cbiAgICAgICAgICA8YSBocmVmPVwiIyFcIiBcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMubGlzdEl0ZW0uX2lkfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hlY2tDbGljaygpfVxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5saXN0SXRlbS5jb21wbGV0ZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmxpc3RJdGVtLl9pZH0+PC9sYWJlbD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59Il19