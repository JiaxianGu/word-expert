import React from 'react'

interface DisplayComponentProps {
  data: any[];
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ data }) => {
  return (
    <div>{data}</div>
  )
}

export default DisplayComponent