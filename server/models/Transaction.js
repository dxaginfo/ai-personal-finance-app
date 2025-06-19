const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: String,
  type: {
    type: String,
    enum: ['income', 'expense', 'transfer'],
    required: true
  },
  location: {
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    lat: Number,
    lon: Number
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringFrequency: {
    type: String,
    enum: ['daily', 'weekly', 'biweekly', 'monthly', 'quarterly', 'annually', null],
    default: null
  },
  tags: [String],
  notes: String,
  attachments: [{
    filename: String,
    url: String,
    contentType: String,
    uploadDate: Date
  }],
  merchantName: String,
  plaidTransactionId: String,
  categoryConfidence: {
    type: Number,
    min: 0,
    max: 1,
    default: 1
  },
  pending: {
    type: Boolean,
    default: false
  },
  excludeFromBudget: {
    type: Boolean,
    default: false
  },
  excludeFromTrends: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
