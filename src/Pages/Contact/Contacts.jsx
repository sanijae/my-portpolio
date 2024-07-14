import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(()=>{
    document.title = 'Muhammad Sani - Contact'
  })
  return (
    <section className="p-8 text-gray-100 bg-gray-900 flex justify-center">
      <div className='w-full lg:w-2/3 py-16'>
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            If you have any questions or would like to get in touch, feel free to reach out to me through the following methods:
          </p>
          <div className="list-disc list-inside">
            <div className="mb-2">
              <strong>Phone:</strong> (+234)-8063-0554-17 || (+234) - 8089 - 8784 - 68
            </div>
            <div className="mb-2 flex flex-col">
              <strong>Email:</strong>
              <a href="mailto:muhammadsanijae@gmail.com" className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded w-full text-center">muhammadsanijae@gmail.com</a>
            </div>
            <div className="mb-2 flex flex-col">
              <strong>GitHub:</strong> <a href="https://github.com/sanijae" target='blank' rel='noopener noreferrer' className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded w-full text-center">GitHub</a>
            </div>
            <div className="mb-2 flex flex-col">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammad-sani-9564a722a" target='blank' rel='noopener noreferrer' className="mt-4 inline-block bg-white hover:bg-gray-700 hover:text-white text-blue-900 text-2xl py-2 px-4 rounded w-full text-center">LinkedIn</a>
            </div>
          </div>
          {/* <form className="mt-6">
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              type="submit"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
