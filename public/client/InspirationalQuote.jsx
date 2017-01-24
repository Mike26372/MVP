class InspirationalQuote extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: null
    }
  }

  componentWillMount() {
    
    var quoteContext = this;
    $.ajax({
      method: 'GET',
      url: '/quotes',
      success: function(data) {
        console.log('Quote retrieval success!');
        console.log(data);
      },
      error: function(err) {
        console.error('Quote retrieval error');
      }
    })
  }

  render() {
    return (
      <div className="col s12 m7">
        <h4 className="header">Be Inspired</h4>
        <div className="card horizontal hoverable">
          <div className="card-image">
            <img src="http://lorempixel.com/100/190/nature/6" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

