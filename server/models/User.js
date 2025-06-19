const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    avatar: String,
    phoneNumber: String,
    address: String,
    occupation: String,
    income: Number,
    riskTolerance: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    }
  },
  financialGoals: [{
    title: String,
    targetAmount: Number,
    currentAmount: {
      type: Number,
      default: 0
    },
    targetDate: Date,
    category: {
      type: String,
      enum: ['retirement', 'home', 'education', 'travel', 'emergency', 'other']
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },
    notes: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  accounts: [{
    name: String,
    type: {
      type: String,
      enum: ['checking', 'savings', 'credit', 'investment', 'loan', 'other']
    },
    institution: String,
    balance: Number,
    accountNumber: String,
    plaidItemId: String,
    plaidAccessToken: String,
    lastUpdated: Date
  }],
  preferences: {
    currency: {
      type: String,
      default: 'USD'
    },
    theme: {
      type: String,
      default: 'light'
    },
    notificationPreferences: {
      email: {
        type: Boolean,
        default: true
      },
      push: {
        type: Boolean,
        default: true
      },
      sms: {
        type: Boolean,
        default: false
      }
    }
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
