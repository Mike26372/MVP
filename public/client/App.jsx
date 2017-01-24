
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 1,
      user: 'Michael',
      list: ['state not updated'],
      completed: ['no completed tasks'],
      goals: ['no aspirations here'],
    };
    this.updateList = this.updateList.bind(this);
  }

  componentWillMount() {
    this.updateList();
  }

  updateList() {
    var appContext = this;
    console.log('Update list called from App');
    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:3000/list',
      dataType: 'json',
      success: function(data) {
        console.log('List update request success!');
        appContext.setState({list: data});
      },
      error: function(error) {
        console.log('List update request error booo');
      }
    });

    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:3000/list/completed',
      dataType: 'json',
      success: function(data) {
        console.log('Completed list update request success!');
        appContext.setState({completed: data});
      },
      error: function(error) {
        console.log('Completed list update request error booo');
      }
    });

    $.ajax({
      method: 'GET',
      url: 'http://127.0.0.1:3000/goal',
      dataType: 'json',
      success: function(data) {
        console.log('Goals update request success!');
        appContext.setState({goals: data});
      },
      error: function(error) {
        console.log('Goals update request error booo');
      }
    });
  }


  render() {
    return (
      <div>
        <TodoForm userId={this.state.userId} 
                  user={this.state.user}
                  updateList={this.updateList}
                  />
        <TodoList list={this.state.list}
                  updateList={this.updateList}
                  />
        <CompletedList completed={this.state.completed}
                  updateList={this.updateList}
                  />
        <GoalForm userId={this.state.userId} 
                  user={this.state.user}
                  updateList={this.updateList}
                  />
        <GoalList goals={this.state.goals}
                  updateList={this.updateList}
                  />
        <InspirationalQuote />
      </div>
    );
  }
}
