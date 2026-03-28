# Course introduction

- Explore data structures and algorithm concepts and their relation to everyday JavaScript development.
  A basic understanding of these ideas is essential to any JavaScript developer wishing to analyze
  and build great software solutions.

- You'll discover how to implement data structures such as hash tables, linked lists, stacks,
  queues, trees, and graphs. You'll also learn how a URL shortener, such as bit.ly, is developed
  and what is happening to the data as a PDF is uploaded to a webpage.

## Modules

1. Big'O notation
2. Basic data structures: Lists, dictionaries, tuples, stacks, and queues.
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
O(n \*\* 2)
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
return n/2 \*\* (n + 1)
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
