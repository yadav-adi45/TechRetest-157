import { BrowerRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
