/*
TODO:
  - Add a link element to the head of the document to include Bootstrap CSS
  - Add a section for the user to enter how much money is due, how much money was received, and a button to calculate the change
  - Add a section to display the change in cards displaying the quantities of 20, 10, 5, 1, quarters, dimes, nickels, and pennies to be returned
*/
import "./App.css";

function App() {
  // Add your code here

  return (
    <div className="container m-4">
      <h1 className="text-left text-primary">Change Calculator</h1>
      <div className="card w-50 bg-light text-dark shadow rounded">
        <div className="card-header text-left">Enter Information</div>
        <div className="card-body">
          <label htmlFor="amount-due" className="me-2">
            How much is due?
          </label>
          <br />
          <input
            className="amount-due text-left"
            data-testid="amountDue"
            type="number"
            placeholder="Enter Amount Due"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
