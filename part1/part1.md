# Part 1a.

1. `values added: 20`, since add is true, result is assigned to 20.
2. `final result: 20`, `var` makes `result` have function scope and `add` is true so result is assigned to 20.
3. `values added: 20`
4. Error, because result is undefined outside of the if statement's block.
5. Error, `result` is const but the code tries to reassign it on line 7.
6. Error since `result` has block scope it's undefined on line 13.

# Part 1b.
1. The function will print `3`, because `i` has function scope since it is declared with `var`.
2. `150` will be printed, because `discountedPrice` has function scope, and the last value it is assigned to is `prices[2]*0.5=150`
3. `150` is printed again, `finalPrice` also has function scope, and it is assigned to `(150 * 100) / 100` in the for loop.
4. The function will return `discounted = [50, 100, 150]`, since discounted has function scope it is defined when the function returns.
5. Line 12 causes an error because `i` is only defined in the for loop, since it has block scope.
6. Line 13 causes an error since `discountedPrice` is only defined in the for loop, because it is declared with `let` so it has block scope.
7. Line 14 prints `150` because `finalPrice` is declared at the beginning of the function.
8. The function will return `discounted = [50, 100, 150]`, because even though `discounted` has block scope, it is defined in the outer-most block in the function, so it can be used everywhere inside it.
9. Line 11 causes the same error as in question 5. `i` is not defined outside of the for loop because it was declared with `let`.
10. Line 12 will print `3` to the console, because `length` was declared at the start of the function even though it has block scope.
   - `discounted.push(discountedPrice)` doesn't cause an error because `const` only prevents the variable `discounted` from being reassigned. `const` does not prevent the array itself from being modified.
11. The function will return the `discounted` array. The `const` declaration does not cause an error because it does not prevent the array from being modified, it only prohibits reassigning `discounted`.
12. 
      1. `student.name`
      2. `student['Grad Year']`
      3. `student.greeting()`
      4. `student['Favorite Teacher'].name`
      5. `student.courseLoad[0]`, depends what the question means by 'first index', I'm assuming the first element in the array.
13. 
      1. `'32'`
      2.  `1`
      3.  `3`
      4.  `'3null'`
      5.  `4`
      6.  `0`
      7.  `'3undefined'`
      8.  `NaN`
14. 
      1.  `true`
      2.  `false`
      3.  `true`
      4.  `false`
      5.  `false`
      6.  `true`
15. `===` is the strict equality operator, which means it only evaluates to true if the two operands are equal and are the same type. `==` on the other hand will attempt to convert the operands to the same type before checking their equality.
16. [part1b-question16.js](part1b-question16.js)
17. The function call will return `[2, 4, 6]`. `modifyArray` returns a new array with `callback` applied to each of the elements of the array that was passed in.  The array we passed in was `[1, 2, 3]`, and the callback is `doSomething` which returns its argument multiplied by 2.
18. [part1b-question18.js](part1b-question18.js)
19. 
```js
   1
   4
   3
   2
```
