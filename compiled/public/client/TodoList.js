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
            transitionEnterTimeout: 300,
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
              updateList: _this2.props.updateList,
              spliceTodo: _this2.props.spliceTodo });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0xpc3QuanN4Il0sIm5hbWVzIjpbIlJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIiwiUmVhY3QiLCJhZGRvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJUb2RvTGlzdCIsInByb3BzIiwibGlzdCIsIm1hcCIsImxpc3RJdGVtIiwiaW5kZXgiLCJfaWQiLCJ1cGRhdGVMaXN0Iiwic3BsaWNlVG9kbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLDBCQUEwQkMsTUFBTUMsTUFBTixDQUFhQyxrQkFBM0MsQyxDQUErRDs7SUFFekRDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFHYjs7Ozt5Q0FFb0IsQ0FFcEI7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ1EsdUJBQVUsNENBRGxCO0FBRVEsdUJBQVUsSUFGbEI7QUFHUSw0QkFBZSxTQUh2QjtBQUlRLG9DQUF3QixHQUpoQztBQUtRLG9DQUF3QixHQUxoQztBQU1FO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0NBQWQ7QUFDRSwwQ0FBTSxXQUFVLDJCQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFGRixXQU5GO0FBVUcsZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDeEMsbUJBQVEsb0JBQUMsU0FBRCxJQUFXLEtBQUtELFNBQVNFLEdBQXpCO0FBQ1Usd0JBQVVGLFFBRHBCO0FBRVUscUJBQU9DLEtBRmpCO0FBR1UsMEJBQVksT0FBS0osS0FBTCxDQUFXTSxVQUhqQztBQUlVLDBCQUFZLE9BQUtOLEtBQUwsQ0FBV08sVUFKakMsR0FBUjtBQUtELFdBTkE7QUFWSDtBQURGLE9BREY7QUFzQkQ7Ozs7RUFqQ29CWCxNQUFNWSxTOztBQW9DN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJUb2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXA7IC8vIEVTNSB3aXRoIHJlYWN0LXdpdGgtYWRkb25zLmpzXG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJhYmxlXCI+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4YW1wbGUgY29sbGVjdGlvbiB3aXRoLWhlYWRlciBjb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwidWxcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taGVhZGVyIHZhbGlnbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhc2tzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZhbGlnblwiPlRvZG8gTGlzdDwvaDQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDxUb2RvRW50cnkga2V5PXtsaXN0SXRlbS5faWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW09e2xpc3RJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnByb3BzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2VUb2RvPXt0aGlzLnByb3BzLnNwbGljZVRvZG99IC8+KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gPGRpdiBpZD1cImFyY2hpdmUtc3dpdGNoXCIgY2xhc3NOYW1lPVwic3dpdGNoIHJpZ2h0IHJpZ2h0LWFsaWduXCI+XG4vLyAgIDxsYWJlbD5cbi8vICAgICBPZmZcbi8vICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZXZlclwiPjwvc3Bhbj5cbi8vICAgICBPblxuLy8gICA8L2xhYmVsPlxuLy8gPC9kaXY+Il19