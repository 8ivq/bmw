import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TestDrive() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    model: '',
    preferredDate: '',
    preferredTime: '',
    dealership: '',
    comments: ''
  })

  const models = [
    'BMW 3 Series',
    'BMW 5 Series',
    'BMW 7 Series',
    'BMW X3',
    'BMW X5',
    'BMW X7',
    'BMW i4',
    'BMW iX',
    'BMW M3',
    'BMW M5'
  ]

  const dealerships = [
    'BMW Downtown',
    'BMW North Center',
    'BMW South Gallery',
    'BMW West Side'
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a server
    setSubmitted(true)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 90)
    return maxDate.toISOString().split('T')[0]
  }

  const formatDate = (dateString) => {
    // Parse the YYYY-MM-DD format manually to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  if (submitted) {
    return (
      <div className="test-drive-page">
        <div className="confirmation-container">
          <div className="confirmation-icon" aria-label="Success">✓</div>
          <h1>Test Drive Confirmed!</h1>
          <p>Thank you, {formData.firstName}! Your test drive has been scheduled.</p>
          <div className="confirmation-details">
            <div className="detail-row">
              <span className="detail-label">Model:</span>
              <span className="detail-value">{formData.model}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{formatDate(formData.preferredDate)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{formData.preferredTime}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{formData.dealership}</span>
            </div>
          </div>
          <p className="confirmation-email">A confirmation email has been sent to {formData.email}</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="test-drive-page">
      <div className="test-drive-hero">
        <h1>Schedule Your Test Drive</h1>
        <p>Experience the thrill of driving a BMW. Fill out the form below to book your personalized test drive.</p>
      </div>

      <div className="test-drive-container">
        <form className="test-drive-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Vehicle Selection</h2>
            <div className="form-group">
              <label htmlFor="model">Select Your BMW *</label>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              >
                <option value="">Choose a model</option>
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Appointment Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={getTomorrowDate()}
                  max={getMaxDate()}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="dealership">Dealership Location *</label>
              <select
                id="dealership"
                name="dealership"
                value={formData.dealership}
                onChange={handleChange}
                required
              >
                <option value="">Choose a dealership</option>
                {dealerships.map(dealership => (
                  <option key={dealership} value={dealership}>{dealership}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Additional Comments</h2>
            <div className="form-group">
              <label htmlFor="comments">Comments (Optional)</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Confirm Test Drive
            </button>
          </div>
        </form>

        <div className="test-drive-info">
          <div className="info-card">
            <h3>What to Expect</h3>
            <ul>
              <li>A personalized 30-45 minute experience</li>
              <li>Professional BMW Product Genius assistance</li>
              <li>Explore all features and capabilities</li>
              <li>No purchase obligation</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>What to Bring</h3>
            <ul>
              <li>Valid driver's license</li>
              <li>Proof of insurance</li>
              <li>Any questions about the vehicle</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Contact Us</h3>
            <p>Need help scheduling?</p>
            <p className="contact-phone">📞 1-800-BMW-HELP</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestDrive
