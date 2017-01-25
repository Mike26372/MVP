var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

class CompletedList extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="hoverable">
        <ReactCSSTransitionGroup
                className="list collection with-header collapsible"
                component="ul"
                transitionName="list"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
          <li className="collection-header valign-wrapper">
            <span className="glyphicon glyphicon-ok"></span>
            <h4 className="valign">Completed Tasks</h4>
          </li>
          {this.props.completed.map((completedItem, index) => {
            return (<CompletedEntry key={completedItem._id} 
                              completedItem={completedItem} 
                              index={index} 
                              updateList={this.props.updateList}
                              spliceTodo={this.props.spliceTodo} />);
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

// <div id="archive-switch" className="switch right right-align">
//   <label>
//     Off
//     <input type="checkbox" />
//     <span className="lever"></span>
//     On
//   </label>
// </div>