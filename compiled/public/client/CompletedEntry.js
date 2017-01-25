'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompletedEntry = function (_React$Component) {
  _inherits(CompletedEntry, _React$Component);

  function CompletedEntry() {
    _classCallCheck(this, CompletedEntry);

    return _possibleConstructorReturn(this, (CompletedEntry.__proto__ || Object.getPrototypeOf(CompletedEntry)).call(this));
  }

  _createClass(CompletedEntry, [{
    key: 'createSubmissionObj',
    value: function createSubmissionObj() {
      var submission = {
        _id: this.props.completedItem._id,
        userId: this.props.completedItem.userId,
        user: this.props.completedItem.user,
        task: this.props.completedItem.task,
        completed: this.props.completedItem.completed
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
          this.props.completedItem.task,
          React.createElement(
            'a',
            { href: '#!',
              className: 'secondary-content' },
            React.createElement('input', { type: 'checkbox',
              id: this.props.completedItem._id,
              onClick: function onClick() {
                return _this2.handleCheckClick();
              },
              checked: this.props.completedItem.completed ? "checked" : "" }),
            React.createElement('label', { htmlFor: this.props.completedItem._id })
          )
        )
      );
    }
  }]);

  return CompletedEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQ29tcGxldGVkRW50cnkuanN4Il0sIm5hbWVzIjpbIkNvbXBsZXRlZEVudHJ5Iiwic3VibWlzc2lvbiIsIl9pZCIsInByb3BzIiwiY29tcGxldGVkSXRlbSIsInVzZXJJZCIsInVzZXIiLCJ0YXNrIiwiY29tcGxldGVkIiwidG9kb0VudHJ5Q29udGV4dCIsImNvbXBsZXRlZFN1Ym1pc3Npb24iLCJjcmVhdGVTdWJtaXNzaW9uT2JqIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVMaXN0IiwiZXJyb3IiLCJlcnIiLCJkZWxldGVTdWJtaXNzaW9uIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVDaGVja0NsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsYzs7O0FBQ0osNEJBQWM7QUFBQTs7QUFBQTtBQUdiOzs7OzBDQUVxQjtBQUNwQixVQUFJQyxhQUFhO0FBQ2ZDLGFBQUssS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCRixHQURmO0FBRWZHLGdCQUFRLEtBQUtGLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkMsTUFGbEI7QUFHZkMsY0FBTSxLQUFLSCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJFLElBSGhCO0FBSWZDLGNBQU0sS0FBS0osS0FBTCxDQUFXQyxhQUFYLENBQXlCRyxJQUpoQjtBQUtmQyxtQkFBVyxLQUFLTCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJJO0FBTHJCLE9BQWpCO0FBT0EsYUFBT1AsVUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCO0FBQ0EsVUFBSVEsbUJBQW1CLElBQXZCOztBQUVBLFVBQUlDLHNCQUFzQixLQUFLQyxtQkFBTCxFQUExQjtBQUNBOztBQUVBRCwwQkFBb0JGLFNBQXBCLEdBQWdDLENBQUNFLG9CQUFvQkYsU0FBckQ7O0FBRUE7QUFDQUksUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSyw0QkFGQTtBQUdMQyxjQUFNQyxLQUFLQyxTQUFMLENBQWVSLG1CQUFmLENBSEQ7QUFJTFMscUJBQWEsa0JBSlI7QUFLTEMsaUJBQVMsaUJBQVNKLElBQVQsRUFBZTtBQUN0Qkssa0JBQVFDLEdBQVIsQ0FBWSw0QkFBWjtBQUNBYiwyQkFBaUJOLEtBQWpCLENBQXVCb0IsVUFBdkI7QUFDRCxTQVJJO0FBU0xDLGVBQU8sZUFBU0MsR0FBVCxFQUFjO0FBQ25CSixrQkFBUUcsS0FBUixDQUFjLDZCQUFkO0FBQ0Q7QUFYSSxPQUFQO0FBYUQ7Ozt3Q0FFbUI7QUFDbEIsVUFBSWYsbUJBQW1CLElBQXZCO0FBQ0EsVUFBSWlCLG1CQUFtQixLQUFLZixtQkFBTCxFQUF2QjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsUUFESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZVEsZ0JBQWYsQ0FIRDtBQUlMUCxxQkFBYSxrQkFKUjtBQUtMQyxpQkFBUyxpQkFBU0osSUFBVCxFQUFlO0FBQ3RCSyxrQkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FiLDJCQUFpQk4sS0FBakIsQ0FBdUJvQixVQUF2QjtBQUNELFNBUkk7QUFTTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJKLGtCQUFRRyxLQUFSLENBQWMsNkJBQWQ7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGlCQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQUcsU0FBUztBQUFBLHFCQUFNLE9BQUtHLGlCQUFMLEVBQU47QUFBQSxhQUFaO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQTVDLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDSyxlQUFLeEIsS0FBTCxDQUFXQyxhQUFYLENBQXlCRyxJQUQ5QjtBQUVFO0FBQUE7QUFBQSxjQUFHLE1BQUssSUFBUjtBQUNHLHlCQUFVLG1CQURiO0FBRUUsMkNBQU8sTUFBSyxVQUFaO0FBQ0Esa0JBQUksS0FBS0osS0FBTCxDQUFXQyxhQUFYLENBQXlCRixHQUQ3QjtBQUVBLHVCQUFTO0FBQUEsdUJBQU0sT0FBSzBCLGdCQUFMLEVBQU47QUFBQSxlQUZUO0FBR0EsdUJBQVMsS0FBS3pCLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkksU0FBekIsR0FBcUMsU0FBckMsR0FBaUQsRUFIMUQsR0FGRjtBQU1FLDJDQUFPLFNBQVMsS0FBS0wsS0FBTCxDQUFXQyxhQUFYLENBQXlCRixHQUF6QztBQU5GO0FBRkY7QUFGRixPQURGO0FBZ0JEOzs7O0VBN0UwQjJCLE1BQU1DLFMiLCJmaWxlIjoiQ29tcGxldGVkRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIENvbXBsZXRlZEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgfVxuXG4gIGNyZWF0ZVN1Ym1pc3Npb25PYmooKSB7XG4gICAgdmFyIHN1Ym1pc3Npb24gPSB7XG4gICAgICBfaWQ6IHRoaXMucHJvcHMuY29tcGxldGVkSXRlbS5faWQsXG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMuY29tcGxldGVkSXRlbS51c2VySWQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLmNvbXBsZXRlZEl0ZW0udXNlcixcbiAgICAgIHRhc2s6IHRoaXMucHJvcHMuY29tcGxldGVkSXRlbS50YXNrLFxuICAgICAgY29tcGxldGVkOiB0aGlzLnByb3BzLmNvbXBsZXRlZEl0ZW0uY29tcGxldGVkXG4gICAgfTtcbiAgICByZXR1cm4gc3VibWlzc2lvbjtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrQ2xpY2soKSB7XG4gICAgLy8gQ3JlYXRlIHN1Ym1pc3Npb24gYmVmb3JlIHRvZ2dsZSBvZiBzdGF0ZVxuICAgIHZhciB0b2RvRW50cnlDb250ZXh0ID0gdGhpcztcblxuICAgIHZhciBjb21wbGV0ZWRTdWJtaXNzaW9uID0gdGhpcy5jcmVhdGVTdWJtaXNzaW9uT2JqKCk7XG4gICAgLy8gdGhpcy5wcm9wcy5zcGxpY2VUb2RvKHRoaXMucHJvcHMuaW5kZXgpO1xuXG4gICAgY29tcGxldGVkU3VibWlzc2lvbi5jb21wbGV0ZWQgPSAhY29tcGxldGVkU3VibWlzc2lvbi5jb21wbGV0ZWQ7XG4gICAgXG4gICAgLy8gTWFrZSBBSkFYIHJlcXVlc3Qgc28gc3RhdGUgZXF1YWxzIHRoZSBkYXRhYmFzZSByZWNvcmRcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFN1Ym1pc3Npb24pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZ2dsZSBjb21wbGV0aW9uIHN1Y2Nlc3MhJyk7XG4gICAgICAgIHRvZG9FbnRyeUNvbnRleHQucHJvcHMudXBkYXRlTGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVG9nZ2xlIGNvbXBsZXRpb24gZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGVDbGljaygpIHtcbiAgICB2YXIgdG9kb0VudHJ5Q29udGV4dCA9IHRoaXM7XG4gICAgdmFyIGRlbGV0ZVN1Ym1pc3Npb24gPSB0aGlzLmNyZWF0ZVN1Ym1pc3Npb25PYmooKTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRlbGV0ZVN1Ym1pc3Npb24pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgZGVsZXRpb24gc3VjY2VzcyEnKTtcbiAgICAgICAgdG9kb0VudHJ5Q29udGV4dC5wcm9wcy51cGRhdGVMaXN0KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUb2dnbGUgY29tcGxldGlvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbVwiPlxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKCl9PjxpIGNsYXNzTmFtZT1cImNsb3NlIG1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9hPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbXBsZXRlZEl0ZW0udGFza31cbiAgICAgICAgICA8YSBocmVmPVwiIyFcIiBcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuY29tcGxldGVkSXRlbS5faWR9IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGVja0NsaWNrKCl9XG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNvbXBsZXRlZEl0ZW0uY29tcGxldGVkID8gXCJjaGVja2VkXCIgOiBcIlwifS8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5jb21wbGV0ZWRJdGVtLl9pZH0+PC9sYWJlbD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufSJdfQ==