
class GoalEntry extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: false
    };
  }

  createSubmissionObj() {
    // console.log('SPAN REF: ');
    // console.log(this.task.innerHTML);
    var submission = {
      _id: this.props.goalItem._id,
      userId: this.props.goalItem.userId,
      user: this.props.goalItem.user,
      task: this.task.innerHTML,
      description: this.description.value,
      completed: this.props.goalItem.completed
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
      url: 'http://127.0.0.1:3000/goal',
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
      url: 'http://127.0.0.1:3000/goal',
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

  handleDescriptionChange(e) {
    var goalEntryContext = this;
    var goalSubmission = this.createSubmissionObj();

    // Make AJAX request so state equals the database record
    $.ajax({
      method: 'PUT',
      url: 'http://127.0.0.1:3000/goal',
      data: JSON.stringify(goalSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('Description change success!');
      },
      error: function(err) {
        console.error('Description change failed :(');
      }
    });
  }

  handleDoubleClick() {
    var editState = this.state.editable;
    this.setState({
      editable: !this.state.editable
    });
  }

  render() {
    return (
      <li>
        <div className="collapsible-header">
          <a onClick={(e) => this.handleDoubleClick()}><i className="material-icons">mode_edit</i></a>
          <span 
          contentEditable={this.state.editable}
          ref={(input) => this.task = input}
          onBlur={(e) => this.handleDescriptionChange(e)}>
            {this.props.goalItem.task}
          </span>
          <a onClick={() => this.handleDeleteClick()}><i className="close material-icons">close</i></a>
        </div>
        <div className="collapsible-body">
          <div className="row goal-textarea">
            <textarea 
              className="materialize-textarea col s10 offset-s1"
              ref={(input) => this.description = input}
              onChange={(e) => this.handleDescriptionChange(e)}>
              {this.props.goalItem.description}
            </textarea>
          </div>
        </div>
      </li>
    );
  }
}

// <i className="material-icons">filter_drama</i>