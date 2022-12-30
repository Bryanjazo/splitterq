import { Routes, Route } from "react-router"
import Home from "./components/routes/home/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default App
