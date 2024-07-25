import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          message: Yup.string()
            .max(500, 'Must be 500 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="name">Nombre:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          
          <label htmlFor="email">Correo Electrónico:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          
          <label htmlFor="message">Mensaje:</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />
          
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Contact;
