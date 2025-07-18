

export default function Contact() {


  return (
    <div >
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl mb-4">Get in touch with us!</p>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 