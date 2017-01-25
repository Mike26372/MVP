'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoalEntry = function (_React$Component) {
  _inherits(GoalEntry, _React$Component);

  function GoalEntry() {
    _classCallCheck(this, GoalEntry);

    var _this = _possibleConstructorReturn(this, (GoalEntry.__proto__ || Object.getPrototypeOf(GoalEntry)).call(this));

    _this.state = {
      editable: false
    };
    return _this;
  }

  _createClass(GoalEntry, [{
    key: 'createSubmissionObj',
    value: function createSubmissionObj() {
      // console.log('SPAN REF: ');
      // console.log(this.task.innerHTML);
      var submission = {
        _id: this.props.goalItem._id,
        userId: this.props.goalItem.userId,
        user: this.props.goalItem.user,
        task: this.task.innerHTML,
        description: this.description.value,
        completed: this.props.goalItem.completed
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
        url: 'http://127.0.0.1:3000/goal',
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
        url: 'http://127.0.0.1:3000/goal',
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
    key: 'handleDescriptionChange',
    value: function handleDescriptionChange(e) {
      var goalEntryContext = this;
      var goalSubmission = this.createSubmissionObj();

      // Make AJAX request so state equals the database record
      $.ajax({
        method: 'PUT',
        url: 'http://127.0.0.1:3000/goal',
        data: JSON.stringify(goalSubmission),
        contentType: 'application/json',
        success: function success(data) {
          console.log('Description change success!');
        },
        error: function error(err) {
          console.error('Description change failed :(');
        }
      });
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick() {
      var editState = this.state.editable;
      this.setState({
        editable: !this.state.editable
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'li',
        null,
        React.createElement(
          'div',
          { className: 'collapsible-header' },
          React.createElement(
            'a',
            { onClick: function onClick(e) {
                return _this2.handleDoubleClick();
              } },
            React.createElement(
              'i',
              { className: 'material-icons' },
              'mode_edit'
            )
          ),
          React.createElement(
            'span',
            {
              contentEditable: this.state.editable,
              ref: function ref(input) {
                return _this2.task = input;
              },
              onBlur: function onBlur(e) {
                return _this2.handleDescriptionChange(e);
              } },
            this.props.goalItem.task
          ),
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
          )
        ),
        React.createElement(
          'div',
          { className: 'collapsible-body' },
          React.createElement(
            'div',
            { className: 'row goal-textarea' },
            React.createElement(
              'textarea',
              {
                className: 'materialize-textarea col s10 offset-s1',
                ref: function ref(input) {
                  return _this2.description = input;
                },
                onChange: function onChange(e) {
                  return _this2.handleDescriptionChange(e);
                } },
              this.props.goalItem.description
            )
          )
        )
      );
    }
  }]);

  return GoalEntry;
}(React.Component);

// <i className="material-icons">filter_drama</i>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvR29hbEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJHb2FsRW50cnkiLCJzdGF0ZSIsImVkaXRhYmxlIiwic3VibWlzc2lvbiIsIl9pZCIsInByb3BzIiwiZ29hbEl0ZW0iLCJ1c2VySWQiLCJ1c2VyIiwidGFzayIsImlubmVySFRNTCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJjb21wbGV0ZWQiLCJ0b2RvRW50cnlDb250ZXh0IiwiY29tcGxldGVkU3VibWlzc2lvbiIsImNyZWF0ZVN1Ym1pc3Npb25PYmoiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsImRlbGV0ZVN1Ym1pc3Npb24iLCJlIiwiZ29hbEVudHJ5Q29udGV4dCIsImdvYWxTdWJtaXNzaW9uIiwiZWRpdFN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVEb3VibGVDbGljayIsImlucHV0IiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJoYW5kbGVEZWxldGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLFM7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVO0FBREMsS0FBYjtBQUZZO0FBS2I7Ozs7MENBRXFCO0FBQ3BCO0FBQ0E7QUFDQSxVQUFJQyxhQUFhO0FBQ2ZDLGFBQUssS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixHQURWO0FBRWZHLGdCQUFRLEtBQUtGLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsTUFGYjtBQUdmQyxjQUFNLEtBQUtILEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkUsSUFIWDtBQUlmQyxjQUFNLEtBQUtBLElBQUwsQ0FBVUMsU0FKRDtBQUtmQyxxQkFBYSxLQUFL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QUEsY0FBRyxTQUFTO0FBQUEsdUJBQU0sT0FBSytCLGlCQUFMLEVBQU47QUFBQSxlQUFaO0FBQTRDO0FBQUE7QUFBQSxnQkFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQUE1QztBQVJGLFNBREY7QUFXRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLDJCQUFVLHdDQURaO0FBRUUscUJBQUssYUFBQ0YsS0FBRDtBQUFBLHlCQUFXLE9BQUszQixXQUFMLEdBQW1CMkIsS0FBOUI7QUFBQSxpQkFGUDtBQUdFLDBCQUFVLGtCQUFDTixDQUFEO0FBQUEseUJBQU8sT0FBS08sdUJBQUwsQ0FBNkJQLENBQTdCLENBQVA7QUFBQSxpQkFIWjtBQUlHLG1CQUFLM0IsS0FBTCxDQUFXQyxRQUFYLENBQW9CSztBQUp2QjtBQURGO0FBREY7QUFYRixPQURGO0FBd0JEOzs7O0VBcEhxQjhCLE1BQU1DLFM7O0FBdUg5QiIsImZpbGUiOiJHb2FsRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEdvYWxFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRhYmxlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjcmVhdGVTdWJtaXNzaW9uT2JqKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTUEFOIFJFRjogJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50YXNrLmlubmVySFRNTCk7XG4gICAgdmFyIHN1Ym1pc3Npb24gPSB7XG4gICAgICBfaWQ6IHRoaXMucHJvcHMuZ29hbEl0ZW0uX2lkLFxuICAgICAgdXNlcklkOiB0aGlzLnByb3BzLmdvYWxJdGVtLnVzZXJJZCxcbiAgICAgIHVzZXI6IHRoaXMucHJvcHMuZ29hbEl0ZW0udXNlcixcbiAgICAgIHRhc2s6IHRoaXMudGFzay5pbm5lckhUTUwsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGNvbXBsZXRlZDogdGhpcy5wcm9wcy5nb2FsSXRlbS5jb21wbGV0ZWRcbiAgICB9O1xuICAgIHJldHVybiBzdWJtaXNzaW9uO1xuICB9XG5cbiAgaGFuZGxlQ2hlY2tDbGljaygpIHtcbiAgICAvLyBDcmVhdGUgc3VibWlzc2lvbiBiZWZvcmUgdG9nZ2xlIG9mIHN0YXRlXG4gICAgdmFyIHRvZG9FbnRyeUNvbnRleHQgPSB0aGlzO1xuXG4gICAgdmFyIGNvbXBsZXRlZFN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcbiAgICAvLyB0aGlzLnByb3BzLnNwbGljZVRvZG8odGhpcy5wcm9wcy5pbmRleCk7XG5cbiAgICBjb21wbGV0ZWRTdWJtaXNzaW9uLmNvbXBsZXRlZCA9ICFjb21wbGV0ZWRTdWJtaXNzaW9uLmNvbXBsZXRlZDtcbiAgICBcbiAgICAvLyBNYWtlIEFKQVggcmVxdWVzdCBzbyBzdGF0ZSBlcXVhbHMgdGhlIGRhdGFiYXNlIHJlY29yZFxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2dvYWwnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVG9nZ2xlIGNvbXBsZXRpb24gc3VjY2VzcyEnKTtcbiAgICAgICAgdG9kb0VudHJ5Q29udGV4dC5wcm9wcy51cGRhdGVMaXN0KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgY29tcGxldGlvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZUNsaWNrKCkge1xuICAgIHZhciB0b2RvRW50cnlDb250ZXh0ID0gdGhpcztcbiAgICB2YXIgZGVsZXRlU3VibWlzc2lvbiA9IHRoaXMuY3JlYXRlU3VibWlzc2lvbk9iaigpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2dvYWwnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGVsZXRlU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBkZWxldGlvbiBzdWNjZXNzIScpO1xuICAgICAgICB0b2RvRW50cnlDb250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZ2dsZSBjb21wbGV0aW9uIGZhaWxlZCA6KCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UoZSkge1xuICAgIHZhciBnb2FsRW50cnlDb250ZXh0ID0gdGhpcztcbiAgICB2YXIgZ29hbFN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcblxuICAgIC8vIE1ha2UgQUpBWCByZXF1ZXN0IHNvIHN0YXRlIGVxdWFscyB0aGUgZGF0YWJhc2UgcmVjb3JkXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvZ29hbCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShnb2FsU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRGVzY3JpcHRpb24gY2hhbmdlIHN1Y2Nlc3MhJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdEZXNjcmlwdGlvbiBjaGFuZ2UgZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEb3VibGVDbGljaygpIHtcbiAgICB2YXIgZWRpdFN0YXRlID0gdGhpcy5zdGF0ZS5lZGl0YWJsZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRhYmxlOiAhdGhpcy5zdGF0ZS5lZGl0YWJsZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGUtaGVhZGVyXCI+XG4gICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlRG91YmxlQ2xpY2soKX0+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tb2RlX2VkaXQ8L2k+PC9hPlxuICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17dGhpcy5zdGF0ZS5lZGl0YWJsZX1cbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy50YXNrID0gaW5wdXR9XG4gICAgICAgICAgb25CbHVyPXsoZSkgPT4gdGhpcy5oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZShlKX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5nb2FsSXRlbS50YXNrfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKCl9PjxpIGNsYXNzTmFtZT1cImNsb3NlIG1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzaWJsZS1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ29hbC10ZXh0YXJlYVwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbGl6ZS10ZXh0YXJlYSBjb2wgczEwIG9mZnNldC1zMVwiXG4gICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLmRlc2NyaXB0aW9uID0gaW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVEZXNjcmlwdGlvbkNoYW5nZShlKX0+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmdvYWxJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuLy8gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5maWx0ZXJfZHJhbWE8L2k+Il19