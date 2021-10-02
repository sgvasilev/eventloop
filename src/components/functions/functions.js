import gsap from 'gsap/all'

/**
 *
 * @param {string} element inserted element
 * @param {number} id the ID of inserted element
 * @param {string} payload text in inserted element
 */
export const drawElement = (element, id, payload) => {
  element.insertAdjacentHTML(
    'afterBegin',
    `<div class='borderStyle nonevisible'
        id='box${id}'>${payload}</div>`
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
  console.log(element, 'last')
  let $el = '#' + element

  gsap.to($el, {
    css: { opacity: 0 },
    duration: 0.2,
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
    ` <div style='display: flex' id='box${id}'>
        <div class='borderStyleWebApi nonevisible' id='box${id}'>${payload}
        </div>           
          <div class='circle'>
            <div class="index" id="percent">0 %</div> 
          </div>
        </div>
   
     `
  )
}
