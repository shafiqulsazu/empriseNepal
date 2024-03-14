import React from 'react'

const Flex = ({className,children}) => {
  return (
    <div className={`${className} flex`}>{children}</div>
  )
}

export default Flex