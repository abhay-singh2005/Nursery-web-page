import { useState, useMemo } from 'react'
import './App.css'
import founderImg from './assets/founder.jpg'
import { plantsData } from './data/plants.js'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'All Plants & Rates', href: '#collection' },
  { label: 'Bonsai Collection', href: '#bonsai' },
  { label: 'About Founder', href: '#about' },
  { label: 'Plant Care Guide', href: '#care' },
  { label: 'Nursery Gallery', href: '#gallery' },
  { label: 'Contact & Location', href: '#contact' },
]

const categoriesList = [
  'All',
  'Bonsai',
  'Rare Plants',
  'Flowering Plants',
  'Indoor Plants',
  'Outdoor Plants',
  'Pots & Accessories'
]

const careGuideOverview = [
  { title: 'Bonsai Pruning & Shaping', text: 'Pinch new shoots back to 2 leaves to maintain compact canopy structure and refine trunk movement.' },
  { title: 'Balancing Water & Soil', text: 'Water deeply when top 1 inch of soil dries out. Never allow roots to sit in stagnant water.' },
  { title: 'Ideal Sunlight & Temperature', text: 'Provide 4–6 hours of gentle morning sunlight. Protect sensitive foliage from scorching 40°C peak noon heat.' },
  { title: 'Akadama & Soil Substrates', text: 'Use fast-draining akadama, lava rock, and coarse pumice mix to ensure healthy root respiration.' },
  { title: 'Repotting Schedule', text: 'Repot young bonsai every 1–2 years in spring before new buds burst to encourage vibrant growth.' },
  { title: 'Organic Fertilization', text: 'Feed with balanced organic liquid NPK every 2–3 weeks during active spring and rainy growing seasons.' }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1599598425947-2206763844ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1613143323552-f9e7fec39e44?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80'
]

const testimonials = [
  {
    name: 'Rameshwar Tripathi',
    quote: 'Visiting Shivanand ji’s nursery in Mawaiya Mirzapur was an incredible experience. The 12-year-old Ficus bonsai I purchased is thriving!',
    rating: 5,
    location: 'Varanasi, UP'
  },
  {
    name: 'Sunita Sharma',
    quote: 'The detail provided for sunlight, humidity, and temperature requirements helped me care for my Monstera Albo perfectly.',
    rating: 5,
    location: 'Mirzapur, UP'
  },
  {
    name: 'Anand Verma',
    quote: 'Great collection of rare Adeniums and Japanese Maple. Genuine pricing and expert guidance straight from Shivanand ji.',
    rating: 5,
    location: 'Prayagraj, UP'
  },
  {
    name: 'Vikram Singh',
    quote: 'Packed safely and delivered right to our garden. The 4-5 photo gallery on their site shows the exact quality you get!',
    rating: 5,
    location: 'Lucknow, UP'
  }
]

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-inner">
        <span>📍 <strong>Location:</strong> Village & Post Mawaiya, Mirzapur, Uttar Pradesh (UP) - 231001</span>
        <span>📞 <strong>Call/WhatsApp:</strong> <a href="tel:+916388323228" style={{ color: 'inherit', textDecoration: 'underline' }}>+91 63883 23228</a></span>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Shivanand Rare Botanicals home">
          <img src={founderImg} alt="Shivanand Singh" className="brand-avatar" />
          <span>
            <strong>Shivanand Rare Botanicals</strong>
            <small>Village & Post Mawaiya, Mirzapur, UP</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Visit Nursery
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="floating-leaf leaf-one" aria-hidden="true" />
      <div className="floating-leaf leaf-two" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">🌱 Direct From Mawaiya, Mirzapur, UP</p>
          <h1>Where Rare Plants & Master Bonsai Become Living Art.</h1>
          <p className="hero-subheading">
            Discover curated rare botanicals, 10-15 year shaped bonsai, and healthy outdoor greenery nurtured personally by <strong>Shivanand Singh</strong>.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="button primary">
              Explore Plants & Rates
            </a>
            <a href="#contact" className="button secondary">
              Contact & Directions
            </a>
          </div>
          <div className="hero-stat-row" aria-label="Nursery highlights">
            <div>
              <strong>15+</strong>
              <span>Years of care</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Bonsai nurtured</span>
            </div>
            <div>
              <strong>Mawaiya</strong>
              <span>Mirzapur, UP</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-plant-card">
            <img
              src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80"
              alt="Sculptural Ficus Bonsai at Shivanand Nursery"
            />
          </div>
          <div className="mini-card-badge">
            <span className="badge-dot" />
            12-Yr Ficus Microcarpa Bonsai • ₹18,500
          </div>
        </div>
      </div>
    </section>
  )
}

function PlantCard({ plant, onSelectPlant }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap" onClick={() => onSelectPlant(plant)}>
        <img src={plant.images[0]} alt={plant.name} />
        <div className="photo-count-badge">
          📸 {plant.images.length} Photos Available
        </div>
      </div>
      <div className="plant-body">
        <div className="plant-meta">
          <span className="category-pill">{plant.category}</span>
          <span className={`status ${plant.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
            {plant.status}
          </span>
        </div>
        <h3 onClick={() => onSelectPlant(plant)}>{plant.name}</h3>
        {plant.species && <p className="species-name"><em>{plant.species}</em></p>}
        {plant.age && <p className="age-tag">⏳ Age: {plant.age}</p>}
        <p className="plant-short-desc">{plant.shortDesc}</p>
        
        <div className="plant-footer">
          <span className="price">{plant.price}</span>
          <button onClick={() => onSelectPlant(plant)} className="button primary-small">
            View Details & Care Guide
          </button>
        </div>
      </div>
    </article>
  )
}

function PlantModal({ plant, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  if (!plant) return null

  const whatsappUrl = `https://wa.me/916388323228?text=${encodeURIComponent(
    `Hello Shivanand Nursery (Mawaiya, Mirzapur)! I want to inquire about purchasing ${plant.name} (Rate: ${plant.price}).`
  )}`

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-grid">
          {/* Left Column: 4-5 Photos Gallery */}
          <div className="modal-gallery">
            <div className="main-image-frame">
              <img src={plant.images[activeImgIndex]} alt={`${plant.name} photo ${activeImgIndex + 1}`} />
              <span className="image-counter">Photo {activeImgIndex + 1} of {plant.images.length}</span>
            </div>

            <div className="thumbnail-strip">
              {plant.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${idx === activeImgIndex ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Plant Info & Care Requirements */}
          <div className="modal-details">
            <div className="modal-header">
              <span className="category-pill">{plant.category}</span>
              <h2>{plant.name}</h2>
              {plant.species && <p className="species-title"><em>{plant.species}</em></p>}
              <div className="price-tag-row">
                <span className="modal-price">{plant.price}</span>
                <span className={`status ${plant.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  {plant.status}
                </span>
              </div>
            </div>

            <p className="full-description">{plant.description}</p>

            {/* Plant Care & Requirements Section */}
            <div className="care-specs-box">
              <h3>🌱 Care & Growing Requirements</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-icon">🌡️</span>
                  <div>
                    <strong>Temperature</strong>
                    <p>{plant.careSpecs.temperature}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">💧</span>
                  <div>
                    <strong>Humidity</strong>
                    <p>{plant.careSpecs.humidity}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">☀️</span>
                  <div>
                    <strong>Sunlight</strong>
                    <p>{plant.careSpecs.light}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">🚰</span>
                  <div>
                    <strong>Watering Frequency</strong>
                    <p>{plant.careSpecs.water}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">🌱</span>
                  <div>
                    <strong>Soil & Substrate</strong>
                    <p>{plant.careSpecs.soil}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">🧪</span>
                  <div>
                    <strong>Fertilizer Schedule</strong>
                    <p>{plant.careSpecs.fertilizer}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">✂️</span>
                  <div>
                    <strong>Pruning & Repotting</strong>
                    <p>{plant.careSpecs.pruning}</p>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-icon">🎯</span>
                  <div>
                    <strong>Difficulty Level</strong>
                    <p>{plant.careSpecs.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button primary full-width">
                💬 Inquire & Order via WhatsApp
              </a>
              <p className="delivery-note">📍 Available for pickup at Village Mawaiya, Mirzapur or safe home delivery across UP & India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-portrait-wrap">
          <div className="about-portrait">
            <img
              src={founderImg}
              alt="Shivanand Singh - Master Nursery Owner & Bonsai Artist"
            />
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">The Passion Behind Every Plant</p>
          <h2>Shivanand Singh nurtures every bonsai & rare species with decades of mastery.</h2>
          <p>
            Located at <strong>Village and Post Mawaiya, Mirzapur, Uttar Pradesh</strong>, Shivanand Singh has devoted over 15 years to cultivating rare botanical specimens, ancient bonsai trees, and hardy flowering garden plants.
          </p>
          <blockquote>
            “A plant is not just something we grow; it is a living sculpture that we nurture for generations.”
          </blockquote>
          <div className="address-highlight-card">
            <h4>🏡 Mawaiya Nursery Address:</h4>
            <p>Village and Post Mawaiya, District Mirzapur, Uttar Pradesh (UP) - 231001</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Visit Us or Order Online</p>
          <h2>Let’s help you find & care for your perfect plant.</h2>
          <ul className="contact-list">
            <li>
              <span>📍 Location / Address</span>
              <p><strong>Shivanand Rare Botanicals Nursery</strong><br />Village and Post Mawaiya, Mirzapur, Uttar Pradesh (UP) - 231001</p>
            </li>
            <li>
              <span>📞 Phone Number</span>
              <p><a href="tel:+916388323228">+91 63883 23228</a></p>
            </li>
            <li>
              <span>💬 WhatsApp Order</span>
              <a href="https://wa.me/916388323228?text=Hello%20Shivanand%20Nursery!" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp (+91 63883 23228)
              </a>
            </li>
            <li>
              <span>✉️ Email</span>
              <a href="mailto:shivanandnursery.mawaiya@gmail.com">shivanandnursery.mawaiya@gmail.com</a>
            </li>
            <li>
              <span>🕒 Nursery Timings</span>
              <p>Monday – Sunday: 7:00 AM – 7:00 PM</p>
            </li>
          </ul>
        </div>

        <div className="contact-visual">
          <div className="location-card">
            <h3>🏡 Visit Our Mawaiya Nursery</h3>
            <p>Explore hundreds of live bonsai trees, rare indoor plants, and garden pots in person at Mawaiya, Mirzapur.</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mawaiya+Mirzapur+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary map-btn"
            >
              🗺️ Open in Google Maps (Mawaiya, Mirzapur)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={founderImg} alt="Shivanand Singh" className="footer-avatar" />
          <div>
            <h3>Shivanand Rare Botanicals</h3>
            <p>Village & Post Mawaiya, Mirzapur, UP - 231001</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container copyright-line">
        <p>© {new Date().getFullYear()} Shivanand Rare Botanicals • Mawaiya, Mirzapur, Uttar Pradesh. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const [selectedPlant, setSelectedPlant] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter plants based on Category and Search Query
  const filteredPlants = useMemo(() => {
    return plantsData.filter((plant) => {
      const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory
      const matchesSearch =
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (plant.species && plant.species.toLowerCase().includes(searchQuery.toLowerCase())) ||
        plant.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Separate bonsai list for the dedicated Bonsai section
  const bonsaiList = useMemo(() => {
    return plantsData.filter((plant) => plant.category === 'Bonsai')
  }, [])

  return (
    <div className="page-shell">
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />

        {/* Collection & Rates Section */}
        <section id="collection" className="collection-section">
          <div className="container section-heading">
            <p className="eyebrow">All Plants & Rates Catalogue</p>
            <h2>Explore Rare Botanicals, Bonsai & Garden Greenery</h2>
            <p className="section-subtitle">
              Click on any plant to view <strong>4–5 detailed photos</strong> and read full care requirements (temperature, humidity, sunlight, watering & soil mix).
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="container filter-container">
            <div className="search-bar-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search plant by name or species (e.g. Ficus, Adenium, Maple)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>

            <div className="category-pills-row">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="container product-grid">
            {filteredPlants.length > 0 ? (
              filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} onSelectPlant={setSelectedPlant} />
              ))
            ) : (
              <div className="no-results container">
                <h3>No plants found matching "{searchQuery}"</h3>
                <p>Try searching for another keyword or select "All" categories.</p>
                <button className="button primary" onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Dedicated Bonsai Showcase Section */}
        <section id="bonsai" className="bonsai-showcase">
          <div className="container section-heading">
            <p className="eyebrow">Masterpiece Collection</p>
            <h2>Ancient Bonsai Trees, Shaped with Decades of Care</h2>
            <p className="section-subtitle">
              Nurtured directly at our Mawaiya Mirzapur nursery. Each tree has multiple photo perspectives and specific humidity & temperature care plans.
            </p>
          </div>

          <div className="container product-grid">
            {bonsaiList.map((bonsai) => (
              <PlantCard key={bonsai.id} plant={bonsai} onSelectPlant={setSelectedPlant} />
            ))}
          </div>
        </section>

        <AboutSection />

        {/* Care Guide Section */}
        <section id="care" className="care-section">
          <div className="container section-heading">
            <p className="eyebrow">Master Plant Care Guide</p>
            <h2>Essential Care Rules for Healthy Greenery</h2>
          </div>

          <div className="container care-grid">
            {careGuideOverview.map((item) => (
              <article key={item.title} className="care-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Nursery Gallery */}
        <section id="gallery" className="gallery-section">
          <div className="container section-heading">
            <p className="eyebrow">Direct From Mawaiya, Mirzapur</p>
            <h2>Moments from Shivanand Nursery</h2>
          </div>
          <div className="gallery-grid container">
            {galleryImages.map((image, index) => (
              <figure key={index} className={`gallery-item item-${index + 1}`}>
                <img src={image} alt="Shivanand Nursery collection photo" />
              </figure>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container section-heading center-text">
            <p className="eyebrow">Customer Experiences</p>
            <h2>What Plant Lovers & Collectors Say</h2>
          </div>
          <div className="container testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars" aria-label={`${item.rating} star rating`}>
                  {'★'.repeat(item.rating)}
                </div>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
                <small className="location-tag">{item.location}</small>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Modal when clicking any plant */}
      {selectedPlant && (
        <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  )
}

export default App
