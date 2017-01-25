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

// <div id="archive-switch" className="switch right right-align">
//   <label>
//     Off
//     <input type="checkbox" />
//     <span className="lever"></span>
//     On
//   </label>
// </div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvR29hbExpc3QuanN4Il0sIm5hbWVzIjpbIlJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIiwiUmVhY3QiLCJhZGRvbnMiLCJDU1NUcmFuc2l0aW9uR3JvdXAiLCJHb2FsTGlzdCIsInByb3BzIiwiZ29hbHMiLCJtYXAiLCJnb2FsSXRlbSIsImluZGV4IiwiX2lkIiwidXBkYXRlTGlzdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLDBCQUEwQkMsTUFBTUMsTUFBTixDQUFhQyxrQkFBM0MsQyxDQUErRDs7SUFFekRDLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7QUFHYjs7Ozt5Q0FFb0IsQ0FFcEI7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ1EsdUJBQVUsMENBRGxCO0FBRVEsdUJBQVUsSUFGbEI7QUFHUSw2QkFBZ0IsV0FIeEI7QUFJUSw0QkFBZSxPQUp2QjtBQUtRLG9DQUF3QixHQUxoQztBQU1RLG9DQUF3QixHQU5oQztBQU9FO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0NBQWQ7QUFDRSwwQ0FBTSxXQUFVLDZCQUFoQixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFGRixXQVBGO0FBV0csZUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDekMsbUJBQVEsb0JBQUMsU0FBRCxJQUFXLEtBQUtELFNBQVNFLEdBQXpCO0FBQ1csd0JBQVVGLFFBRHJCO0FBRVcscUJBQU9DLEtBRmxCO0FBR1csMEJBQVksT0FBS0osS0FBTCxDQUFXTTtBQUhsQyxjQUFSO0FBS0QsV0FOQTtBQVhIO0FBREYsT0FERjtBQXVCRDs7OztFQWxDb0JWLE1BQU1XLFM7O0FBcUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkdvYWxMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cDsgLy8gRVM1IHdpdGggcmVhY3Qtd2l0aC1hZGRvbnMuanNcblxuY2xhc3MgR29hbExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlcmFibGVcIj5cbiAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ29hbHMgY29sbGVjdGlvbiB3aXRoLWhlYWRlciBjb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwidWxcIlxuICAgICAgICAgICAgICAgIGRhdGFDb2xsYXBzaWJsZT1cImFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJnb2Fsc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taGVhZGVyIHZhbGlnbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXB1c2hwaW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmFsaWduXCI+TG9uZy1UZXJtIEdvYWxzPC9oND5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmdvYWxzLm1hcCgoZ29hbEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDxHb2FsRW50cnkga2V5PXtnb2FsSXRlbS5faWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxJdGVtPXtnb2FsSXRlbX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnByb3BzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA8ZGl2IGlkPVwiYXJjaGl2ZS1zd2l0Y2hcIiBjbGFzc05hbWU9XCJzd2l0Y2ggcmlnaHQgcmlnaHQtYWxpZ25cIj5cbi8vICAgPGxhYmVsPlxuLy8gICAgIE9mZlxuLy8gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuLy8gICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldmVyXCI+PC9zcGFuPlxuLy8gICAgIE9uXG4vLyAgIDwvbGFiZWw+XG4vLyA8L2Rpdj4iXX0=