import { useEffect } from 'react'

import gsap from 'gsap'

export const tl = new gsap.timeline()
export const tl1 = new gsap.timeline()

export const animConsoleLogStart = (data, id) => {
  const payload = data.name
  const $el = document.querySelector('#callstack')

  $el.insertAdjacentHTML('afterBegin', `<h3 id='box${id}'>${payload}</h3>`)

  tl.from(`#box${id}`, { css: { y: -400 }, duration: 1 })
  tl.to(`#box${id}`, { y: 0, duration: 1 })
  tl.to(`#box${id}`, { css: { opacity: 0 }, duration: 1 })
  tl.call(removeElement(`#box${id}`))
}

export const animWebApiStart = (data, id) => {
  const $el1 = document.querySelector('#callstack')
  const payload1 = data.name1

  $el1.insertAdjacentHTML('afterBegin', `<h3 id='box${id}'>${payload1}</h3>`)

  tl.from(`#box${id}`, {
    css: { y: -600, opacity: '0' },
    duration: 0.5,
    delay: 0,
  })
  tl.to(`#box${id}`, { y: 0, duration: 1 })
  tl.to(`#box${id}`, { css: { opacity: 100 }, duration: 1 })
}

export const animWebApiMid = (data, ids) => {
  let id = ids + 10
  const $el2 = document.querySelector('#webapi')
  const payload2 = data.name2
  $el2.insertAdjacentHTML('afterBegin', `<h3 id='box${id}'>${payload2}</h3>`)
  tl.from(`#box${id}`, { css: { y: -600 }, duration: 0.5 })
  tl.to(`#box${id}`, { y: 0, duration: 0.5 })
  tl.to(`#box${id}`, { css: { opacity: 100 }, duration: 1 })
}
export const animWebApiEnd = (data, ids) => {
  let id = ids + 10
}

export function removeElement(element) {
  if (typeof element === 'string') {
    element = document.querySelector(element)
  }
  return function () {
    element.parentNode.removeChild(element)
  }
}
