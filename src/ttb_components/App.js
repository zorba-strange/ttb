// This is the Top level component for the whole app.   
const React                       = require('react');
const Radium                      = require('radium');

// CSS STYLES

const page_wrapper_styles = {
  textAlign: 'center'
}

const header_styles = {
  backgroundColor: '#222',
  height: 150,
  padding: 20,
  color: 'white',
}

const App = () => {
    return (
      <div
        style={page_wrapper_styles}>
        <div 
            style={header_styles}>
          <h2>
            Welcome to Track That Bill Hill
          </h2>
        </div>
        <div>
            I'm Just a Bill, on TrackThatBill Hill
        </div>
      </div>
    );
}

module.exports = Radium(App);
