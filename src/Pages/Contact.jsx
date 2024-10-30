 
/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSpring, animated, useTrail } from 'react-spring'; // Import React Spring
import aboutImage from '../assets/pic5.jpg';
import bannerImage from '../assets/pic2.jpg';

// Contact form validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short!').max(50, 'Name is too long!').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().min(3, 'Subject must be at least 3 characters long').required('Subject is required'),
  message: Yup.string().min(10, 'Message should be at least 10 characters long').required('Message is required'),
});

const ContactUs = () => {
  // Banner and Image Animations
  const bannerProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const imageProps = useSpring({ opacity: 1, transform: 'scale(1)', from: { opacity: 0, transform: 'scale(0.9)' }, delay: 400 });

  // Form Container Zoom Animation
  const formProps = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.95)' }, delay: 500 });

  // Button Animation
  const buttonProps = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.9)' },
    config: { tension: 180, friction: 12 },
    reset: true,
  });

  // Breadcrumb Animation
  const trail = useTrail(2, { opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Banner Section */}
        <animated.div
          className="relative bg-cover bg-center h-48 rounded-lg shadow-lg overflow-hidden mb-8"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
          </div>
        </animated.div>

        {/* Breadcrumb Navigation */}
        <div className="py-4 flex justify-center">
          <nav className="text-gray-600">
            <ul className="flex space-x-2 text-blue-600">
              {trail.map((style, index) => (
                <animated.li key={index} style={style} className={index === 1 ? "font-semibold" : ""}>
                  <a href={index === 0 ? "/" : undefined} className="hover:underline">
                    {index === 0 ? "Home" : "Contact"}
                  </a>
                  {index === 0 && <span className="mx-1">/</span>}
                </animated.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Us Content */}
        <div className="flex flex-col lg:flex-row items-start mt-8 lg:space-x-8">
          <animated.div style={imageProps} className="lg:w-1/2 p-2">
            <img
              src={aboutImage}
              alt="Contact Us Team"
              className="rounded-lg shadow-xl max-w-full lg:max-w-md mb-6 lg:mb-0 hover:scale-105 transition-transform duration-300"
            />
          </animated.div>
          <animated.div style={formProps} className="lg:w-1/2 p-2 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="bg-blue-200 rounded-full px-3 py-1 mb-4 text-blue-700 font-semibold text-sm inline-block">
              Get in Touch
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">We are Here to Help</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have any questions or inquiries? Fill out the form below and we will get back to you promptly.
            </p>

            {/* Contact Form with Formik and Yup */}
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm, setStatus }) => {
                console.log('Form submitted:', values);
                setStatus({ success: true });
                resetForm();
                setTimeout(() => setStatus({ success: false }), 3000); // Clear success message after 3 seconds
              }}
            >
              {({ isSubmitting, status }) => (
                <Form className="w-full max-w-xl space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 hover:bg-blue-50 transition"
                      aria-label="Name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 hover:bg-blue-50 transition"
                      aria-label="Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="subject">
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 hover:bg-blue-50 transition"
                      aria-label="Subject"
                    />
                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="message">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      rows="4"
                      className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 hover:bg-blue-50 transition"
                      aria-label="Message"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <animated.div style={buttonProps} className="flex justify-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded focus:outline-none transition-transform duration-300 transform hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </animated.div>

                  {/* Success Message */}
                  {status && status.success && (
                    <div className="text-green-500 text-sm mt-4 text-center">
                      Your message has been sent successfully!
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </animated.div>
        </div>

        {/* Optional Map Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509236!2d144.9537363156767!3d-37.81627997975172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f4b6aef%3A0x5045675218ceed7!2sMelbourne%20City%20Centre!5e0!3m2!1sen!2sau!4v1623248947880!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
