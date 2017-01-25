
class GoalForm extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();
    var goalSubmission = {
      userId: this.props.userId,
      user: this.props.user,
      task: this.task.value,
    };
    var GoalFormContext = this;

    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:3000/goal',
      data: JSON.stringify(goalSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('List submission success!');
        GoalFormContext.props.updateList();
      },
      error: function(err) {
        console.error('List submission failed :(');
      }
    });

    this.goalForm.reset();

  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" 
                onSubmit={(e) => this.handleSubmit(e)} 
                ref={(input) => this.goalForm = input}>
            <div className="row">
              <div className="input-field col s9">
                <i id="form-icon" className="material-icons prefix">mode_edit</i>
                <input id="icon_prefix2" type="text" className="validate"
                ref={(input) => this.task = input} ></input>
                <label id="form-label" htmlFor="icon_prefix2">Enter a life goal</label>
              </div>
              <div className="col s3 valign" id="addTodoButton">
                <button  
                        className="btn-flat waves-effect waves-light" 
                        type="submit" 
                        name="action">Add
                  <span className="glyphicon glyphicon-plus"
                        id="addTodoIcon"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}