import React from 'react'

import { isDevelopment } from '../../lib/helpers/envHelpers'

interface Props {
  children: React.ReactNode
}

const DevOnly: React.FC<Props> = ({ children }) => {
  if (!isDevelopment()) {
    return null
  }

  return <>{children}</>
}

export default DevOnly
