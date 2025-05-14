/*
TODO:
  - Setup state management using useState
  - Setup event binding for button elements
  - Update view state based on calculation results
  - Figure out how to dynamically populate success/fail alert
  - Possibly create seperate file for building of output cards sections and import it

*/
import "./App.css";

function App() {
  // Add your code here

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
              />
              <label htmlFor="amountReceived">How much was received?</label>
              <input
                id="amountReceived"
                className="mb-4 form-control"
                data-testid="amountReceived"
                type="number"
                placeholder="Enter Amount Received"
              />
            </div>
            <div className="card-footer text-center">
              <button
                className="calculate bg-primary text-light form-control"
                data-testid="calculate"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light text-dark shadow rounded">
            <div className="card-body">
              <div
                id="output"
                className="card-title alert alert-success text-center"
                role="alert"
              >
                <h3>Success/Fail text displayed here</h3>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Twenties</h4>
                      <p className="card-text text-center">
                        Amount of twenties to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Tens</h4>
                      <p className="card-text text-center">
                        Amount of tens to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Fives</h4>
                      <p className="card-text text-center">
                        Amount of fives to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Ones</h4>
                      <p className="card-text text-center">
                        Amount of ones to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Quarters</h4>
                      <p className="card-text text-center">
                        Amount of quarters to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Dimes</h4>
                      <p className="card-text text-center">
                        Amount of dimes to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Nickels</h4>
                      <p className="card-text text-center">
                        Amount of nickels to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light text-dark shadow rounded">
                    <div className="card-body">
                      <h4 className="card-title text-center">Pennies</h4>
                      <p className="card-text text-center">
                        Amount of pennies to be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
