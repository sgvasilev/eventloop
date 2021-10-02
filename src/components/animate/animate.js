import gsap from 'gsap'
import './animate.css'
import {
  removeElement,
  drawElement,
  drawElementSetTimeout,
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
export const animWebApiStart = (data, id) => {
  const $el1 = document.querySelector('#callstack')
  const payload1 = data

  $el1.insertAdjacentHTML(
    'afterBegin',
    `<div class='borderStyle' nonevisible id='box${id}'>${payload1}</div>`
  )

  tl.from(`#box${id}`, {
    css: { y: -200, autoAlpha: 0 },
    duration: 0.7,
    delay: 0.35,
  })
  tl.to(`#box${id}`, { y: 0, duration: 1 })
}

export const animWebApiMid = (dataName, dataId, dataTime) => {
  const $el2 = document.querySelector('#webapi')
  const $el3 = document.querySelector('#queue')

  const payload = dataName.WebApi
  const id = dataId.WebApiId
  const time = dataTime.WebApiTime

  //draw settimeout
  drawElementSetTimeout($el2, id, payload)

  //animation of element
  let tl4 = new gsap.timeline()
  var svgCircleProgress1Path1 = document.getElementById(
    'svgCircleProgressPath1'
  )
  let percentage = false

  // circle timeout animation:
  function start() {
    tl4.fromTo(
      svgCircleProgress1Path1,
      Number(time),
      {
        drawSVG: '0',
      },
      {
        drawSVG: '0 100%',
        onUpdate: setPercentage,
      }
    )
  }

  function setPercentage() {
    if (!percentage) {
      percentage = document.getElementById('percent')
    }
    var v = Math.round(tl4.progress() * 100)
    percentage.innerHTML = v + '%'
  }

  tl.from(`#box${id}`, {
    css: { y: -400, autoAlpha: 0 },
    duration: 0.7,
    delay: 0.35,
  })
    .to(`#box${id}`, { x: 0, duration: 0.5 })
    .to(`#box${id}`, { css: { opacity: 100 } })
    .call(start)
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

const deleteElementNow = (element, time) => {
  setTimeout(() => {
    var elem = document.getElementById(element)
    elem.parentNode.removeChild(elem)
  }, time * 1000 + 300)
}
export const CallbacksAnimation = ($el5, callbackArr, Queue) => {
  drawElement($el5, callbackArr, Queue)
}
