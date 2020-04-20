---
tags: [TIL]
title: "Understanding const vs let"
date: "2020-02-02"
---
### the facts

In Javascript ES6

- **let:** allows rebinding
- **const:** makes contract that does not allow rebinding
both allow for the values within to change, ie. values of object

```javascript
const person = {
  name: "Franky",
  age: 28
}

person.age = 29;
person.name = "Bill";
// { name: "Bill", age: 29 }

person = "Mike";
// Uncaught TypeError: Assignment to constant variable
```



### general rule of thumb (this part I found to be highly opinionated)

- use const by default
- use let if you know you will rebind in the future
- don't use var (if using ES6)