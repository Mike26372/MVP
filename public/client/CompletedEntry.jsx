
class CompletedEntry extends React.Component {
  constructor() {
    super();
    
  }

  createSubmissionObj() {
    var submission = {
      _id: this.props.completedItem._id,
      userId: this.props.completedItem.userId,
      user: this.props.completedItem.user,
      task: this.props.completedItem.task,
      completed: this.props.completedItem.completed
    };
    return submission;
  }

  handleCheckClick() {
    // Create submission before toggle of state
    var todoEntryContext = this;

    var completedSubmission = this.createSubmissionObj();
    // this.props.spliceTodo(this.props.index);

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
            {this.props.completedItem.task}
          <a href="#!" 
             className="secondary-content">
            <input type="checkbox" 
            id={this.props.completedItem._id} 
            onClick={() => this.handleCheckClick()}
            checked={this.props.completedItem.completed ? "checked" : ""}/>
            <label htmlFor={this.props.completedItem._id}></label>
          </a>
        </span>
      </li>
    );
  }
}