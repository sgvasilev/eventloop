import gsap from 'gsap/all'

import '../animate/animate.css'

/**
 *
 * @param {string} element inserted element
 * @param {string} data text in inserted element
 * @param {number} id the ID of inserted element
 */
export const drawElement = (element, data, id) => {
  element.insertAdjacentHTML(
    'afterBegin',
    `<div class='borderStyle nonevisible'
        id='box${id}'>${data}</div>`
  )
}

export function removeElement(element) {
  if (typeof element === 'string') {
    element = document.querySelector(element)
  }
  return function () {
    animationOfRemovinElement(element.id)
  }
}

export function removeElementAtLastCircle(element) {
  if (typeof element === 'string') {
    element = document.getElementById(element)
  }
  return function (element) {
    animationOfRemovinElement(element.id)
  }
}

export const animationOfRemovinElement = (element) => {
  let $el = '#' + element

  gsap.to($el, {
    css: { opacity: 0 },
    duration: 0.1,
    onComplete: deleteElemAfterAnimation,
    onCompleteParams: [element],
  })
}
function deleteElemAfterAnimation(element) {
  var elem = document.getElementById(element)
  elem.parentNode.removeChild(elem)
}

export const drawElementSetTimeout = (element, id, payload) => {
  element.insertAdjacentHTML(
    'afterBegin',
    `<div class='container' id='box${id}'>
        <div class='borderStyleWebApi nonevisible' id='box${id}'>${payload}
        </div>           
          <div id='circle' class='circle nonevisible'>
            <div id='percent'>
            <div class="index" id="percent+${id}">0</div> 
            </div>
          </div>
        </div> `
  )
}

export const deleteElementNow = (element, time) => {
  setTimeout(() => {
    var elem = document.getElementById(element)
    if (elem !== null && elem !== undefined)
      elem = document.getElementById(element)

    elem?.parentNode?.removeChild(elem)
  }, time * 1000 + 300)
}

const clearTimeline = () => {
  tl3.clear()
}

export const tl3 = new gsap.timeline({
  onComplete: clearTimeline,
})
export const startCircleAnimation = (time, id) => {
  tl3.to('#circle', { autoAlpha: 1, duration: 0.1 })

  var Cont = { val: 0 },
    NewVal = 100
  tl3.to(Cont, time, {
    val: NewVal,
    roundProps: 'val',
    onUpdate: function () {
      document.getElementById(`percent+${id}`).innerHTML = Cont.val
    },
  })
}
