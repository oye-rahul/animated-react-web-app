import React, { useState } from 'react'

const UseState = () => {

    const [num, setnum] = useState(0)

    let IN = () => {
        setnum(num+1)
    }
    let DE = () => {
        setnum(num-1)
    }
    let add5 = () => {        
        setnum(num+5)
    }
    let add10 = () => {
        setnum(num+10)
    }

  return (
    <div className='m-10'>
        <h1 className='text-7xl py-5 px-10 bg-amber-200 flex items-center justify-center m-5 rounded-2xl' >{num}</h1>
        <button onClick={IN} className='text-2xl py-2 px-4 bg-green-300 m-4 rounded-4xl'>increase</button>
        <button onClick={DE} className='text-2xl py-2 px-4 bg-red-300 m-4 rounded-4xl'>decrease</button>
        <button onClick={add5} className='text-2xl py-2 px-4 bg-blue-300 m-4 rounded-4xl'>+5</button>
        <button onClick={add10} className='text-2xl py-2 px-4 bg-blue-300 m-4 rounded-4xl'>+10</button>
    </div>
  )
}

export default UseState