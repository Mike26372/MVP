
class TodoEntry extends React.Component {
  constructor() {
    super();
  }
  // Set initial state of entry to "completed" value from table
  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.listItem.task}
          <a href="#!" className="secondary-content">
            <input type="checkbox" id={this.props.listItem._id}/>
            <label htmlFor={this.props.listItem._id}></label>
          </a>
        </div>
      </li>
    )
  }
}