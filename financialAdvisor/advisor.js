// Your job is to create an object that represents a financial advisor and has the following properties and methods.


const financialAdvisor = Object.create({}, {
  // Company(enumerable, writable, property)
  company: {
    enumerable: true,
    writable: true,
    value: "L & M Financial"
  },
  // Specialty(enumerable, writable, property)
  specialty: {
    enumerable: true,
    writable: true,
    value: "Obscuring overseas transactions"
  },
  // Name(enumerable, property)
  name: {
    enumerable: true,
    value: "Emma Leigh"
  },
  // Portfolio(non - enumerable, property) - Should display the stocks the advisor currently holds. Start off with making portfolio property an array that holds transactions.
  portfolio: {
    enumerable: false,
    value: {
      transactions: []
    }
  },
  // Worth(non - enumerable, method)
  worth: {
    enumerable: false,
    value: function () {
      
    }
  },
  // Purchase(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
  purchase: {
    value: function () {
      
    }
    
  },
  // Sell(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
  sell: {
    enumerable: false,
    value: function () {
      
    }
  }
})


// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

