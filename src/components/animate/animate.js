import gsap from 'gsap'
import './animate.css'
import {
  removeElement,
  drawElement,
  drawElementSetTimeout,
  removeElementAtLastCircle,
} from '../functions/functions'

export const tl = new gsap.timeline()

export const animConsoleLogStart = (data, id) => {
  const payload = data
  const $el = document.querySelector('#callstack')

  //draw consolelog elements
  drawElement($el, id, payload)
  //animation of element
  tl.from(
    `#box${id}`,
    { css: { y: -400, autoAlpha: 0 }, duration: 0.7, delay: 0.35 },
    '<'
  )
  tl.to(`#box${id}`, { y: 0, duration: 1 })
  tl.call(removeElement(`#box${id}`))
}
/**
 *
 * @param {string} data text in container
 * @param {string} id identifier of $el box
 */

export const animWebApiMid = (dataName, dataId, dataTime) => {
  const $el2 = document.querySelector('#webapi')
  const $el3 = document.querySelector('#queue')

  const payload = dataName.WebApi
  const id = dataId.WebApiId
  const time = dataTime.WebApiTime

  //draw settimeout
  drawElementSetTimeout($el2, id, payload)

  tl.from(`#box${id}`, {
    css: { y: -400, autoAlpha: 0 },
    duration: 0.7,
    delay: 0.35,
  })
    .to(`#box${id}`, { x: 0, duration: 0.5 })
    .to(`#box${id}`, { css: { opacity: 100 } })
  //.call(start)
  tl.call(deleteElementNow, [`box${id}`, time])

  $el3.insertAdjacentHTML(
    'afterBegin',
    `<div class='borderStyleWebApi nonevisible' id='box${dataId.QueueId}'>${dataName.Queue}</div>`
  )
  tl.from(
    `#box${dataId.QueueId}`,
    {
      css: { x: 600, autoAlpha: 0 },
      duration: 0.5,
    },
    '+=2'
  ).to(`#box${dataId.QueueId}`, { x: 0 }, '-=2')
}

export const deleteElementNow = (element, time) => {
  setTimeout(() => {
    var elem = document.getElementById(element)
    elem.parentNode.removeChild(elem)
  }, time * 1000 + 300)
}
export const CallbacksAnimation = ($el5, callbackArr, Queue) => {
  drawElement($el5, callbackArr, Queue)
}

export const startCallback = (target) => {
  removeElementAtLastCircle(target)
}

export const animWebApiStart = () => {}
