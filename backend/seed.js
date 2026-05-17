require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PositionsModel } = require("./model/PositionsModel.js");

const uri = process.env.MONGO_URL;

const holdingsData = [
  { name: "BHARATPE", qty: 2, avg: 450.00, price: 480.50, net: "+3.5%", day: "+1.2%" },
  { name: "INFY", qty: 5, avg: 1400.00, price: 1485.30, net: "+6.1%", day: "-0.4%" },
  { name: "WIPRO", qty: 10, avg: 420.50, price: 398.25, net: "-5.3%", day: "-1.1%" },
  { name: "TCS", qty: 3, avg: 3200.00, price: 3480.75, net: "+8.8%", day: "+0.9%" },
  { name: "HDFC", qty: 7, avg: 1560.00, price: 1640.20, net: "+5.1%", day: "+0.6%" },
  { name: "RELIANCE", qty: 4, avg: 2350.00, price: 2510.80, net: "+6.8%", day: "+1.5%" },
  { name: "ZOMATO", qty: 15, avg: 78.50, price: 95.40, net: "+21.5%", day: "+2.3%" },
  { name: "PAYTM", qty: 20, avg: 650.00, price: 520.30, net: "-19.9%", day: "-3.4%" },
];

const positionsData = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3290.00, net: "+5.29%", day: "+0.8%", isLoss: false },
  { product: "MIS", name: "HDFCBANK", qty: 3, avg: 1580.40, price: 1620.15, net: "+2.51%", day: "+0.5%", isLoss: false },
  { product: "MIS", name: "TATASTEEL", qty: 10, avg: 124.50, price: 118.30, net: "-4.98%", day: "-2.1%", isLoss: true },
  { product: "CNC", name: "ADANIPORTS", qty: 5, avg: 780.00, price: 810.60, net: "+3.92%", day: "+1.3%", isLoss: false },
];

async function seed() {
  try {
    await mongoose.connect(uri, { dbName: "investro" });
    console.log("✅ DB connected");

    await HoldingsModel.deleteMany({});
    await PositionsModel.deleteMany({});
    console.log("🗑️  Cleared existing holdings and positions");

    await HoldingsModel.insertMany(holdingsData);
    console.log(`✅ Seeded ${holdingsData.length} holdings`);

    await PositionsModel.insertMany(positionsData);
    console.log(`✅ Seeded ${positionsData.length} positions`);

    console.log("\n🎉 Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

seed();
