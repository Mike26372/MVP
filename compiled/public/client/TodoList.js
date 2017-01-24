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
            className: "completed collection with-header collapsible",
            component: "ul",
            transitionName: "completed",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvVG9kb0xpc3QuanN4Il0sIm5hbWVzIjpbIlJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIiwiUmVhY3QiLCJhZGRvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJUb2RvTGlzdCIsInByb3BzIiwibGlzdCIsIm1hcCIsImxpc3RJdGVtIiwiaW5kZXgiLCJfaWQiLCJ1cGRhdGVMaXN0Iiwic3BsaWNlVG9kbyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLDBCQUEwQkMsTUFBTUMsTUFBTixDQUFhQyxrQkFBM0MsQyxDQUErRDs7SUFFekRDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFHYjs7Ozt5Q0FFb0IsQ0FFcEI7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ1EsdUJBQVUsOENBRGxCO0FBRVEsdUJBQVUsSUFGbEI7QUFHUSw0QkFBZSxXQUh2QjtBQUlRLG9DQUF3QixHQUpoQztBQUtRLG9DQUF3QixHQUxoQztBQU1FO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0NBQWQ7QUFDRSwwQ0FBTSxXQUFVLDJCQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFGRixXQU5GO0FBVUcsZUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDeEMsbUJBQVEsb0JBQUMsU0FBRCxJQUFXLEtBQUtELFNBQVNFLEdBQXpCO0FBQ1Usd0JBQVVGLFFBRHBCO0FBRVUscUJBQU9DLEtBRmpCO0FBR1UsMEJBQVksT0FBS0osS0FBTCxDQUFXTSxVQUhqQztBQUlVLDBCQUFZLE9BQUtOLEtBQUwsQ0FBV08sVUFKakMsR0FBUjtBQUtELFdBTkE7QUFWSDtBQURGLE9BREY7QUFzQkQ7Ozs7RUFqQ29CWCxNQUFNWSxTOztBQW9DN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJUb2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXA7IC8vIEVTNSB3aXRoIHJlYWN0LXdpdGgtYWRkb25zLmpzXG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJhYmxlXCI+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBsZXRlZCBjb2xsZWN0aW9uIHdpdGgtaGVhZGVyIGNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ1bFwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJjb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezMwMH1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWhlYWRlciB2YWxpZ24td3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10YXNrc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2YWxpZ25cIj5Ub2RvIExpc3Q8L2g0PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge3RoaXMucHJvcHMubGlzdC5tYXAoKGxpc3RJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8VG9kb0VudHJ5IGtleT17bGlzdEl0ZW0uX2lkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtPXtsaXN0SXRlbX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGlzdD17dGhpcy5wcm9wcy51cGRhdGVMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaWNlVG9kbz17dGhpcy5wcm9wcy5zcGxpY2VUb2RvfSAvPik7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIDxkaXYgaWQ9XCJhcmNoaXZlLXN3aXRjaFwiIGNsYXNzTmFtZT1cInN3aXRjaCByaWdodCByaWdodC1hbGlnblwiPlxuLy8gICA8bGFiZWw+XG4vLyAgICAgT2ZmXG4vLyAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4vLyAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGV2ZXJcIj48L3NwYW4+XG4vLyAgICAgT25cbi8vICAgPC9sYWJlbD5cbi8vIDwvZGl2PiJdfQ==