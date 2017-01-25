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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvRHJlYW1MaXN0LmpzeCJdLCJuYW1lcyI6WyJSZWFjdENTU1RyYW5zaXRpb25Hcm91cCIsIlJlYWN0IiwiYWRkb25zIiwiQ1NTVHJhbnNpdGlvbkdyb3VwIiwiVG9kb0xpc3QiLCJwcm9wcyIsImxpc3QiLCJtYXAiLCJsaXN0SXRlbSIsImluZGV4IiwiX2lkIiwidXBkYXRlTGlzdCIsInNwbGljZVRvZG8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSwwQkFBMEJDLE1BQU1DLE1BQU4sQ0FBYUMsa0JBQTNDLEMsQ0FBK0Q7O0lBRXpEQyxROzs7QUFDSixzQkFBYztBQUFBOztBQUFBO0FBR2I7Ozs7eUNBRW9CLENBRXBCOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUMsaUNBQUQ7QUFBQTtBQUNRLHVCQUFVLDhDQURsQjtBQUVRLHVCQUFVLElBRmxCO0FBR1EsNEJBQWUsV0FIdkI7QUFJUSxvQ0FBd0IsR0FKaEM7QUFLUSxvQ0FBd0IsR0FMaEM7QUFNRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGtDQUFkO0FBQ0UsMENBQU0sV0FBVSwyQkFBaEIsR0FERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLFFBQWQ7QUFBQTtBQUFBO0FBRkYsV0FORjtBQVVHLGVBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3hDLG1CQUFRLG9CQUFDLFNBQUQsSUFBVyxLQUFLRCxTQUFTRSxHQUF6QjtBQUNVLHdCQUFVRixRQURwQjtBQUVVLHFCQUFPQyxLQUZqQjtBQUdVLDBCQUFZLE9BQUtKLEtBQUwsQ0FBV00sVUFIakM7QUFJVSwwQkFBWSxPQUFLTixLQUFMLENBQVdPLFVBSmpDLEdBQVI7QUFLRCxXQU5BO0FBVkg7QUFERixPQURGO0FBc0JEOzs7O0VBakNvQlgsTUFBTVksUzs7QUFvQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiRHJlYW1MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cDsgLy8gRVM1IHdpdGggcmVhY3Qtd2l0aC1hZGRvbnMuanNcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcmFibGVcIj5cbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcGxldGVkIGNvbGxlY3Rpb24gd2l0aC1oZWFkZXIgY29sbGFwc2libGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInVsXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taGVhZGVyIHZhbGlnbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhc2tzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZhbGlnblwiPlRvZG8gTGlzdDwvaDQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDxUb2RvRW50cnkga2V5PXtsaXN0SXRlbS5faWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW09e2xpc3RJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnByb3BzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2VUb2RvPXt0aGlzLnByb3BzLnNwbGljZVRvZG99IC8+KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gPGRpdiBpZD1cImFyY2hpdmUtc3dpdGNoXCIgY2xhc3NOYW1lPVwic3dpdGNoIHJpZ2h0IHJpZ2h0LWFsaWduXCI+XG4vLyAgIDxsYWJlbD5cbi8vICAgICBPZmZcbi8vICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZXZlclwiPjwvc3Bhbj5cbi8vICAgICBPblxuLy8gICA8L2xhYmVsPlxuLy8gPC9kaXY+Il19