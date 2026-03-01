import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Helmet } from 'react-helmet-async';
import mercedesImage from "@/assets/home/mercedes-amg-front.jpg";

const MobileCarValetingStockport = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDetailingService",
    "name": "SRV Detailing - Mobile Car Valeting Stockport",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    "@id": "https://srvdetailing.co.uk/mobile-car-valeting-stockport",
    "url": "https://srvdetailing.co.uk/",
    "telephone": "+447375759686",
    "priceRange": "£30-£120",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stockport",
      "addressLocality": "Stockport",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4083,
      "longitude": -2.1494
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://share.google/C5GE3wzMfDb2Ninmj"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Stockport"
      },
      {
        "@type": "City",
        "name": "Bramhall"
      },
      {
        "@type": "City",
        "name": "Cheadle"
      },
      {
        "@type": "City",
        "name": "Cheadle Hulme"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Valeting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Valet Service",
            "description": "Comprehensive mobile car valeting package with deep interior cleaning and exterior detailing",
            "provider": {
              "@type": "AutoDetailingService",
              "name": "SRV Detailing"
            }
          },
          "price": "75.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Valeting",
            "description": "Professional interior deep cleaning with steam cleaning and upholstery treatment"
          },
          "price": "45.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Valeting",
            "description": "Hand washing and exterior detailing with protective wax application"
          },
          "price": "35.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mini Valet",
            "description": "Quick mobile car cleaning for regular maintenance"
          },
          "price": "30.00",
          "priceCurrency": "GBP"
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://srvdetailing.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://srvdetailing.co.uk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mobile Car Valeting Stockport",
        "item": "https://srvdetailing.co.uk/mobile-car-valeting-stockport"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is mobile car valeting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile car valeting is a professional car cleaning service that comes directly to you, rather than requiring you to visit a fixed location. Our fully-equipped mobile unit brings all necessary equipment, water, power, and eco-friendly cleaning products to your home, workplace, or chosen location in Stockport."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a mobile valet take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Service duration depends on the package you choose. A mini valet takes 45 minutes to 1 hour. Interior or exterior valeting takes 1.5 to 2 hours each. A full valet takes approximately 2.5 to 3 hours. Specialist car detailing services can take 3 to 5 hours depending on requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide water or electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we arrive fully self-sufficient with our own water supply and power generation equipment. You don't need to provide anything, though access to an outdoor tap or electrical socket can occasionally speed up certain deep cleaning tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Can you remove pet hair and stubborn stains?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pet hair removal and stain treatment are core parts of our interior valeting service. We use specialist tools including rubber rakes and powerful vacuum systems to extract embedded pet hair. Most common stains (food, drink, mud) can be removed or significantly reduced."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Mobile Car Valeting Stockport | Professional Car Detailing at Your Door | SRV Detailing</title>
        <meta name="description" content="Professional mobile car valeting in Stockport. We come to you with full valet, interior/exterior cleaning & detailing services. 22 years experience. Call 07375 759686 for same-day service." />
        <meta name="keywords" content="mobile car valeting Stockport, car detailing Stockport, mobile car wash Stockport, car valeting near me, professional car cleaning Stockport, interior car valeting, exterior car valeting" />
        <link rel="canonical" href="https://srvdetailing.co.uk/mobile-car-valeting-stockport" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mobile Car Valeting Stockport | Professional Car Detailing | SRV Detailing" />
        <meta property="og:description" content="Expert mobile car valeting in Stockport. Professional detailing at your home or workplace. 22 years experience. Same-day availability. Call 07375 759686" />
        <meta property="og:url" content="https://srvdetailing.co.uk/mobile-car-valeting-stockport" />
        <meta property="og:site_name" content="SRV Detailing" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552519507-da3b142c6e3d" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Car Valeting Stockport | SRV Detailing" />
        <meta name="twitter:description" content="Professional mobile car valeting in Stockport. We come to you. 22 years experience. Call 07375 759686" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552519507-da3b142c6e3d" />

        {/* Geo Tags */}
        <meta name="geo.region" content="GB-SKP" />
        <meta name="geo.placename" content="Stockport" />
        <meta name="geo.position" content="53.4083;-2.1494" />
        <meta name="ICBM" content="53.4083, -2.1494" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div style={styles.body}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" style={styles.skipLink}>Skip to main content</a>

        {/* Navbar Component */}
        <Navbar />

        {/* Hero Section */}
        <header style={styles.hero} role="banner">
          <div style={styles.heroBackground} aria-hidden="true"></div>
          <div style={styles.container}>
            <div style={styles.heroContent}>
              <div style={styles.heroLeft}>
                <div style={styles.heroTextContainer}>
                  <h1 style={styles.h1}>
                    Professional Mobile Car Valeting in Stockport
                  </h1>

                  {/* E-E-A-T: Experience Badge */}
                  <div style={styles.excellenceBadge} aria-label="22 years of car detailing experience">
                    <span style={styles.excellenceText}>✓ 22 Years of Professional Experience</span>
                  </div>

                  <p style={styles.heroDescription}>
                    Expert mobile car valeting and detailing services delivered directly to your
                    home, workplace, or preferred location across Stockport and Greater Manchester.
                    Save valuable time with our fully-equipped mobile service featuring eco-friendly
                    products, professional-grade equipment, and skilled technicians dedicated to
                    delivering showroom-quality results.
                  </p>

                  <div style={styles.heroButtons}>
                    <a
                      href="tel:+447375759686"
                      style={styles.callNowBtn}
                      aria-label="Call SRV Detailing for mobile car valeting in Stockport"
                    >
                      <span aria-hidden="true">📞</span> Call Now: 07375 759686
                    </a>
                    <a
                      href="https://share.google/C5GE3wzMfDb2Ninmj"
                      style={styles.bookOnlineBtn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View customer reviews on Google"
                    >
                      <span aria-hidden="true">⭐</span> View 5-Star Reviews
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content - Car Image */}
              <div style={styles.heroRight}>
                <div style={styles.imageContainer}>
                  <img
                    src={(mercedesImage as any).src || mercedesImage}
                    alt="Professional mobile car valeting service in Stockport showing detailed Mercedes AMG front view"
                    style={styles.carImage}
                    loading="eager"
                    width="1000"
                    height="667"
                  />
                  <div style={styles.imageOverlay} aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Trust Bar - E-E-A-T Signals */}
        <aside style={styles.trustBar} aria-label="Service highlights">
          <div style={styles.container}>
            <div style={styles.trustItems}>
              <div style={styles.trustItem}>
                <div style={styles.trustIcon} aria-hidden="true">⭐</div>
                <p style={styles.trustText}>5-Star Rated on Google</p>
              </div>
              <div style={styles.trustItem}>
                <div style={styles.trustIcon} aria-hidden="true">🚗</div>
                <p style={styles.trustText}>Fully Mobile Service</p>
              </div>
              <div style={styles.trustItem}>
                <div style={styles.trustIcon} aria-hidden="true">🌱</div>
                <p style={styles.trustText}>Eco-Friendly Products</p>
              </div>
              <div style={styles.trustItem}>
                <div style={styles.trustIcon} aria-hidden="true">⚡</div>
                <p style={styles.trustText}>Same-Day Available</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main id="main-content">
          {/* Service Modules */}
          <section style={styles.serviceModules} aria-labelledby="services-heading">
            <div style={styles.container}>
              <h2 id="services-heading" style={styles.h2}>
                Our Mobile Car Valeting Services in Stockport
              </h2>
              <p style={styles.sectionIntro}>
                From quick maintenance cleans to comprehensive detailing packages, SRV Detailing
                delivers professional mobile car valeting services tailored to your vehicle's needs
                and your schedule across Stockport, Bramhall, Cheadle, Hazel Grove, and surrounding areas.
              </p>

              <div style={styles.servicesGrid}>
                {/* Full Valet */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">✨</div>
                  <h3 style={styles.h3} itemProp="name">Full Valet Service</h3>
                  <p style={styles.servicePrice} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="GBP">£</span>
                    <span itemProp="price" content="75">75</span> starting price
                  </p>
                  <p style={styles.serviceDescription} itemProp="description">
                    Our most comprehensive mobile valeting package combining deep interior cleaning
                    with thorough exterior detailing for a complete showroom-quality finish delivered
                    to your location.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Full valet service features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Complete interior vacuum and steam clean
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Leather conditioning and fabric protection
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Full exterior hand wash and wax
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Wheel cleaning and tyre dressing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Glass cleaning inside and out
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Dashboard and trim restoration
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Door shuts and boot detailed
                    </li>
                  </ul>
                </article>

                {/* Interior Valeting */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">🏠</div>
                  <h3 style={styles.h3} itemProp="name">Interior Valeting</h3>
                  <p style={styles.servicePrice} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="GBP">£</span>
                    <span itemProp="price" content="45">45</span> starting price
                  </p>
                  <p style={styles.serviceDescription} itemProp="description">
                    Professional deep cleaning of your vehicle's interior using commercial-grade
                    equipment and eco-friendly products. Perfect for families dealing with spills,
                    pet hair, and daily wear, or professionals maintaining a pristine vehicle appearance.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Interior valeting features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Thorough vacuum of seats, carpets, and boot
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Steam cleaning of upholstery and mats
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Dashboard and console deep clean
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Door card and trim detailing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Pet hair removal treatment
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Air vent cleaning and deodorising
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Stain treatment and odour elimination
                    </li>
                  </ul>
                </article>

                {/* Exterior Valeting */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">💧</div>
                  <h3 style={styles.h3} itemProp="name">Exterior Valeting</h3>
                  <p style={styles.servicePrice} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="GBP">£</span>
                    <span itemProp="price" content="35">35</span> starting price
                  </p>
                  <p style={styles.serviceDescription} itemProp="description">
                    Professional hand washing and exterior detailing using pH-neutral shampoos,
                    premium waxes, and proven techniques that protect your paintwork whilst
                    delivering a brilliant, long-lasting shine.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Exterior valeting features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Pre-wash and snow foam application
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Hand wash with two-bucket method
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Wheel and arch deep cleaning
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Tyre shine and dressing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Paintwork wax or sealant
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Glass and mirror polishing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Trim and plastic restoration
                    </li>
                  </ul>
                </article>

                {/* Mini Valet */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">⚡</div>
                  <h3 style={styles.h3} itemProp="name">Mini Valet</h3>
                  <p style={styles.servicePrice} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="GBP">£</span>
                    <span itemProp="price" content="30">30</span> starting price
                  </p>
                  <p style={styles.serviceDescription} itemProp="description">
                    Quick yet effective mobile car cleaning service ideal for busy professionals
                    managing tight schedules, commuters requiring regular maintenance, or anyone
                    needing a refresh between comprehensive valet services.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Mini valet features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Interior vacuum and wipe-down
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Exterior hand wash
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Window cleaning inside and out
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Dashboard quick clean
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Wheel cleaning
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Perfect for weekly or fortnightly maintenance
                    </li>
                  </ul>
                </article>

                {/* Car Detailing */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">🎨</div>
                  <h3 style={styles.h3} itemProp="name">Professional Car Detailing</h3>
                  <p style={styles.servicePrice} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="priceCurrency" content="GBP">£</span>
                    <span itemProp="price" content="120">120</span> starting price
                  </p>
                  <p style={styles.serviceDescription} itemProp="description">
                    Advanced mobile car detailing including machine polishing, paint correction,
                    ceramic coating application, and headlight restoration for automotive enthusiasts
                    and owners seeking perfection and long-term paint protection.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Car detailing features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Machine polishing and paint correction
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Swirl mark and scratch removal
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Ceramic coating protection
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Headlight restoration and protection
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Engine bay detailing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Chrome and metal polishing
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Long-lasting showroom results
                    </li>
                  </ul>
                </article>

                {/* Eco-Friendly */}
                <article style={styles.serviceCard} itemScope itemType="https://schema.org/Service">
                  <div style={styles.serviceIcon} aria-hidden="true">🌿</div>
                  <h3 style={styles.h3} itemProp="name">Eco-Friendly Mobile Valeting</h3>
                  <p style={styles.servicePrice}>Standard Service Pricing</p>
                  <p style={styles.serviceDescription} itemProp="description">
                    All SRV Detailing mobile valeting services use biodegradable, environmentally
                    responsible cleaning products and water-conscious techniques without compromising
                    on cleaning quality or results.
                  </p>
                  <ul style={styles.serviceFeatures} aria-label="Eco-friendly valeting features">
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Waterless and low-water wash options
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Biodegradable cleaning solutions
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> pH-neutral shampoos safe for all surfaces
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Eco-friendly waxes and sealants
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Responsible waste water management
                    </li>
                    <li style={styles.serviceFeatureItem}>
                      <span style={styles.serviceFeatureCheck} aria-hidden="true">✓</span> Safe for the environment and your vehicle
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section style={{ ...styles.section, ...styles.bgLight }} aria-labelledby="benefits-heading">
            <div style={styles.container}>
              <h2 id="benefits-heading" style={styles.h2}>
                Why Choose Mobile Car Valeting in Stockport?
              </h2>
              <p style={styles.sectionIntro}>
                Mobile valeting eliminates the inconvenience of traditional car washes by bringing
                professional car cleaning directly to you, saving time whilst delivering superior
                results that fixed-location services cannot match.
              </p>

              <div style={styles.benefitsGrid}>
                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Ultimate Convenience</h3>
                  <p style={styles.benefitItemP}>
                    Eliminate wasted time driving to car washes or waiting in long queues. We arrive
                    at your home, workplace, or any Stockport location at a time that suits your
                    schedule—early morning appointments, lunch break services, or evening slots available.
                  </p>
                </div>

                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Perfect for Busy Professionals</h3>
                  <p style={styles.benefitItemP}>
                    Have your car valeted whilst you work, attend meetings, or focus on business priorities.
                    Ideal for busy professionals, sales teams, and executives who need their vehicle
                    looking pristine without disrupting their working day or productivity.
                  </p>
                </div>

                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Family-Friendly Service</h3>
                  <p style={styles.benefitItemP}>
                    Perfect for families juggling school runs, shopping trips, and children's activities.
                    We handle everything from sticky spills to muddy footprints, pet hair removal, and
                    odour elimination, restoring your family car's interior to pristine condition.
                  </p>
                </div>

                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Workplace Fleet Valeting</h3>
                  <p style={styles.benefitItemP}>
                    We serve businesses throughout Stockport, providing regular mobile valeting for
                    company fleets, dealership vehicles, and employee car care programmes at offices,
                    business parks, and commercial premises across the region.
                  </p>
                </div>

                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Home Service Excellence</h3>
                  <p style={styles.benefitItemP}>
                    Enjoy professional car cleaning convenience on your driveway. Watch your vehicle
                    transform whilst you relax at home, enjoy your weekend, complete household tasks,
                    or spend quality time with family.
                  </p>
                </div>

                <div style={styles.benefitItem}>
                  <h3 style={styles.benefitItemH3}>Professional-Grade Equipment</h3>
                  <p style={styles.benefitItemP}>
                    We arrive fully equipped with professional-grade valeting tools, commercial steam
                    cleaners, dual-action polishers, and eco-friendly products—everything needed for
                    thorough, high-quality cleaning that exceeds DIY and basic wash standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section style={{ ...styles.section, ...styles.bgWhite }} aria-labelledby="process-heading">
            <div style={styles.container}>
              <h2 id="process-heading" style={styles.h2}>
                How Our Mobile Valeting Service Works in Stockport
              </h2>
              <p style={styles.sectionIntro}>
                Booking professional car valeting in Stockport is straightforward with SRV Detailing.
                Here's exactly what to expect from our mobile service from first contact to final results:
              </p>

              <div style={styles.processSteps}>
                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">1</div>
                  <h3 style={styles.stepH3}>Contact Us</h3>
                  <p style={styles.stepP}>
                    Call <a href="tel:+447375759686" style={styles.inlineLink}>07375 759686</a> or
                    visit our <a href="https://srvdetailing.co.uk/" style={styles.inlineLink} rel="noopener noreferrer">website</a> to
                    discuss your requirements. Tell us what service you need, your vehicle type, and
                    your preferred location anywhere in Stockport or Greater Manchester.
                  </p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">2</div>
                  <h3 style={styles.stepH3}>Choose Your Package</h3>
                  <p style={styles.stepP}>
                    Select from our mini valet, full valet, interior or exterior cleaning, or specialist
                    detailing services based on your vehicle's current condition, your specific needs,
                    and your budget. We'll provide clear pricing with no hidden costs.
                  </p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">3</div>
                  <h3 style={styles.stepH3}>Schedule Your Appointment</h3>
                  <p style={styles.stepP}>
                    We offer flexible booking slots including early mornings, daytime, evenings, and
                    weekends to fit your schedule. Same-day service is often available for urgent
                    requirements throughout Stockport and surrounding areas.
                  </p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">4</div>
                  <h3 style={styles.stepH3}>We Come to You</h3>
                  <p style={styles.stepP}>
                    Our experienced mobile valeting team arrives punctually at your chosen Stockport
                    location—home, office, or elsewhere—fully equipped with our own water supply,
                    power generation equipment, and professional cleaning products.
                  </p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">5</div>
                  <h3 style={styles.stepH3}>Professional Valeting</h3>
                  <p style={styles.stepP}>
                    We perform thorough, meticulous cleaning using proven techniques, professional
                    equipment, and premium products. Service duration ranges from 45 minutes for a
                    mini valet to 3+ hours for comprehensive detailing packages.
                  </p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber} aria-hidden="true">6</div>
                  <h3 style={styles.stepH3}>Enjoy Your Clean Car</h3>
                  <p style={styles.stepP}>
                    Your vehicle is returned looking refreshed, protected, and showroom-ready with
                    attention to every detail. We provide aftercare advice and maintenance tips to
                    help you maintain these results between professional services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section style={{ ...styles.section, ...styles.bgLight }} aria-labelledby="comparison-heading">
            <div style={styles.container}>
              <h2 id="comparison-heading" style={styles.h2}>
                Mobile Valeting vs Traditional Car Washes: The Difference
              </h2>
              <p style={styles.sectionIntro}>
                Understanding why mobile car valeting delivers superior results compared to automated
                car washes and standard hand wash services helps you make an informed choice for your
                vehicle's care and maintenance.
              </p>

              <div style={styles.tableWrapper}>
                <table style={styles.comparisonTable} aria-label="Comparison of car cleaning services">
                  <thead>
                    <tr>
                      <th scope="col" style={styles.comparisonTh}>Service Feature</th>
                      <th scope="col" style={styles.comparisonTh}>SRV Mobile Valeting</th>
                      <th scope="col" style={styles.comparisonTh}>Fixed Car Wash</th>
                      <th scope="col" style={styles.comparisonTh}>Automated Wash</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Comes to Your Location</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Professional Equipment</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={styles.comparisonTd}>Variable Quality</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Hand Washing</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Deep Interior Cleaning</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={styles.comparisonTd}>Limited Service</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Paint Protection Applied</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={styles.comparisonTd}>Rarely Offered</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Eco-Friendly Products</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={styles.comparisonTd}>Variable</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>Personalised Service</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={styles.comparisonTd}>Limited</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                    <tr>
                      <td style={styles.comparisonTd}><strong>No Travel Required</strong></td>
                      <td style={{ ...styles.comparisonTd, ...styles.check }} aria-label="Yes">✓</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                      <td style={{ ...styles.comparisonTd, ...styles.cross }} aria-label="No">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section style={{ ...styles.section, ...styles.bgWhite }} aria-labelledby="coverage-heading">
            <div style={styles.container}>
              <h2 id="coverage-heading" style={styles.h2}>
                Mobile Car Valeting Coverage: Stockport and Greater Manchester
              </h2>
              <p style={styles.sectionIntro}>
                We provide professional mobile valeting services throughout Stockport and the wider
                Greater Manchester region, bringing convenience and quality directly to your doorstep
                wherever you're located.
              </p>

              <div style={styles.locationsGrid}>
                <div style={styles.locationItem}>Stockport Town Centre</div>
                <div style={styles.locationItem}>Bramhall</div>
                <div style={styles.locationItem}>Cheadle</div>
                <div style={styles.locationItem}>Cheadle Hulme</div>
                <div style={styles.locationItem}>Hazel Grove</div>
                <div style={styles.locationItem}>Marple</div>
                <div style={styles.locationItem}>Romiley</div>
                <div style={styles.locationItem}>Bredbury</div>
                <div style={styles.locationItem}>Woodley</div>
                <div style={styles.locationItem}>Reddish</div>
                <div style={styles.locationItem}>Heaton Moor</div>
                <div style={styles.locationItem}>Heaton Chapel</div>
                <div style={styles.locationItem}>Gatley</div>
                <div style={styles.locationItem}>Stepping Hill</div>
                <div style={styles.locationItem}>Davenport</div>
                <div style={styles.locationItem}>Offerton</div>
                <div style={styles.locationItem}>Brinnington</div>
                <div style={styles.locationItem}>Portwood</div>
                <div style={styles.locationItem}>Edgeley</div>
                <div style={styles.locationItem}>Greater Manchester</div>
              </div>

              <p style={styles.areasNote}>
                Not sure if we cover your specific area? Give us a call on{' '}
                <a href="tel:+447375759686" style={styles.inlineLink}>07375 759686</a> and
                we'll be happy to confirm our mobile valeting availability for your location
                throughout Stockport and surrounding areas.
              </p>
            </div>
          </section>

          {/* Testimonials - E-E-A-T */}
          <section style={{ ...styles.section, ...styles.bgLight }} aria-labelledby="testimonials-heading">
            <div style={styles.container}>
              <h2 id="testimonials-heading" style={styles.h2}>
                What Our Stockport Customers Say About Our Mobile Valeting
              </h2>
              <p style={styles.sectionIntro}>
                Real feedback from satisfied customers across Stockport and Greater Manchester who've
                experienced our professional mobile car valeting service firsthand.
              </p>

              <div style={styles.testimonialGrid}>
                <article style={styles.testimonial} itemScope itemType="https://schema.org/Review">
                  <div style={styles.stars} aria-label="5 star rating">★★★★★</div>
                  <p style={styles.testimonialText} itemProp="reviewBody">
                    Absolutely brilliant service. They came to my office in Cheadle Hulme and had
                    my car looking brand new by the time I finished work. The interior was spotless
                    and they even removed some stubborn stains I thought were permanent. Professional,
                    reliable, and excellent value. Highly recommend SRV Detailing!
                  </p>
                  <p style={styles.testimonialAuthor} itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Sarah M.</span>, Cheadle Hulme
                  </p>
                  <meta itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" content="5" />
                </article>

                <article style={styles.testimonial} itemScope itemType="https://schema.org/Review">
                  <div style={styles.stars} aria-label="5 star rating">★★★★★</div>
                  <p style={styles.testimonialText} itemProp="reviewBody">
                    As a busy mum with two young kids, having the mobile valet come to my house in
                    Bramhall was a lifesaver. No more dragging the children to a car wash and waiting
                    around. The team were professional, friendly, and the car looked absolutely immaculate.
                    They removed all the sticky handprints and crumbs. Worth every penny.
                  </p>
                  <p style={styles.testimonialAuthor} itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Emma L.</span>, Bramhall
                  </p>
                  <meta itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" content="5" />
                </article>

                <article style={styles.testimonial} itemScope itemType="https://schema.org/Review">
                  <div style={styles.stars} aria-label="5 star rating">★★★★★</div>
                  <p style={styles.testimonialText} itemProp="reviewBody">
                    I've used SRV Detailing for our company fleet in Stockport for six months now.
                    Always reliable, always thorough, and the drivers really appreciate having clean
                    vehicles. The convenience of them coming to our premises is fantastic for our
                    business, and the pricing is very competitive for the quality of work.
                  </p>
                  <p style={styles.testimonialAuthor} itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">James R.</span>, Business Owner, Stockport
                  </p>
                  <meta itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" content="5" />
                </article>
              </div>

              <div style={styles.googleReviewCta}>
                <p>
                  See more verified customer reviews on our{' '}
                  <a
                    href="https://share.google/C5GE3wzMfDb2Ninmj"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.inlineLink}
                    aria-label="View SRV Detailing reviews on Google"
                  >
                    Google Business Profile
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* FAQs - Accordion for better UX */}
          <section style={{ ...styles.section, ...styles.bgWhite }} aria-labelledby="faq-heading">
            <div style={styles.container}>
              <h2 id="faq-heading" style={styles.h2}>
                Frequently Asked Questions: Mobile Car Valeting in Stockport
              </h2>

              <div style={styles.faqContainer}>
                {faqData.map((faq, index) => (
                  <div key={index} style={styles.faqItem}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={styles.faqQuestion}
                      aria-expanded={activeAccordion === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      {faq.question}
                      <span style={styles.faqToggle} aria-hidden="true">
                        {activeAccordion === index ? '−' : '+'}
                      </span>
                    </button>
                    {activeAccordion === index && (
                      <div
                        id={`faq-answer-${index}`}
                        style={styles.faqAnswer}
                        role="region"
                      >
                        <p style={styles.faqAnswerP}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={styles.ctaSection} aria-labelledby="cta-heading">
            <div style={styles.container}>
              <h2 id="cta-heading" style={styles.ctaSectionH2}>
                Book Your Mobile Car Valet in Stockport Today
              </h2>
              <p style={styles.ctaSectionP}>
                Experience the convenience of professional car valeting delivered to your doorstep.
                Call us now for same-day availability or to discuss your specific requirements with
                our friendly team.
              </p>
              <div style={styles.ctaButtons}>
                <a
                  href="tel:+447375759686"
                  style={styles.ctaPrimary}
                  aria-label="Call SRV Detailing for mobile car valeting"
                >
                  📞 Call Now: 07375 759686
                </a>
                <a
                  href="https://srvdetailing.co.uk/"
                  style={styles.ctaSecondary}
                  rel="noopener noreferrer"
                  aria-label="Visit SRV Detailing website"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={styles.footer} role="contentinfo">
          <div style={styles.container}>
            <div style={styles.footerGrid}>
              <div style={styles.footerSection}>
                <h4 style={styles.footerSectionH4}>SRV Detailing</h4>
                <p style={styles.footerSectionP}>
                  Professional mobile car valeting services throughout Stockport and Greater
                  Manchester. We bring showroom-quality cleaning, detailing, and protection
                  directly to your doorstep.
                </p>
              </div>

              <nav style={styles.footerSection} aria-label="Services">
                <h4 style={styles.footerSectionH4}>Our Services</h4>
                <ul style={styles.footerSectionUl}>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Full Valet</a></li>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Interior Valeting</a></li>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Exterior Valeting</a></li>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Mini Valet</a></li>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Car Detailing</a></li>
                  <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Eco-Friendly Cleaning</a></li>
                </ul>
              </nav>

              <nav style={styles.footerSection} aria-label="Service areas">
                <h4 style={styles.footerSectionH4}>Service Areas</h4>
                <ul style={styles.footerSectionUl}>
                  <li style={styles.footerSectionLi}>Stockport Town Centre</li>
                  <li style={styles.footerSectionLi}>Bramhall</li>
                  <li style={styles.footerSectionLi}>Cheadle & Cheadle Hulme</li>
                  <li style={styles.footerSectionLi}>Hazel Grove</li>
                  <li style={styles.footerSectionLi}>Marple & Romiley</li>
                  <li style={styles.footerSectionLi}>Greater Manchester</li>
                </ul>
              </nav>

              <div style={styles.footerSection}>
                <h4 style={styles.footerSectionH4}>Contact Us</h4>
                <ul style={styles.footerSectionUl}>
                  <li style={styles.footerSectionLi}>
                    <a href="tel:+447375759686" style={styles.footerSectionA}>📞 07375 759686</a>
                  </li>
                  <li style={styles.footerSectionLi}>
                    <a href="https://srvdetailing.co.uk/" target="_blank" rel="noopener noreferrer" style={styles.footerSectionA}>
                      www.srvdetailing.co.uk
                    </a>
                  </li>
                  <li style={styles.footerSectionLi}>
                    <a
                      href="https://share.google/C5GE3wzMfDb2Ninmj"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.footerSectionA}
                    >
                      Google Business Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div style={styles.footerBottom}>
              <p>&copy; {new Date().getFullYear()} SRV Detailing. Professional Mobile Car Valeting in Stockport and Greater Manchester. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

// FAQ Data
const faqData = [
  {
    question: "What is mobile car valeting?",
    answer: "Mobile car valeting is a professional car cleaning service that comes directly to you, rather than requiring you to visit a fixed location. Our fully-equipped mobile unit brings all necessary equipment, water, power, and eco-friendly cleaning products to your home, workplace, or chosen location in Stockport. We perform the same high-quality interior and exterior cleaning services you'd expect from a professional car wash, but with the added convenience of not having to leave your property."
  },
  {
    question: "How long does a mobile valet take?",
    answer: "Service duration depends on the package you choose and your vehicle's condition. A mini valet typically takes 45 minutes to 1 hour, ideal for regular maintenance. Our interior or exterior valeting services usually require 1.5 to 2 hours each. A full valet, which includes comprehensive interior and exterior cleaning, takes approximately 2.5 to 3 hours. Specialist car detailing services including paint correction and ceramic coating can take 3 to 5 hours or more, depending on the level of enhancement required."
  },
  {
    question: "Do I need to provide water or electricity?",
    answer: "We arrive fully self-sufficient with our own water supply and power generation equipment, so you don't need to provide anything. However, if you're happy to offer access to an outdoor tap or electrical socket, it can occasionally speed up the service for certain deep cleaning tasks. We'll discuss this when booking, but it's entirely optional and never a requirement for our mobile valeting service."
  },
  {
    question: "What's the difference between a valet and a car wash?",
    answer: "A standard car wash typically focuses on a quick exterior clean, often using automated brushes that can potentially scratch paintwork. Car valeting is a comprehensive, hands-on service that includes detailed interior cleaning (vacuuming, upholstery treatment, dashboard restoration), careful hand washing of the exterior, wheel cleaning, glass polishing, and often protective wax application. Valeting takes significantly longer but delivers showroom-quality results that a basic car wash cannot achieve."
  },
  {
    question: "Are your cleaning products safe for my car?",
    answer: "Absolutely. We use only pH-neutral, professional-grade cleaning products specifically formulated for automotive use. Our eco-friendly solutions are safe for all vehicle surfaces including paintwork, glass, leather, fabric, plastic trim, and alloy wheels. We never use harsh chemicals that could damage your vehicle's finish or harm the environment. All products are biodegradable and meet current environmental standards whilst delivering exceptional cleaning results."
  },
  {
    question: "Can you remove pet hair and stubborn stains?",
    answer: "Yes, pet hair removal and stain treatment are core parts of our interior valeting service. We use specialist tools including rubber rakes and powerful vacuum systems to extract embedded pet hair from upholstery and carpets. For stains, we assess the type and fabric before applying appropriate cleaning solutions and techniques. Most common stains (food, drink, mud) can be removed or significantly reduced. We'll always discuss realistic expectations for particularly stubborn or set-in stains during our assessment."
  },
  {
    question: "Do you offer same-day mobile valeting in Stockport?",
    answer: "We often have same-day availability, particularly for mini valet and standard cleaning services. Availability depends on our daily schedule and your location within Stockport. For the best chance of same-day service, we recommend calling us before midday. Full valet and specialist detailing services typically require advance booking to ensure we allocate sufficient time. Contact us on 07375 759686 and we'll do our best to accommodate your timeline."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major debit and credit cards, and bank transfers. Payment is taken after the service is completed and you're completely satisfied with the results. We'll provide a clear invoice detailing the services performed. For regular customers and businesses requiring fleet valeting, we can arrange monthly invoicing arrangements."
  },
  {
    question: "Can you valet at my workplace?",
    answer: "Yes, workplace valeting is one of our most popular services. We regularly visit office car parks, business premises, and commercial sites across Stockport. This allows professionals to have their vehicle cleaned during the working day without any disruption to their schedule. We work quietly and professionally, and can coordinate with your office management for regular visits or one-off bookings. Many businesses arrange this as an employee benefit."
  },
  {
    question: "How often should I have my car valeted?",
    answer: "The ideal frequency depends on your usage and preferences. For busy families or those with pets, a monthly full valet helps maintain cleanliness and vehicle condition. Professionals might opt for a fortnightly mini valet to keep their car presentable for client meetings. Those with lower usage might find a full valet every two to three months sufficient. Regular valeting not only maintains appearance but also protects your vehicle's interior and paintwork, potentially enhancing resale value."
  },
  {
    question: "What's included in your eco-friendly approach?",
    answer: "Our eco-friendly commitment includes using biodegradable cleaning solutions, waterless wash options where appropriate, and responsible waste water management. We use pH-neutral shampoos that won't harm local waterways, microfibre cloths instead of disposable materials, and concentrated products to reduce plastic packaging. Our equipment is regularly serviced for efficiency, and we continually seek new ways to reduce environmental impact whilst maintaining our high cleaning standards."
  },
  {
    question: "Do you valet all types of vehicles?",
    answer: "Yes, we valet all vehicle types including small city cars, family saloons, estate cars, SUVs, 4x4s, MPVs, vans, luxury vehicles, and sports cars. Each vehicle type may have specific requirements, and our pricing adjusts accordingly based on size and complexity. We're experienced with all upholstery types (fabric, leather, alcantara) and all exterior finishes. If you have a specialist or classic vehicle, just mention this when booking so we can tailor our approach."
  }
];

// Responsive, mobile-optimized styles
const styles: { [key: string]: React.CSSProperties } = {
  // Accessibility
  skipLink: {
    position: 'absolute' as const,
    top: '-40px',
    left: 0,
    background: '#10714C',
    color: 'white',
    padding: '8px',
    textDecoration: 'none',
    zIndex: 100,
  },

  // Base styles
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    lineHeight: 1.6,
    color: '#333',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box' as const,
    backgroundColor: '#ffffff',
    fontSize: '16px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },

  // Hero section - Mobile optimized
  hero: {
    position: 'relative' as const,
    padding: '80px 0 60px',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center' as const,
    overflow: 'hidden' as const,
  },
  heroBackground: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(16, 113, 76, 0.92), rgba(16, 113, 76, 0.75)), url("https://images.unsplash.com/photo-1600857358116-2a0185dd5e52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  heroContent: {
    position: 'relative' as const,
    display: 'flex',
    gap: '40px',
    alignItems: 'center' as const,
    zIndex: 1,
    flexWrap: 'wrap' as const,
  },
  heroLeft: {
    flex: '1 1 100%',
    maxWidth: '100%',
  },
  heroTextContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  h1: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: 700,
    color: '#10714C',
    marginBottom: '20px',
    lineHeight: 1.2,
  },
  excellenceBadge: {
    display: 'inline-block' as const,
    background: '#10714C',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '14px',
  },
  excellenceText: {
    fontWeight: 600,
  },
  heroDescription: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    marginBottom: '25px',
    color: '#555',
    lineHeight: 1.6,
  },
  heroButtons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  callNowBtn: {
    background: '#10714C',
    color: 'white',
    border: 'none',
    padding: '15px 25px',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer' as const,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    flex: '1 1 auto',
    minWidth: '200px',
  },
  bookOnlineBtn: {
    background: 'transparent',
    color: '#10714C',
    border: '2px solid #10714C',
    padding: '15px 25px',
    borderRadius: '4px',
    fontWeight: 600,
    cursor: 'pointer' as const,
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    gap: '8px',
    flex: '1 1 auto',
    minWidth: '200px',
  },
  heroRight: {
    flex: '1 1 100%',
    maxWidth: '100%',
    display: 'none' as const, // Hidden on mobile
  },
  imageContainer: {
    position: 'relative' as const,
    borderRadius: '12px',
    overflow: 'hidden' as const,
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
  },
  carImage: {
    width: '100%',
    height: 'auto',
    display: 'block' as const,
    borderRadius: '12px',
  },
  imageOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(16, 113, 76, 0.1), rgba(16, 113, 76, 0.3))',
  },

  // Trust bar
  trustBar: {
    background: 'white',
    padding: '25px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  trustItems: {
    display: 'flex',
    justifyContent: 'space-around' as const,
    flexWrap: 'wrap',
    gap: '20px',
    textAlign: 'center' as const,
  },
  trustItem: {
    flex: '1 1 150px',
    minWidth: '150px',
  },
  trustIcon: {
    fontSize: '32px',
    marginBottom: '8px',
    color: '#10714C',
  },
  trustText: {
    fontWeight: 600,
    color: '#10714C',
    fontSize: 'clamp(13px, 2vw, 15px)',
    margin: 0,
  },

  // Section styles
  section: {
    padding: '50px 0',
  },
  bgWhite: {
    background: 'white',
  },
  bgLight: {
    background: '#f8f9fa',
  },
  h2: {
    fontSize: 'clamp(28px, 4vw, 38px)',
    marginBottom: '20px',
    color: '#10714C',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 'clamp(20px, 3vw, 26px)',
    marginBottom: '15px',
    color: '#10714C',
    fontWeight: 600,
  },
  sectionIntro: {
    fontSize: 'clamp(16px, 2vw, 18px)',
    marginBottom: '20px',
    maxWidth: '900px',
    color: '#555',
    lineHeight: 1.7,
  },

  // Services grid - Mobile responsive
  serviceModules: {
    padding: '50px 0',
    background: '#fff',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  serviceCard: {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
  },
  serviceIcon: {
    fontSize: '40px',
    marginBottom: '15px',
    color: '#10714C',
  },
  servicePrice: {
    color: '#10714C',
    fontWeight: 700,
    fontSize: 'clamp(20px, 3vw, 24px)',
    margin: '12px 0',
  },
  serviceDescription: {
    color: '#555',
    marginBottom: '15px',
    lineHeight: 1.6,
    fontSize: '15px',
  },
  serviceFeatures: {
    listStyle: 'none',
    marginTop: '15px',
    padding: 0,
  },
  serviceFeatureItem: {
    padding: '6px 0',
    paddingLeft: '28px',
    position: 'relative' as const,
    color: '#555',
    fontSize: '14px',
  },
  serviceFeatureCheck: {
    position: 'absolute' as const,
    left: 0,
    color: '#10714C',
    fontWeight: 'bold' as const,
    fontSize: '16px',
  },

  // Benefits grid
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  benefitItem: {
    background: 'white',
    padding: '20px',
    borderLeft: '4px solid #10714C',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
  },
  benefitItemH3: {
    fontSize: 'clamp(18px, 2.5vw, 20px)',
    marginBottom: '10px',
    color: '#10714C',
  },
  benefitItemP: {
    color: '#555',
    lineHeight: 1.7,
    fontSize: '15px',
  },

  // Process steps
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  step: {
    textAlign: 'center' as const,
    padding: '25px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
  },
  stepNumber: {
    width: '50px',
    height: '50px',
    background: '#10714C',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    fontSize: '24px',
    fontWeight: 700,
    margin: '0 auto 15px',
  },
  stepH3: {
    fontSize: 'clamp(18px, 2.5vw, 20px)',
    marginBottom: '12px',
    color: '#10714C',
  },
  stepP: {
    color: '#555',
    lineHeight: 1.6,
    fontSize: '15px',
  },

  // Comparison table - Mobile responsive
  tableWrapper: {
    overflowX: 'auto' as const,
    margin: '30px 0',
    WebkitOverflowScrolling: 'touch' as const,
  },
  comparisonTable: {
    width: '100%',
    minWidth: '600px',
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden' as const,
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    borderCollapse: 'collapse' as const,
  },
  comparisonTh: {
    background: '#10714C',
    color: 'white',
    padding: '15px',
    textAlign: 'left' as const,
    fontWeight: 600,
    fontSize: '14px',
  },
  comparisonTd: {
    padding: '12px 15px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '14px',
  },
  check: {
    color: '#10714C',
    fontWeight: 'bold' as const,
    fontSize: '18px',
  },
  cross: {
    color: '#f44336',
    fontWeight: 'bold' as const,
    fontSize: '18px',
  },

  // Service areas
  locationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '12px',
    marginTop: '25px',
  },
  locationItem: {
    background: 'white',
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    fontWeight: 500,
    color: '#10714C',
    fontSize: '14px',
  },
  areasNote: {
    marginTop: '25px',
    textAlign: 'center' as const,
    fontSize: 'clamp(15px, 2vw, 16px)',
    color: '#555',
    lineHeight: 1.6,
  },

  // Testimonials
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  },
  testimonial: {
    background: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    position: 'relative' as const,
  },
  stars: {
    color: '#ffc107',
    fontSize: '16px',
    marginBottom: '12px',
  },
  testimonialText: {
    fontStyle: 'italic' as const,
    marginBottom: '15px',
    color: '#555',
    position: 'relative' as const,
    zIndex: 1,
    lineHeight: 1.7,
    fontSize: '15px',
  },
  testimonialAuthor: {
    fontWeight: 600,
    color: '#10714C',
    fontSize: '14px',
  },
  googleReviewCta: {
    textAlign: 'center' as const,
    marginTop: '30px',
    fontSize: 'clamp(16px, 2vw, 18px)',
  },

  // FAQ - Accordion style
  faqContainer: {
    maxWidth: '900px',
    margin: '30px auto',
  },
  faqItem: {
    background: 'white',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    overflow: 'hidden' as const,
  },
  faqQuestion: {
    width: '100%',
    padding: '20px',
    fontWeight: 600,
    color: '#10714C',
    fontSize: 'clamp(16px, 2.5vw, 18px)',
    margin: 0,
    background: 'white',
    border: 'none',
    textAlign: 'left' as const,
    cursor: 'pointer' as const,
    display: 'flex',
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    transition: 'background 0.2s',
  },
  faqToggle: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    color: '#10714C',
    marginLeft: '10px',
  },
  faqAnswer: {
    padding: '0 20px 20px',
    color: '#555',
    lineHeight: 1.8,
    animation: 'fadeIn 0.3s ease',
  },
  faqAnswerP: {
    margin: 0,
    fontSize: '15px',
  },

  // CTA section
  ctaSection: {
    background: '#10714C',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center' as const,
  },
  ctaSectionH2: {
    color: 'white',
    marginBottom: '15px',
    fontSize: 'clamp(26px, 4vw, 38px)',
  },
  ctaSectionP: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    marginBottom: '30px',
    opacity: 0.95,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  ctaButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center' as const,
    flexWrap: 'wrap',
    padding: '0 20px',
  },
  ctaPrimary: {
    display: 'inline-block' as const,
    background: 'white',
    color: '#10714C',
    padding: '16px 35px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    flex: '1 1 auto',
    minWidth: '200px',
    maxWidth: '300px',
  },
  ctaSecondary: {
    display: 'inline-block' as const,
    background: 'transparent',
    color: 'white',
    padding: '16px 35px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: 'clamp(16px, 2vw, 18px)',
    fontWeight: 600,
    border: '2px solid white',
    transition: 'all 0.3s ease',
    flex: '1 1 auto',
    minWidth: '200px',
    maxWidth: '300px',
  },

  // Footer
  footer: {
    background: '#10714C',
    color: 'white',
    padding: '40px 0 20px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px',
    marginBottom: '30px',
  },
  footerSection: {
    marginBottom: '15px',
  },
  footerSectionH4: {
    color: 'white',
    marginBottom: '15px',
    fontSize: 'clamp(16px, 2vw, 18px)',
  },
  footerSectionUl: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerSectionLi: {
    marginBottom: '10px',
  },
  footerSectionA: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontSize: '14px',
  },
  footerSectionP: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.7,
    fontSize: '14px',
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '25px',
    textAlign: 'center' as const,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '13px',
  },

  // Inline links
  inlineLink: {
    color: '#10714C',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

// Media queries would be handled via CSS-in-JS library or separate CSS file in production

export default MobileCarValetingStockport;
