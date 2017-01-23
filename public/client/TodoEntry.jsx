
class TodoEntry extends React.Component {
  constructor() {
    super();
    
  }

  handleClick() {
    
    var completedSubmission = {
      _id: this.props.listItem._id,
      userId: this.props.listItem.userId,
      user: this.props.listItem.user,
      task: this.props.listItem.value,
      completed: !this.props.listItem.completed
    }

    this.props.toggleCompletion(this.props.index);


    $.ajax({
      method: 'PUT',
      url: 'http://127.0.0.1:3000/list',
      data: JSON.stringify(completedSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('Toggle completion success!');
      },
      error: function(err) {
        console.error('Toggle completion failed :(');
      }
    });

  }
  // Set initial state of entry to "completed" value from table
  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.listItem.task}
          <a href="#!" 
             className="secondary-content">
            <input type="checkbox" 
            id={this.props.listItem._id} 
            onClick={() => this.handleClick()}
            checked={this.props.listItem.completed ? "checked" : ""}/>
            <label htmlFor={this.props.listItem._id}></label>
          </a>
        </div>
      </li>
    )
  }
}