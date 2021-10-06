import React from 'react'

import { Container } from './webapi.components.js'
const WebApi = () => {
  return (
    <div style={{ alignSelf: 'start', display: 'flex', marginLeft: '10px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#05386b' }}>Web API</h2>
        <Container id='webapi'></Container>
      </div>
    </div>
  )
}

export default WebApi
