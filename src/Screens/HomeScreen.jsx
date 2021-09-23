import React, { useState } from 'react'

import User from '../components/user/User'
import Button from '../components/buttons/Button'
import CallStack from '../components/callstack/CallStack'

import initalValues from '../components/data/items.parts'

import { ButtonContainer, Container } from './homescreen.components'
import './HomeScreen.css'
import WebApi from '../components/webapi/WebApi'
import CallbackQueue from '../components/callbackqueue/CallbackQueue'

const HomeScreen = () => {
  const [itemPos, setItemPos] = useState(initalValues.items)
  const [rotate, setRotate] = useState(false)

  return (
    <>
      <h1 style={{ margin: '25px 25px', textAlign: ' center' }}>
        How does event loop
      </h1>

      <Container>
        <ButtonContainer>
          <User itemPosUser={itemPos} setItemPosUser={setItemPos} />
          <Button rotate={rotate} setRotate={setRotate} />
        </ButtonContainer>
        <CallStack itemPos={itemPos} rotate={rotate} setRotate={setRotate} />
        <WebApi></WebApi>
      </Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <CallbackQueue></CallbackQueue>
      </div>
    </>
  )
}

export default HomeScreen
