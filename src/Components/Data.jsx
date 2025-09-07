import React from 'react'
import { useState, useEffect } from 'react'
import Dragonball from './Dragonball'

const Data = () => {
  const [myData, setMyData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://dragonball-api.com/api/characters')
      const userData = await data.json()
      console.log(userData);


      setMyData(userData)

    }
    fetchData()
  }
    , [])
  return (
    <div className=''>
      <header className='bg-[#101010] h-16 flex justify-center items-start'> 
          <img className='h-24 ' src="images/logo.png" alt="" />
      </header>

      <div className='flex flex-wrap m-0 p-0 w-full justify-center items-center min-h-screen bg-[#101010]'>

        {
          myData?.items?.map((item) => (
            
            
            <Dragonball key={item.id} data = {item} />


          )
          )}
      </div>
    </div>
  )
}

export default Data