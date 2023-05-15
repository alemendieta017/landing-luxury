import React from 'react'
import './Testimonials.scss'

const Testimonials = () => {
  return (
    <section className="bg-lightBlue container-fluid py-5">
      {/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mb-5">
            <h2 className="fw-bolder text-white">Testimonios</h2>
            <p className="lead fw-normal text-white-50 mb-0">
              Estos son algunos de los testimonios de nuestros agentes
            </p>
          </div>
        </div>
      </div>
      <div className="row gy-5 justify-content-center">
        <div className="col">
          {/* <!-- Testimonial 1--> */}
          <div className="card text-center">
            <div className="card-body p-4">
              <img
                className="shadow rounded-circle mb-3"
                src="https://remax.azureedge.net/userimages/114/A_157036ede04d47089af27c38c17cf23e_iList.jpg"
                alt="..."
              />
              <h5 className="fw-bolder">Jessica Ciancio</h5>
              <p className="lead">Manager</p>
              <p className="text-muted mb-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque sapien velit, aliquet eget commodo nec, auctor a sapien.
                Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis
                varius libero. Lorem ipsum dolor sit amet."
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          {/* <!-- Testimonial 2--> */}
          <div className="card text-center">
            <div className="card-body p-4">
              <img
                className="shadow rounded-circle mb-3"
                src="https://remax.azureedge.net/userimages/114/A_1dcd2ce266ca4c2cac4b3ad9508f5744_iList.jpg"
                alt="..."
              />
              <h5 className="fw-bolder">Karen Muzzin</h5>
              <p className="lead">Broker</p>
              <p className="text-muted mb-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque sapien velit, aliquet eget commodo nec, auctor a sapien.
                Nam eu neque vulputate diam rhoncus."
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          {/* <!-- Testimonial 3--> */}
          <div className="card text-center">
            <div className="card-body p-4">
              <img
                className="shadow rounded-circle mb-3"
                src="https://remax.azureedge.net/userimages/114/A_10c1c72835b2447fba4f015220aeb23f_iList.jpg"
                alt="..."
              />
              <h5 className="fw-bolder">Juan Visentin</h5>
              <p className="lead">Broker</p>
              <p className="text-muted mb-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque sapien velit, aliquet eget commodo nec, auctor a sapien.
                Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis
                varius libero. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
