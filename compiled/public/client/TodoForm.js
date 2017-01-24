'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoForm = function (_React$Component) {
  _inherits(TodoForm, _React$Component);

  function TodoForm() {
    _classCallCheck(this, TodoForm);

    return _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this));
  }

  _createClass(TodoForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      // Create submission to pass into AJAX
      var todoSubmission = {
        userId: this.props.userId,
        user: this.props.user,
        task: this.task.value
      };
      // Make AJAX request
      // On success, update state with database objects
      var TodoFormContext = this;

      $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:3000/list',
        data: JSON.stringify(todoSubmission),
        contentType: 'application/json',
        success: function success(data) {
          console.log('List submission success!');
          TodoFormContext.props.updateList();
        },
        error: function error(err) {
          console.error('List submission failed :(');
        }
      });

      this.todoForm.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'form',
            { className: 'col s12',
              onSubmit: function onSubmit(e) {
                return _this2.handleSubmit(e);
              },
              ref: function ref(input) {
                return _this2.todoForm = input;
              } },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'input-field col s6' },
                React.createElement(
                  'i',
                  { className: 'material-icons prefix' },
                  'mode_edit'
                ),
                React.createElement('input', { id: 'icon_prefix2', type: 'text', className: 'validate',
                  ref: function ref(input) {
                    return _this2.task = input;
                  } }),
                React.createElement(
                  'label',
                  { htmlFor: 'icon_prefix2' },
                  'Enter a todo'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TodoForm;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0Zvcm0uanN4Il0sIm5hbWVzIjpbIlRvZG9Gb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9kb1N1Ym1pc3Npb24iLCJ1c2VySWQiLCJwcm9wcyIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJUb2RvRm9ybUNvbnRleHQiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsInRvZG9Gb3JtIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJpbnB1dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2RBLFFBQUVDLGNBQUY7QUFDQTtBQUNBLFVBQUlDLGlCQUFpQjtBQUNuQkMsZ0JBQVEsS0FBS0MsS0FBTCxDQUFXRCxNQURBO0FBRW5CRSxjQUFNLEtBQUtELEtBQUwsQ0FBV0MsSUFGRTtBQUduQkMsY0FBTSxLQUFLQSxJQUFMLENBQVVDO0FBSEcsT0FBckI7QUFLQTtBQUNFO0FBQ0YsVUFBSUMsa0JBQWtCLElBQXRCOztBQUVBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsTUFESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZWIsY0FBZixDQUhEO0FBSUxjLHFCQUFhLGtCQUpSO0FBS0xDLGlCQUFTLGlCQUFTSixJQUFULEVBQWU7QUFDdEJLLGtCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQVgsMEJBQWdCSixLQUFoQixDQUFzQmdCLFVBQXRCO0FBQ0QsU0FSSTtBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkosa0JBQVFHLEtBQVIsQ0FBYywyQkFBZDtBQUNEO0FBWEksT0FBUDs7QUFjQSxXQUFLRSxRQUFMLENBQWNDLEtBQWQ7QUFFRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLFNBQWhCO0FBQ00sd0JBQVUsa0JBQUN4QixDQUFEO0FBQUEsdUJBQU8sT0FBS3lCLFlBQUwsQ0FBa0J6QixDQUFsQixDQUFQO0FBQUEsZUFEaEI7QUFFTSxtQkFBSyxhQUFDMEIsS0FBRDtBQUFBLHVCQUFXLE9BQUtILFFBQUwsR0FBZ0JHLEtBQTNCO0FBQUEsZUFGWDtBQUdFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBRyxXQUFVLHVCQUFiO0FBQUE7QUFBQSxpQkFERjtBQUVFLCtDQUFPLElBQUcsY0FBVixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLFdBQVUsVUFBL0M7QUFDQSx1QkFBSyxhQUFDQSxLQUFEO0FBQUEsMkJBQVcsT0FBS3BCLElBQUwsR0FBWW9CLEtBQXZCO0FBQUEsbUJBREwsR0FGRjtBQUlFO0FBQUE7QUFBQSxvQkFBTyxTQUFRLGNBQWY7QUFBQTtBQUFBO0FBSkY7QUFERjtBQUhGO0FBREY7QUFERixPQURGO0FBa0JEOzs7O0VBdERvQkMsTUFBTUMsUyIsImZpbGUiOiJUb2RvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgVG9kb0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBDcmVhdGUgc3VibWlzc2lvbiB0byBwYXNzIGludG8gQUpBWFxuICAgIHZhciB0b2RvU3VibWlzc2lvbiA9IHtcbiAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy51c2VySWQsXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXG4gICAgICB0YXNrOiB0aGlzLnRhc2sudmFsdWVcbiAgICB9XG4gICAgLy8gTWFrZSBBSkFYIHJlcXVlc3RcbiAgICAgIC8vIE9uIHN1Y2Nlc3MsIHVwZGF0ZSBzdGF0ZSB3aXRoIGRhdGFiYXNlIG9iamVjdHNcbiAgICB2YXIgVG9kb0Zvcm1Db250ZXh0ID0gdGhpcztcblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRvZG9TdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHN1Ym1pc3Npb24gc3VjY2VzcyEnKTtcbiAgICAgICAgVG9kb0Zvcm1Db250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpc3Qgc3VibWlzc2lvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudG9kb0Zvcm0ucmVzZXQoKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIiBcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfSBcbiAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy50b2RvRm9ybSA9IGlucHV0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+bW9kZV9lZGl0PC9pPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImljb25fcHJlZml4MlwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIlxuICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLnRhc2sgPSBpbnB1dH0gPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpY29uX3ByZWZpeDJcIj5FbnRlciBhIHRvZG88L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0=