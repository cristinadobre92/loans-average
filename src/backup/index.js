import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  const [loans, setLoans] = useState([]);
  const interestsJson = require('../interest.json');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`/loans/marketplace`)
      .then((res) => {
        const loans = res.data;
        setLoans(loans);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const source = loans;
  const target = interestsJson.interests;
  const returnedTarget = target.concat(source);

  return (
    <div>
      {' '}
      <div>Select interest rate</div>
      <div>
        {target.map((item) => (
          <button key={item.id} value={item.interestRate}>
            {item.interestRate}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {returnedTarget
            // .filter((p) => p.interestRate === 0.0599)
            .map((loan) => (
              <li key={loan.id}>
                {loan.amount},{loan.interestRate}{' '}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
