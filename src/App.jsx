// React imports
import React, { useState } from "react";

// Component imports
import DenominationCard from "./DenominationCard";
import CalculateDenominations from "./CalculateDenominations";

// Style import
import "./App.css";

// Utility function to format a number as USD currency string
const formatMoney = (value) => `$${Number(value).toFixed(2)}`;

function App() {
  // State for the amount due from the customer (stored as string for input compatibility)
  const [amountDue, setAmountDue] = useState("");

  // State for the amount received from the customer
  const [amountReceived, setAmountReceived] = useState("");

  // Message displayed after calculation (success or error)
  const [alertMessage, setAlertMessage] = useState("");

  // Flag to determine if the alert message is an error
  const [isError, setIsError] = useState(false);

  // Initial state for all denominations
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

  // Handler for calculating change and denominations
  const handleCalculate = () => {
    const due = parseFloat(amountDue); // Convert input string to number
    const received = parseFloat(amountReceived);

    // Check for empty, non-numeric, or negative values
    if (
      !amountDue ||
      !amountReceived ||
      isNaN(due) ||
      isNaN(received) ||
      due < 0 ||
      received < 0
    ) {
      setAlertMessage("Please enter valid positive numbers for both fields.");
      setIsError(true);
      return;
    }

    // If not enough money was received
    if (received < due) {
      const remaining = due - received;
      setAlertMessage(`Additional money owed is ${formatMoney(remaining)}.`);
      setIsError(true);
      return;
    }

    // Calculate and display total change due
    const totalChange = received - due;
    setAlertMessage(`The total change due is ${formatMoney(totalChange)}.`);
    setIsError(false);

    // Get detailed denomination breakdown
    const breakdown = CalculateDenominations(totalChange);
    setDenominations(breakdown);

    // Reset the input fields
    setAmountDue("");
    setAmountReceived("");
  };

  return (
    <div className="container m-4">
      {/* Page header */}
      <h1 className="text-left text-primary">Change Calculator</h1>

      <div className="row">
        {/* Input section */}
        <div className="col-md-4">
          <div className="card bg-light text-dark shadow rounded">
            <div className="card-header">
              <h3>Enter Information</h3>
            </div>

            <div className="card-body">
              {/* Amount due input */}
              <label htmlFor="amountDue">How much is due?</label>
              <input
                id="amountDue"
                className="mb-4 form-control"
                data-testid="amountDue"
                type="number"
                placeholder="Enter Amount Due"
                value={amountDue}
                onChange={(e) => setAmountDue(e.target.value)} // Store raw input as string
              />

              {/* Amount received input */}
              <label htmlFor="amountReceived">How much was received?</label>
              <input
                id="amountReceived"
                className="mb-4 form-control"
                data-testid="amountReceived"
                type="number"
                placeholder="Enter Amount Received"
                value={amountReceived}
                onChange={(e) => setAmountReceived(e.target.value)} // Store raw input as string
              />
            </div>

            {/* Calculate button */}
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

        {/* Result display section */}
        <div className="col-md-8">
          <div className="card bg-light text-dark shadow rounded">
            <div className="card-body">
              {/* Alert message for either error or success */}
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

              {/* Denomination cards, one for each type of bill/coin */}
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

// Export the App component so it can be rendered in main.jsx
export default App;
