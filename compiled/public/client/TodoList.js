"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this));
  }

  _createClass(TodoList, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "hoverable" },
        React.createElement(
          ReactCSSTransitionGroup,
          {
            className: "example collection with-header collapsible",
            component: "ul",
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300 },
          React.createElement(
            "li",
            { className: "collection-header valign-wrapper" },
            React.createElement("span", { className: "glyphicon glyphicon-tasks" }),
            React.createElement(
              "h4",
              { className: "valign" },
              "Todo List"
            )
          ),
          this.props.list.map(function (listItem, index) {
            return React.createElement(TodoEntry, { key: listItem._id,
              listItem: listItem,
              index: index,
              updateList: _this2.props.updateList });
          })
        )
      );
    }
  }]);

  return TodoList;
}(React.Component);

// <div id="archive-switch" className="switch right right-align">
//   <label>
//     Off
//     <input type="checkbox" />
//     <span className="lever"></span>
//     On
//   </label>
// </div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0xpc3QuanN4Il0sIm5hbWVzIjpbIlJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIiwiUmVhY3QiLCJhZGRvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJUb2RvTGlzdCIsInByb3BzIiwibGlzdCIsIm1hcCIsImxpc3RJdGVtIiwiaW5kZXgiLCJfaWQiLCJ1cGRhdGVMaXN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsMEJBQTBCQyxNQUFNQyxNQUFOLENBQWFDLGtCQUEzQyxDLENBQStEOztJQUV6REMsUTs7O0FBQ0osc0JBQWM7QUFBQTs7QUFBQTtBQUdiOzs7O3lDQUVvQixDQUVwQjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFDLGlDQUFEO0FBQUE7QUFDUSx1QkFBVSw0Q0FEbEI7QUFFUSx1QkFBVSxJQUZsQjtBQUdRLDRCQUFlLFNBSHZCO0FBSVEsb0NBQXdCLEdBSmhDO0FBS1Esb0NBQXdCLEdBTGhDO0FBTUU7QUFBQTtBQUFBLGNBQUksV0FBVSxrQ0FBZDtBQUNFLDBDQUFNLFdBQVUsMkJBQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxRQUFkO0FBQUE7QUFBQTtBQUZGLFdBTkY7QUFVRyxlQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUN4QyxtQkFBTyxvQkFBQyxTQUFELElBQVcsS0FBS0QsU0FBU0UsR0FBekI7QUFDVyx3QkFBVUYsUUFEckI7QUFFVyxxQkFBT0MsS0FGbEI7QUFHVywwQkFBWSxPQUFLSixLQUFMLENBQVdNLFVBSGxDLEdBQVA7QUFJRCxXQUxBO0FBVkg7QUFERixPQURGO0FBcUJEOzs7O0VBaENvQlYsTUFBTVcsUzs7QUFtQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiVG9kb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwOyAvLyBFUzUgd2l0aCByZWFjdC13aXRoLWFkZG9ucy5qc1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJhYmxlXCI+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4YW1wbGUgY29sbGVjdGlvbiB3aXRoLWhlYWRlciBjb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwidWxcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taGVhZGVyIHZhbGlnbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhc2tzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZhbGlnblwiPlRvZG8gTGlzdDwvaDQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFRvZG9FbnRyeSBrZXk9e2xpc3RJdGVtLl9pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMucHJvcHMudXBkYXRlTGlzdH0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIDxkaXYgaWQ9XCJhcmNoaXZlLXN3aXRjaFwiIGNsYXNzTmFtZT1cInN3aXRjaCByaWdodCByaWdodC1hbGlnblwiPlxuLy8gICA8bGFiZWw+XG4vLyAgICAgT2ZmXG4vLyAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4vLyAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGV2ZXJcIj48L3NwYW4+XG4vLyAgICAgT25cbi8vICAgPC9sYWJlbD5cbi8vIDwvZGl2PiJdfQ==