# Sample-JSON-Data

# 📊 Sales Report Generator (Node.js CLI App)

This is a simple Command Line Interface (CLI) app built with Node.js to generate a sales report from a JSON file.

---

## ✅ Features

- Reads sales data from a JSON file
- Calculates revenue for each product
- Summarizes:
  - Total revenue
  - Top-performing product

---

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES6)
- `fs` module to read files

---

## 📂 Project Structure

sales-report-generator/
├── sales.json
├── salesReport.js
└── README.md

---

## 📥 Sample JSON Data (`sales.json`)

```json
[
  {
    "product": "T-shirt",
    "unitsSold": 120,
    "pricePerUnit": 20
  },
  {
    "product": "Jeans",
    "unitsSold": 80,
    "pricePerUnit": 50
  },
  {
    "product": "Shoes",
    "unitsSold": 60,
    "pricePerUnit": 70
  },
  {
    "product": "Hats",
    "unitsSold": 150,
    "pricePerUnit": 15
  }
]

🚀 How to Run
Clone or download this repository.

Make sure you have Node.js installed.

Run the script using:
node salesReport.js
