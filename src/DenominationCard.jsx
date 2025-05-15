function DenominationCard({ label, amount }) {
  return (
    <div className="col-md-3">
      <div className="card bg-light text-dark shadow rounded">
        <div className="card-body">
          <h4 className="card-title text-center">{label}</h4>
          <p className="card-text text-center" data-testid={`${label}`}>
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DenominationCard;
