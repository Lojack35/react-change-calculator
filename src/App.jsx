/*
TODO:
  - Fix failing "Additional money" test
  - Fix failing "Individual change" test
  - Update page styling

*/
import "./App.css";
import { useState, useEffect } from "react";
import DenominationCard from "./DenominationCard";
import CalculateDenominations from "./CalculateDenominations";

function App() {
  const [amountDue, setAmountDue] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [denominations, setDenominations] = useState([
    { label: "Twenties", amount: 0 },
    { label: "Tens", amount: 0 },
    { label: "Fives", amount: 0 },
    { label: "Ones", amount: 0 },
    { label: "Quarters", amount: 0 },
    { label: "Dimes", amount: 0 },
    { label: "Nickels", amount: 0 },
    { label: "Pennies", amount: 0 },
  ]);

  const handleCalculate = () => {
    const due = Number(amountDue);
    const received = Number(amountReceived);

    if (isNaN(due) || isNaN(received)) {
      setAlertMessage("Please enter valid numbers for both fields.");
      setIsError(true);
      return;
    }

    if (received < due) {
      setAlertMessage("ERROR: Amount received is less than amount due.");
      setIsError(true);
      return;
    }

    const totalChange = received - due;
    setAlertMessage(`The total change due is $${totalChange.toFixed(2)}`);
    setIsError(false);

    const breakdown = CalculateDenominations(totalChange);
    setDenominations(breakdown);

    setAmountDue("");
    setAmountReceived("");
  };

  return (
    <div className="container m-4">
      <h1 className="text-left text-primary">Change Calculator</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-light text-dark shadow rounded">
            <div className="card-header">
              <h3>Enter Information</h3>
            </div>
            <div className="card-body">
              <label htmlFor="amountDue">How much is due?</label>
              <input
                id="amountDue"
                className="mb-4 form-control"
                data-testid="amountDue"
                type="number"
                placeholder="Enter Amount Due"
                value={amountDue}
                onChange={(e) => setAmountDue(Number(e.target.value))}
              />
              <label htmlFor="amountReceived">How much was received?</label>
              <input
                id="amountReceived"
                className="mb-4 form-control"
                data-testid="amountReceived"
                type="number"
                placeholder="Enter Amount Received"
                value={amountReceived}
                onChange={(e) => setAmountReceived(Number(e.target.value))}
              />
            </div>
            <div className="card-footer text-center">
              <button
                className="calculate bg-primary text-light form-control"
                data-testid="calculate"
                onClick={handleCalculate}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light text-dark shadow rounded">
            <div className="card-body">
              {alertMessage && (
                <div
                  id="output"
                  className={`alert text-center ${
                    isError ? "alert-danger" : "alert-success"
                  }`}
                  role="alert"
                >
                  <h3>{alertMessage}</h3>
                </div>
              )}
              <div className="row g-3">
                {denominations.map((denom, index) => (
                  <DenominationCard
                    key={index}
                    label={denom.label}
                    amount={denom.amount}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
