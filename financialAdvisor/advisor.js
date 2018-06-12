// Your job is to create an object that represents a financial advisor and has the following properties and methods.
const animal = {
  legs: 6,
  alive: true
}

const myNewObj = Object.create(animal, {
  ears: {
    value: 2
  }
  //here is where you define the stuff for the obj
})

console.log(myNewObj);

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
      // When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

      // so for each transaction, we add up all the prices - loop through transactions, access each price (build an array of just the prices, 
      let pricesArr = financialAdvisor.portfolio.transactions.map((transactionObj) => {
        console.log("each indiv transaction", transactionObj);
        return transactionObj.price;
      })
      console.log("pricesArr", pricesArr);
      //then reduce that array to its total)
      let total = pricesArr.reduce((currentTotal, next) => {
        return currentTotal + next;
      })

      console.log("total", total);


      //adv - separate buys from sells, then add up all of each, subtract the buys from the sells

    }
  },
  // Purchase(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
  purchase: {
    value: function (ticker, quantity, price) {
      financialAdvisor.portfolio.transactions.push(
        {
          stock: ticker,
          quantity,
          price,
          transactionType: "purchase"
        }
      )
    }

  },
  // Sell(non - enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
  sell: {
    enumerable: false,
    value: function (ticker, quantity, price) {
      financialAdvisor.portfolio.transactions.push(
        {
          stock: ticker,
          quantity,
          price,
          transactionType: "sell"
        }
      )
    }
  }
})

// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly.


financialAdvisor.purchase("AAPL", 45, 45);
financialAdvisor.sell("BUD", 5, 450);
financialAdvisor.purchase("TVY", 415, 45);
console.log('transactions', financialAdvisor);

financialAdvisor.worth();


