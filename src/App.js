import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            mpg: 26.0,
            gasprice: 2.50,
            milestowork: 12,
            days: 260,
            moneysaved: ''
        };

        this.handleMPGChange = this.handleMPGChange.bind(this);
        this.handleGasChange = this.handleGasChange.bind(this);
        this.handleMilesChange = this.handleMilesChange.bind(this);
        this.handleDaysChange = this.handleDaysChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleMPGChange(event) {
        this.setState({mpg: event.target.value});
    }
    handleGasChange(event) {
        this.setState({gasprice: event.target.value});
    }
    handleMilesChange(event) {
        this.setState({milestowork: event.target.value});
    }
    handleDaysChange(event) {
        this.setState({days: event.target.value});
    }

    calculate(event) {
        this.setState({moneysaved: ((this.state.milestowork * this.state.days * 2) / this.state.mpg) * this.state.gasprice});
    }

    render () {
        let empty = false;
        if(this.state.moneysaved === '')
            empty = true;
        return (

            <div>
                <h1>bike tracker</h1>

                <p>see how much money you save on average by biking to work everyday</p>

                <div className="mpg">
                    <label>mpg (default 26.0) </label>
                    <input type="number" defaultValue={this.state.mpg} onChange={this.handleMPGChange} step=".1" min=".1"/>
                </div>
                <div className="gas">
                    <label>gas price (default 2.50) </label>
                    <input type="number" defaultValue={this.state.gasprice} onChange={this.handleGasChange} step=".01" />
                </div>
                <div className="miles">
                    <label>miles to work (default 12) </label>
                    <input type="number" defaultValue={this.state.milestowork} onChange={this.handleMilesChange} step=".1"/>
                </div>
                <div className="days">
                    <label>days commuted per year (default 260) </label>
                    <input type="number" defaultValue={this.state.days} onChange={this.handleDaysChange} max="365"/>
                </div>

                <div className="calculate">
                    <button onClick={this.calculate}>calculate</button>
                </div>

                { !empty ? ( <p>you saved ${parseFloat(this.state.moneysaved).toFixed(2)} by biking to work</p>) : (<p></p>) }

            </div>
        );
    }
}

export default App;
