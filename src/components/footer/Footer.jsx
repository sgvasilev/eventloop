import React from 'react'
import { InfoFooter } from './footer.components'

const Footer = () => {
  return (
    <InfoFooter>
      <span style={{ whiteSpace: 'pre-line' }}>
        This is ver. 1.0 of event loop
      </span>
      {'\n'}

      <span>More funcionality coming soon...</span>
    </InfoFooter>
  )
}

export default Footer
