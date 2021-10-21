const initalValues = {
  items: [
    {
      id: '1',
      name: 'console.log("start")',
      target: 'callstack',
      type: 'consolelog',
    },
    {
      id: '4',
      target: 'webapi',
      name: "function firstFunction() {\n    setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 2000)",
      payload: {
        CallstackTarget: 'callstack',
        CallStack: 'function firstFunction()',
        CallStackId: '5',
        WebApi:
          "setTimeout(() => { \n        console.log('inside first timeout')\n       }\n }, 2000)",
        WebApiId: '6',
        WebApiTime: 2,
        QueueTarget: 'queue',
        Queue: 'console.log("inside first timeout")',
        QueueId: '7',
        QueueIdEnd: '8',
      },
      type: 'settimeout',
    },

    {
      id: '2',
      name: 'console.log("mid")',
      target: 'callstack',
      type: 'consolelog',
    },
    {
      id: '9',
      target: 'webapi',
      name: "function secondFunction() {\n    setTimeout(() => { \n        console.log('inside second timeout')\n       }\n }, 1000)",
      payload: {
        CallstackTarget: 'callstack',
        CallStack: 'function secondFunction()',
        CallStackId: '10',
        WebApi:
          "setTimeout(() => { \n        console.log('inside second timeout')\n       }\n },0)",
        WebApiId: '11',
        WebApiTime: 1,
        QueueTarget: 'queue',
        Queue: 'console.log("inside second timeout")',
        QueueId: '12',
        QueueIdEnd: '13',
      },
      type: 'settimeout',
    },

    {
      id: '3',
      name: 'console.log("end")',
      target: 'callstack',
      type: 'consolelog',
    },
  ],
}

export default initalValues
