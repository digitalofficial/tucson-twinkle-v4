'use client';

import { useEffect, useRef } from 'react';
import Logo from '@/components/Logo';
import TwinkleField from '@/components/TwinkleField';
import HouseWithLights from '@/components/HouseWithLights';

/* ================================================================
   DATA
   ================================================================ */

const packages = [
  {
    tier: 'Basic Package',
    name: 'The Helper',
    price: '$199',
    suffix: '+',
    icon: '🪜',
    bestFor: 'Budget-conscious homeowners who already have lights',
    featured: false,
    features: [
      'Customer provides their own lights',
      'We install on roofline, trees, or yard',
      'Professional ladder work & clips',
      'Takedown included in spring',
    ],
  },
  {
    tier: 'Standard Package',
    name: 'The Classic',
    price: '$499',
    suffix: '+',
    icon: '🎄',
    bestFor: 'Hassle-free holiday glow for your home',
    featured: true,
    features: [
      'We provide commercial-grade LED lights',
      'Roofline, gutters, and front trees',
      'Professional installation & takedown',
      'Lights stored for next year',
    ],
  },
  {
    tier: 'Premium Package',
    name: 'The Showstopper',
    price: '$999',
    suffix: '+',
    icon: '✨',
    bestFor: 'Going all-out, neighborhood envy',
    featured: false,
    features: [
      'Premium commercial LEDs (warm white, multi, or custom)',
      'Full property: roofline, trees, walkways, yard',
      'Custom design consultation',
      'Installation, maintenance, takedown & storage',
    ],
  },
  {
    tier: 'Year-Round Package',
    name: 'The Evergreen',
    price: '$1,499',
    suffix: '+/yr',
    icon: '🏠',
    bestFor: 'Year-round curb appeal & smart home integration',
    featured: false,
    features: [
      'Permanent pro-grade architectural lighting',
      'Color-changing RGB LEDs',
      'App-controlled (holidays, parties, game days)',
      'Professional install with hidden wiring',
      'Seasonal programming (Christmas, July 4th, Halloween)',
      'Maintenance included',
    ],
  },
];

const steps = [
  {
    num: 1,
    title: 'Free Estimate',
    desc: 'Tell us about your home and vision. We provide a detailed quote within 24 hours.',
  },
  {
    num: 2,
    title: 'Custom Design',
    desc: 'We plan the perfect layout for your property with light placement and color choices.',
  },
  {
    num: 3,
    title: 'Professional Install',
    desc: 'Our trained crew installs everything safely and cleanly. Usually done in one visit.',
  },
  {
    num: 4,
    title: 'Sit Back & Enjoy',
    desc: 'Flip the switch and watch the magic. We handle takedown and storage when the season ends.',
  },
];

const galleryItems = [
  { label: 'Roofline Lights', gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(220,38,38,0.1))' },
  { label: 'Tree Wrapping', gradient: 'linear-gradient(135deg, rgba(96,165,250,0.15), rgba(255,215,0,0.1))' },
  { label: 'Pathway Lights', gradient: 'linear-gradient(135deg, rgba(255,248,220,0.12), rgba(96,165,250,0.1))' },
  { label: 'Full Property', gradient: 'linear-gradient(135deg, rgba(220,38,38,0.15), rgba(255,215,0,0.1))' },
  { label: 'Commercial Building', gradient: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(96,165,250,0.15))' },
  { label: 'Close-Up Details', gradient: 'linear-gradient(135deg, rgba(96,165,250,0.1), rgba(220,38,38,0.12))' },
];

const stats = [
  { value: '2,000+', label: 'Homes Lit' },
  { value: '6', label: 'Holiday Seasons' },
  { value: 'Same-Week', label: 'Install Available' },
  { value: '5.0', label: 'Star Rating' },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  /* ---- Intersection Observer fallback for non-scroll-timeline browsers ---- */
  useEffect(() => {
    const supportsScrollTimeline =
      CSS.supports?.('animation-timeline: scroll()') ?? false;

    const targets = document.querySelectorAll(
      '.scroll-reveal, .clip-reveal, .scroll-scale'
    );

    if (!supportsScrollTimeline) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('io-visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      targets.forEach((el) => {
        el.classList.add('io-hidden');
        io.observe(el);
      });

      return () => io.disconnect();
    }
  }, []);

  /* ---- Holo card mouse tracking ---- */
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.holo-card');
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
        card.style.setProperty('--holo-angle', `${angle}deg`);
      };
      card.addEventListener('mousemove', fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener('mousemove', fn));
    };
  }, []);

  /* ---- Magnetic button ---- */
  useEffect(() => {
    const btn = document.querySelector<HTMLElement>('.cta-button');
    if (!btn) return;

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.15;
      const dy = (e.clientY - cy) * 0.15;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const handleLeave = () => {
      btn.style.transform = '';
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  /* ---- Magnetic submit button ---- */
  useEffect(() => {
    const btn = document.querySelector<HTMLElement>('.submit-button');
    if (!btn) return;

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.08;
      const dy = (e.clientY - cy) * 0.08;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const handleLeave = () => {
      btn.style.transform = '';
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ============ NAV ============ */}
      <nav className="nav">
        <Logo className="nav-logo" showText={false} />
        <a href="#quote" className="nav-cta">
          Free Estimate
        </a>
      </nav>

      {/* ============ HERO — SVG HOUSE WITH LIGHTS THAT TURN ON ============ */}
      <section ref={heroRef} style={{ position: 'relative', height: '250vh', zIndex: 1, background: 'linear-gradient(to bottom, #070510, #0a0814, #0d0d20)' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* SVG house illustration with individually animated lights */}
          <HouseWithLights />

          {/* Content overlay */}
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', marginBottom: '15vh' }}>
            <Logo className="hero-logo" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FFD700', textShadow: '0 0 40px rgba(255,215,0,0.3)', letterSpacing: '-0.02em', margin: '16px 0' }}>
              Make your home sparkle.
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto 16px', lineHeight: 1.7 }}>
              Professional Christmas light installation and takedown in Tucson, AZ.
              From simple roofline glow to jaw-dropping full-property displays.
            </p>
            <p style={{ color: 'rgba(255,215,0,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '16px' }}>
              ↓ SCROLL TO LIGHT IT UP
            </p>
            <button className="cta-button" onClick={scrollToForm}>
              Get a Free Estimate
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>


      {/* ============ PACKAGES ============ */}
      <section className="section" id="packages">
        <h2 className="section-title scroll-reveal">
          Choose Your <span>Sparkle</span>
        </h2>
        <p className="section-subtitle scroll-reveal">
          From budget-friendly to breathtaking. Every package includes professional
          installation and takedown.
        </p>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`holo-card scroll-scale${pkg.featured ? ' featured' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` } as React.CSSProperties}
            >
              <div className="card-icon">{pkg.icon}</div>
              <div className="card-tier">{pkg.tier}</div>
              <h3 className="card-name">{pkg.name}</h3>
              <div className="card-price">
                {pkg.price}
                <span>{pkg.suffix}</span>
              </div>
              <p className="card-best-for">Best for: {pkg.bestFor}</p>
              <ul className="card-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section section-surface" id="how-it-works">
        <h2 className="section-title scroll-reveal">
          How It <span>Works</span>
        </h2>
        <p className="section-subtitle scroll-reveal">
          Four simple steps to a dazzling home.
        </p>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-item scroll-reveal">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section" id="gallery">
        <h2 className="section-title scroll-reveal">
          Our <span>Work</span>
        </h2>
        <p className="section-subtitle scroll-reveal">
          A glimpse of the holiday magic we create across Tucson.
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery-item scroll-scale">
              <div className="gallery-placeholder">
                <div
                  className="gallery-glow"
                  style={{ background: item.gradient }}
                />
                <span className="gallery-icon">
                  {['🏠', '🌲', '🛤️', '🎇', '🏢', '💡'][i]}
                </span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section section-surface" id="stats">
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item scroll-reveal">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="section" id="testimonial">
        <div className="testimonial-wrapper clip-reveal">
          <p className="testimonial-quote">
            Our house was the talk of the neighborhood. The kids next door thought
            Santa lived here.
          </p>
          <p className="testimonial-author">
            — Maria & Joe R., Catalina Foothills
          </p>
        </div>
      </section>

      {/* ============ SEASONAL BANNER ============ */}
      <section className="section section-surface" id="seasonal">
        <div className="seasonal-banner scroll-reveal">
          <h3>Book Early — We Fill Up Fast!</h3>
          <p>
            October and November are peak booking season. Reserve your spot now to
            guarantee your home is glowing by December. Early birds get priority
            scheduling and the best design options.
          </p>
        </div>
      </section>

      {/* ============ QUOTE FORM ============ */}
      <section className="section" id="quote">
        <h2 className="section-title scroll-reveal">
          Get Your Free <span>Estimate</span>
        </h2>
        <p className="section-subtitle scroll-reveal">
          Tell us about your home and we will get back to you within 24 hours.
        </p>
        <div className="form-wrapper scroll-scale">
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                'Thank you! We will be in touch within 24 hours with your free estimate.'
              );
              formRef.current?.reset();
            }}
          >
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(520) 555-1234"
                />
              </div>
              <div className="form-group">
                <label htmlFor="package">Package Interest</label>
                <select id="package" name="package" required>
                  <option value="">Select a package</option>
                  <option value="basic">Basic — The Helper ($199+)</option>
                  <option value="standard">Standard — The Classic ($499+)</option>
                  <option value="premium">Premium — The Showstopper ($999+)</option>
                  <option value="year-round">Year-Round — The Evergreen ($1,499+/yr)</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="property">Property Type</label>
                <select id="property" name="property" required>
                  <option value="">Select property type</option>
                  <option value="single-story">Single Story</option>
                  <option value="two-story">Two Story</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="linear-feet">
                  Estimated Linear Feet{' '}
                  <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="linear-feet"
                  name="linearFeet"
                  placeholder="e.g. 150"
                />
              </div>
              <div className="form-group full-width">
                <label htmlFor="requests">Special Requests</label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={4}
                  placeholder="Tell us about your vision — colors, areas to focus on, inspiration photos, etc."
                />
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-button">
                  Send My Free Estimate Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <Logo className="footer-logo" />
        <div className="footer-contact">
          <a href="tel:+15205554569">(520) 555-GLOW</a>
          <a href="mailto:hello@tucsontwinkle.com">hello@tucsontwinkle.com</a>
        </div>
        <div className="footer-meta">
          <p>Serving all of Tucson &amp; surrounding areas</p>
          <p>Licensed &amp; Insured</p>
          <p style={{ marginTop: '16px', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Tucson Twinkle. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
