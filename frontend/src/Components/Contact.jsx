import { useEffect, useMemo, useRef, useState } from 'react'
import './Contact.css';
import bgVideo from '../images/videos/contact.mp4'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animation')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    })
    elements.forEach(element => observer.observe(element))
    observerRef.current = observer
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const canSubmit = useMemo(() => {
    return formData.name && formData.email && formData.subject && formData.message && !isSubmitting
  }, [formData, isSubmitting])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setToast('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      setToast(result.message || (res.ok ? 'Message sent!' : 'Failed to send'))
      if (res.ok) setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setToast('Something went wrong. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <div>
      <header>
        {/* <nav>
          <div className="logo">
            <img src={logo} alt="logo" height="70" width="70" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav> */}
        <div className="hero">
          <h1>Contact Us</h1>
          <p>We're here to help you!</p>
        </div>
      </header>

      <section className="contact">
        <video autoPlay muted loop playsInline className="contact-video-bg">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="contact-form scroll-animation">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name.." value={formData.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="example@youremail.com" value={formData.email} onChange={handleChange} required />
            <input name="subject" type="text" placeholder="Subject.." value={formData.subject} onChange={handleChange} required />
            <textarea name="message" rows="5" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required />
            <button type="submit" disabled={!canSubmit}>{isSubmitting ? 'Sending...' : 'Send Now'}</button>
          </form>
          {toast && <p style={{ marginTop: 10 }}>{toast}</p>}
        </div>

        <div className="contact-info scroll-animation">
          <p>We value your feedback and inquiries. Reach out to us anytime!</p>
          <div className="info-box">
            <h4>Phone Number</h4>
            <p>+91 8627069119</p>
          </div>
          <div className="info-box">
            <h4>Email Address</h4>
            <p>nitishsharma0530@gmail.com</p>
          </div>
          <div className="info-box">
            <h4>Our Office</h4>
            <p>Chitkara University</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6874.419607631843!2d76.660394!3d30.515105999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756623006055!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <footer>
        <p>Copyright © 2025 ZOOMO | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Contact;
