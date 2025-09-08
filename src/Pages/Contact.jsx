import React from 'react'

const Contact = () => {
  const handleOnSubmit=(event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const username = formData.get("username");
    const message = formData.get("message");
    const Data = { email, username, message };
  }
  return (
      <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact