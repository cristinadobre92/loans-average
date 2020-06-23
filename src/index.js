import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const buttons = [
  { id: '1', name: 0.0299 },
  { id: '2', name: 0.0399 },
  { id: '3', name: 0.0499 },
  { id: '4', name: 0.0599 },
  { id: '5', name: 0.0699 },
  { id: '6', name: 0.0849 },
  { id: '7', name: 0.0949 },
  { id: '8', name: 0.1099 },
  { id: '9', name: 0.1349 },
  { id: '10', name: 0.1549 },
  { id: '11', name: 0.1999 },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loans: [],
      filterLoans: [],
    };
  }
  componentDidMount() {
    axios.get(`/loans/marketplace`).then((res) => {
      const loans = res.data;
      this.setState({ loans, filterLoan: this.state.loans });
    });
  }
  handleClick = (name) => {
    let filterLoans = [];
    if (name === 'All') {
      filterLoans = this.state.loans;
    } else {
      filterLoans = this.state.loans.filter((f) => f.interestRate === name);
    }

    this.setState({ filterLoans });
  };

  render() {
    const renderAll = this.state.filterLoans.map((c) => (
      <li key={c.id}>{c.amount}</li>
    ));

    return (
      <div>
        <h1>Select the interest rate</h1>
        {buttons.map(({ name, id }) => (
          <button
            key={id}
            value={name}
            onClick={this.handleClick.bind(this, name)}
          >
            {Math.round(name * 10000) / 100}
          </button>
        ))}
        <h2>Loans</h2>
        <p>{renderAll}</p>
        <h3>Average amount for the interest rate selected: </h3>
        <p>
          {this.state.filterLoans.length === 0
            ? 'No loans found for this interest rate'
            : Math.round(
                this.state.filterLoans.reduce((a, b) => a + b.amount, 0) /
                  this.state.filterLoans.length
              )}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
