import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        Conteúdo da página
      </div>

      <Footer />
    </div>
  )
}

export default App
