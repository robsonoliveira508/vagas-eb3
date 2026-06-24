import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EntendaEB3 from './components/EntendaEB3'
import ComoFunciona from './components/ComoFunciona'
import Timeline from './components/Timeline'
import Calculadora from './components/Calculadora'
import ListaVagas from './components/ListaVagas'
import Formulario from './components/Formulario'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="entenda"><EntendaEB3 /></div>
      <div id="como"><ComoFunciona /></div>
      <div id="timeline"><Timeline /></div>
      <div id="vagas"><ListaVagas /></div>
      <div id="calculadora"><Calculadora /></div>
      <div id="contato"><Formulario /></div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

// // <Hero />
//       <EntendaEB3 />
//       <ComoFunciona />
//       <Timeline />
//       <ListaVagas />
//       <Calculadora />
//       <Formulario />
//       <WhatsAppButton />
//     // </>