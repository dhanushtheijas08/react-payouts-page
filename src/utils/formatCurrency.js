export default function formatCurrency(number) {
  if (isNaN(number)) {
    return "Invalid input";
  }
  const formattedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(number);

  return formattedCurrency;
}
