var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup; // ES5 with react-with-addons.js

class GoalList extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="hoverable">
        <ReactCSSTransitionGroup
                className="goals collection with-header collapsible"
                component="ul"
                dataCollapsible="accordion"
                transitionName="goals"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
          <li className="collection-header valign-wrapper">
            <span className="glyphicon glyphicon-pushpin"></span>
            <h4 className="valign">Long-Term Goals</h4>
          </li>
          {this.props.goals.map((goalItem, index) => {
            return (<GoalEntry key={goalItem._id} 
                               goalItem={goalItem} 
                               index={index} 
                               updateList={this.props.updateList}
                               />);
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