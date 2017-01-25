"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

var GoalList = function (_React$Component) {
  _inherits(GoalList, _React$Component);

  function GoalList() {
    _classCallCheck(this, GoalList);

    return _possibleConstructorReturn(this, (GoalList.__proto__ || Object.getPrototypeOf(GoalList)).call(this));
  }

  _createClass(GoalList, [{
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
            className: "goals collection with-header collapsible",
            component: "ul",
            dataCollapsible: "accordion",
            transitionName: "goals",
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300 },
          React.createElement(
            "li",
            { className: "collection-header valign-wrapper" },
            React.createElement("span", { className: "glyphicon glyphicon-pushpin" }),
            React.createElement(
              "h4",
              { className: "valign" },
              "Long-Term Goals"
            )
          ),
          this.props.goals.map(function (goalItem, index) {
            return React.createElement(GoalEntry, { key: goalItem._id,
              goalItem: goalItem,
              index: index,
              updateList: _this2.props.updateList
            });
          })
        )
      );
    }
  }]);

  return GoalList;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvR29hbExpc3QuanN4Il0sIm5hbWVzIjpbIlJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIiwiUmVhY3QiLCJhZGRvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJHb2FsTGlzdCIsInByb3BzIiwiZ29hbHMiLCJtYXAiLCJnb2FsSXRlbSIsImluZGV4IiwiX2lkIiwidXBkYXRlTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLDBCQUEwQkMsTUFBTUMsTUFBTixDQUFhQyxrQkFBM0MsQyxDQUErRDs7SUFFekRDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFHYjs7Ozt5Q0FFb0IsQ0FFcEI7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ1EsdUJBQVUsMENBRGxCO0FBRVEsdUJBQVUsSUFGbEI7QUFHUSw2QkFBZ0IsV0FIeEI7QUFJUSw0QkFBZSxPQUp2QjtBQUtRLG9DQUF3QixHQUxoQztBQU1RLG9DQUF3QixHQU5oQztBQU9FO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0NBQWQ7QUFDRSwwQ0FBTSxXQUFVLDZCQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFGRixXQVBGO0FBV0csZUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDekMsbUJBQVEsb0JBQUMsU0FBRCxJQUFXLEtBQUtELFNBQVNFLEdBQXpCO0FBQ1csd0JBQVVGLFFBRHJCO0FBRVcscUJBQU9DLEtBRmxCO0FBR1csMEJBQVksT0FBS0osS0FBTCxDQUFXTTtBQUhsQyxjQUFSO0FBS0QsV0FOQTtBQVhIO0FBREYsT0FERjtBQXVCRDs7OztFQWxDb0JWLE1BQU1XLFMiLCJmaWxlIjoiR29hbExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwOyAvLyBFUzUgd2l0aCByZWFjdC13aXRoLWFkZG9ucy5qc1xuXG5jbGFzcyBHb2FsTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyYWJsZVwiPlxuICAgICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb2FscyBjb2xsZWN0aW9uIHdpdGgtaGVhZGVyIGNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ1bFwiXG4gICAgICAgICAgICAgICAgZGF0YUNvbGxhcHNpYmxlPVwiYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImdvYWxzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXszMDB9XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1oZWFkZXIgdmFsaWduLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcHVzaHBpblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2YWxpZ25cIj5Mb25nLVRlcm0gR29hbHM8L2g0PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge3RoaXMucHJvcHMuZ29hbHMubWFwKChnb2FsSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPEdvYWxFbnRyeSBrZXk9e2dvYWxJdGVtLl9pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbEl0ZW09e2dvYWxJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxpc3Q9e3RoaXMucHJvcHMudXBkYXRlTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPik7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=