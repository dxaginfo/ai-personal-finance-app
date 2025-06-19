# AI Personal Finance App API Documentation

## Base URL

```
http://localhost:5000/api
```

For production:

```
https://api.financepersonalai.com/api
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Endpoints

### Authentication

#### Register a new user

```
POST /auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

Response:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login

```
POST /auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

Response:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get current user profile

```
GET /auth/me
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "profile": {
      "avatar": "https://example.com/avatar.jpg",
      "income": 75000,
      "riskTolerance": "medium"
    },
    "accounts": [
      {
        "id": "60d21c1c67d0d8992e610c86",
        "name": "Checking Account",
        "type": "checking",
        "balance": 5420.50
      }
    ]
  }
}
```

### Transactions

#### Get all transactions

```
GET /transactions
```

Query Parameters:
- `startDate`: Filter by start date (YYYY-MM-DD)
- `endDate`: Filter by end date (YYYY-MM-DD)
- `category`: Filter by category
- `type`: Filter by type (income, expense, transfer)
- `limit`: Number of results per page (default: 20)
- `page`: Page number (default: 1)

Response:

```json
{
  "success": true,
  "count": 2,
  "pagination": {
    "totalDocs": 45,
    "limit": 20,
    "page": 1,
    "totalPages": 3,
    "hasNextPage": true,
    "hasPrevPage": false
  },
  "data": [
    {
      "id": "60d21d5c67d0d8992e610c87",
      "date": "2023-06-15T00:00:00.000Z",
      "amount": 120.50,
      "description": "Grocery Store",
      "category": "Food",
      "type": "expense"
    },
    {
      "id": "60d21e4467d0d8992e610c88",
      "date": "2023-06-14T00:00:00.000Z",
      "amount": 2500.00,
      "description": "Salary Deposit",
      "category": "Income",
      "type": "income"
    }
  ]
}
```

#### Get a single transaction

```
GET /transactions/:id
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21d5c67d0d8992e610c87",
    "user": "60d21b4667d0d8992e610c85",
    "account": "60d21c1c67d0d8992e610c86",
    "amount": 120.50,
    "date": "2023-06-15T00:00:00.000Z",
    "description": "Grocery Store",
    "category": "Food",
    "subcategory": "Groceries",
    "type": "expense",
    "location": {
      "name": "Whole Foods Market",
      "address": "123 Main St",
      "city": "San Francisco",
      "state": "CA"
    },
    "isRecurring": false,
    "tags": ["organic", "household"],
    "notes": "Weekly grocery run",
    "merchantName": "Whole Foods",
    "createdAt": "2023-06-15T14:30:00.000Z",
    "updatedAt": "2023-06-15T14:30:00.000Z"
  }
}
```

#### Create a new transaction

```
POST /transactions
```

Request Body:

```json
{
  "amount": 45.99,
  "date": "2023-06-16T12:30:00.000Z",
  "description": "Restaurant Dinner",
  "category": "Food",
  "subcategory": "Dining Out",
  "type": "expense",
  "account": "60d21c1c67d0d8992e610c86",
  "tags": ["dinner", "family"],
  "notes": "Birthday celebration"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21f5c67d0d8992e610c89",
    "user": "60d21b4667d0d8992e610c85",
    "amount": 45.99,
    "date": "2023-06-16T12:30:00.000Z",
    "description": "Restaurant Dinner",
    "category": "Food",
    "subcategory": "Dining Out",
    "type": "expense",
    "account": "60d21c1c67d0d8992e610c86",
    "tags": ["dinner", "family"],
    "notes": "Birthday celebration",
    "createdAt": "2023-06-16T14:35:00.000Z",
    "updatedAt": "2023-06-16T14:35:00.000Z"
  }
}
```

#### Get transaction insights

```
GET /transactions/insights
```

Response:

```json
{
  "success": true,
  "data": {
    "monthlySpending": {
      "total": 2350.75,
      "byCategory": [
        { "category": "Housing", "amount": 1200.00 },
        { "category": "Food", "amount": 500.75 },
        { "category": "Transportation", "amount": 350.00 },
        { "category": "Entertainment", "amount": 200.00 },
        { "category": "Other", "amount": 100.00 }
      ]
    },
    "spendingTrend": [
      { "month": "January", "amount": 2400.50 },
      { "month": "February", "amount": 2350.75 },
      { "month": "March", "amount": 2500.20 }
    ],
    "unusualActivity": [
      {
        "id": "60d21d5c67d0d8992e610c87",
        "description": "Electronics Store",
        "amount": 899.99,
        "date": "2023-03-15T00:00:00.000Z",
        "reason": "Unusually large purchase"
      }
    ],
    "recurringExpenses": [
      {
        "description": "Netflix Subscription",
        "amount": 15.99,
        "frequency": "monthly"
      },
      {
        "description": "Gym Membership",
        "amount": 50.00,
        "frequency": "monthly"
      }
    ]
  }
}
```

### Budgets

#### Get all budgets

```
GET /budgets
```

Response:

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "id": "60d22b4667d0d8992e610c90",
      "name": "Monthly Budget",
      "period": "monthly",
      "startDate": "2023-06-01T00:00:00.000Z",
      "endDate": "2023-06-30T23:59:59.999Z",
      "totalBudget": 3000.00,
      "categories": [
        {
          "name": "Housing",
          "budgetedAmount": 1200.00,
          "actualAmount": 1200.00
        },
        {
          "name": "Food",
          "budgetedAmount": 600.00,
          "actualAmount": 550.25
        }
      ],
      "isActive": true
    }
  ]
}
```

#### Get budget recommendations

```
GET /budgets/recommendations
```

Response:

```json
{
  "success": true,
  "data": {
    "recommendedBudget": {
      "totalBudget": 3000.00,
      "categories": [
        {
          "name": "Housing",
          "recommendedAmount": 1200.00,
          "reasoning": "Based on your consistent monthly housing expenses"
        },
        {
          "name": "Food",
          "recommendedAmount": 550.00,
          "reasoning": "Based on your average food spending over the last 3 months"
        },
        {
          "name": "Transportation",
          "recommendedAmount": 350.00,
          "reasoning": "Based on your typical transportation costs"
        },
        {
          "name": "Entertainment",
          "recommendedAmount": 200.00,
          "reasoning": "This is slightly lower than your recent spending to help meet savings goals"
        },
        {
          "name": "Savings",
          "recommendedAmount": 500.00,
          "reasoning": "20% of income allocated to savings as per your financial goals"
        },
        {
          "name": "Other",
          "recommendedAmount": 200.00,
          "reasoning": "Miscellaneous expenses based on historical spending"
        }
      ]
    },
    "savingsOpportunities": [
      {
        "category": "Food",
        "suggestion": "Reducing dining out from 8 to 5 times per month could save $120",
        "potentialSavings": 120.00
      },
      {
        "category": "Subscriptions",
        "suggestion": "You have 3 streaming services totaling $35/month. Consider consolidating to 1-2 services.",
        "potentialSavings": 15.00
      }
    ]
  }
}
```

### Investments

#### Get all investments

```
GET /investments
```

Response:

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "60d22c4667d0d8992e610c91",
      "name": "Tech Growth ETF",
      "type": "etf",
      "symbol": "VOOG",
      "purchaseDate": "2022-01-15T00:00:00.000Z",
      "purchasePrice": 145.75,
      "quantity": 10,
      "currentPrice": 155.30,
      "currentValue": 1553.00,
      "returnAmount": 95.50,
      "returnPercentage": 6.55
    },
    {
      "id": "60d22d4667d0d8992e610c92",
      "name": "Retirement Fund",
      "type": "retirement",
      "purchaseDate": "2020-05-20T00:00:00.000Z",
      "purchasePrice": 10000.00,
      "quantity": 1,
      "currentPrice": 12500.00,
      "currentValue": 12500.00,
      "returnAmount": 2500.00,
      "returnPercentage": 25.00
    }
  ]
}
```

#### Get investment recommendations

```
GET /investments/recommendations
```

Response:

```json
{
  "success": true,
  "data": {
    "portfolioAnalysis": {
      "riskScore": 65,
      "diversification": "moderate",
      "suggestedAssetAllocation": {
        "stocks": 60,
        "bonds": 30,
        "cash": 5,
        "alternatives": 5
      },
      "currentAssetAllocation": {
        "stocks": 75,
        "bonds": 15,
        "cash": 10,
        "alternatives": 0
      }
    },
    "recommendations": [
      {
        "type": "rebalance",
        "description": "Consider rebalancing your portfolio to reduce stock exposure by 15% and increase bond allocation by 15%",
        "reasoning": "Your current allocation is overweight in stocks relative to your risk profile",
        "confidenceScore": 0.85
      },
      {
        "type": "newInvestment",
        "description": "Consider adding a total bond market ETF (BND) to increase fixed income exposure",
        "reasoning": "Would help diversify and align with your target asset allocation",
        "confidenceScore": 0.78
      }
    ]
  }
}
```

## Error Responses

All endpoints return errors in the following format:

```json
{
  "success": false,
  "error": "Error message"
}
```

Common HTTP status codes:

- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Missing or invalid authentication
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

## Rate Limiting

API requests are limited to 100 requests per IP address per hour. Exceeding this limit will result in a `429 Too Many Requests` response.

## Webhooks

The API supports webhooks for real-time notifications about various events. Configure webhooks in the user settings.