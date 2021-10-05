import {
  drawElement,
  removeElement,
  drawElementSetTimeout,
  deleteElementNow,
  startCircleAnimation,
} from '../functions/functions'
import gsap from 'gsap'
import { drawSetTimeoutTimeLine } from '../tlparts/tlparts'

export const tl = new gsap.timeline()

class ConsolelogAnimation {
  constructor(target, data, id) {
    this.target = target
    this.data = data
    this.id = id
  }
  start() {
    const $el = document.querySelector(`#${this.target}`)
    drawElement($el, this.data, this.id)
    tl.from(
      `#box${this.id}`,
      { css: { y: -400, autoAlpha: 0 }, duration: 0.7, delay: 0.3 },
      '<'
    )
    tl.to(`#box${this.id}`, { y: 0, duration: 1 })
    tl.call(removeElement(`#box${this.id}`))
  }
}

class SettimeoutAnimation {
  constructor(target, data, id, payload) {
    this.target = target
    this.data = data
    this.id = id
    this.payload = payload
  }
  start() {
    let time = this.payload.WebApiTime
    const $el = document.querySelector(`#${this.payload.CallstackTarget}`)
    drawElement($el, this.payload.CallStack, this.payload.CallStackId)
    drawSetTimeoutTimeLine(this.payload.CallStackId)
    const $el1 = document.querySelector(`#${this.target}`)
    const $el3 = document.querySelector(`#${this.payload.QueueTarget}`)

    drawElementSetTimeout($el1, this.payload.WebApiId, this.payload.WebApi)
    tl.from(`#box${this.payload.WebApiId}`, {
      css: { y: -400, autoAlpha: 0 },
      duration: 0.7,
    })
      .to(`#box${this.payload.WebApiId}`, { x: 0, duration: 0.3 })
      .to(`#box${this.payload.WebApiId}`, { css: { opacity: 100 } })
      .call(startCircleAnimation, [
        this.payload.WebApiTime,
        this.payload.WebApiId,
      ])
      .call(deleteElementNow, [`box${this.payload.WebApiId}`, time])
    drawElement($el3, this.payload.Queue, this.payload.QueueId)
    gsap.from(
      `#box${this.payload.QueueId}`,
      {
        css: { x: 400, autoAlpha: 0 },
        duration: 0.7,
        delay: 0.3,
      },
      `+=${time}`
    )
  }
}

class AnimationFactory {
  static list = {
    consolelog: ConsolelogAnimation,
    settimeout: SettimeoutAnimation,
  }

  /**
   *
   * @param {string} type typeof animation
   * @param {string} target destination of animation el
   * @param {string} data text inside animation
   * @param {string} id id of the inserted el
   * @returns
   */
  create(type, target, data, id, payload) {
    const Animation = AnimationFactory.list[type]
    const animate = new Animation(target, data, id, payload)
    animate.render = function () {
      animate.start()
    }
    return animate
  }
}

export const factory = new AnimationFactory()
