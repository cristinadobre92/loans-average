import React from 'react';
import axios from 'axios';
import './Loans.scss';

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

const activeButtons = new Map();
let filterLoans = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loans: [],
      filterLoans: [],
      activeButtons: new Map(),
    };
    this.wrapperRef = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/loans/marketplace`)
      .then((res) => {
        const loans = res.data;
        this.setState({ loans, filterLoan: this.state.loans });
      })
      .catch((error) => {
        console.log(error.message);
      });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClick = (name) => {
    let filterLoans = [];

    if (name === 'All') {
      filterLoans = this.state.loans;
    } else {
      filterLoans = this.state.loans.filter(
        (f) => f.interestRate === name || activeButtons.get(f.interestRate)
      );
    }

    if (activeButtons.get(name) === true) {
      activeButtons.set(name, false);
    } else {
      activeButtons.set(name, true);
    }

    this.setState({ activeButtons });

    this.setState({ filterLoans });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      filterLoans = [];
      this.setState({ filterLoans });
    }
  }

  render() {
    const renderAll = this.state.filterLoans.map((c) => (
      <li key={c.id}>{c.amount}</li>
    ));

    return (
      <div className="container">
        <h1>Select the interest rate</h1>
        <div ref={this.wrapperRef} className="button">
          {buttons.map(({ name, id }) => (
            <button
              key={id}
              value={name}
              onClick={this.handleClick.bind(this, name, id)}
              className={activeButtons.get(name) ? 'button-active' : 'button'}
            >
              {Math.round(name * 10000) / 100}
            </button>
          ))}
        </div>
        <h2>Loans made with the selected interest:</h2>
        <p>
          {renderAll.length === 0
            ? 'No loans found for this interest rate'
            : renderAll}
        </p>
        <h3>Average amount for the interest rate selected: </h3>
        <p className="average">
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

export default App;
