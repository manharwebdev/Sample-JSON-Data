const fs = require('fs');

// Step 1: Read JSON file
const data = fs.readFileSync('sales.json', 'utf-8');
const salesData = JSON.parse(data);

// Step 2: Initialize report values
let totalRevenue = 0;
let topProduct = '';
let maxRevenue = 0;

// Step 3: Generate report
console.log('🧾 Sales Report');
console.log('-----------------------');
salesData.forEach((item) => {
  const revenue = item.unitsSold * item.pricePerUnit;
  totalRevenue += revenue;
  console.log(`${item.product}: ${item.unitsSold} units sold, Revenue: $${revenue}`);

  if (revenue > maxRevenue) {
    maxRevenue = revenue;
    topProduct = item.product;
  }
});

console.log('-----------------------');
console.log(`💰 Total Revenue: $${totalRevenue}`);
console.log(`🏆 Top Product: ${topProduct} ($${maxRevenue})`);
console.log('-----------------------');
