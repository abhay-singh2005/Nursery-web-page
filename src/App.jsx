import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Rare Plants', href: '#collection' },
  { label: 'Bonsai', href: '#bonsai' },
  { label: 'About', href: '#about' },
  { label: 'Plant Care', href: '#care' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const categories = [
  {
    icon: '🌳',
    title: 'Rare Plants',
    subtitle: 'Collector specimens with character',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🌿',
    title: 'Bonsai',
    subtitle: 'Elegant living sculptures',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🌸',
    title: 'Flowering Plants',
    subtitle: 'Seasonal color and fragrance',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🪴',
    title: 'Indoor Plants',
    subtitle: 'Fresh foliage for calm interiors',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🌱',
    title: 'Outdoor Plants',
    subtitle: 'Hardy greenery for gardens',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: '🏺',
    title: 'Pots & Accessories',
    subtitle: 'Thoughtful styling essentials',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  },
]

const products = [
  {
    name: 'Ficus Bonsai',
    description: 'Compact canopy, lush foliage and refined structure.',
    status: 'Available',
    price: '₹18,000',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Juniper Bonsai',
    description: 'A classic evergreen form with elegant texture and movement.',
    status: 'Limited',
    price: '₹22,500',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bougainvillea Bonsai',
    description: 'Vibrant color and tropical charm for bright spaces.',
    status: 'Available',
    price: '₹16,800',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Adenium',
    description: 'A sculptural desert succulent with dramatic blooms.',
    status: 'Collector’s Choice',
    price: 'Contact for Price',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Monstera Variegata',
    description: 'Rare variegated foliage with airy, tropical elegance.',
    status: 'Limited',
    price: '₹9,200',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rare Philodendron',
    description: 'An exotic trailing plant with high collector appeal.',
    status: 'Available',
    price: '₹7,500',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Japanese Maple',
    description: 'Delicate foliage and refined structure for collection spaces.',
    status: 'Limited',
    price: '₹26,800',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Jade Bonsai',
    description: 'A charming miniature tree offering longevity and calm beauty.',
    status: 'Available',
    price: '₹12,400',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  },
]

const bonsaiCollection = [
  {
    name: 'Ficus Microcarpa',
    age: '8 years',
    species: 'Ficus microcarpa',
    style: 'Formal upright',
    difficulty: 'Easy',
    price: '₹18,000',
    image:
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Juniperus Procumbens',
    age: '10 years',
    species: 'Juniperus procumbens',
    style: 'Cascade',
    difficulty: 'Moderate',
    price: '₹22,500',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bougainvillea',
    age: '6 years',
    species: 'Bougainvillea spectabilis',
    style: 'Slanting',
    difficulty: 'Moderate',
    price: '₹16,800',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
]

const features = [
  'Carefully Nurtured Plants',
  'Rare & Unique Species',
  'Bonsai Expertise',
  'Healthy Plants',
  'Safe Plant Packaging',
  'Passion-Driven Nursery',
]

const careGuide = [
  { title: 'How to care for bonsai', text: 'Keep roots healthy, balance watering, and ensure gentle airflow for your mini tree.' },
  { title: 'Watering guide', text: 'Water when the topsoil begins to dry, never leaving roots saturated for long periods.' },
  { title: 'Sunlight requirements', text: 'Place most bonsai in bright filtered light and rotate regularly for even growth.' },
  { title: 'Soil guide', text: 'Use airy, well-draining mixes suited to the species and seasonal moisture needs.' },
  { title: 'Repotting', text: 'Refresh roots every 1–2 years to encourage vitality and maintain compact growth.' },
  { title: 'Pruning', text: 'Trim growth carefully to maintain form, balance foliage and encourage new buds.' },
  { title: 'Fertilization', text: 'Feed lightly during growth seasons with balanced nutrients to support healthy foliage.' },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80',
]

const testimonials = [
  {
    name: 'Aarav Mehta',
    quote: 'The bonsai we received was beautifully shaped and healthy. The care guidance was genuinely helpful.',
    rating: 5,
  },
  {
    name: 'Neha Kulkarni',
    quote: 'Every plant felt thoughtfully nurtured. Shivanand’s knowledge and passion are obvious from the first conversation.',
    rating: 5,
  },
  {
    name: 'Ritika Sinha',
    quote: 'We purchased a rare indoor plant and it arrived in perfect condition. Premium quality and warm service.',
    rating: 5,
  },
  {
    name: 'Vikram Arora',
    quote: 'A true collector’s nursery. The variety of bonsai and rare specimens feels curated, not mass-produced.',
    rating: 5,
  },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Shivanand Rare Botanicals home">
          <span className="brand-mark">SRB</span>
          <span>
            <strong>Shivanand Rare Botanicals</strong>
            <small>Rare Plants • Bonsai • Green Heritage</small>
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
          Enquire Now
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
      <div className="floating-leaf leaf-three" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Family-owned plant nursery</p>
          <h1>Where Rare Plants Become Living Art.</h1>
          <p className="hero-subheading">
            Discover rare botanicals, beautiful bonsai, and carefully nurtured plants from Shivanand Rare Botanicals.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="button primary">
              Explore Collection
            </a>
            <a href="#contact" className="button secondary">
              Contact Us
            </a>
          </div>
          <div className="hero-stat-row" aria-label="Nursery highlights">
            <div>
              <strong>15+</strong>
              <span>Years of care</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Plants nurtured</span>
            </div>
            <div>
              <strong>Curated</strong>
              <span>Rare specimens</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-plant-card">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"
              alt="Rare bonsai in a decorative pot"
            />
          </div>
          <div className="mini-card-badge">
            <span className="badge-dot" />
            Rare bonsai collection
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ icon, title, subtitle, image }) {
  return (
    <article className="category-card">
      <div className="category-image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="category-copy">
        <span className="category-icon">{icon}</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  )
}

function PlantCard({ plant }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-body">
        <div className="plant-meta">
          <span className={`status ${plant.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
            {plant.status}
          </span>
        </div>
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="plant-footer">
          <span className="price">{plant.price}</span>
          <a href="#contact" className="text-link">
            View Details
          </a>
        </div>
      </div>
    </article>
  )
}

function BonsaiCard({ bonsai }) {
  return (
    <article className="bonsai-card">
      <img src={bonsai.image} alt={bonsai.name} />
      <div className="bonsai-body">
        <div className="bonsai-topline">
          <h3>{bonsai.name}</h3>
          <span>{bonsai.price}</span>
        </div>
        <ul>
          <li><strong>Age:</strong> {bonsai.age}</li>
          <li><strong>Species:</strong> {bonsai.species}</li>
          <li><strong>Style:</strong> {bonsai.style}</li>
          <li><strong>Care:</strong> {bonsai.difficulty}</li>
        </ul>
      </div>
    </article>
  )
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-portrait-wrap">
          <div className="about-portrait">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Shivanand Singh"
            />
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">The Passion Behind Every Plant</p>
          <h2>Shivanand Singh has a deep passion for plants, rare species, and the art of bonsai.</h2>
          <p>
            What began as a personal interest has grown into a collection dedicated to preserving, nurturing, and sharing beautiful plants.
          </p>
          <blockquote>
            “A plant is not just something we grow; it is something we nurture.”
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container section-heading">
        <p className="eyebrow">Our world in bloom</p>
        <h2>Moments from the nursery</h2>
      </div>
      <div className="gallery-grid container">
        {galleryImages.map((image, index) => (
          <figure key={index} className={`gallery-item item-${index + 1}`}>
            <img src={image} alt="Nursery collection" />
          </figure>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container section-heading center-text">
        <p className="eyebrow">Customer love</p>
        <h2>What plant lovers say</h2>
      </div>
      <div className="container testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <div className="stars" aria-label={`${item.rating} star rating`}>
              {'★'.repeat(item.rating)}
            </div>
            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Visit or enquire</p>
          <h2>Let’s help you find the perfect plant.</h2>
          <ul className="contact-list">
            <li><span>Phone</span><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><span>WhatsApp</span><a href="https://wa.me/919876543210">+91 98765 43210</a></li>
            <li><span>Email</span><a href="mailto:hello@shivanandbotanicals.com">hello@shivanandbotanicals.com</a></li>
            <li><span>Location</span><p>Green Heritage Nursery, Bengaluru, India</p></li>
          </ul>
          <a href="mailto:hello@shivanandbotanicals.com" className="button primary large">
            Enquire About a Plant
          </a>
        </div>

        <div className="contact-visual">
          <div className="map-placeholder">
            <span>Google Maps Placeholder</span>
          </div>
          <div className="social-placeholder">
            <span>Instagram @shivanandrarebotanicals</span>
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
        <div>
          <h3>Shivanand Rare Botanicals</h3>
          <p>Rare Plants • Bonsai • Green Heritage</p>
        </div>

        <nav aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#collection">Rare Plants</a>
          <a href="#bonsai">Bonsai</a>
          <a href="#about">About</a>
          <a href="#care">Plant Care</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />

        <section className="categories-section container">
          <div className="section-heading">
            <p className="eyebrow">Featured collections</p>
            <h2>Curated for every plant story</h2>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section id="collection" className="collection-section">
          <div className="container section-heading">
            <p className="eyebrow">Rare plant collection</p>
            <h2>Distinctive greens for collectors and homes</h2>
          </div>

          <div className="container product-grid">
            {products.map((plant) => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </section>

        <section id="bonsai" className="bonsai-showcase">
          <div className="container section-heading">
            <p className="eyebrow">Bonsai collection</p>
            <h2>Living Sculptures, Crafted by Nature.</h2>
            <p className="section-subtitle">
              Every bonsai is carefully nurtured and shaped over time, bringing patience, balance and artistry into your home.
            </p>
          </div>

          <div className="container bonsai-grid">
            {bonsaiCollection.map((bonsai) => (
              <BonsaiCard key={bonsai.name} bonsai={bonsai} />
            ))}
          </div>
        </section>

        <AboutSection />

        <section className="features-section">
          <div className="container section-heading center-text">
            <p className="eyebrow">Why choose us</p>
            <h2>Thoughtful care, exceptional plants</h2>
          </div>

          <div className="container features-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-card">
                <span>{feature.split(' ')[0]}</span>
                <h3>{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="care" className="care-section">
          <div className="container section-heading">
            <p className="eyebrow">Plant care guide</p>
            <h2>Growing with confidence</h2>
          </div>

          <div className="container care-grid">
            {careGuide.map((item) => (
              <article key={item.title} className="care-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <GallerySection />

        <Testimonials />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
