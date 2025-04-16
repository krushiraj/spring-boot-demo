import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App
