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
                { className: 'input-field col s9' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0Zvcm0uanN4Il0sIm5hbWVzIjpbIlRvZG9Gb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9kb1N1Ym1pc3Npb24iLCJ1c2VySWQiLCJwcm9wcyIsInVzZXIiLCJ0YXNrIiwidmFsdWUiLCJUb2RvRm9ybUNvbnRleHQiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3QiLCJlcnJvciIsImVyciIsInRvZG9Gb3JtIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJpbnB1dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ01BLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2RBLFFBQUVDLGNBQUY7QUFDQTtBQUNBLFVBQUlDLGlCQUFpQjtBQUNuQkMsZ0JBQVEsS0FBS0MsS0FBTCxDQUFXRCxNQURBO0FBRW5CRSxjQUFNLEtBQUtELEtBQUwsQ0FBV0MsSUFGRTtBQUduQkMsY0FBTSxLQUFLQSxJQUFMLENBQVVDO0FBSEcsT0FBckI7QUFLQTtBQUNFO0FBQ0YsVUFBSUMsa0JBQWtCLElBQXRCOztBQUVBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsTUFESDtBQUVMQyxhQUFLLDRCQUZBO0FBR0xDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZWIsY0FBZixDQUhEO0FBSUxjLHFCQUFhLGtCQUpSO0FBS0xDLGlCQUFTLGlCQUFTSixJQUFULEVBQWU7QUFDdEJLLGtCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQVgsMEJBQWdCSixLQUFoQixDQUFzQmdCLFVBQXRCO0FBQ0QsU0FSSTtBQVNMQyxlQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQkosa0JBQVFHLEtBQVIsQ0FBYywyQkFBZDtBQUNEO0FBWEksT0FBUDs7QUFjQSxXQUFLRSxRQUFMLENBQWNDLEtBQWQ7QUFFRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLFNBQWhCO0FBQ00sd0JBQVUsa0JBQUN4QixDQUFEO0FBQUEsdUJBQU8sT0FBS3lCLFlBQUwsQ0FBa0J6QixDQUFsQixDQUFQO0FBQUEsZUFEaEI7QUFFTSxtQkFBSyxhQUFDMEIsS0FBRDtBQUFBLHVCQUFXLE9BQUtILFFBQUwsR0FBZ0JHLEtBQTNCO0FBQUEsZUFGWDtBQUdFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBRyxXQUFVLHVCQUFiO0FBQUE7QUFBQSxpQkFERjtBQUVFLCtDQUFPLElBQUcsY0FBVixFQUF5QixNQUFLLE1BQTlCLEVBQXFDLFdBQVUsVUFBL0M7QUFDQSx1QkFBSyxhQUFDQSxLQUFEO0FBQUEsMkJBQVcsT0FBS3BCLElBQUwsR0FBWW9CLEtBQXZCO0FBQUEsbUJBREwsR0FGRjtBQUlFO0FBQUE7QUFBQSxvQkFBTyxTQUFRLGNBQWY7QUFBQTtBQUFBO0FBSkYsZUFERjtBQU9FO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGVBQWYsRUFBK0IsSUFBRyxlQUFsQztBQUNFO0FBQUE7QUFBQTtBQUNRLCtCQUFVLG1DQURsQjtBQUVRLDBCQUFLLFFBRmI7QUFHUSwwQkFBSyxRQUhiO0FBQUE7QUFJRSxnREFBTSxXQUFVLDBCQUFoQjtBQUNNLHdCQUFHLGFBRFQ7QUFKRjtBQURGO0FBUEY7QUFIRjtBQURGO0FBREYsT0FERjtBQTJCRDs7OztFQS9Eb0JDLE1BQU1DLFMiLCJmaWxlIjoiVG9kb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFRvZG9Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gQ3JlYXRlIHN1Ym1pc3Npb24gdG8gcGFzcyBpbnRvIEFKQVhcbiAgICB2YXIgdG9kb1N1Ym1pc3Npb24gPSB7XG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlcklkLFxuICAgICAgdXNlcjogdGhpcy5wcm9wcy51c2VyLFxuICAgICAgdGFzazogdGhpcy50YXNrLnZhbHVlXG4gICAgfVxuICAgIC8vIE1ha2UgQUpBWCByZXF1ZXN0XG4gICAgICAvLyBPbiBzdWNjZXNzLCB1cGRhdGUgc3RhdGUgd2l0aCBkYXRhYmFzZSBvYmplY3RzXG4gICAgdmFyIFRvZG9Gb3JtQ29udGV4dCA9IHRoaXM7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvbGlzdCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh0b2RvU3VibWlzc2lvbiksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnTGlzdCBzdWJtaXNzaW9uIHN1Y2Nlc3MhJyk7XG4gICAgICAgIFRvZG9Gb3JtQ29udGV4dC5wcm9wcy51cGRhdGVMaXN0KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdMaXN0IHN1Ym1pc3Npb24gZmFpbGVkIDooJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRvZG9Gb3JtLnJlc2V0KCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb2wgczEyXCIgXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChlKX0gXG4gICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMudG9kb0Zvcm0gPSBpbnB1dH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzOVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHByZWZpeFwiPm1vZGVfZWRpdDwvaT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpY29uX3ByZWZpeDJcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy50YXNrID0gaW5wdXR9ID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWNvbl9wcmVmaXgyXCI+RW50ZXIgYSB0b2RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMzIHZhbGlnblwiIGlkPVwiYWRkVG9kb0J1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZsYXQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCI+QWRkXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRUb2RvSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19