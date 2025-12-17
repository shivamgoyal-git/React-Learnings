import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [color] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style= {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full bg-amber-500 text-blue-500 hover:bg-amber-600 active:bg-amber-700'>test</button>
        </div>
      </div>

    </div>
  )
}

export default App
