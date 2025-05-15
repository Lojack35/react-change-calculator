function CalculateDenominations(totalChange) {
  let remaining = Math.round(totalChange * 100);

  const breakdown = [
    { label: "Twenties", value: 2000 },
    { label: "Tens", value: 1000 },
    { label: "Fives", value: 500 },
    { label: "Ones", value: 100 },
    { label: "Quarters", value: 25 },
    { label: "Dimes", value: 10 },
    { label: "Nickels", value: 5 },
    { label: "Pennies", value: 1 },
  ];

  const result = breakdown.map((denom) => {
    const count = Math.floor(remaining / denom.value);
    remaining %= denom.value;
    return { label: denom.label, amount: count };
  });

  return result;
}

export default CalculateDenominations;
