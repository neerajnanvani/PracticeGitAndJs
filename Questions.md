## Q1: Reverse array in groups.
  Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size).

Input & output:

Input:
N = 5, K = 3
arr[] = {1,2,3,4,5}
Output: 3 2 1 5 4
Explanation: First group consists of elements
1, 2, 3. Second group consists of 4,5.


## Q2: Leaders in an array
  Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 
 
 Input & Output:
 
Input:
n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17 
as it is greater than all the elements
to its right.  Similarly, the next 
leader is 5. The right most element 
is always a leader so it is also 
included.

## Q3: Caeser Cipher 
### Description
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y, and z would map to z, a, b and c.

**Original alphabet:**		abcdefghijklmnopqrstuvwxyz
**Alphabet rotated +3:**		defghijklmnopqrstuvwxyzabc

### Example 1
**Original Message:** hello how are you. <br/>
**Key:** 4 <br/>
**Encrypted Message:** lipps lsa evi csy

### Example 2
**Original Message:**	rohan. <br/>
**Key:** 4 <br/>
**Encrypted Message:** vsler <br/>


> **Note**: The cipher only encrypts letters; symbols, such as -, remain unencrypted.


## Q4: Split a string, using comma as the seprator
### Description
A CSV file is like an excel sheet but in reality, is simply a text file where each row of text represents a record and every row is segregated with commas (,) each field in the row is a property of the record,

Write a function that takes a string as input and splits it into an array using commas. 

Limitations: You can’t use the split method of string
Bonus Part: Create an HTML table using the array

### Example
**Input string:** 	 Rohan,16,Male,Delhi		  : String <br/>
**Output Array:**		\[ Rohan, 16, Male, Delhi \]	: Array \<String\> <br/>
