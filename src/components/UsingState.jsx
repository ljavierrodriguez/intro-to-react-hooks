import React, { useState } from 'react'

const UsingState = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div>Using useState</div>
      <p>Name: {name}</p>
      <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default UsingState