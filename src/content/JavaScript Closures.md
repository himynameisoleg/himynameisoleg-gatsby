---
title: JavaScript Closures
date: "2020-02-13"
---

# JavaScript Closures

Feb 13, 2020

A Closure in JavaScript gives you access to an outer funtion's scope from an inner function. This is usefule for a number of things, but first lets take a look at how we can make a local variable. 

For example: 

```javascript
function getDinner() {
  var dinner = "steak";

  function whatsForDinner() {
    console.log(dinner);
  }

  return whatsForDinner();
}

var todaysDinner = getDinner();
todaysDinner(); // steak
```

Notice how the inner function **whatsForDinner** was able to access dinner directly without having to pass it in as a parameter.

Another useful use case for closure is to "emulate" private methods and "instance varaiable" similar to what we would see in a traditional OOP language. Lets create a self invoking function:

```javascript
var shoppingCart = (function (){
  // these will be the private attributes
  var totalItems = 0;

  function addItems(num) {
    totalItems += num;
  }

  // and we return the publicly accessible functions
  return {
    addToCart: function() {
      addItems(1);
    },
    removeFromCart: function() {
      if (totalItems > 0) {
        addItems(-1);
      }
    },
    checkItems: function() {
      return totalItems;
    }
  }
})(); // and self-invoke at the end

console.log(shoppingCart.checkItems()) // 0
console.log(shoppingCart.addToCart())
console.log(shoppingCart.checkItems()) // 1

// if we try to access totalItems
console.log(shoppingCart.totalItems) // undefined
```

Notice that by creating a closure using a self-invoking function are able to have private variable and methods. This pattern is also referred to as a Module which keeps the **evil** global variables as bay. 

