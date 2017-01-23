
class TodoList extends React.Component {
  constructor() {
    super()

  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <ul className="collection with-header collapsible">
          <li className="collection-header valign-wrapper"><i className="material-icons medium">done</i><h4 className="valign"> Todo List</h4></li>
          {this.props.list.map((listItem, index) => {
            return <TodoEntry key={index} listItem={listItem} index={index} toggleCompletion={this.props.toggleCompletion}/>
          })}
        </ul>
      </div>
    )
  }
}