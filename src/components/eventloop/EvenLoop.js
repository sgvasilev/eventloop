import { Draw } from '../Draw'
import gsap from 'gsap'

import './style.eventloop.css'

var tl = gsap.timeline({ repeat: 0, repeatDelay: 2.5 })

export class DrawElement extends Draw {
  constructor(selector, options) {
    super()
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  render(payload, id, rotate) {
    //'beforeBegin', 'afterBegin', 'beforeEnd', or 'afterEnd'.

    this.$el.insertAdjacentHTML(
      'afterBegin',
      `<h3 id='box${id}'>${payload}</h3>`
    )

    tl.from(`#box${id}`, { css: { y: -400 }, duration: 1 })
    tl.to(`#box${id}`, { y: 0, duration: 1 })
    tl.to(`#box${id}`, { x: 100, duration: 1 })
  }
}
