// export const loopsLesson = {
// id: "loops",
//     title: "Python Loops",
//     explanation:
//       "Loops are used to repeat a block of code multiple times in Python.",
  
//     theory: [
//       "for loop → used to iterate over sequences like range, list, string",
//       "while loop → runs while a condition is true",
//       "range() → generates a sequence of numbers",
//       "break → stops the loop, continue → skips current iteration"
//     ],
  
//     problems: [
//       {
//         id: 1,
//         question:
//           "Use a for loop to print numbers from 1 to 5.",
//         starterCode: "# write your code here\n",
//         solution:
//           "for i in range(1, 6):\n    print(i)",
//         expectedOutput: "1\n2\n3\n4\n5\n"
//       },
//       {
//         id: 2,
//         question:
//           "Use a while loop to print numbers from 1 to 3.",
//         starterCode: "# write your code here\n",
//         solution:
//           "i = 1\nwhile i <= 3:\n    print(i)\n    i += 1",
//         expectedOutput: "1\n2\n3\n"
//       },
//       {
//         id: 3,
//         question:
//           "Use a for loop to print each character in the string 'Hi'.",
//         starterCode: "# write your code here\n",
//         solution:
//           "for ch in 'Hi':\n    print(ch)",
//         expectedOutput: "H\ni\n"
//       }
//     ]
//   };
  
export const loopsLesson = {
  key: "loops",
  nextLesson: null, // last lesson

  title: "Python Loops",
  explanation:
    "Loops help you repeat a block of code multiple times.",

  theory: [
    "for loop → iterate over a sequence",
    "while loop → repeat while condition is true"
  ],

  problems: [
    {
      id: 1,
      question: "Print numbers from 1 to 3 using a loop.",
      starterCode: "# write your code here\n",
      solution:
        "for i in range(1, 4):\n    print(i)",
      expectedOutput: "1\n2\n3\n"
    },
    {
      id: 2,
      question: "Print 'Hello' 2 times using while loop.",
      starterCode: "# write your code here\n",
      solution:
        "i = 0\nwhile i < 2:\n    print('Hello')\n    i += 1",
      expectedOutput: "Hello\nHello\n"
    }
  ]
};
