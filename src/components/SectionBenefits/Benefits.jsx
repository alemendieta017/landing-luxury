import React from 'react'
import './Benefits.scss'

const Benefits = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Beneficios de asociarse a RE/MAX Luxury</h2>
        <div className="row my-5 justify-content-center">
          <div className="col-lg gy-4">
            <i className="bi bi-trophy-fill"></i>
            <p className="h5">Ganacias por comisión</p>
            <p className="lead mb-0">
              Muy buena remuneracion por comisiones y premios por objetivos
              cumplidos.
            </p>
          </div>
          <div className="col-lg">
            <i className="bi bi-houses"></i>
            <p className="h5">+11.000 propiedades</p>
            <p className="lead mb-0">
              Un extenso numero de propiedades en cartera para ofrecer a tus
              clientes.
            </p>
          </div>
          <div className="col-lg">
            <i className="bi bi-rocket-takeoff"></i>
            <p className="h5">Capacitación constante</p>
            <p className="lead mb-0">
              Nuestra capacitación es constante, con el objetivo de que nuestros
              agentes estén siempre actualizados y puedan brindar un servicio de
              excelencia a sus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
