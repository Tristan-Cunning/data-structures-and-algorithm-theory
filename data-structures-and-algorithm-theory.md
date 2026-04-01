# Course introduction

- Explore data structures and algorithm concepts and their relation to everyday JavaScript development.
  A basic understanding of these ideas is essential to any JavaScript developer wishing to analyze
  and build great software solutions.

- You'll discover how to implement data structures such as hash tables, linked lists, stacks,
  queues, trees, and graphs. You'll also learn how a URL shortener, such as bit.ly, is developed
  and what is happening to the data as a PDF is uploaded to a webpage.

## Modules

1. [Big'O notation](#module-1-bigo-notation)
2. [Basic data structures: Lists, dictionaries, tuples, stacks, and queues.](#module-2-basic-data-structures-lists-dictionaries-tuples-stacks-queues)
3. Recursion
4. Linked lists and binary trees
5. heaps and sorting
6. Dynamic programming

# Module 1: Big'O notation

## Topic 1A: Introduction to Algorithms and Big'O notation

Big O notation is used to overestimate the time & space demands of a function

### Algorithm

Sequence of executable instructions to solve a task

Measuring algorithms

- Time needed to perform the algorithm
- Space required to execute the algorithm

Time and space complexity is estimated as "worst case"

(Typical to be asked to measure complexities in an interview)

### Big' O:

- Definition
- It is an overestimation(Worst case)
- always measured w.r.t the input size

Examples:
f(x) Function
g(x) Comparison function

- Not the algorithm itself but the nuber of steps required to solve the alg.

|f(x)| <= M \* g(x) for x >= x0

- f(x) will always take the same or less time to process as g(x)

O(g(x)) Overestimation

#### Typical O(g(x))

O(1)
O(n)
O(m + n) == O(max(m,n))
O(n \* log(n))
O(n^ 2)
O(n ** 3)
O(2 ** n)

## Topic 1B: Sum of first N numbers: linear algorithm

Example function:

function sumN(n) {
let solution = 0;
for (let i = 1; i <= n; i++){
solution += i;
}

    return solution;

}

sumN(10)

returns: 55

Number of steps represented by:
3 \* n + 6

9 n=1 9n
12 n=2 9n = 18 12<=18
15 n=3 9n = 27 15<=27
18 n=4 9n = 36 18<=36
306 n=100 9n=900 306<=900

O(n)

## Topic 1C: Nested loop and tuples: Quadratic algorithm

Still a linear algorithm as the processes is basicly just doubled

function sumN(n) {
let solution = 0;
for (let i = 1; i <= n; i++){
solution += i;
}

let solution2 = 0
for (let i = 1; i <= n; i++){
solution2 += i;
}

if (solution === solution2){
return solution;
}
return NaN;
}
O(n)

function getTuples(n) {
let tuples =[];

    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= n; ++j){
            tuples.push([i, j]);
        }
    }
    return tuples;

}

### How to determine complexity of algorithm

Nested loops

Since for loop is in the for loop each instance of the first results in n processes.
Since the first loop has n processes it can be represented as n ** 2.
O(n ** 2)

## Topic 1D: Efficient Sum: Constant time algorithm

### O(1)

function sumN(n) {
let solution = 0;
for (let i = 1; i <= n; i++){
solution += i;
}

    return solution;

}

O(1)

function efficientSumN(n) {
return n/2^ (n + 1)
}

## Topic 1E: Understanding big O notation and logarithm

### Logarithm

2 ** 10 = 1024
2 ** X = 1024

log2(1024) = 10

**Essentially**

- How many times the value gets split in half.

Basicly the opposite of exponent

## Topic 1F: Analyzing complexity: Linear, logarithmic, and exponential growth

O(log(n))
Measure of how many zero's behind 1

![Examples of the different functions](./Images/Ex1.png)

## Topic 1G: Rules for simplifying complexity

O(n + n) ---> O(n)
O(2\*n) ---> O(n)
O(n+5) ---> O(n)

All the same because the constant is what keeps it an overestimation

O(n*log(n) + log(n)) = O(n*log(n))

Everything else is smaller than the O(n\*log(n))

O(n^2 + 2\*n +5) ---> O(n^2)

n^2 will have the biggest affect on the outcome
Generally don't want this as it grows rapidly

The function is determined by what factor causes the greatest effect

# Module 2: Basic data structures: lists, dictionaries, tuples, stacks, queues

## Topic 2A: Introduction to dictionaries, lists, stacks, queues, and tuples

JavaScript objects with keys and values
const o ={
key1: 'value'
key2: 'value2'
}
Called a dictionary in python. Called with the key

- Object: Dictionary = key and values
  - Building a dictionary: O(n) time + O(n) space
  - Accessing a dictionary: O(1)
- Array:
  - Lists
  - Stack
  - Queue
  - Tuple (Array of fixed length)

Lists = list of values

- Can add and delete values

Stack = Like a list but only care about the most right value

- .push() and .pop()
- You put an item on top and take the item on top

Queue = Like list but focuses on the value to most left

- .shift() takes a value from the left
- .unshift() Adds a value to the left
- .push() adds a value to the right
- .pop() Takes a value from the right

Kinda like first in first out

Tuples = Array with fixed length

- One variable that can store multiple values
- JS doesn't have tuple type
- TypeScript can define a tuple

## Topic 2B: Dictionary excercise: Most frequent element

This is a typical problem I might see in an interview and the thought process behind solving
**Suppose a JS array is given. Return the element that occurs the most often in the array.**

### This is simple pseudocode that needs to be made in JS

- Assume there are only primitive datatypes
  - Strings, number, booleans, null, undefined, symbol()
- Interviewer informs that these are the ones used
  - String, number(except NaN), boolean
- What happens if you have multiple answers?(Question to the interviewer)
  - You can assume that there is always 1 single element with the maximum occurence.(Response)
    - Don't have to worry about input
    - Don't waste effort on problems you don't have to solve.
- Come up with test examples
  - ['str'] ---> 'str'
  - [true, true] ---> true
  - [5, 2, 5] ---> 5
  - [5, 2, 2] ---> 2
  - [false, false, 2, 2, false] ---> false

Steps of the solution are important to communicate

- Need to show the interviewer what your thinking

result = null

maxCount = 0

for each elem of the arr:
currentCount = count(arr, elem)
Looks for each type of elemnt and adds to the count for that type

if currentCount > maxCount;

- maxCount = currentCount;
- result = elem
  return result;

### Converting the pseudocode to usable code

function countElementInArr(arr, target) {
let result = 0;

for (let elem of arr) {
if(elem === target) {
result += 1;
}
}

return result;
}

function solution(arr) {

1. state space
   let result = null;
   let maxCount = 0;
2. algorithm steps
   for (let elem of arr) {
   let currentCount = countElementInArr(arr, elem);
   if (currentCount > maxCount);
   maxCount = currentCount ;
   }
3. return value
   return result;
   }

**This comes out as an O(n^2)**

**Need to simplify so there are fewer steps**

result = null

maxCount = 0

sort(arr) **O(n\*log(n))** When sorted optimally

currentElement = null

currentCount = 0

for each elem of arr: **O(n)**

- if currentElem == elem:
  - increase currentCount by 1
- else:
  - if currentCount > maxCount:
    - result = currentElem
    - maxCount = currentCount
  - currentCount = 1
  - currentElem - elem

**O(n*log(n) + n) = O(n*log(n))**

### Using a dictionary

If we knew how to use a dictionary we would as it seem to be faster.

- O(n) and O(1)

#### Making a dictionary

false --> 'b_false'
15 --> 'n_15'
'abc' --> 's_abc'

- Need to check with the interviewer to make sure we can exclude edge cases
  Once we convert these values we have our keys for the dictionary
  {
  'b_false': 3,
  'n_2': 2
  }

**Thought process**
result = null;
maxCount = 0;

1. Build dictionary d from array **O(n)**
2. for each key in d: **O(n)**

- if d[key] > maxCount:
  - result = convert(key) **Gotta change it back**
  - maxCount = d[key]

3. return result

**The code made in console**

function valueToKey(value){

if (typeof value === 'string') {
return 's\*' + value;
}
if (typeof value === 'number') {
return 'n\*' + value;
}
if (typeof value === 'boolean') {
return 'b\_' + value;
}
}

function buildDictionary (arr) {
let d = {};
for (let elem of arr) {
let key = valueToKey(elem);
if (key in d) {
d[key] +=1;
} else {
d[key] = 1;
}
}
return d;

function solution (arr) {

1.  state space

    let result = null;
    let maxCount = 0;

2.  algorithm steps

    let d = buildDictionary (arr); **O(n)**

3.  return value

    return result;
    }
    }

This whole step wastes, at most, O(n) time

#### Using the dictionary

**Code generated in console**

function valueToKey(value){
if (typeof value === 'string') {
return 's*' + value;
}
if (typeof value === 'number') {
return 'n*' + value;
}
if (typeof value === 'boolean') {
return 'b\_' + value;
}
}

function keyToValue(key) {
if (key[0] === 's') {
return key.substring(2);
}
if (key[0] === 'n') {
return Number.parseFloat(key.substring(2));
}
return key[0] === 'b_true';
}

function buildDictionary(arr) {
let d = {};
for (let elem of arr) {
let key = valueToKey(elem);
if (key in d) {
d[key] +=1;
} else {
d[key] = 1;
}
}
return d;
}

function solution(arr) {
// 1. state space
let result = null;
let maxCount = 0;
// 2. algorithm steps
let d = buildDictionary(arr); // O(n)

for (let key in d) { // O(n)
if (d[key] > maxCount) {
result = keyToValue(key);
maxCount = d[key];
}
}
// 3. return value
return result;
}

Space complexity at worst case is O(n)

### Space complexity

Measured as the amount of extra space you need on top of the input
The amount of space needed as worst case in this example:

- Space for all the keys
- +2 characters per value
- values
