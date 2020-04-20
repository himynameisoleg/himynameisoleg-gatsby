---
tags: [TIL]
title: "Array Reduce Function"
date: "2020-01-19"
---
Today I dived into a little bit of how Array.reduce() functions work. Its easy to think of them as essentially being a shorter, functional way of writing sum, or difference problems without needed to declare a counter. Traitionally you would write something like:

```javascript
const numbers = [-1, 1, 2, 3];

let sum = 0;
for (let n of numbers) {
  sum += n;
}
// 5
```

Array.reduce behaves similarly in that it can perform a mathematical opeation iteratively. So the above code can be translated to:

```javascript
const sum = numbers.reduce((accumulator, current) => {
  return  accumulator + current;
});

// also 5
```

The 'current' keyword simply refers to the current item being iterated over 'accumulator' keyword is simply the "sum" variable we used in the first code block. It can just as easily be the count, difference, etc... variable. 

If no starting point is defined, then it is assumed that the accumulator is 0, so our iteration will always start at index 1 and our accumulator will be set to the value at index 0. However, if we define a starting point, say 5, then we will start our iteration at index 0:

```javascript
const sum = numbers.reduce((acc, curr) => {
  return  acc + curr;
}, 5);

// now returns 10
```
Here acc is initialized at 5 and we start at index 0 instead of 1. If we dont explicitly give a starting point, it will default acc to index 0 and the first itteration will have **curr** set to index 1 .

Lastly, we can shorthen this even furthur by removing the return statement for a nice little one-liner:

```javascript
const sum = numbers.reduce((acc, curr) => acc + curr, 5); // 10
```