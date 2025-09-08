import { useEffect, useMemo, useRef, useState } from 'react'
import './Contact.css';
import bgVideo from '../images/videos/contact.mp4'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState('')
  const [contactInfo, setContactInfo] = useState(null) // ✅ dynamic contact info
  const observerRef = useRef(null)

  // Scroll animation
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

  // ✅ Fetch backend contact info (address, phone, email)
  useEffect(() => {
    fetch('/contact')
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(err => console.error('Failed to load contact info:', err))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const canSubmit = useMemo(() => {
    return formData.name && formData.email && formData.message && !isSubmitting
  }, [formData, isSubmitting])

  // ✅ Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setToast('')
    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      setToast(result.message || (res.ok ? 'Message sent!' : 'Failed to send'))
      if (res.ok) setFormData({ name: '', email: '', message: '' })
    } catch {
      setToast('Something went wrong. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <div>
      <header>
        <div className="hero">
          <h1>Contact Us</h1>
          <p>We're here to help you!</p>
        </div>
      </header>

      <section className="contact">
        <video autoPlay muted loop playsInline className="contact-video-bg">
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Contact Form */}
        <div className="contact-form scroll-animation">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name.."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="example@youremail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? 'Sending...' : 'Send Now'}
            </button>
          </form>
          {toast && <p style={{ marginTop: 10 }}>{toast}</p>}
        </div>

        {/* Contact Info from backend */}
        <div className="contact-info scroll-animation">
          <p>We value your feedback and inquiries. Reach out to us anytime!</p>
          <div className="info-box">
            <h4>Phone Number</h4>
            <p>{contactInfo?.phone || 'Loading...'}</p>
          </div>
          <div className="info-box">
            <h4>Email Address</h4>
            <p>{contactInfo?.email || 'Loading...'}</p>
          </div>
          <div className="info-box">
            <h4>Our Office</h4>
            <p>{contactInfo?.address || 'Loading...'}</p>
          </div>

          {/* Static Google Maps embed (you can update location manually if needed) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6874.419607631843!2d76.660394!3d30.515105999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756623006055!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer>
        <p>Copyright © 2025 ZOOMO | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Contact
