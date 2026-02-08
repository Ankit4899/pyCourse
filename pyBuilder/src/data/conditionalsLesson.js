// export const conditionalsLesson = {
//     id: "conditionals",
//     title: "Python Conditionals",
//     explanation:
//       "Conditionals are used to make decisions in Python using if, elif, and else.",
  
//     theory: [
//       "if → executes code when condition is true",
//       "elif → checks another condition if previous was false",
//       "else → executes when all conditions are false",
//       "Conditions use comparison operators like ==, >, <, >=, <="
//     ],
  
//     problems: [
//       {
//         id: 1,
//         question: "Create a variable x = 10. If x is greater than 5, print 'Big'.",
//         starterCode: "# write your code here\n",
//         solution: "x = 10\nif x > 5:\n    print('Big')",
//         expectedOutput: "Big\n"
//       },
//       {
//         id: 2,
//         question:
//           "Create a variable num = 3. If num is even print 'Even', otherwise print 'Odd'.",
//         starterCode: "# write your code here\n",
//         solution:
//           "num = 3\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
//         expectedOutput: "Odd\n"
//       },
//       {
//         id: 3,
//         question:
//           "Create a variable age = 18. If age is 18 or more, print 'Eligible'.",
//         starterCode: "# write your code here\n",
//         solution:
//           "age = 18\nif age >= 18:\n    print('Eligible')",
//         expectedOutput: "Eligible\n"
//       }
//     ]
//   };
  

export const conditionalsLesson = {
  key: "conditionals",
  nextLesson: "loops",

  title: "Python Conditionals",
  explanation:
    "Conditionals allow your program to make decisions based on conditions.",

  theory: [
    "if → executes code if condition is True",
    "else → executes if condition is False",
    "elif → checks another condition"
  ],

  problems: [
    {
      id: 1,
      question: "Check if x = 10 is greater than 5 and print 'Yes'.",
      starterCode: "# write your code here\n",
      solution: "x = 10\nif x > 5:\n    print('Yes')",
      expectedOutput: "Yes\n"
    },
    {
      id: 2,
      question: "Print 'Even' if number is even else print 'Odd'.",
      starterCode: "# write your code here\n",
      solution:
        "n = 4\nif n % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
      expectedOutput: "Even\n"
    }
  ]
};
