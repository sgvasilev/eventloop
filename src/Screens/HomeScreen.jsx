import React, { useState } from 'react'

import User from '../components/user/User'
import Button from '../components/buttons/Button'
import CallStack from '../components/callstack/CallStack'
import WebApi from '../components/webapi/WebApi'
import CallbackQueue from '../components/callbackqueue/CallbackQueue'

import initalValues from '../components/data/items.parts'

import './HomeScreen.css'
import { ButtonContainer, Container } from './homescreen.components'

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: '100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CallStack
              itemPos={itemPos}
              rotate={rotate}
              setRotate={setRotate}
            />
            <WebApi></WebApi>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '1100px',
              margin: ' 0 auto',
              textAlign: 'end',
              width: '100%',
            }}
          >
            <CallbackQueue></CallbackQueue>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomeScreen
