import React from "react";
import { useState, useEffect } from "react";


function Example() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "You clicked me  ${count} times";
  }
  )

  return (
    <div>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

export default Example