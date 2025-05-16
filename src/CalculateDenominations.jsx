// This function calculates how many of each denomination is needed
// to make up the given total change amount in USD.
function CalculateDenominations(totalChange) {
  // Convert total change from dollars to cents (to avoid floating point issues)
  // Example: $4.36 => 436 cents
  let remaining = Math.round(totalChange * 100);

  // Define each denomination in descending order by value (in cents)
  const breakdown = [
    { label: "Twenties", value: 2000 }, // $20 = 2000 cents
    { label: "Tens", value: 1000 }, // $10 = 1000 cents
    { label: "Fives", value: 500 }, // $5  = 500 cents
    { label: "Ones", value: 100 }, // $1  = 100 cents
    { label: "Quarters", value: 25 }, // $0.25 = 25 cents
    { label: "Dimes", value: 10 }, // $0.10 = 10 cents
    { label: "Nickels", value: 5 }, // $0.05 = 5 cents
    { label: "Pennies", value: 1 }, // $0.01 = 1 cent
  ];

  // Calculate how many of each denomination is needed
  const result = breakdown.map((denom) => {
    // Get the count of current denomination that fits into remaining amount
    const count = Math.floor(remaining / denom.value);

    // Subtract the total value of used denominations from remaining
    remaining %= denom.value;

    // Return an object representing the denomination and how many are used
    return { label: denom.label, amount: count };
  });

  // Return the final breakdown of denominations
  return result;
}

// Export the function for use in other files
export default CalculateDenominations;
