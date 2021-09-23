import React from 'react'

import { tl } from '../animate/animate'

import { Container } from './callstack.components.js'

function removeOneElement(element) {
  var $el = document.querySelector(element)
  if ($el !== null && $el !== undefined) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      console.log('deleeteds')
    }
  }
}

const CallStack = ({ itemPos, rotate }) => {
  let functionOrder = []
  let functionType = []

  for (let index of itemPos) {
    functionOrder.push(index.id)
    functionType.push(index.type)
  }
  let ORDER = []
  itemPos.forEach((el) => {
    ORDER.push(el)
  })
  function asdasd() {}
  const event = new Event('build')
  asdasd.addEventListener(
    'build',
    () => {
      console.log('custom event triggered')
    },
    false
  )
  asdasd.dispatchEvent(event)

  function startanimation(rotate) {
    if (rotate === true) {
      var tempORDER = ORDER
      for (let i = 0; i < ORDER.length; i++) {
        ORDER[i].functionStart(ORDER[i], ORDER[i].id)
        ORDER[i].functionMid(ORDER[i], ORDER[i].id)
        ORDER[i].functionEnd(ORDER[i], ORDER[i].id)

        tempORDER = tempORDER.slice(1, tempORDER.length)
      }

      ORDER = tempORDER
      console.log(ORDER)
    }
  }
  startanimation(rotate)

  if (rotate === false) {
    if (tl && tl.time() > 0) {
      tl.clear()
      for (let i = 0; i < ORDER.length; i++) {
        tl.set(`#box${i}`, { clearProps: 'all' })
      }
    }
    var element = document.getElementById('callstack')
    var elementWEbApi = document.getElementById('webapi')
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
  }
  return (
    <div style={{ alignSelf: 'start' }}>
      <h2>Call stack</h2>
      <Container id='callstack'></Container>
    </div>
  )
}

export default CallStack
