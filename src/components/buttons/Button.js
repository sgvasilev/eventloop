import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../loop.svg'
const StyledButton = styled.button`
  width: 75px;
  height: 45px;
`

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
        style={{ display: 'flex', alignSelf: 'flex-end', width: '100px' }}
        className={rotate ? 'rotating' : ''}
      />
    </div>
  )
}

export default Button
