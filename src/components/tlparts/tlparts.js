import { tl } from '../factory/animationfactory'

export const drawSetTimeoutTimeLine = (id) => {
  tl.from(
    `#box${id}`,
    {
      css: { y: -200, autoAlpha: 0 },
      duration: 0.7,
      delay: 0.35,
    },
    '<'
  )
  tl.to(`#box${id}`, { y: 0, duration: 1 })
}
