# Javascript_Practice
Selected Problems from Javascript Practice

Identifies whether a given number is a **happy number**.

---

 Mathematically, a **happy number** is one that will eventually return 1 if all of its digits are individually squared and summed over and over until the sums start looping. If that loop happens to be all 1's, then we've found a **happy number**!
 
 <br/>
 As an example, if we take the number 7:

 7 * 7 = 49;
 
 4 * 4 + 9 * 9 = 97;
 
 9 * 9 + 7 * 7 = 130;
 
 1 * 1 + 3 * 3 + 0 * 0 = 10;
 
 1 * 1 + 0 * 0 = 1;
 <br/>
We've reached 1! So, 7 is a **happy number**!

<br/>

On the other hand, if take the number 2:
<br/>

2 * 2 = **4**;

4 * 4 = 16;

1 * 1 + 6 * 6 = 37;

3 * 3 + 7 * 7 = 58;

5 * 5 + 8 * 8 = 89;

8 * 8 + 9 * 9 = 145;

1 * 1 + 4 * 4 + 5 * 5 = 42;

4 * 4 + 2 * 2 = 20;

2 * 2 + 0 * 0 = **4**;

When we see that same 4 repeat, we know that 2 is not a **happy number**.

---

To check if a number is happy using happy_number.js, pass any positive integer to the isHappy function.

---
For more information, please access the Wiki on happy numbers:
https://en.wikipedia.org/wiki/Happy_number

