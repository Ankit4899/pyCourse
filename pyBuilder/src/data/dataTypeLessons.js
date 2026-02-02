// const dataTypeLesson = {
//   title: "Python Data Types",
//   explanation:
//     "Data types define the kind of value a variable can store in Python.",

//   theory: [
//     "Python automatically detects the data type.",
//     "Common built-in data types are int, float, string, and boolean.",
//     "You can check a variable’s data type using type().",
//   ],

//   examples: [
//     {
//       code: `x = 10\nprint(type(x))`,
//       output: `<class 'int'>`,
//     },
//     {
//       code: `y = 3.14\nprint(type(y))`,
//       output: `<class 'float'>`,
//     },
//     {
//       code: `name = "Python"\nprint(type(name))`,
//       output: `<class 'str'>`,
//     },
//   ],

//   problems: [
//     {
//       question: "Print the data type of the value True",
//       starterCode: `print(type(True))`,
//       solution: `print(type(True))`,
//     },
//     {
//       question: "Create a variable storing your age and print its type",
//       starterCode: `age = 20\nprint(type(age))`,
//       solution: `age = 20\nprint(type(age))`,
//     },
//   ],

//   expectedOutput: `<class 'bool'>\n`, // for validation example
// };

// export default dataTypeLesson;


// datatypesLesson.js
// src/lessons/datatypesLesson.js

export const datatypesLesson = {
  title: "Python Data Types",
  explanation:
    "In Python, data types define the kind of value a variable holds.",

  theory: [
    "int → whole numbers (e.g. 1, 10, -5)",
    "float → decimal numbers (e.g. 3.14)",
    "str → text values",
    "bool → True or False"
  ],

  problems: [
    {
      id: 1,
      question: "Create an integer variable x with value 5 and print it.",
      starterCode: "# write your code here\n",
      solution: "x = 5\nprint(x)",
      expectedOutput: "5\n"
    },
    {
      id: 2,
      question: "Create a string name = 'Python' and print its length.",
      starterCode: "# write your code here\n",
      solution: "name = 'Python'\nprint(len(name))",
      expectedOutput: "6\n"
    },
    {
      id: 3,
      question: "Create a boolean variable is_active = True and print it.",
      starterCode: "# write your code here\n",
      solution: "is_active = True\nprint(is_active)",
      expectedOutput: "True\n"
    }
  ]
};
