const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['stock', 'bond', 'etf', 'mutual_fund', 'crypto', 'real_estate', 'retirement', 'other'],
    required: true
  },
  symbol: String,
  purchaseDate: {
    type: Date,
    required: true
  },
  purchasePrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  currentPrice: Number,
  currentValue: Number,
  returnAmount: Number,
  returnPercentage: Number,
  institution: String,
  notes: String,
  transactions: [{
    type: String,
    enum: ['buy', 'sell', 'dividend', 'split', 'other'],
    date: Date,
    price: Number,
    quantity: Number,
    fees: Number,
    notes: String
  }],
  aiInsights: [{
    insight: String,
    confidenceScore: Number,
    recommendedAction: String,
    reasoning: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  riskScore: {
    type: Number,
    min: 1,
    max: 10
  },
  sector: String,
  industry: String,
  dividendYield: Number,
  peRatio: Number,
  marketCap: Number,
  lastUpdated: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
