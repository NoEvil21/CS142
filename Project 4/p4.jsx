import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';
import './p4.css';
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        //use state 0 for example, state 1 for states
        this.state = {
            status: 0
        }
    }

    handleClick() {
        this.setState({status: !this.state.status});
    }

    render() {
        return (
            <div className="buttonp4">
                <span>Try to click this!</span>
                <button onClick={this.handleClick}>
                    {this.state.status ? "States" : "Example"}
                </button>
                <div>
                    {this.state.status ? <States /> : <Example />}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header />
        <Switch />
    </div>
    ,
    document.getElementById("reactapp"),
)

export default Switch;