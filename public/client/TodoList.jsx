
class TodoList extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <ul className="collection with-header collapsible">
          <li className="collection-header valign-wrapper"><i className="material-icons medium">done</i><h4 className="valign"> Todo List</h4></li>
          {this.props.list.map((listItem, index) => <TodoEntry key={index} listItem={listItem}/>)}
        </ul>
      </div>
    )
  }
}