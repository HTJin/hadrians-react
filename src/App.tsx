import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='h-screen'>
      <Routes>
        <Route path="/" element={<SheetLeft />} />
      </Routes>
    </div>
  )
}

export default App
