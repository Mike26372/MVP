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
      var todoSubmission = {
        userId: this.props.userId,
        user: this.props.user,
        task: this.task.value
      };
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
                { className: 'input-field col s9' },
                React.createElement(
                  'i',
                  { id: 'form-icon', className: 'material-icons prefix' },
                  'mode_edit'
                ),
                React.createElement('input', { id: 'icon_prefix2', type: 'text', className: 'validate',
                  ref: function ref(input) {
                    return _this2.task = input;
                  } }),
                React.createElement(
                  'label',
                  { id: 'form-label', htmlFor: 'icon_prefix2' },
                  'Enter a task'
                )
              ),
              React.createElement(
                'div',
                { className: 'col s3 valign', id: 'addTodoButton' },
                React.createElement(
                  'button',
                  {
                    className: 'btn-flat waves-effect waves-light',
                    type: 'submit',
                    name: 'action' },
                  'Add',
                  React.createElement('span', { className: 'glyphicon glyphicon-plus',
                    id: 'addTodoIcon' })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0Zvcm0uanN4Il0sIm5hbWVzIjpbIlRvZG9Gb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9kb1N1Ym1pc3Npb24iLCJ1c2VySWQiLCJwcm9wcyIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJUb2RvRm9ybUNvbnRleHQiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsInRvZG9Gb3JtIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJpbnB1dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2RBLFFBQUVDLGNBQUY7QUFDQSxVQUFJQyxpQkFBaUI7QUFDbkJDLGdCQUFRLEtBQUtDLEtBQUwsQ0FBV0QsTUFEQTtBQUVuQkUsY0FBTSxLQUFLRCxLQUFMLENBQVdDLElBRkU7QUFHbkJDLGNBQU0sS0FBS0EsSUFBTCxDQUFVQztBQUhHLE9BQXJCO0FBS0EsVUFBSUMsa0JBQWtCLElBQXRCOztBQUVBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsTUFESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZWIsY0FBZixDQUhEO0FBSUxjLHFCQUFhLGtCQUpSO0FBS0xDLGlCQUFTLGlCQUFTSixJQUFULEVBQWU7QUFDdEJLLGtCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQVgsMEJBQWdCSixLQUFoQixDQUFzQmdCLFVBQXRCO0FBQ0QsU0FSSTtBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkosa0JBQVFHLEtBQVIsQ0FBYywyQkFBZDtBQUNEO0FBWEksT0FBUDs7QUFjQSxXQUFLRSxRQUFMLENBQWNDLEtBQWQ7QUFFRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLFNBQWhCO0FBQ00sd0JBQVUsa0JBQUN4QixDQUFEO0FBQUEsdUJBQU8sT0FBS3lCLFlBQUwsQ0FBa0J6QixDQUFsQixDQUFQO0FBQUEsZUFEaEI7QUFFTSxtQkFBSyxhQUFDMEIsS0FBRDtBQUFBLHVCQUFXLE9BQUtILFFBQUwsR0FBZ0JHLEtBQTNCO0FBQUEsZUFGWDtBQUdFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBRyxJQUFHLFdBQU4sRUFBa0IsV0FBVSx1QkFBNUI7QUFBQTtBQUFBLGlCQURGO0FBRUUsK0NBQU8sSUFBRyxjQUFWLEVBQXlCLE1BQUssTUFBOUIsRUFBcUMsV0FBVSxVQUEvQztBQUNBLHVCQUFLLGFBQUNBLEtBQUQ7QUFBQSwyQkFBVyxPQUFLcEIsSUFBTCxHQUFZb0IsS0FBdkI7QUFBQSxtQkFETCxHQUZGO0FBSUU7QUFBQTtBQUFBLG9CQUFPLElBQUcsWUFBVixFQUF1QixTQUFRLGNBQS9CO0FBQUE7QUFBQTtBQUpGLGVBREY7QUFPRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmLEVBQStCLElBQUcsZUFBbEM7QUFDRTtBQUFBO0FBQUE7QUFDUSwrQkFBVSxtQ0FEbEI7QUFFUSwwQkFBSyxRQUZiO0FBR1EsMEJBQUssUUFIYjtBQUFBO0FBSUUsZ0RBQU0sV0FBVSwwQkFBaEI7QUFDTSx3QkFBRyxhQURUO0FBSkY7QUFERjtBQVBGO0FBSEY7QUFERjtBQURGLE9BREY7QUEyQkQ7Ozs7RUE1RG9CQyxNQUFNQyxTIiwiZmlsZSI6IlRvZG9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBUb2RvRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdG9kb1N1Ym1pc3Npb24gPSB7XG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlcklkLFxuICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyLFxuICAgICAgdGFzazogdGhpcy50YXNrLnZhbHVlXG4gICAgfTtcbiAgICB2YXIgVG9kb0Zvcm1Db250ZXh0ID0gdGhpcztcblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9saXN0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRvZG9TdWJtaXNzaW9uKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMaXN0IHN1Ym1pc3Npb24gc3VjY2VzcyEnKTtcbiAgICAgICAgVG9kb0Zvcm1Db250ZXh0LnByb3BzLnVwZGF0ZUxpc3QoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpc3Qgc3VibWlzc2lvbiBmYWlsZWQgOignKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudG9kb0Zvcm0ucmVzZXQoKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIiBcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHRoaXMuaGFuZGxlU3VibWl0KGUpfSBcbiAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy50b2RvRm9ybSA9IGlucHV0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM5XCI+XG4gICAgICAgICAgICAgICAgPGkgaWQ9XCJmb3JtLWljb25cIiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBwcmVmaXhcIj5tb2RlX2VkaXQ8L2k+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWNvbl9wcmVmaXgyXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMudGFzayA9IGlucHV0fSA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJmb3JtLWxhYmVsXCIgaHRtbEZvcj1cImljb25fcHJlZml4MlwiPkVudGVyIGEgdGFzazwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyB2YWxpZ25cIiBpZD1cImFkZFRvZG9CdXR0b25cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1mbGF0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvblwiPkFkZFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWRkVG9kb0ljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=