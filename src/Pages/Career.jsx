/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../assets/careerpic.jpeg'; // Import image

const CareerForm = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    mobile: Yup.string().required('Mobile number is required'),
    city: Yup.string().required('City is required'),
    department: Yup.string().required('Department is required'),
    experience: Yup.string().required('Experience level is required'),
    previousJob: Yup.string().required('Previous job details are required'),
    linkedin: Yup.string().url('Invalid LinkedIn URL').required('LinkedIn profile is required'),
    foundJobFrom: Yup.string().required('Please let us know how you found this job'),
  });

  const handleSubmit = (values) => {
    console.log('Form data:', values);
    alert('Form submitted successfully');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mt-32 mb-32">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">Career Form</h2>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            address: '',
            mobile: '',
            city: '',
            department: '',
            experience: '',
            previousJob: '',
            linkedin: '',
            foundJobFrom: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <Field name="fullName" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <Field name="email" type="email" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Address</label>
                <Field name="address" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Mobile</label>
                <Field name="mobile" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">City</label>
                <Field name="city" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Department</label>
                <Field name="department" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Experience Level</label>
                <Field as="select" name="experience" className="w-full px-4 py-2 border rounded">
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </Field>
                <ErrorMessage name="experience" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">Previous Job</label>
                <Field name="previousJob" as="textarea" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="previousJob" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">LinkedIn Profile</label>
                <Field name="linkedin" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="linkedin" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium">How did you find this job?</label>
                <Field name="foundJobFrom" as="textarea" className="w-full px-4 py-2 border rounded" />
                <ErrorMessage name="foundJobFrom" component="div" className="text-red-500 text-sm" />
              </div>

              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded">
                Submit Application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CareerForm;
