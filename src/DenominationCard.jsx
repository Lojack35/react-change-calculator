// Functional component that displays a denomination (e.g., "Quarters") and the quantity
function DenominationCard({ label, amount }) {
  return (
    // Column container with Bootstrap grid for responsive layout
    <div className="col-md-3">
      {/* Card container styled with Bootstrap classes */}
      <div className="card bg-light text-dark shadow rounded">
        <div className="card-body">
          {/* Display the label of the denomination (e.g., "Dimes") */}
          <h4 className="card-title text-center">{label}</h4>

          {/* Display the amount of this denomination */}
          <p
            className="card-text text-center"
            data-testid={`${label.toLowerCase()}`} // For testing purposes, e.g., data-testid="quarters"
          >
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
}

// Export the component for use in other files (like App.jsx)
export default DenominationCard;
