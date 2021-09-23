import styled from 'styled-components'
export const CallstackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  max-width: 350px;
  width: 350px;
  height: 400px;
  margin: 0 auto;
`

export const FunctionContainer = styled.div`
  display: grid;
  grid-template-columns: 310px;
  grid-template-rows: auto;
  margin: 5px 5px;
  text-align: center;
`
export const FunctionItem = styled.div`
  margin: 0 0;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  margin: 5px auto;
  width: 300px;
  background-color: #fff;
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  max-width: 300px;
  align-items: center;
  justify-content: center;
`
