import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header/Header'
import Benefits from './components/SectionBenefits/Benefits'
import Testimonials from './components/SectionTestimonials/Testimonials'
import Form from './components/SectionForm/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Testimonials />
      <Form />
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-primary">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; RE/MAX Luxury 2023
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
