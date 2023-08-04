import TopBar from './components/Topbar'
import Card from './components/Card'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <TopBar text={text} setText={setText} />
      <div className='content'>
        <Card text={text} />
      </div>
    </>
  )
}

export default App
