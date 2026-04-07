import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import StudentList from './pages/StudentList'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
