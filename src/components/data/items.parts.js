import {
  animConsoleLogStart,
  animWebApiStart,
  animWebApiMid,
  animWebApiEnd,
} from '../animate/animate'

const initalValues = {
  items: [
    {
      id: '1',
      name: 'console.log("1")',
      type: 'consolelog',
      functionStart: animConsoleLogStart,
      functionMid: () => {},
      functionEnd: () => {},
      callback: () => {
        console.log('callback')
      },
    },
    {
      id: '2',
      name: 'console.log("2")',
      type: 'consolelog',
      functionStart: animConsoleLogStart,
      functionMid: () => {},
      functionEnd: () => {},
      callback: () => {
        console.log('callback')
      },
    },
    {
      id: '3',
      name: 'console.log("3")',
      type: 'consolelog',
      functionStart: animConsoleLogStart,
      functionMid: () => {},
      functionEnd: () => {},
      callback: () => {
        console.log('callback')
      },
    },
    {
      id: '4',
      name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 0)",
      name1: 'function firstFunction()',
      name2:
        "setTimeout(() => { \n        console.log('inside first timeout')\n       }\n ",
      name3: 'console.log("inside first timeout")',
      type: 'setTimeout',
      callback: () => {
        console.log('callback')
      },
      functionStart: animWebApiStart,
      functionMid: animWebApiMid,
      functionEnd: animWebApiEnd,
    },
  ],
}

export default initalValues

// name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n })",
