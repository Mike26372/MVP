
class TodoForm extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();
    var todoSubmission = {
      userId: this.props.userId,
      user: this.props.user,
      task: this.task.value
    };
    var TodoFormContext = this;

    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1:3000/list',
      data: JSON.stringify(todoSubmission),
      contentType: 'application/json',
      success: function(data) {
        console.log('List submission success!');
        TodoFormContext.props.updateList();
      },
      error: function(err) {
        console.error('List submission failed :(');
      }
    });

    this.todoForm.reset();

  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" 
                onSubmit={(e) => this.handleSubmit(e)} 
                ref={(input) => this.todoForm = input}>
            <div className="row">
              <div className="input-field col s9">
                <i id="form-icon" className="material-icons prefix">mode_edit</i>
                <input id="icon_prefix2" type="text" className="validate"
                ref={(input) => this.task = input} ></input>
                <label id="form-label" htmlFor="icon_prefix2">Enter a task</label>
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