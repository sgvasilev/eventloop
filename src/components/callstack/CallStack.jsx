import React from 'react'

import { animConsoleLogStart, CallbacksAnimation, tl } from '../animate/animate'

import { Container } from './callstack.components.js'
import {
  animationOfRemovinElement,
  drawElement,
  removeElementAtLastCircle,
} from '../functions/functions'

const CallStack = ({ itemPos, rotate, setRotate }) => {
  let ORDER = []
  itemPos.forEach((el) => {
    ORDER.push(el)
  })
  var callbackArr = []
  var tempORDER = ORDER
  function startanimation(rotate) {
    if (rotate === true) {
      for (let i = 0; i < ORDER.length; i++) {
        if (ORDER[i].type === 'setTimeout') {
          ORDER[i].functionStart(
            ORDER[i].payload.CallStack,
            ORDER[i].payload.CallStackId
          )
          ORDER[i].functionMid(
            ORDER[i].payload,
            ORDER[i].payload,
            ORDER[i].payload
          )
          callbackArr.push(ORDER[i].payload)
          tempORDER = tempORDER.slice(1, tempORDER.length)
        }
        if (ORDER[i].type === 'consolelog') {
          ORDER[i].functionStart(ORDER[i].name, ORDER[i].id)
          ORDER[i].functionEnd(ORDER[i].name, ORDER[i].id)

          tempORDER = tempORDER.slice(1, tempORDER.length)
        }
      }
      console.log(callbackArr)
      ORDER = tempORDER

      if (ORDER.length === 0) {
        const startEventCallbacks = (callbackArr) => {
          let queue = document.getElementById('queue')
          if (queue.childElementCount > 0) {
            for (let i = 0; i < queue.childElementCount; i++) {
              console.log(queue.childElementCount)
              console.log(callbackArr)
              tl.call(stopAnimation)
            }
          }
        }
        setTimeout(() => {
          startEventCallbacks(callbackArr)
        }, (tl.endTime() - 2) * 1000)
        ORDER = ORDER.slice(1, ORDER.length)
      }
    }
  }
  startanimation(rotate)
  const stopAnimation = () => {
    let queueStop = document.querySelector('#queue')
    let callstackStop = document.querySelector('#callstack')
    let webapiStop = document.querySelector('#webapi')
    if (
      (queueStop && callstackStop && webapiStop) !== null &&
      callstackStop !== undefined
    ) {
      if (
        queueStop.childElementCount === 0 &&
        callstackStop.childElementCount === 0 &&
        webapiStop.childElementCount === 0
      )
        setRotate(false)
    }
  }

  if (rotate === false) {
    var $el = 0
    if (tl && tl.time() > 0) {
      tl.clear()
      if (ORDER.length < 0)
        for (let i = 1; i < ORDER.length; i++) {
          $el = document.getElementById(`#box${i}`)
          if ($el !== null) {
            tl.set(`#box${i}`, { clearProps: 'all' })
          }
        }
    }
    var element = document.getElementById('callstack')
    var elementWEbApi = document.getElementById('webapi')
    var elementQueue = document.getElementById('queue')
    if (element !== undefined && element !== null) {
      while (element.firstChild) {
        element.removeChild(element.firstChild)
      }
    }
    if (elementWEbApi !== undefined && elementWEbApi !== null) {
      while (elementWEbApi.firstChild) {
        elementWEbApi.removeChild(elementWEbApi.firstChild)
      }
    }
    if (elementQueue !== undefined && elementQueue !== null) {
      while (elementQueue.firstChild) {
        elementQueue.removeChild(elementQueue.firstChild)
      }
    }
  }

  return (
    <div style={{ alignSelf: 'start', display: ' flex', marginRight: '30px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Call stack</h2>
        <Container id='callstack'></Container>
      </div>
    </div>
  )
}

export default CallStack
