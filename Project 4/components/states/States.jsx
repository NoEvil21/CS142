import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
function sortByName(filtered) {
  return filtered.sort((a, b) => a.toString().localeCompare(b.toString()));
}
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      substring: "",
      states: window.cs142models.statesModel()
    }

    this.handleStrChange = this.handleStrChange.bind(this);

    this.ListItems = function(props){
      const filtered_str = props.states.filter(state => state.toLowerCase().includes(props.substring));
      const sorted_str = sortByName(filtered_str);
      return (
        <ul>
          {sorted_str.map(statename => (
            <li key={statename.toString()}>
              {statename}
            </li>
          ))}
        </ul>
      );
    };
  }
  
  handleStrChange(event) {
    this.setState({substring: event.target.value});
  }

  render() {
    return (
      <div>
        Please input the state you want: 
        <input type="text" value={this.state.substring} onChange={this.handleStrChange} />
        <this.ListItems
          states = {this.state.states}
          substring = {this.state.substring.toLowerCase()}
         />
      </div>
    );
  }
}

export default States;
