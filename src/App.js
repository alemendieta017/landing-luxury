import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      {/* <!-- Content section--> */}
      <section className="py-5">
        <div className="container">
          <h2>Beneficios de asociarse a RE/MAX Luxury</h2>
          <div className="row my-5 justify-content-center">
            <div className="col">
              <p className="h5">Trabajo en equipo</p>
              <p className="lead mb-0">
                Capacitacion constante y muy buena remuneracion por comisiones y
                premios por objetivos cumplidos.
              </p>
            </div>
            <div className="col">
              <p className="h5">+11.000 propiedades</p>
              <p className="lead mb-0">
                Un extenso numero de propiedades en cartera para ofrecer a tus
                clientes.
              </p>
            </div>
            <div className="col-sm">
              <p className="h5">Capacitación constante</p>
              <p className="lead mb-0">
                Nuestra capacitación es constante, con el objetivo de que
                nuestros agentes estén siempre actualizados y puedan brindar un
                servicio de excelencia a sus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Image element - set the background image for the header in the line below--> */}
      <div
        className="py-5 bg-image-full"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/4ulffa6qoKA/1200x800")',
        }}
      >
        {/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
        <div style={{ height: '20rem' }}></div>
      </div>
      {/* <!-- Content section--> */}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Engaging Background Images</h2>
              <p className="lead">
                The background images used in this template are sourced from
                Unsplash and are open source and free to use.
              </p>
              <p className="mb-0">
                I can't tell you how many people say they were turned off from
                science because of a science teacher that completely sucked out
                all the inspiration and enthusiasm they had for the course.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-primary">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
