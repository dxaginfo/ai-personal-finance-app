const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  period: {
    type: String,
    enum: ['weekly', 'monthly', 'quarterly', 'annually'],
    default: 'monthly'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  totalBudget: {
    type: Number,
    required: true
  },
  categories: [{
    name: {
      type: String,
      required: true
    },
    budgetedAmount: {
      type: Number,
      required: true
    },
    actualAmount: {
      type: Number,
      default: 0
    },
    color: String,
    icon: String,
    notes: String,
    subcategories: [{
      name: String,
      budgetedAmount: Number,
      actualAmount: {
        type: Number,
        default: 0
      }
    }]
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  isAIGenerated: {
    type: Boolean,
    default: false
  },
  aiRecommendations: [{
    category: String,
    recommendedAmount: Number,
    reasoning: String,
    potentialSavings: Number,
    applied: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);
