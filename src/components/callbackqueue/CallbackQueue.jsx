import React from 'react'

import { Container } from './callbackqueue.components'

const CallbackQueue = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: '#05386b' }}>Callback queue</h3>
        <Container id='queue'></Container>
      </div>
    </>
  )
}

export default CallbackQueue
