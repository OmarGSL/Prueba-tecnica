import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <MainContent />
      </div>
    </>
  )
}

export default App
