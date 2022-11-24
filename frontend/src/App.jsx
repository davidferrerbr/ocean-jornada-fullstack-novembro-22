import { Route, Routes } from "react-router-dom"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ReadAll from "./components/ReadAll/ReadAll"
import Create from "./components/Create/Create"

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<ReadAll />} />

          <Route path="/adicionar" element={<Create />} />
          
          <Route path="/visualizar/:id" element={<Create />} />

          {/* CRIAR UMA ROTA PARA O READBYID, INTEGRADO COM BACKEND */}
          {/* <Route path="/visualizar/:id" element={<Create />} /> */}

          {/* Para pegar o parametro de rota no componente, utilizamos (dentro do componente): */}
          {/* const id = props.match.params.id; */}
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
