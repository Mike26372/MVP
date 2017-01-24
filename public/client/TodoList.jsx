var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

class TodoList extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="hoverable">
        <ReactCSSTransitionGroup
                className="example collection with-header collapsible"
                component="ul"
                transitionName="example"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
          <li className="collection-header valign-wrapper">
            <span className="glyphicon glyphicon-tasks"></span>
            <h4 className="valign">Todo List</h4>
          </li>
          {this.props.list.map((listItem, index) => {
            return (<TodoEntry key={listItem._id} 
                              listItem={listItem} 
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