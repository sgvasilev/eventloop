import React from 'react'

import { tl } from '../factory/animationfactory'
import { factory } from '../factory/animationfactory'
import { Container } from './callstack.components.js'
import { drawElement, removeElement, tl3 } from '../functions/functions'

const CallStack = ({ itemPos, rotate, setRotate }) => {
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
      ) {
        rotate && setRotate(false)
        clearInterval(timerId)
      } else {
      }
    }
  }

  let ORDER = []
  let tempORDER = []
  let callbackArr = []
  let animations = []

  itemPos.forEach((el) => {
    ORDER.push(el)
    tempORDER.push(el)
  })

  tempORDER.forEach((el) => {
    animations.push(
      factory.create(el.type, el.target, el.name, el.id, el?.payload)
    )
  })

  function startanimation(rotate) {
    if (rotate === true) {
      for (let i = 0; i < ORDER.length; i++) {
        if (ORDER[i].type === 'settimeout') {
          callbackArr.push(ORDER[i])
          animations[i].start()
          tempORDER.shift()
        }
        if (ORDER[i].type === 'consolelog') {
          tempORDER.shift()
          animations[i].start()
        }
      }

      if (tempORDER.length === 0) {
        if (callbackArr.length !== 0) {
          for (let i = 0; i < callbackArr.length; i++) {
            tl.call(removeElement(`#box${callbackArr[i].payload.QueueId}`))
            const $el = document.querySelector(`#callstack`)
            drawElement(
              $el,
              callbackArr[i].payload.Queue,
              callbackArr[i].payload.QueueIdEnd
            )
            tl.from(
              `#box${callbackArr[i].payload.QueueIdEnd}`,
              { css: { y: -400, autoAlpha: 0 }, duration: 0.5 },
              '<'
            )
            tl.to(`#box${callbackArr[i].payload.QueueIdEnd}`, {
              y: 0,
              duration: 0.7,
              delay: 0.35,
            })
            tl.call(removeElement(`#box${callbackArr[i].payload.QueueIdEnd}`))
            tl.call(removeElement(`#box${callbackArr[i].payload.CallStackId}`))
          }
        }
      }
    }
  }
  startanimation(rotate)
  let timerId = setInterval(() => {
    stopAnimation(timerId)
  }, 1000)

  if (rotate === false) {
    var $el = 0
    if (tl && tl.time() > 0) {
      tl.clear()
      tl3.clear()
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
    <div style={{ alignSelf: 'start', display: ' flex' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#05386b' }}>Call stack</h2>
        <Container id='callstack'></Container>
      </div>
    </div>
  )
}

export default CallStack
