import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import type { NextPage } from 'next';

interface FormValues extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact: NextPage = () => {

  function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        values,
        process.env.REACT_APP_EMAILJS_USER_ID || ''
      )
      .then((response: EmailJSResponseStatus) => {
        actions.setSubmitting(false);
        actions.resetForm();
        alert('Your message has been sent!');
      })
      .catch(() => {
        actions.setSubmitting(false);
        alert('Failed to send your message. Please try again later.');
      });
  }

  return (
    <>
      <h1>Contact Us!</h1>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" id="message" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};



export default Contact;

