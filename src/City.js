import React from 'react'

function City({city}) {
    console.log(city);
  return (
    <div>
        <h1>{city?.main?.temp}</h1>
        <h1>{city?.name}</h1>
        <h1>{city?.weather[0]?.main}</h1>
        
    </div>
  )
}

export default City