function callback(data) {
  console.log(data);
}

class InspirationalQuote extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: {
        quoteText: '',
        quoteAuthor: ''
      }
    }
  }

  componentWillMount() {
    
    var quoteContext = this;

    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(function(data) {
      console.log(data);
      quoteContext.setState({quote: data});
    })
    .fail(function(err) {
      console.error(err);
    });

  }

  render() {
    return (
      <div className="col s12 m7">
        <h4 className="header center-align">Be Inspired</h4>
        <div className="card horizontal hoverable">
          <div className="card-stacked">
            <div className="card-content">
              <p className="flow-text">"{this.state.quote.quoteText}"</p>
            </div>
            <div className="card-action">
              <a href="#">{this.state.quote.quoteAuthor}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// <div className="card-image">
//   <img src="http://lorempixel.com/100/190/nature/6" />
// </div>