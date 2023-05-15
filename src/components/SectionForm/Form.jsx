import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormSection = () => {
  async function submitForm(values, formik) {
    try {
      const { email, firstName, lastName, phone } = values
      const url = 'http://localhost:3000/chimp'
      const payload = {
        email_address: email,
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone,
        },
      }
      const result = await axios.post(url, payload)

      console.log(result)

      formik.setSubmitting(false)
      formik.resetForm()
    } catch (error) {
      console.log(error)
    }
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Debe tener 15 caracteres o menos')
      .required('Requerido'),
    lastName: Yup.string()
      .max(20, 'Debe tener 20 caracteres o menos')
      .required('Requerido'),
    email: Yup.string().email('Email invalido').required('Requerido'),
    phone: Yup.string()
      .max(15, 'Debe tener 15 caracteres o menos')
      .required('Requerido'),
  })

  return (
    <section className="py-5" id="form-section">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2>Dejanos tus datos</h2>
            <p className="lead">
              Estas a un paso de iniciar tu carrera como agente inmobiliario.
              Dejanos tus datos personales y nos pondremos en contacto contigo
              en la brevedad.
            </p>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
              }}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-floating mb-3">
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="alert alert-danger"
                      />
                      <Field
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Nombre"
                      />
                      <label htmlFor="firstName">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="alert alert-danger"
                      />
                      <Field
                        type="text"
                        className="form-control form-control-lg"
                        id="lastName"
                        name="lastName"
                        placeholder="Apellido"
                      />
                      <label htmlFor="lastName" className="">
                        Apellido
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                      />
                      <Field
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="alert alert-danger"
                      />
                      <Field
                        type="text"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        placeholder="Teléfono"
                      />
                      <label htmlFor="phone" className="form-label">
                        Teléfono
                      </label>
                    </div>
                    <button
                      disabled={!formik.isValid || !formik.dirty}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Enviar
                    </button>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection
