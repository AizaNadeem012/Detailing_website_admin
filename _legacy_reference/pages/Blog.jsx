import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar"
import blog1 from "@/assets/blog1.png"
import blog2 from "@/assets/blog2.png"
import blog3 from "@/assets/blog3.png"
import blog4 from "@/assets/blog4.png"
import blog5 from "@/assets/blog5.png"
import blog6 from "@/assets/blog6.png"

// --- CSS STYLES ---
const BlogPageStyles = `
/* --- General Page Structure --- */
.blog-page-container {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}
* {
    box-sizing: border-box;
}

/* --- Navbar Styling --- */
.app-navbar {
    background-color: #1E7B4C;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-logo {
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
}

.navbar-links a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-size: 1em;
    padding: 5px 0;
    transition: opacity 0.3s ease;
    border-bottom: 2px solid transparent;
}

.navbar-links a:hover {
    opacity: 0.9;
    border-bottom: 2px solid #90EE90;
}

/* --- Hero Section --- */
.app-hero-section {
    background: linear-gradient(135deg, #1E7B4C 0%, #145938 100%);
    padding: 100px 20px 80px;
    text-align: center;
    color: white;
    border-bottom: 5px solid #90EE90;
}

.hero-title {
    font-size: 3em;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-title .highlight {
    color: #90EE90;
}

.hero-subtitle {
    font-size: 1.3em;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.95;
}

.location-badges {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.location-badge {
    background-color: rgba(255,255,255,0.2);
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.95em;
    border: 1px solid rgba(255,255,255,0.4);
}

.search-bar {
    display: flex;
    justify-content: center;
    max-width: 550px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.search-bar input {
    flex-grow: 1;
    padding: 14px 15px;
    border: none;
    font-size: 1em;
    outline: none;
    color: #333;
}

.search-button {
    background-color: #145938;
    color: white;
    padding: 14px 25px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #0d3d25;
}

/* --- Marquee Section --- */
.marquee-section {
    background-color: #145938;
    color: white;
    padding: 12px 0;
    overflow: hidden;
    font-weight: 500;
}

.marquee-content {
    white-space: nowrap;
    animation: marquee 25s linear infinite;
    padding: 0 100%;
}

@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

/* --- Blog List Section --- */
.blog-list-section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-intro {
    text-align: center;
    margin-bottom: 60px;
}

.section-intro h2 {
    font-size: 2.5em;
    color: #1E7B4C;
    margin-bottom: 15px;
}

.section-intro p {
    font-size: 1.1em;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
}

.blog-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
}

/* --- Blog Card --- */
.blog-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
    cursor: pointer;
}

.blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.blog-card-image-container {
    position: relative;
}

.blog-card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.blog-card-category {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #145938;
    color: white;
    padding: 5px 12px;
    border-radius: 3px;
    font-size: 0.85em;
    font-weight: bold;
}

.blog-card-location {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: rgba(30, 123, 76, 0.9);
    color: white;
    padding: 5px 12px;
    border-radius: 3px;
    font-size: 0.85em;
    font-weight: bold;
}

.blog-card-content {
    padding: 25px;
}

.blog-card-title {
    font-size: 1.5em;
    color: #222;
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 1.3;
}

.blog-card-excerpt {
    color: #555;
    margin-bottom: 25px;
    font-size: 0.95em;
}

.blog-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    padding-top: 15px;
}

.blog-card-date {
    font-size: 0.9em;
    color: #888;
}

.read-more-link {
    color: #1E7B4C;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    cursor: pointer;
}

/* --- Selected Post View --- */
.selected-post-container {
    padding: 80px 20px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #eee;
    margin-bottom: 80px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.post-back-button {
    background: none;
    border: none;
    color: #1E7B4C;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    transition: opacity 0.3s;
}

.post-back-button:hover {
    opacity: 0.8;
}

.post-back-button span {
    margin-right: 5px;
}

.post-featured-image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 40px;
}

.post-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
    flex-wrap: wrap;
}

.post-meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    font-size: 0.95em;
}

.post-content {
    font-size: 1.05em;
    line-height: 1.8;
    color: #444;
}

.post-content h2 {
    color: #1E7B4C;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8em;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
}

.post-content h3 {
    color: #145938;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.4em;
}

.post-content p {
    margin-bottom: 20px;
}

.post-content ul, .post-content ol {
    margin-bottom: 20px;
    padding-left: 30px;
}

.post-content li {
    margin-bottom: 10px;
}

.post-content strong {
    color: #222;
    font-weight: 600;
}

.highlight-box {
    background-color: #f0f4f0;
    border-left: 4px solid #1E7B4C;
    padding: 20px;
    margin: 30px 0;
    border-radius: 4px;
}

.faq-section {
    margin-top: 50px;
    padding-top: 40px;
    border-top: 3px solid #1E7B4C;
}

.faq-item {
    margin-bottom: 25px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
}

.faq-question {
    font-size: 1.2em;
    color: #1E7B4C;
    font-weight: 600;
    margin-bottom: 10px;
}

.faq-answer {
    color: #555;
    line-height: 1.7;
}

/* --- Load More Button --- */
.load-more-container {
    text-align: center;
    margin-top: 60px;
}

.load-more-button {
    background-color: #1E7B4C;
    color: white;
    padding: 14px 35px;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 600;
}

.load-more-button:hover {
    background-color: #145938;
}

/* --- Footer --- */
.app-footer {
    background-color: #1E7B4C;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-links {
    margin-bottom: 20px;
}

.footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1em;
    transition: opacity 0.3s ease;
}

.footer-links a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

.copyright {
    font-size: 0.9em;
    opacity: 0.7;
}

/* --- Responsive --- */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.2em;
    }
    .hero-subtitle {
        font-size: 1.1em;
    }
    .blog-list-section {
        padding: 50px 15px;
    }
    .blog-list-grid {
        grid-template-columns: 1fr;
    }
    .search-bar {
        flex-direction: column;
    }
    .search-bar input, .search-button {
        width: 100%;
        padding: 12px 15px;
    }
    .footer-links a {
        display: block;
        margin: 10px 0;
    }
}
`;

// --- BLOG POST DATA (Manchester & Stockport Car Detailing) ---
const carDetailingBlogPosts = [
    {
        id: 1,
        title: 'Professional Car Detailing in Manchester & Stockport: Complete Guide 2025',
        excerpt: 'Discover why professional car detailing goes beyond a simple wash. Learn about paint correction, ceramic coating, and protection services across Manchester and Stockport.',
        date: 'January 20, 2025',
        location: 'Manchester',
        imageUrl: blog1,
        category: 'Complete Guides',
        readTime: '12 min',
        content: `
            <h2>What Is Professional Car Detailing?</h2>
            <p>Professional car detailing is the meticulous process of restoring and protecting every surface of your vehicle—both interior and exterior—to a condition that often exceeds factory standards. Unlike a £10 automated car wash that takes five minutes, detailing involves hours of careful work using specialist tools, professional-grade chemicals, and proven techniques.</p>
            
            <p>With over 12 years of experience serving private car owners, fleet managers, and businesses across Greater Manchester, we've detailed everything from daily drivers to prestige vehicles worth six figures. This comprehensive guide explains what professional car detailing actually involves, why paint correction matters, and how services differ between Manchester and Stockport locations.</p>

            <h2>The Detailing Process Explained</h2>
            <p>A full exterior detail typically includes several critical stages:</p>

            <h3>Decontamination Stage</h3>
            <ul>
                <li><strong>Snow foam pre-wash</strong> to loosen dirt without touching the paint</li>
                <li><strong>Two-bucket hand wash</strong> using pH-neutral shampoo and premium microfiber wash mitts</li>
                <li><strong>Clay bar treatment</strong> to remove bonded contaminants (tar, iron fallout, industrial pollution)</li>
                <li><strong>Tar and adhesive removal</strong></li>
                <li><strong>Iron fallout remover</strong> application (turns purple when reacting with embedded particles)</li>
            </ul>

            <h3>Correction Stage</h3>
            <ul>
                <li><strong>Paint depth gauge readings</strong> to ensure safe polishing</li>
                <li><strong>Machine polishing</strong> using dual-action or rotary polishers</li>
                <li><strong>Compound application</strong> to remove swirl marks, scratches, and oxidation</li>
                <li><strong>Refinement polishing</strong> for a mirror-like gloss</li>
                <li><strong>Panel-by-panel inspection</strong> under halogen lighting</li>
            </ul>

            <h3>Protection Stage</h3>
            <ul>
                <li><strong>Ceramic coating application</strong> (SiO2-based protection lasting 2–5 years)</li>
                <li><strong>Paint protection film</strong> on high-impact areas</li>
                <li><strong>Glass treatment</strong> for water repellency</li>
                <li><strong>Wheel sealant</strong> application</li>
                <li><strong>Tyre dressing</strong></li>
            </ul>

            <div class="highlight-box">
                <strong>Expert Insight:</strong> Interior detailing addresses every cabin surface including deep vacuuming, leather conditioning, fabric extraction cleaning, dashboard restoration, odour neutralisation, and window polishing. This level of thoroughness simply cannot be achieved with a quick wash.
            </div>

            <h2>Manchester vs Stockport: Service Coverage & Local Considerations</h2>

            <h3>Manchester Coverage Areas</h3>
            <p>Our Manchester operations serve the entire metropolitan area, with particularly high demand from:</p>
            <ul>
                <li><strong>South Manchester:</strong> Didsbury, Chorlton, Withington, West Didsbury, and Northenden see strong uptake due to the concentration of prestige vehicles and homeowners with driveways suitable for mobile valeting.</li>
                <li><strong>City Centre & Salford Quays:</strong> Apartment dwellers and businesses in Spinningfields, Deansgate, and Salford Quays typically prefer in-shop services due to limited on-site access.</li>
                <li><strong>North Manchester:</strong> Prestwich, Whitefield, and Crumpsall residents often opt for mobile services during weekends.</li>
                <li><strong>East Manchester:</strong> Areas like Levenshulme and Gorton increasingly request fleet services for delivery vehicles and taxi companies.</li>
            </ul>

            <p>Manchester's urban environment presents specific challenges. Road salt during winter months, industrial fallout near the city centre, and tree sap in leafy suburbs like Didsbury all require specialist decontamination treatments.</p>

            <h3>Stockport Coverage Areas</h3>
            <p>Stockport operations extend across:</p>
            <ul>
                <li><strong>Stockport Town Centre:</strong> Commercial clients and residents in apartments near the Merseyway shopping centre</li>
                <li><strong>Cheadle & Gatley:</strong> High concentration of family vehicles and executive cars, with strong demand for ceramic coating and paint protection film</li>
                <li><strong>Bramhall & Hazel Grove:</strong> Predominantly detached properties with ample driveway space, ideal for mobile valeting appointments</li>
                <li><strong>Marple & Romiley:</strong> Rural-edge locations where vehicles accumulate more dirt from country lanes</li>
                <li><strong>Cheadle Hulme:</strong> Popular area for fleet services serving local businesses</li>
            </ul>

            <h2>Mobile vs In-Shop Services: Which Suits Your Location?</h2>

            <h3>Mobile Valeting Benefits</h3>
            <p>Mobile valeting works exceptionally well across residential areas of both Manchester and Stockport. If you have a driveway, garage access, or dedicated parking space, we bring everything needed—water supply (via onboard tanks), power generators, and professional equipment.</p>

            <p><strong>Mobile services suit:</strong></p>
            <ul>
                <li>Homeowners in Didsbury, Bramhall, Cheadle, and similar areas</li>
                <li>Businesses with car parks (offices in Stockport town centre or Manchester Business Park)</li>
                <li>Fleet operators with dedicated yards</li>
                <li>Customers who cannot spare their vehicle for a full day</li>
            </ul>

            <h3>In-Shop Service Advantages</h3>
            <p><strong>In-shop services become necessary when:</strong></p>
            <ul>
                <li>Paint correction is required (needs controlled lighting and temperature)</li>
                <li>Ceramic coating application is booked (must be applied in a dust-free environment)</li>
                <li>Deep interior extraction is needed (requires specialised extraction equipment)</li>
                <li>The vehicle needs overnight curing time</li>
            </ul>

            <p>Our Stockport facility offers climate-controlled bays with professional lighting rigs essential for detecting paint defects invisible in natural light. This matters tremendously when performing multi-stage paint correction on darker vehicles where swirl marks hide easily.</p>

            <div class="faq-section">
                <h2>Frequently Asked Questions</h2>
                
                <div class="faq-item">
                    <div class="faq-question">How long does a full car detail take in Manchester?</div>
                    <div class="faq-answer">A basic valet takes 2-3 hours. A full exterior and interior detail requires 4-6 hours. Paint correction with ceramic coating typically needs 8-12 hours and may require overnight curing at our Stockport facility.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Do you offer mobile detailing across all areas of Manchester and Stockport?</div>
                    <div class="faq-answer">Yes, we provide mobile valeting within a 15-mile radius of Manchester and Stockport town centres. This covers Didsbury, Chorlton, Cheadle, Bramhall, Marple, Sale, Altrincham, and surrounding areas. In-shop services are available at our Stockport facility for advanced treatments.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">What's the difference between a car wash and professional detailing?</div>
                    <div class="faq-answer">A car wash removes surface dirt in 5-10 minutes. Professional detailing is a multi-hour process involving decontamination (clay bar, iron removal), paint correction (machine polishing to remove swirls and scratches), and protection (ceramic coating or wax). Detailing restores and protects; washing maintains cleanliness.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">How much does ceramic coating cost in Stockport?</div>
                    <div class="faq-answer">Ceramic coating prices start from £350 for small vehicles (Fiesta, Polo) and range to £800+ for large SUVs or prestige cars. This includes full paint correction, decontamination, and application of a professional-grade coating with 2-5 year durability. Mobile application isn't recommended—our climate-controlled facility ensures optimal bonding.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Can you detail fleet vehicles for Manchester businesses?</div>
                    <div class="faq-answer">Absolutely. We service delivery fleets, taxi companies, car hire businesses, and corporate vehicle pools across Manchester and Stockport. Volume discounts are available, and we can schedule regular maintenance programmes to keep your fleet presentable year-round.</div>
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: 'Ceramic Coating Manchester: Why It\'s Essential for Greater Manchester\'s Climate',
        excerpt: 'Manchester\'s unpredictable weather accelerates paint deterioration. Learn how ceramic coating provides superior protection compared to traditional wax.',
        date: 'January 18, 2025',
        location: 'Manchester',
        imageUrl: blog2,
        category: 'Ceramic Coating',
        readTime: '9 min',
        content: `
            <h2>Why Manchester's Climate Makes Ceramic Coating Essential</h2>
            <p>Manchester's weather is notoriously unpredictable. Rain, road spray, and prolonged damp conditions accelerate paint deterioration. Ceramic coating provides a semi-permanent solution far superior to traditional wax.</p>

            <h3>How Ceramic Coating Works</h3>
            <p>Ceramic coating is a liquid polymer containing silicon dioxide (SiO2) that chemically bonds with your vehicle's clear coat. Once cured, it forms a protective layer approximately 2 microns thick with these properties:</p>

            <ul>
                <li><strong>Hydrophobic effect:</strong> Water beads and rolls off the surface, carrying dirt with it. This self-cleaning action reduces how often the car needs washing.</li>
                <li><strong>Chemical resistance:</strong> Bird droppings, tree sap, and acid rain cannot etch through the coating to damage the paint beneath—provided they're removed within a reasonable timeframe.</li>
                <li><strong>UV protection:</strong> The coating filters harmful ultraviolet radiation that causes paint oxidation and fading, particularly important for vehicles parked outdoors in areas like Didsbury, Bramhall, or Stockport town centre.</li>
                <li><strong>Scratch resistance:</strong> While not scratch-proof, ceramic coating provides significantly better protection against minor abrasions from washing or light contact than unprotected paint.</li>
                <li><strong>Enhanced gloss:</strong> The coating deepens paint colour and creates a wet-look shine that lasts years, not weeks.</li>
            </ul>

            <h2>Ceramic Coating vs Traditional Wax: The Data</h2>
            <p>Traditional carnauba wax lasts 4-8 weeks in Manchester's climate before breaking down. A professional ceramic coating lasts 2-5 years depending on the product and maintenance.</p>

            <div class="highlight-box">
                <strong>Cost Analysis:</strong> Waxing your car four times per year costs approximately £200-£280 annually. Over five years, that's £1,000-£1,400. A one-time ceramic coating costs £350-£800 and outlasts 20+ wax applications while providing superior protection.
            </div>

            <h3>The Application Process</h3>
            <p>Ceramic coating cannot be applied to dirty or defective paint. The process includes:</p>

            <ol>
                <li><strong>Deep decontamination:</strong> Snow foam, two-bucket wash, clay bar treatment, and iron fallout removal</li>
                <li><strong>Paint correction:</strong> Machine polishing to remove swirl marks, scratches, and oxidation (essential for a flawless finish)</li>
                <li><strong>Panel wipe:</strong> Isopropyl alcohol removes all oils and residues</li>
                <li><strong>Coating application:</strong> Applied panel-by-panel using applicator pads in a climate-controlled environment</li>
                <li><strong>Curing time:</strong> 24-48 hours before the vehicle can be exposed to moisture</li>
            </ol>

            <h2>Why In-Shop Application Matters</h2>
            <p>Our Stockport facility provides the controlled environment essential for proper ceramic coating application. Temperature must remain between 15-25°C, humidity below 70%, and the space must be dust-free. Mobile application simply cannot guarantee these conditions, which is why we never offer ceramic coating as a mobile service.</p>

            <h3>Maintenance After Ceramic Coating</h3>
            <p>Ceramic coating drastically reduces maintenance requirements, but it's not maintenance-free:</p>

            <ul>
                <li>Wash every 2-3 weeks using pH-neutral shampoo and the two-bucket method</li>
                <li>Avoid automatic car washes with harsh brushes</li>
                <li>Remove bird droppings and tree sap within 48 hours</li>
                <li>Apply a ceramic coating booster spray every 3-6 months to maintain hydrophobicity</li>
                <li>Annual inspection to check coating integrity</li>
            </ul>

            <h2>Service Areas: Manchester & Stockport</h2>
            <p>We apply ceramic coating at our Stockport facility for customers across:</p>
            <ul>
                <li>Manchester city centre, Salford Quays, Spinningfields</li>
                <li>South Manchester: Didsbury, Chorlton, Withington, Sale</li>
                <li>Stockport: Cheadle, Bramhall, Hazel Grove, Marple, Gatley</li>
                <li>North Manchester: Prestwich, Whitefield, Bury</li>
                <li>East Manchester: Levenshulme, Gorton, Droylsden</li>
            </ul>

            <div class="faq-section">
                <h2>Ceramic Coating FAQs</h2>
                
                <div class="faq-item">
                    <div class="faq-question">Can I apply ceramic coating myself at home in Manchester?</div>
                    <div class="faq-answer">Consumer-grade ceramic coatings exist, but professional application offers significant advantages. We use industrial-grade products (9H hardness ratings) that require specific application techniques and curing conditions. DIY products typically last 6-12 months versus 2-5 years for professional coatings. Without proper paint correction beforehand, you'll be sealing in existing defects.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">How long does ceramic coating last in Manchester's wet climate?</div>
                    <div class="faq-answer">Professional ceramic coatings last 2-5 years in Manchester's climate with proper maintenance. The constant rain actually helps the self-cleaning effect work effectively. Road salt in winter and UV exposure in summer are the primary factors affecting longevity, which is why we recommend annual inspections.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Is ceramic coating worth it for an older car in Stockport?</div>
                    <div class="faq-answer">Absolutely, provided the paint is corrected first. We've successfully coated vehicles over 10 years old. The paint correction stage removes oxidation, swirls, and scratches accumulated over years, then ceramic coating prevents further deterioration. This is particularly valuable for older cars parked outdoors in areas like Bramhall or Cheadle where UV exposure is significant.</div>
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: 'Paint Correction Stockport: Removing Swirl Marks & Restoring Gloss',
        excerpt: 'Learn how professional paint correction removes years of accumulated swirl marks, scratches, and oxidation using multi-stage machine polishing.',
        date: 'January 15, 2025',
        location: 'Stockport',
        imageUrl: blog3,
        category: 'Paint Correction',
        readTime: '10 min',
        content: `
            <h2>Understanding Paint Correction</h2>
            <p>Paint correction is the process of levelling the top layer of clear coat to remove surface imperfections. This is achieved through machine polishing, using various grades of abrasive compounds and pads.</p>

            <p>After 12 years of performing paint correction across Stockport and Manchester, we've worked on everything from daily drivers with moderate swirling to show cars requiring flawless finishes. This guide explains what paint correction involves, when it's necessary, and what results to expect.</p>

            <h2>Common Paint Defects We Address</h2>

            <h3>Swirl Marks</h3>
            <p>Those circular scratches visible under direct sunlight, typically caused by:</p>
            <ul>
                <li>Automatic car washes with dirty brushes</li>
                <li>Washing with dirty sponges or cloths</li>
                <li>Drying with contaminated towels</li>
                <li>Using incorrect wash techniques</li>
            </ul>
            <p>Dark colours (black, navy, dark grey) show swirl marks most prominently. They're particularly prevalent on vehicles regularly washed at petrol station car washes around Manchester and Stockport.</p>

            <h3>Scratches & Clear Coat Damage</h3>
            <p>Light scratches that haven't penetrated to the base coat can often be polished out. We use paint depth gauges to measure clear coat thickness before correction begins—typically 40-60 microns on modern vehicles. This ensures we remove only what's necessary without compromising the protective clear coat.</p>

            <h3>Oxidation & Fading</h3>
            <p>UV exposure causes paint to oxidise, appearing chalky or faded. This is particularly common on:</p>
            <ul>
                <li>Vehicles parked outdoors in Bramhall, Cheadle, or Marple</li>
                <li>Red and black colours (most susceptible to UV damage)</li>
                <li>Cars over 5 years old without protective coatings</li>
            </ul>

            <h3>Etching & Chemical Staining</h3>
            <ul>
                <li><strong>Bird droppings:</strong> Acidic content etches into clear coat within 24-48 hours</li>
                <li><strong>Tree sap:</strong> Common in leafy areas like Didsbury and causes permanent staining if not removed promptly</li>
                <li><strong>Industrial fallout:</strong> Particularly problematic near Manchester city centre</li>
                <li><strong>Water spots:</strong> Hard water deposits from Manchester's water supply</li>
            </ul>

            <h2>The Three Stages of Paint Correction</h2>

            <h3>Stage 1: Compounding (Cutting)</h3>
            <p>This aggressive stage uses coarse compounds and cutting pads to remove the most severe defects:</p>
            <ul>
                <li>Removes approximately 2-5 microns of clear coat</li>
                <li>Eliminates deep scratches, heavy oxidation, and severe swirling</li>
                <li>Uses rotary or dual-action polishers at higher speeds</li>
                <li>Leaves some light hazing that requires further refinement</li>
            </ul>

            <h3>Stage 2: Polishing (Refining)</h3>
            <p>This intermediate stage refines the finish left by compounding:</p>
            <ul>
                <li>Removes the hazing created during compounding</li>
                <li>Uses medium-grade polishes and softer pads</li>
                <li>Begins to reveal the deep gloss potential of the paint</li>
                <li>Removes approximately 1-2 microns of clear coat</li>
            </ul>

            <h3>Stage 3: Finishing (Jeweling)</h3>
            <p>This final step achieves a mirror-like finish:</p>
            <ul>
                <li>Uses ultra-fine finishing polishes and soft foam pads</li>
                <li>Removes any remaining micro-marring</li>
                <li>Achieves maximum gloss and clarity</li>
                <li>Removes less than 1 micron of clear coat</li>
            </ul>

            <div class="highlight-box">
                <strong>Important:</strong> Not all vehicles require three-stage correction. Light swirling might only need a single-stage polish, while severe defects require the full three-stage process. We assess each vehicle individually and recommend only what's necessary.
            </div>

            <h2>The Importance of Proper Lighting</h2>
            <p>Professional paint correction cannot be done correctly without proper lighting. At our Stockport facility, we use:</p>
            <ul>
                <li><strong>Halogen work lights:</strong> Reveal defects invisible in natural light</li>
                <li><strong>LED inspection panels:</strong> Show true paint clarity from all angles</li>
                <li><strong>Direct sunlight testing:</strong> Final verification before customer delivery</li>
            </ul>

            <p>This is why we never offer paint correction as a mobile service. The controlled environment at our Stockport workshop ensures defects are completely removed, not just hidden.</p>

            <h2>Paint Correction Pricing: What to Expect</h2>
            <p>Pricing depends on vehicle size, paint condition, and correction stage required:</p>
            <ul>
                <li><strong>Single-stage correction:</strong> £250-£400 (small to large vehicles)</li>
                <li><strong>Two-stage correction:</strong> £400-£600</li>
                <li><strong>Three-stage correction:</strong> £600-£900</li>
            </ul>

            <p>These prices include full decontamination, masking of trim, and a final wax or sealant protection layer. For permanent protection, we recommend adding ceramic coating (£350-£800 depending on product).</p>

            <h2>Service Areas</h2>
            <p>We perform paint correction at our Stockport facility for customers from:</p>
            <ul>
                <li>Stockport: Cheadle, Bramhall, Hazel Grove, Marple, Gatley, Romiley</li>
                <li>South Manchester: Didsbury, Chorlton, Sale, Altrincham</li>
                <li>Manchester city centre and Salford Quays</li>
                <li>North Manchester: Prestwich, Whitefield</li>
            </ul>

            <div class="faq-section">
                <h2>Paint Correction FAQs</h2>
                
                <div class="faq-item">
                    <div class="faq-question">How long does paint correction take in Stockport?</div>
                    <div class="faq-answer">Single-stage correction takes 4-6 hours. Two-stage correction requires 6-8 hours. Three-stage correction for show-quality finishes needs 8-12 hours and may require the vehicle to stay overnight. We never rush the process—proper paint correction cannot be done in a few hours.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Will paint correction remove all scratches?</div>
                    <div class="faq-answer">Paint correction removes scratches that haven't penetrated through the clear coat. Deep scratches reaching the base coat or primer cannot be polished out and require touch-up paint or respraying. We assess your vehicle with paint depth gauges before starting and advise honestly on what's achievable.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">How often can paint be corrected?</div>
                    <div class="faq-answer">Modern vehicles have approximately 40-60 microns of clear coat. Each correction removes 2-8 microns depending on severity. A vehicle can typically undergo 3-5 full corrections over its lifetime. This is why we always recommend ceramic coating after correction—it prevents new defects forming, eliminating the need for repeated correction.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Can you correct paint on older cars in Manchester?</div>
                    <div class="faq-answer">Absolutely. We've successfully corrected paint on vehicles over 20 years old. Older single-stage paints (pre-1980s) require different techniques than modern clear coat systems, but the results can be spectacular. Oxidised paint that looks faded often reveals vibrant colour underneath once corrected.</div>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: 'Mobile Car Valeting Manchester: Professional Service at Your Location',
        excerpt: 'Discover the convenience of mobile valeting across Manchester. From Didsbury to Prestwich, we bring professional detailing to your driveway.',
        date: 'January 12, 2025',
        location: 'Manchester',
        imageUrl: blog4,
        category: 'Mobile Services',
        readTime: '8 min',
        content: `
            <h2>Mobile Car Valeting: Professional Results at Your Convenience</h2>
            <p>Mobile valeting brings the professional detail shop experience directly to your home or business. For homeowners across Manchester with driveways, business owners with car parks, or fleet managers with vehicle yards, mobile services offer unmatched convenience without compromising quality.</p>

            <p>Over 12 years of mobile operations across Greater Manchester, we've refined our service to deliver professional results regardless of location. This guide explains what mobile valeting involves, which services work best on-site, and coverage across Manchester and Stockport.</p>

            <h2>What Mobile Valeting Includes</h2>

            <h3>Exterior Valet</h3>
            <ul>
                <li><strong>Snow foam pre-wash:</strong> Loosens dirt without touching paint</li>
                <li><strong>Two-bucket hand wash:</strong> Using premium microfiber wash mitts and pH-neutral shampoo</li>
                <li><strong>Wheel cleaning:</strong> Dedicated wheel cleaner and brushes for arches, faces, and barrels</li>
                <li><strong>Tyre dressing:</strong> Long-lasting satin finish (not greasy shine)</li>
                <li><strong>Glass cleaning:</strong> Inside and out, streak-free finish</li>
                <li><strong>Trim restoration:</strong> Plastic and rubber trim brought back to deep black</li>
                <li><strong>Quick detailer spray:</strong> Final wipe-down for showroom finish</li>
            </ul>

            <h3>Interior Valet</h3>
            <ul>
                <li><strong>Deep vacuuming:</strong> Seats, carpets, boot, under seats, air vents</li>
                <li><strong>Dashboard and console cleaning:</strong> Using appropriate cleaners for each material type</li>
                <li><strong>Leather conditioning:</strong> pH-balanced products that clean and protect</li>
                <li><strong>Fabric cleaning:</strong> Spot treatment for stains or full extraction if required</li>
                <li><strong>Door cards and panels:</strong> Complete wipe-down</li>
                <li><strong>Odour treatment:</strong> Ozone treatment available for persistent smells</li>
            </ul>

            <h3>Additional Mobile Services</h3>
            <ul>
                <li><strong>Clay bar treatment:</strong> Removes bonded contaminants</li>
                <li><strong>Wax or sealant application:</strong> 3-6 month protection</li>
                <li><strong>Headlight restoration:</strong> Removes yellowing and oxidation</li>
                <li><strong>Engine bay cleaning:</strong> Steam cleaned and dressed</li>
                <li><strong>Pet hair removal:</strong> Specialist tools for stubborn animal hair</li>
            </ul>

            <div class="highlight-box">
                <strong>What We Don't Offer Mobile:</strong> Paint correction and ceramic coating require controlled lighting and climate conditions only available at our Stockport facility. Attempting these services on a driveway produces inferior results and risks damaging your paint.
            </div>

            <h2>Mobile Service Coverage: Manchester Areas</h2>

            <h3>South Manchester (High Demand)</h3>
            <p>Our busiest mobile area due to the concentration of detached properties with driveways:</p>
            <ul>
                <li><strong>Didsbury:</strong> East Didsbury, West Didsbury—ideal for weekend mobile appointments</li>
                <li><strong>Chorlton:</strong> Popular for Saturday morning slots</li>
                <li><strong>Withington & Fallowfield:</strong> Student areas—often booked during university holidays</li>
                <li><strong>Sale & Altrincham:</strong> High uptake of regular monthly maintenance valets</li>
            </ul>

            <h3>Manchester City Centre</h3>
            <p>Mobile services in the city centre require specific arrangements:</p>
            <ul>
                <li><strong>Apartment complexes:</strong> We work with buildings offering secure underground or covered parking</li>
                <li><strong>Business premises:</strong> Spinningfields, Deansgate offices with dedicated car parks</li>
                <li><strong>Salford Quays:</strong> MediaCityUK and surrounding developments</li>
            </ul>

            <h3>North Manchester</h3>
            <ul>
                <li><strong>Prestwich:</strong> High demand for mobile services, particularly weekends</li>
                <li><strong>Whitefield:</strong> Regular bookings for family vehicles</li>
                <li><strong>Crumpsall & Cheetham Hill:</strong> Growing mobile service area</li>
            </ul>

            <h3>East Manchester</h3>
            <ul>
                <li><strong>Levenshulme:</strong> Increasing demand for mobile valeting</li>
                <li><strong>Gorton:</strong> Fleet services for local businesses</li>
                <li><strong>Droylsden & Audenshaw:</strong> Residential mobile appointments</li>
            </ul>

            <h2>Mobile Service Coverage: Stockport Areas</h2>

            <h3>Prime Coverage Zones</h3>
            <ul>
                <li><strong>Cheadle & Gatley:</strong> High concentration of executive vehicles, strong demand for monthly maintenance</li>
                <li><strong>Bramhall:</strong> Large driveways, ideal for comprehensive mobile detailing</li>
                <li><strong>Hazel Grove & Marple:</strong> Semi-rural locations, popular for weekend appointments</li>
                <li><strong>Cheadle Hulme:</strong> Family vehicles and fleet services</li>
                <li><strong>Romiley & Bredbury:</strong> Regular mobile routes</li>
            </ul>

            <h2>What You Need for Mobile Valeting</h2>

            <h3>Essential Requirements</h3>
            <ul>
                <li><strong>Water access:</strong> We carry 100 litres onboard, but a garden tap connection allows more thorough rinsing</li>
                <li><strong>Power supply:</strong> We carry generators, but mains electricity (standard 13A socket) is preferable for quieter operation</li>
                <li><strong>Space:</strong> Ideally a driveway, but we can work in allocated parking bays if vehicle can remain stationary for 2-4 hours</li>
                <li><strong>Shelter:</strong> Not essential, but covered areas allow us to work in light rain</li>
            </ul>

            <h3>What If You Don't Have Water or Power?</h3>
            <p>No problem. Our mobile units are fully self-sufficient with:</p>
            <ul>
                <li>400-litre water tank (sufficient for full exterior and interior valet)</li>
                <li>Petrol generator (quiet-running models)</li>
                <li>All chemicals, tools, and equipment</li>
            </ul>

            <h2>Mobile Valeting Pricing</h2>
            <ul>
                <li><strong>Basic exterior wash:</strong> £35-£50 (size dependent)</li>
                <li><strong>Full exterior valet:</strong> £60-£90</li>
                <li><strong>Interior valet:</strong> £50-£80</li>
                <li><strong>Full valet (interior + exterior):</strong> £100-£150</li>
                <li><strong>Premium valet + wax:</strong> £150-£200</li>
            </ul>

            <p>Prices vary based on vehicle size, condition, and specific requirements. Fleet discounts available for 3+ vehicles.</p>

            <h2>Booking Mobile Services</h2>
            <p>We operate mobile services 7 days per week across Manchester and Stockport:</p>
            <ul>
                <li><strong>Monday-Friday:</strong> 9am-6pm (business and residential)</li>
                <li><strong>Saturday:</strong> 8am-6pm (most popular day—book early)</li>
                <li><strong>Sunday:</strong> 9am-4pm</li>
            </ul>

            <p>Standard appointment duration: 2-4 hours depending on service level. We provide 30-minute arrival windows and send text confirmation 30 minutes before arrival.</p>

            <div class="faq-section">
                <h2>Mobile Valeting FAQs</h2>
                
                <div class="faq-item">
                    <div class="faq-question">Can you do mobile valeting in Manchester apartment car parks?</div>
                    <div class="faq-answer">Yes, provided we have permission from building management and the vehicle can remain in a dedicated bay for 2-4 hours. We've worked with numerous apartment complexes in Manchester city centre, Salford Quays, and Stockport. Some buildings restrict water usage or generator noise—we assess each location individually.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">What if it rains during my mobile appointment in Manchester?</div>
                    <div class="faq-answer">Light rain isn't a problem—we work through it using quick detailer sprays and drying techniques. Heavy rain means we'll reschedule at no charge. Manchester's weather is unpredictable, so we build flexibility into mobile bookings and always confirm the morning of your appointment.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Do you offer regular mobile valeting contracts in Stockport?</div>
                    <div class="faq-answer">Absolutely. Many customers across Cheadle, Bramhall, and Didsbury book monthly or fortnightly maintenance valets. Regular contracts receive priority booking, 15% discount, and the same technician each visit. This is particularly popular with prestige car owners who want consistent care.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Can you valet my car while I'm at work in Manchester?</div>
                    <div class="faq-answer">Yes. Many business premises in Spinningfields, Salford Quays, and Stockport arrange mobile valeting during working hours. We coordinate with reception or security, complete the work, and leave keys with designated staff. This is our fastest-growing service segment.</div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: 'Interior Detailing Stockport: Deep Cleaning Every Surface',
        excerpt: 'Professional interior detailing goes beyond vacuuming. Learn about leather conditioning, fabric extraction, and odour removal techniques.',
        date: 'January 10, 2025',
        location: 'Stockport',
        imageUrl: blog5,
        category: 'Interior Care',
        readTime: '9 min',
        content: `
            <h2>Why Interior Detailing Matters</h2>
            <p>Your car's interior endures constant exposure to dirt, moisture, UV rays, food spills, pet hair, and general wear. Unlike exterior paint which receives regular washing, most car interiors receive only cursory attention until stains become visible or odours develop.</p>

            <p>Professional interior detailing addresses every surface—leather, fabric, plastics, carpets, and headliners—using techniques and products specific to each material type. After 12 years of interior detailing across Stockport and Manchester, we've restored cabins that looked beyond recovery.</p>

            <h2>The Complete Interior Detailing Process</h2>

            <h3>Stage 1: Pre-Inspection & Preparation</h3>
            <p>Before starting, we assess:</p>
            <ul>
                <li><strong>Material types:</strong> Leather, leatherette, cloth, Alcantara, vinyl</li>
                <li><strong>Condition:</strong> Staining, wear patterns, tears, cracking</li>
                <li><strong>Odour issues:</strong> Smoke, pets, mildew, food</li>
                <li><strong>Special concerns:</strong> Delicate materials requiring gentle treatment</li>
            </ul>

            <p>All personal items are removed. We photograph pre-existing damage to avoid misunderstandings.</p>

            <h3>Stage 2: Deep Vacuuming</h3>
            <p>Using high-powered vacuum systems with specialist attachments:</p>
            <ul>
                <li><strong>Seat removal:</strong> For thorough access (when necessary)</li>
                <li><strong>Carpet deep cleaning:</strong> Extracting embedded dirt and grit</li>
                <li><strong>Air vent cleaning:</strong> Brush attachments reach deep into dashboard vents</li>
                <li><strong>Boot and storage areas:</strong> Complete emptying and vacuuming</li>
                <li><strong>Tight spaces:</strong> Between seats, under pedals, door pockets</li>
            </ul>

            <h3>Stage 3: Leather Treatment</h3>
            <p>Leather requires careful attention to prevent cracking and maintain suppleness:</p>

            <h4>Cleaning Process</h4>
            <ul>
                <li><strong>pH-balanced leather cleaner:</strong> Removes body oils, dirt, and grime without damaging the protective coating</li>
                <li><strong>Soft brushes:</strong> Agitate cleaner into grain and perforations</li>
                <li><strong>Microfiber extraction:</strong> Remove lifted dirt and cleaner residue</li>
                <li><strong>Drying:</strong> Allow leather to dry completely before conditioning</li>
            </ul>

            <h4>Conditioning Process</h4>
            <ul>
                <li><strong>Premium conditioner application:</strong> Restores natural oils and flexibility</li>
                <li><strong>UV protection:</strong> Prevents fading and cracking from sun exposure (critical in Stockport and Manchester where cars often sit in unshaded parking)</li>
                <li><strong>Buffing:</strong> Removes excess product and achieves natural sheen</li>
            </ul>

            <div class="highlight-box">
                <strong>Leather Care Truth:</strong> Most "leather" in modern cars is actually polyurethane-coated leather or vinyl (leatherette). These materials require different products than full-grain leather. We identify material type before treatment to ensure correct product selection.
            </div>

            <h3>Stage 4: Fabric & Carpet Cleaning</h3>

            <h4>Standard Fabric Treatment</h4>
            <ul>
                <li><strong>Pre-spray:</strong> Fabric-safe degreaser lifts embedded stains</li>
                <li><strong>Agitation:</strong> Soft brushes work cleaner into fibers</li>
                <li><strong>Dwell time:</strong> 3-5 minutes for product to break down stains</li>
                <li><strong>Hot water extraction:</strong> Removes dirt, cleaner, and moisture</li>
                <li><strong>Drying:</strong> Industrial fans speed drying (typically 2-4 hours)</li>
            </ul>

            <h4>Heavy Staining</h4>
            <p>Common in family vehicles and fleet cars around Stockport and Manchester:</p>
            <ul>
                <li><strong>Coffee and tea:</strong> Acidic stain removers with enzymatic action</li>
                <li><strong>Food and grease:</strong> Solvent-based spot treatment</li>
                <li><strong>Mud and dirt:</strong> Often easier to remove than organic stains—dry completely then vacuum before wet extraction</li>
                <li><strong>Pet accidents:</strong> Enzymatic cleaners break down proteins and eliminate odour at molecular level</li>
            </ul>

            <h3>Stage 5: Dashboard & Plastics</h3>
            <p>Modern car interiors feature various plastic types requiring different treatments:</p>

            <ul>
                <li><strong>Soft-touch plastics:</strong> Gentle, non-silicone cleaners (silicone creates greasy residue that attracts dust)</li>
                <li><strong>Hard plastics:</strong> Can tolerate more aggressive cleaning</li>
                <li><strong>Piano black trim:</strong> Extremely scratch-sensitive—microfiber towels only</li>
                <li><strong>Touchscreens:</strong> Dedicated screen cleaner and microfiber</li>
            </ul>

            <h4>UV Protection</h4>
            <p>Manchester's summer sun (yes, it does appear occasionally) damages plastic trim:</p>
            <ul>
                <li>Fading from gloss black to grey</li>
                <li>Surface cracking</li>
                <li>Brittleness leading to breakage</li>
            </ul>
            <p>We apply UV-resistant dressing to all plastic surfaces. These products provide matte finish (not greasy shine) and block harmful radiation.</p>

            <h3>Stage 6: Glass Cleaning</h3>
            <p>Streak-free glass requires specific technique:</p>
            <ul>
                <li><strong>Interior glass cleaner:</strong> Removes film from outgassing plastics and smoking</li>
                <li><strong>Waffle-weave microfiber:</strong> Specialized towels prevent streaking</li>
                <li><strong>Window edges:</strong> Often overlooked but accumulate significant dirt</li>
                <li><strong>Mirror cleaning:</strong> Interior and exterior</li>
            </ul>

            <h3>Stage 7: Headliner Cleaning</h3>
            <p>The headliner (roof lining) is delicate and requires careful handling:</p>
            <ul>
                <li><strong>Spot cleaning only:</strong> Excessive moisture causes sagging</li>
                <li><strong>Foam cleaner:</strong> Applied sparingly and extracted quickly</li>
                <li><strong>Smoke odour:</strong> Requires multiple treatments and may need professional steaming</li>
            </ul>

            <h3>Stage 8: Odour Elimination</h3>

            <h4>Common Odour Sources</h4>
            <ul>
                <li><strong>Smoke:</strong> Permeates fabric, headliner, and HVAC system</li>
                <li><strong>Pets:</strong> Animal hair, dander, and accidents</li>
                <li><strong>Mildew:</strong> From water leaks or wet carpets (common in Manchester's damp climate)</li>
                <li><strong>Food:</strong> Spills in carpets or under seats</li>
            </ul>

            <h4>Elimination Techniques</h4>
            <ul>
                <li><strong>Enzymatic treatment:</strong> Breaks down organic matter causing odours</li>
                <li><strong>Ozone treatment:</strong> Oxidises odour-causing molecules (requires 4-6 hours with vehicle sealed)</li>
                <li><strong>HVAC cleaning:</strong> Often overlooked but crucial for persistent smells</li>
                <li><strong>Activated charcoal:</strong> Left in vehicle for 48 hours to absorb residual odours</li>
            </ul>

            <h2>Interior Detailing Pricing</h2>
            <ul>
                <li><strong>Basic interior valet:</strong> £50-£80 (vacuum, wipe-down, glass cleaning)</li>
                <li><strong>Standard interior detail:</strong> £120-£180 (includes fabric cleaning and leather conditioning)</li>
                <li><strong>Premium interior detail:</strong> £200-£300 (deep extraction, headliner cleaning, full treatment)</li>
                <li><strong>Odour removal (additional):</strong> £80-£150 depending on severity</li>
            </ul>

            <h2>How Long Does Interior Detailing Take?</h2>
            <ul>
                <li><strong>Basic valet:</strong> 1-2 hours</li>
                <li><strong>Standard detail:</strong> 3-4 hours</li>
                <li><strong>Premium detail:</strong> 4-6 hours</li>
                <li><strong>Drying time:</strong> Additional 2-4 hours for fabric extraction (we use industrial fans)</li>
            </ul>

            <h2>Service Locations</h2>
            <p>Interior detailing performed at our Stockport facility for customers from:</p>
            <ul>
                <li>Stockport and surrounding areas: Cheadle, Bramhall, Hazel Grove, Marple</li>
                <li>South Manchester: Didsbury, Chorlton, Sale, Altrincham</li>
                <li>Manchester city centre</li>
                <li>North Manchester: Prestwich, Whitefield</li>
            </ul>

            <div class="faq-section">
                <h2>Interior Detailing FAQs</h2>
                
                <div class="faq-item">
                    <div class="faq-question">Can you remove smoke smell from my car in Stockport?</div>
                    <div class="faq-answer">Yes, though it's one of the most challenging odours. Smoke permeates fabric, foam, plastics, and the HVAC system. We use multi-stage treatment: deep fabric extraction, headliner cleaning, plastic decontamination, and ozone treatment. Severe cases may require 2-3 sessions. Success rate is approximately 90-95% for complete elimination.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">How do you remove pet hair from car seats?</div>
                    <div class="faq-answer">Pet hair embeds deep into fabric fibers. We use specialized rubber brushes and pumice stones that create static to lift hair, followed by high-powered vacuuming. Stubborn hair often requires fabric brushing to loosen it from weave. For customers in Manchester with pets, we recommend regular maintenance valets (monthly) to prevent accumulation.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Will interior detailing damage my leather seats?</div>
                    <div class="faq-answer">Professional interior detailing protects and restores leather, not damages it. We use pH-balanced cleaners specifically formulated for automotive leather and follow with conditioning to replace natural oils. Harsh household cleaners (what many people use at home) are what damage leather—they strip protective coatings and dry out the material, causing cracking.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Can you clean Alcantara or suede interiors in Manchester?</div>
                    <div class="faq-answer">Yes. Alcantara and suede require specialist treatment different from leather or fabric. We use dedicated Alcantara cleaners and soft brushes to lift dirt without matting the fibers. These materials are increasingly common in performance vehicles, and improper cleaning ruins the texture permanently. We've successfully detailed numerous Alcantara interiors across Stockport and Manchester.</div>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: 'Fleet Detailing Manchester: Professional Vehicle Cleaning for Businesses',
        excerpt: 'Keep your company vehicles presentable year-round. Fleet detailing services for delivery vans, taxi companies, and corporate car pools across Greater Manchester.',
        date: 'January 8, 2025',
        location: 'Manchester',
        imageUrl: blog6,
        category: 'Fleet Services',
        readTime: '8 min',
        content: `
            <h2>Fleet Vehicle Detailing: Why It Matters for Your Business</h2>
            <p>Your vehicles are mobile advertisements. Whether you operate delivery vans displaying your company name, taxi services where cleanliness affects customer satisfaction, or a corporate car pool representing your brand to clients, vehicle presentation directly impacts business perception.</p>

            <p>After 12 years of fleet detailing contracts across Manchester and Stockport, we've worked with businesses operating 3 to 300+ vehicles. This guide explains the specific challenges fleet vehicles face, how regular detailing programmes work, and pricing structures for volume contracts.</p>

            <h2>Fleet Vehicles Face Unique Challenges</h2>

            <h3>Higher Mileage & Continuous Use</h3>
            <p>Fleet vehicles typically cover 20,000-40,000 miles annually compared to 7,000-10,000 for private cars. This means:</p>
            <ul>
                <li><strong>More contamination:</strong> Road film, salt, tar, and industrial fallout accumulate faster</li>
                <li><strong>Interior wear:</strong> Seats, carpets, and door cards deteriorate rapidly</li>
                <li><strong>Less downtime:</strong> Vehicles must be cleaned quickly without disrupting operations</li>
            </ul>

            <h3>Commercial Use Impacts</h3>
            <ul>
                <li><strong>Delivery vans:</strong> Constant loading/unloading creates interior dirt and scratches on load bay areas</li>
                <li><strong>Taxi/private hire:</strong> Multiple passengers daily means rapid interior contamination and odour issues</li>
                <li><strong>Sales vehicles:</strong> Need showroom presentation for client meetings</li>
                <li><strong>Company cars:</strong> Employee treatment varies—some maintain carefully, others neglect</li>
            </ul>

            <h3>Manchester's Environment</h3>
            <p>Operating in Greater Manchester presents specific issues:</p>
            <ul>
                <li><strong>Winter road salt:</strong> Accelerates corrosion on panels and wheel arches</li>
                <li><strong>City centre pollution:</strong> Industrial fallout particularly affects white and light-coloured vehicles</li>
                <li><strong>Weather exposure:</strong> Vehicles parked outdoors accumulate dirt faster than garaged private cars</li>
            </ul>

            <h2>Fleet Detailing Services We Offer</h2>

            <h3>Regular Maintenance Programmes</h3>
            <p>Most effective for keeping fleets presentable year-round:</p>

            <h4>Weekly/Fortnightly Service</h4>
            <p>Suitable for: Taxi companies, high-visibility delivery fleets</p>
            <ul>
                <li>Exterior wash and dry</li>
                <li>Wheel cleaning</li>
                <li>Interior vacuum and wipe-down</li>
                <li>Glass cleaning</li>
                <li>Duration: 30-45 minutes per vehicle</li>
            </ul>

            <h4>Monthly Service</h4>
            <p>Suitable for: Corporate car pools, sales vehicles</p>
            <ul>
                <li>Full exterior valet including decontamination</li>
                <li>Comprehensive interior cleaning</li>
                <li>Fabric spot cleaning as needed</li>
                <li>Dashboard and trim dressing</li>
                <li>Duration: 1.5-2 hours per vehicle</li>
            </ul>

            <h4>Quarterly Deep Clean</h4>
            <p>Suitable for: All fleet types (recommended in addition to regular cleaning)</p>
            <ul>
                <li>Deep interior extraction</li>
                <li>Engine bay cleaning</li>
                <li>Paint decontamination (clay bar)</li>
                <li>Wax or sealant protection</li>
                <li>Underbody cleaning (removes salt and grime)</li>
                <li>Duration: 3-4 hours per vehicle</li>
            </ul>

            <h3>On-Site vs Collection Service</h3>

            <h4>On-Site Service (Mobile)</h4>
            <p><strong>Best for:</strong> Businesses with dedicated yards or car parks in Manchester, Stockport, Sale, Altrincham</p>
            <p><strong>Advantages:</strong></p>
            <ul>
                <li>Zero vehicle downtime</li>
                <li>We work around your operations</li>
                <li>Evening/weekend scheduling available</li>
                <li>Suitable for large fleets (10+ vehicles)</li>
            </ul>

            <h4>Collection Service</h4>
            <p><strong>Best for:</strong> Smaller fleets requiring deep cleaning or paint correction</p>
            <p><strong>Advantages:</strong></p>
            <ul>
                <li>Access to professional workshop facilities in Stockport</li>
                <li>Climate-controlled environment for advanced services</li>
                <li>Can perform paint correction, ceramic coating</li>
                <li>Courtesy vehicles available for critical operations</li>
            </ul>

            <h2>Fleet Types We Service</h2>

            <h3>Delivery & Logistics</h3>
            <ul>
                <li><strong>Courier vans:</strong> DPD, Evri, Amazon delivery vehicles across Manchester</li>
                <li><strong>Food delivery:</strong> Uber Eats, Deliveroo, Just Eat drivers (quick turnaround essential)</li>
                <li><strong>White van fleets:</strong> Trade companies (plumbers, electricians, builders)</li>
                <li><strong>HGVs:</strong> Cab cleaning, wheel washing, exterior detail</li>
            </ul>

            <h3>Passenger Transport</h3>
            <ul>
                <li><strong>Taxi companies:</strong> Hackney cabs and private hire across Greater Manchester</li>
                <li><strong>Executive car services:</strong> Chauffeur vehicles requiring premium presentation</li>
                <li><strong>Minibus operators:</strong> School runs, airport transfers, group transport</li>
            </ul>

            <h3>Corporate Fleets</h3>
            <ul>
                <li><strong>Company car pools:</strong> Multi-user vehicles requiring regular sanitisation</li>
                <li><strong>Sales team vehicles:</strong> Used for client meetings—showroom condition essential</li>
                <li><strong>Executive vehicles:</strong> Director cars, board member vehicles</li>
            </ul>

            <h3>Specialist Vehicles</h3>
            <ul>
                <li><strong>Rental car companies:</strong> Quick turnaround between rentals</li>
                <li><strong>Dealership preparation:</strong> Pre-delivery inspection (PDI) cleaning</li>
                <li><strong>Event vehicles:</strong> Wedding cars, promotional vehicles, demonstration models</li>
            </ul>

            <h2>Fleet Detailing Pricing</h2>

            <h3>Volume Discounts</h3>
            <p>Pricing scales with fleet size:</p>
            <ul>
                <li><strong>3-5 vehicles:</strong> 10% discount on standard rates</li>
                <li><strong>6-10 vehicles:</strong> 20% discount</li>
                <li><strong>11-25 vehicles:</strong> 30% discount</li>
                <li><strong>26+ vehicles:</strong> Custom pricing (typically 35-40% discount)</li>
            </ul>

            <h3>Sample Pricing (Based on Monthly Contract)</h3>
            <p><strong>Small Van (Transit Connect size):</strong></p>
            <ul>
                <li>Basic wash: £25</li>
                <li>Full valet: £55</li>
                <li>Deep clean: £95</li>
            </ul>

            <p><strong>Large Van (Transit/Sprinter):</strong></p>
            <ul>
                <li>Basic wash: £35</li>
                <li>Full valet: £70</li>
                <li>Deep clean: £120</li>
            </ul>

            <p><strong>Saloon/Hatchback:</strong></p>
            <ul>
                <li>Basic wash: £20</li>
                <li>Full valet: £45</li>
                <li>Deep clean: £85</li>
            </ul>

            <p><strong>SUV/4x4:</strong></p>
            <ul>
                <li>Basic wash: £30</li>
                <li>Full valet: £60</li>
                <li>Deep clean: £110</li>
            </ul>

            <div class="highlight-box">
                <strong>Contract Benefits:</strong> Regular contracts (6+ month commitment) receive priority scheduling, 15% additional discount, dedicated account manager, and emergency cleaning services when needed.
            </div>

            <h2>Service Areas: Manchester & Stockport Business Locations</h2>

            <h3>Industrial & Business Parks</h3>
            <ul>
                <li><strong>Trafford Park:</strong> Largest industrial estate in Europe—regular mobile routes</li>
                <li><strong>Manchester Airport Business Park:</strong> Executive vehicle cleaning</li>
                <li><strong>Stockport Business & Innovation Centre:</strong> SME fleet services</li>
                <li><strong>Sale Town Centre:</strong> Retail and service business fleets</li>
            </ul>

            <h3>City Centre Commercial</h3>
            <ul>
                <li><strong>Spinningfields:</strong> Corporate car pools and executive vehicles</li>
                <li><strong>Deansgate:</strong> Retail delivery vehicles</li>
                <li><strong>Salford Quays/MediaCityUK:</strong> Media company fleets</li>
            </ul>

            <h3>Suburban Business Areas</h3>
            <ul>
                <li><strong>Cheadle/Gatley:</strong> Service company vans</li>
                <li><strong>Altrincham:</strong> Professional services vehicles</li>
                <li><strong>Didsbury:</strong> Small business fleets</li>
            </ul>

            <h2>Scheduling & Operations</h2>

            <h3>Flexible Timing</h3>
            <p>We adapt to your operational requirements:</p>
            <ul>
                <li><strong>Out-of-hours service:</strong> Evening cleaning (7pm-11pm) for delivery fleets</li>
                <li><strong>Weekend cleaning:</strong> Saturday/Sunday for taxi companies</li>
                <li><strong>Rolling schedule:</strong> Vehicles cleaned in rotation without full fleet downtime</li>
                <li><strong>Emergency response:</strong> Same-day service for urgent cleaning needs</li>
            </ul>

            <h3>Reporting & Compliance</h3>
            <p>For larger contracts, we provide:</p>
            <ul>
                <li>Monthly service reports with vehicle-by-vehicle status</li>
                <li>Photographic records of condition</li>
                <li>Damage reporting (scratches, dents noticed during cleaning)</li>
                <li>Compliance documentation for regulated industries</li>
            </ul>

            <div class="faq-section">
                <h2>Fleet Detailing FAQs</h2>
                
                <div class="faq-item">
                    <div class="faq-question">How quickly can you clean a taxi during shift changeover in Manchester?</div>
                    <div class="faq-answer">Our express taxi service takes 20-30 minutes: vacuum interior, wipe dashboard and seats, clean windows, exterior quick wash. This suits shift changes at taxi ranks across Manchester. For deeper cleaning, we recommend overnight or rest-day scheduling when vehicles aren't earning.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Can you clean our delivery vans at our Trafford Park depot?</div>
                    <div class="faq-answer">Yes, Trafford Park is one of our busiest fleet service areas. We bring mobile units to your depot and work through vehicles systematically. Typical schedule: 4-6 vans per technician per day for full valets. We've worked with numerous logistics companies across Trafford Park, including evening and weekend operations.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Do you offer one-off deep cleans for seasonal use fleet vehicles in Stockport?</div>
                    <div class="faq-answer">Absolutely. Many businesses in Stockport operate seasonal vehicles (gritting trucks, summer event vehicles, winter delivery capacity). We provide pre-season deep cleans and post-season protective treatments before storage. This prevents interior mildew and exterior deterioration during idle periods.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">What's the minimum contract period for fleet services?</div>
                    <div class="faq-answer">No minimum for ad-hoc cleaning. For contracted rates with volume discounts, we recommend 6-month minimum commitments. This allows us to schedule efficiently and provide consistent service. Monthly rolling contracts available after initial 6-month period. Most Manchester and Stockport fleet clients renew annually.</div>
                </div>
            </div>
        `
    }
];

// --- BLOG CARD COMPONENT ---
const BlogPostCard = ({ post, onPostClick }) => {
    return (
        <div className="blog-card" onClick={() => onPostClick(post)}>
            <div className="blog-card-image-container">
                <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
                <span className="blog-card-category">{post.category}</span>
                <span className="blog-card-location">📍 {post.location}</span>
            </div>

            <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-footer">
                    <span className="blog-card-date">{post.date} • {post.readTime} read</span>
                    <span className="read-more-link">
                        Read More →
                    </span>
                </div>
            </div>
        </div>
    );
};

// --- SELECTED POST VIEW ---
const SelectedPost = ({ post, onBackClick }) => {
    return (
        <div className="selected-post-container">
            <button className="post-back-button" onClick={onBackClick}>
                <span>&larr;</span> Back to all Articles
            </button>

            <img
                src={post.imageUrl}
                alt={post.title}
                className="post-featured-image"
            />

            <h1 className="hero-title" style={{ fontSize: '2.5em', textAlign: 'left' }}>{post.title}</h1>

            <div className="post-meta">
                <div className="post-meta-item">
                    <span>📅</span>
                    <span>{post.date}</span>
                </div>
                <div className="post-meta-item">
                    <span>📍</span>
                    <span>{post.location}</span>
                </div>
                <div className="post-meta-item">
                    <span>🏷️</span>
                    <span>{post.category}</span>
                </div>
                <div className="post-meta-item">
                    <span>⏱️</span>
                    <span>{post.readTime} read</span>
                </div>
            </div>

            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

// --- FOOTER COMPONENT ---
const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/booking">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <p className="copyright">© 2025 Car Detailing Manchester & Stockport. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// --- MAIN BLOG PAGE COMPONENT ---
const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedPost(null);
        const blogListSection = document.querySelector('.blog-list-section');
        if (blogListSection) {
            window.scrollTo(0, blogListSection.offsetTop - 150);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: BlogPageStyles }} />

            <div className="blog-page-container">
                <Navbar />

                {selectedPost ? (
                    <SelectedPost
                        post={selectedPost}
                        onBackClick={handleBackClick}
                    />
                ) : (
                    <>
                        <header className="app-hero-section">
                            <h1 className="hero-title">
                                Professional <span className="highlight">Car Detailing</span> Manchester & Stockport
                            </h1>
                            <p className="hero-subtitle">
                                Expert ceramic coating, paint correction, mobile valeting & interior detailing across Greater Manchester. 12+ years serving private car owners, fleets, and businesses.
                            </p>

                            <div className="location-badges">
                                <span className="location-badge">📍 Manchester City Centre</span>
                                <span className="location-badge">📍 Didsbury & Chorlton</span>
                                <span className="location-badge">📍 Stockport & Cheadle</span>
                                <span className="location-badge">📍 Bramhall & Marple</span>
                            </div>

                            <div className="search-bar">
                                <input type="text" placeholder="Search car detailing guides..." />
                                <button className="search-button">Search</button>
                            </div>
                        </header>

                        <section className="marquee-section">
                            <div className="marquee-content">
                                ✨ NEW: Paint Correction from £250 | Ceramic Coating from £350 | Mobile Valeting across Manchester & Stockport | Fleet Services Available ✨
                            </div>
                        </section>

                        <main className="blog-list-section">
                            <div className="section-intro">
                                <h2>Car Detailing Knowledge Hub</h2>
                                <p>Expert guides on paint protection, ceramic coating, interior detailing, and mobile valeting services across Manchester and Stockport.</p>
                            </div>

                            <div className="blog-list-grid">
                                {carDetailingBlogPosts.map(post => (
                                    <BlogPostCard
                                        key={post.id}
                                        post={post}
                                        onPostClick={handlePostClick}
                                    />
                                ))}
                            </div>

                            <div className="load-more-container">
                                <button className="load-more-button">Load More Articles</button>
                            </div>
                        </main>
                    </>
                )}

                <Footer />
            </div>
        </>
    );
};

export default BlogPage;