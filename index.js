const calculateBill = function(price,vat,tip) {
if (typeof price && typeof vat && typeof tip === "number") {
    const total = price + (price / 100) * vat + (price / 100) * tip;
    return "£" + total;
  } else {
    return "error";
  }
};

module.exports = calculateBill;