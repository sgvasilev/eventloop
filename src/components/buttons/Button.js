import React from 'react'

import { ReactComponent as Logo } from '../../loop.svg'
import { StyledButton } from './button.components'

const Button = ({ rotate, setRotate }) => {
  function clickHandler() {
    rotate ? setRotate(false) : setRotate(true)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <StyledButton onClick={clickHandler}>Start</StyledButton>
      <Logo
        style={{
          display: 'flex',
          alignSelf: 'flex-end',
          width: '75px',
          color: '#05386b',
        }}
        className={rotate ? 'rotating' : ''}
      />
    </div>
  )
}

export default Button
