import { useState } from 'react';
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className='layout'>
          <Sidebar onToggle={setSidebarOpen} />
          <MainContent sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </>
  )
}

export default App
