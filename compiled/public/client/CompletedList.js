"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

var CompletedList = function (_React$Component) {
  _inherits(CompletedList, _React$Component);

  function CompletedList() {
    _classCallCheck(this, CompletedList);

    return _possibleConstructorReturn(this, (CompletedList.__proto__ || Object.getPrototypeOf(CompletedList)).call(this));
  }

  _createClass(CompletedList, [{
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
            className: "list collection with-header collapsible",
            component: "ul",
            transitionName: "list",
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300 },
          React.createElement(
            "li",
            { className: "collection-header valign-wrapper" },
            React.createElement("span", { className: "glyphicon glyphicon-ok" }),
            React.createElement(
              "h4",
              { className: "valign" },
              "Completed Tasks"
            )
          ),
          this.props.completed.map(function (completedItem, index) {
            return React.createElement(CompletedEntry, { key: completedItem._id,
              completedItem: completedItem,
              index: index,
              updateList: _this2.props.updateList,
              spliceTodo: _this2.props.spliceTodo });
          })
        )
      );
    }
  }]);

  return CompletedList;
}(React.Component);

// <div id="archive-switch" className="switch right right-align">
//   <label>
//     Off
//     <input type="checkbox" />
//     <span className="lever"></span>
//     On
//   </label>
// </div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jbGllbnQvQ29tcGxldGVkTGlzdC5qc3giXSwibmFtZXMiOlsiUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAiLCJSZWFjdCIsImFkZG9ucyIsIkNTU1RyYW5zaXRpb25Hcm91cCIsIkNvbXBsZXRlZExpc3QiLCJwcm9wcyIsImNvbXBsZXRlZCIsIm1hcCIsImNvbXBsZXRlZEl0ZW0iLCJpbmRleCIsIl9pZCIsInVwZGF0ZUxpc3QiLCJzcGxpY2VUb2RvIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsMEJBQTBCQyxNQUFNQyxNQUFOLENBQWFDLGtCQUEzQyxDLENBQStEOztJQUV6REMsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFBQTtBQUdiOzs7O3lDQUVvQixDQUVwQjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFDLGlDQUFEO0FBQUE7QUFDUSx1QkFBVSx5Q0FEbEI7QUFFUSx1QkFBVSxJQUZsQjtBQUdRLDRCQUFlLE1BSHZCO0FBSVEsb0NBQXdCLEdBSmhDO0FBS1Esb0NBQXdCLEdBTGhDO0FBTUU7QUFBQTtBQUFBLGNBQUksV0FBVSxrQ0FBZDtBQUNFLDBDQUFNLFdBQVUsd0JBQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxRQUFkO0FBQUE7QUFBQTtBQUZGLFdBTkY7QUFVRyxlQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLGFBQUQsRUFBZ0JDLEtBQWhCLEVBQTBCO0FBQ2xELG1CQUFRLG9CQUFDLGNBQUQsSUFBZ0IsS0FBS0QsY0FBY0UsR0FBbkM7QUFDVSw2QkFBZUYsYUFEekI7QUFFVSxxQkFBT0MsS0FGakI7QUFHVSwwQkFBWSxPQUFLSixLQUFMLENBQVdNLFVBSGpDO0FBSVUsMEJBQVksT0FBS04sS0FBTCxDQUFXTyxVQUpqQyxHQUFSO0FBS0QsV0FOQTtBQVZIO0FBREYsT0FERjtBQXNCRDs7OztFQWpDeUJYLE1BQU1ZLFM7O0FBb0NsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkNvbXBsZXRlZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwOyAvLyBFUzUgd2l0aCByZWFjdC13aXRoLWFkZG9ucy5qc1xuXG5jbGFzcyBDb21wbGV0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJhYmxlXCI+XG4gICAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QgY29sbGVjdGlvbiB3aXRoLWhlYWRlciBjb2xsYXBzaWJsZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwidWxcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taGVhZGVyIHZhbGlnbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZhbGlnblwiPkNvbXBsZXRlZCBUYXNrczwvaDQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb21wbGV0ZWQubWFwKChjb21wbGV0ZWRJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8Q29tcGxldGVkRW50cnkga2V5PXtjb21wbGV0ZWRJdGVtLl9pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRJdGVtPXtjb21wbGV0ZWRJdGVtfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMaXN0PXt0aGlzLnByb3BzLnVwZGF0ZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2VUb2RvPXt0aGlzLnByb3BzLnNwbGljZVRvZG99IC8+KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gPGRpdiBpZD1cImFyY2hpdmUtc3dpdGNoXCIgY2xhc3NOYW1lPVwic3dpdGNoIHJpZ2h0IHJpZ2h0LWFsaWduXCI+XG4vLyAgIDxsYWJlbD5cbi8vICAgICBPZmZcbi8vICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZXZlclwiPjwvc3Bhbj5cbi8vICAgICBPblxuLy8gICA8L2xhYmVsPlxuLy8gPC9kaXY+Il19