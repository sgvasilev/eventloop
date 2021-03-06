import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  max-width: 500px;
  margin: 5px 10px;
  padding: 7px 7px;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: #edf5e1;
`

const Card = ({ dataitem }) => {
  return <StyledCard className='unselectable'>{dataitem.name}</StyledCard>
}

export default Card
