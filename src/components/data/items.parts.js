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
    // {
    //   id: '2',
    //   name: 'console.log("2")',
    //   type: 'consolelog',
    //   functionStart: animConsoleLogStart,
    //   functionMid: () => {},
    //   functionEnd: () => {},
    //   callback: () => {
    //     console.log('callback')
    //   },
    // },
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
      name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 2000)",
      payload: {
        CallStack: 'function firstFunction()',
        CallStackId: '5',
        WebApi:
          "setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 2000)",
        WebApiId: '6',
        WebApiTime: '2',
        Queue: 'console.log("inside first timeout")',
        QueueId: '7',
        QueueIdEnd: '8',
        callback: animConsoleLogStart,
      },

      type: 'setTimeout',
      functionStart: animWebApiStart,
      functionMid: animWebApiMid,
      functionEnd: () => {},
    },
    // {
    //   id: '8',
    //   name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 0)",
    //   payload: {
    //     CallStack: 'function firstFunction()',
    //     CallStackId: '9',
    //     WebApi:
    //       "setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 0)",
    //     WebApiId: '10',
    //     WebApiTime: 0,
    //     Queue: 'console.log("inside first timeout")',
    //     QueueId: '11',
    //   },

    //   type: 'setTimeout',
    //   callback: () => {
    //     console.log('callback')
    //   },
    //   functionStart: animWebApiStart,
    //   functionMid: animWebApiMid,
    //   functionEnd: animWebApiEnd,
    // },
  ],
}

export default initalValues

// name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n })",
