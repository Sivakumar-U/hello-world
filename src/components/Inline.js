import React from 'react'
const heading={
    fontSize:'100px',
    color:'Green'
}

function Inline() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline