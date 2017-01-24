
class TodoEntry extends React.Component {
  constructor() {
    super();
    
  }

  createSubmissionObj() {
    var submission = {
      _id: this.props.listItem._id,
      userId: this.props.listItem.userId,
      user: this.props.listItem.user,
      task: this.props.listItem.value,
      completed: this.props.listItem.completed
    }
    return submission;
  }

  handleCheckClick() {
    // Create submission before toggle of state
    var todoEntryContext = this;

    var completedSubmission = this.createSubmissionObj();
    this.props.spliceTodo(this.props.index);

    completedSubmission.completed = !completedSubmission.completed;
    
    // Make AJAX request so state equals the database record
    $.ajax({
      method: 'PUT',
      url: 'http://127.0.0.1:3000/list',
      data: JSON.stringify(completedSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('Toggle completion success!');
        todoEntryContext.props.updateList();
      },
      error: function(err) {
        console.error('Toggle completion failed :(');
      }
    });
  }

  handleDeleteClick() {
    var todoEntryContext = this;
    var deleteSubmission = this.createSubmissionObj();
    $.ajax({
      method: 'DELETE',
      url: 'http://127.0.0.1:3000/list',
      data: JSON.stringify(deleteSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('Data deletion success!');
        todoEntryContext.props.updateList();
      },
      error: function(err) {
        console.error('Toggle completion failed :(');
      }
    });
  }

  render() {
    return (
      <li className="collection-item">
        <a onClick={() => this.handleDeleteClick()}><i className="close material-icons">close</i></a>
        <span>
            {this.props.listItem.task}
          <a href="#!" 
             className="secondary-content">
            <input type="checkbox" 
            id={this.props.listItem._id} 
            onClick={() => this.handleCheckClick()}
            checked={this.props.listItem.completed ? "checked" : ""}/>
            <label htmlFor={this.props.listItem._id}></label>
          </a>
        </span>
      </li>
    )
  }
}