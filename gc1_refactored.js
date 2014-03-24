 

Discover Gists
charusharma1
 
 
Star0 
Fork0
SECRET
 greg99799 / gc1_pseudocode.js
Last active a day ago — forked from nickgio/gc1_pseudocode.js

Gist Detail
Revisions 4
Download Gist
Clone this gist

Embed this gist

Link to this gist

gc1_pseudocode.jsJavaScript
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
/*
  Below is my conversion of psuedocode into code and syntax corrections. In terms of the median functions,
  I couldn't finish those. I googled, and it's just a little over my head still (well,
  A LOT over my head). Happy refactoring! -Greg
*/
 
// We will have 9 tests running through the arrays below. 
// 3 of the tests simply check to see if certain words are keywords 
// We could write a long function that loops through every keyword to see if the 
// desired keyword belongs to that group, but that is a bit overkill. 
 
groupArray1 = [1, 2, 3, 4, 5, 6, 7]
groupArray2 = [4, 4, 5, 5, 6, 6, 6, 7]
 
// Test 1
// if 'sum' is a reserved keyword in JS
// type 'sum', you will get Error: sum not defined
// Nothing else to do here
 
'sum'
 
// Declare Sum as a function of groupArray1
function sum() {
  sum1 = 0;
  for (var i = 0; i < groupArray1.length; i++) {
    sum1 += groupArray1[i] += 0;
  }
}
 
// Test 2
if (groupArray1.sum === 27) {
    return true;
  } else { 
    console.log("Error: sum should return the sum of all elements in an array with an odd length.");
  }
 
  
// Declare Sum as a function for groupArray2
function sum() {
  sum2 = 0
  for (var i = 0; i < groupArray1.length; i++) {
  	sum += groupArray2[i] += 0;
  }
}
 
// Test 3
if (groupArray2.sum === 43) {
  return true;
  } else {
   console.log("Error: sum should return the sum of all elements in an array with an even length.");
  }
  
// Test 4
// if 'mean' is a reserved keyword in JS
// type 'mean', you will get Error: mean not defined
// Nothing else to do here
 
'mean'
 
// Declare 'mean' as a function
function mean() {
  mean1 = sum1 / groupArray1.length;
}
 
 
// Test 5
if (groupArray1.mean === 3.857142857142857) {
  return true;
} else {
  console.log("Error: mean should return the average of all elements in an array with an odd length.");
}
 
//Declare 'mean' as a function
function mean () {
  mean2 = sum2 / groupArray2.length
}
 
 
// Test 6
if (groupArray2.mean === 5.375) { 
  return true;
} else { 
  console.log("Error: mean should return the average of all elements in an array with an even length.");
}
  
// Test 7
// if 'median' is a reserved keyword in JS
// type 'median', you will get Error: median not defined
// Nothing else to do here
 
'median'
 
// declare median as a function (pseudo below)
 
// sort the array
// get the length of the array
// if the length is odd (use modulus)
// return the middle value
// else
// get the two values in the middle of the array
// calculate the average of the two values
// return the average
 
function median() {
  sortedArray1 = groupArray1.sort();
  if (sortedArray1.length % 2 !== 0) {
    //return middle value
  } else {
    //get two values (val1, val2) in middle of array
    // average = (val1 + val2) / 2
    //return average
  }
}
 
 
 
// Test 8
if (groupArray1.median === 4) {
  return true;
} else { 
  console.log("Error: median should return the median value of all elements in an array with an odd length");
}
 
// declare median as a function (pseudo below)
 
// sort the array
// get the length of the array
// if the length is odd (use modulus)
// return the middle value
// else
// get the two values in the middle of the array
// calculate the average of the two values
// return the average
 
function median() {
  sortedArray2 = groupArray2.sort();
  if (sortedArray2.length % 2 !== 0) {
    //return middle value
  } else {
    //get two values (val1, val2) in middle of array
    // average = (val1 + val2) / 2
    //return average
  }
}
 
 
// Test 9
if (groupArray2.median === 5.5) {
  return true;
} else { 
  console.log("Error: median should return the median value of all elements in an array with an even length.");
}
 
  
// **I am a bit confused about the best convention for pseudocode. If you have any questions, feel free to ask**
// For portions of the pseudocode, I followed this convention: http://myweb.lmu.edu/dondi/share/intro/pseudocode2js-v02.pdf

Write Preview Comments are parsed with GitHub Flavored Markdown

Add Comment
© 2014 GitHub Inc. All rights reserved.
The GitHub Blog Support Contact