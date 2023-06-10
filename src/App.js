import axios from 'axios'
import React, { useEffect, useState } from 'react'
import City from './City'
import "./App.css";

function App() {
  const key ="102193ecfb5ec660633171f10c5ef985"
  const [search,setSearch] = useState("")
  const [city,setCity] = useState("")
  useEffect(() => {
    async function getApi(){
      try {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
  console.log(response);
  setCity(response.data)
    } 
    catch(error) {
      console.log(error);
    }
  }
  getApi()
  },[search])
  console.log(search);
  return (
    <div>
      <div className='container'>
      <div className='input'>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        {city && <City city={city} />}        
      </div>
    </div>
    </div>
  )
}

export default App