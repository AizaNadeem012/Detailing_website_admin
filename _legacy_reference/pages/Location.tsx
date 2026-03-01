import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  MapPin,
  Clock,
  Car,
  Wrench,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  Droplets,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Semantic SEO Optimized Location Page
// Following Koray Tuğberk GÜBÜR's Framework

const LocationNew = () => {
  // Set meta tags dynamically
  useEffect(() => {
    document.title = "Mobile Car Valeting & Detailing Service Coverage | Manchester & Stockport | SRV Detailing";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Stockport-based mobile car valeting serving all Manchester and Greater Manchester. Professional on-site service at your home or workplace. Fully equipped mobile unit. Book your visit today."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* How Mobile Service Works */}
        <MobileServiceSection />

        {/* Geographic Coverage */}
        <GeographicCoverageSection />

        {/* On-Site Service Execution */}
        <OnSiteServiceSection />

        {/* Equipment & Mobile Capabilities */}
        <EquipmentSection />

        {/* Local Conditions */}
        <LocalConditionsSection />

        {/* Workplace & Fleet Service */}
        <WorkplaceServiceSection />

        {/* Scheduling & Reliability */}
        <SchedulingSection />

        {/* Why Location Matters */}
        <WhyLocationMattersSection />

        {/* Booking Section */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4" />
            Based in Stockport
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Mobile Car Valeting & Detailing Coverage Across{" "}
            <span className="text-primary">Manchester</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Operating from our Stockport base, SRV Detailing delivers professional mobile car
            valeting and detailing services throughout Manchester and the wider Greater Manchester
            region. Our fully equipped mobile unit travels directly to your chosen location, whether
            that's your home driveway, workplace car park, or business premises.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            Our Stockport location provides efficient road access across the entire metropolitan
            area, from central Manchester through to surrounding boroughs and communities. This
            central positioning means we can reach most locations within the region quickly,
            maintaining consistent appointment times and reliable service delivery regardless of
            where you're based.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" asChild>
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
              <a href="#booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Visit
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mobile Service Section
const MobileServiceSection = () => {
  const features = [
    { icon: Droplets, text: "Independent Water Supply" },
    { icon: Zap, text: "Mobile Power System" },
    { icon: Wrench, text: "Professional Equipment" },
    { icon: Shield, text: "Complete Self-Contained Unit" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            How Our Mobile Service Works <span className="text-primary">Across the Region</span>
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-primary/5 rounded-lg"
              >
                <feature.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-center text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              The mobile service operates as a complete, self-contained detailing facility that comes
              to you. Our vehicle carries dual water tanks providing independent water supply,
              eliminating reliance on customer facilities. Professional-grade equipment including
              machine polishers, steam cleaners, vacuum systems, and pressure washers all run from our
              mobile power system, meaning we can work effectively at any location with suitable
              vehicle access.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              When you book a mobile visit, we confirm your address and discuss any site-specific
              requirements. Residential properties typically provide driveway or street parking access.
              For apartment buildings or locations without immediate vehicle access, we work with you
              to identify suitable nearby spaces. Workplace visits often use designated car park areas,
              and we coordinate timing to minimize disruption to your working day.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Travel throughout Manchester presents varied urban and suburban environments, each
              creating different service scenarios. City center locations might involve working in
              multi-story car parks or on-street spaces near offices and residential buildings.
              Suburban areas typically offer driveways or quiet residential streets. Industrial and
              business park locations provide dedicated parking areas. Our experience across these
              different settings means we adapt our setup and approach to work effectively wherever
              you need us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Geographic Coverage Section
const GeographicCoverageSection = () => {
  const coverageAreas = [
    "Manchester city center and all surrounding districts",
    "South Manchester including Didsbury, Chorlton, and Withington",
    "North Manchester including Prestwich, Whitefield, Bury and Rochdale",
    "East Manchester including Gorton, Levenshulme, Tameside, Ashton-under-Lyne",
    "West Manchester including Stretford, Sale, Altrincham, Trafford and Salford",
    "Stockport and surrounding areas"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Geographic Coverage and <span className="text-primary">Service Availability</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground mb-10"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              From our Stockport base, we serve the entire Manchester metropolitan area including the
              city center and all surrounding districts. Coverage extends throughout:
            </p>
          </motion.div>

          {/* Coverage Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            {coverageAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground">{area}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              This broad geographic coverage doesn't mean we're unfamiliar with local areas. Twenty-two
              years of mobile operation across Greater Manchester means we know the region's road
              networks, understand parking situations in different neighborhoods, and recognize the
              specific challenges vehicles face in different parts of the metropolitan area. City center
              vehicles deal with tight parking, urban pollution, and stop-start driving conditions that
              accelerate brake dust accumulation and paint contamination. Suburban and residential area
              vehicles might face tree sap, bird droppings, and seasonal debris. Industrial area
              vehicles often encounter heavier contamination from manufacturing and commercial activity.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We schedule appointments seven days a week including early mornings, daytimes, evenings,
              and weekends. This flexibility accommodates different schedules across the working week.
              Professionals who work standard office hours can book early morning visits before leaving
              for work, or evening appointments after returning home. Shift workers can arrange daytime
              visits during off-peak hours. Weekend availability suits those who prefer to be present
              during service or who have limited weekday flexibility.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// On-Site Service Execution Section
const OnSiteServiceSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            On-Site Service Execution and <span className="text-primary">Standards</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Arriving at your location, we position our mobile unit to provide clear working space
              around your vehicle while minimizing disruption to neighbors, other vehicles, or normal
              site activity. Urban locations sometimes require creative positioning to accommodate
              street parking restrictions or limited space, but two decades of mobile experience means
              we've worked in virtually every type of setting the region presents.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Setup takes approximately ten minutes. We lay protective ground sheets to prevent water
              runoff issues, position equipment for efficient workflow, and conduct an initial vehicle
              assessment to identify specific cleaning or detailing requirements. This assessment
              considers your vehicle's condition, the service you've booked, and realistic timeframes
              given the location and conditions.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Throughout service delivery, we maintain professional standards regardless of location.
              The two-bucket wash method prevents paint damage whether we're working on a residential
              driveway in Didsbury or a business car park in Salford. Machine polishing techniques
              remain consistent whether correcting paint at a city center apartment building or a
              suburban home in Bolton. Steam cleaning interiors follows the same careful process in
              every setting because professional standards don't change based on location.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Working in residential areas, we're mindful of neighbors and operate equipment
              considerately. Workplace visits coordinate with site requirements, security protocols,
              and operational schedules. Business premises sometimes require signing in, following
              specific parking arrangements, or working during designated times. We accommodate these
              requirements as part of professional mobile service delivery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Equipment Section
const EquipmentSection = () => {
  const equipment = [
    {
      icon: Droplets,
      title: "Twin Water Tanks",
      description: "Sufficient clean water for thorough washing without customer water supply"
    },
    {
      icon: Zap,
      title: "Mobile Power Generation",
      description: "Runs all professional equipment independently"
    },
    {
      icon: Wrench,
      title: "Professional Tools",
      description: "Machine polishers, steam cleaners, vacuum systems"
    },
    {
      icon: Shield,
      title: "Premium Products",
      description: "Complete range of specialist detailing products"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Equipment, Resources, and <span className="text-primary">Mobile Capabilities</span>
          </motion.h2>

          {/* Equipment Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              The mobile unit functions as a complete detailing facility independent of customer
              resources. Twin water tanks carry sufficient clean water for thorough washing and rinsing
              of any vehicle size without requiring connection to customer water supplies. This
              independence means we work effectively at locations where water access is unavailable or
              impractical, including workplace car parks, industrial estates, or street parking
              situations.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Power generation systems run all professional equipment. Machine polishers for paint
              correction, dual-action polishers for finishing work, steam cleaners for interior deep
              cleaning, and vacuum systems all operate from our mobile power supply. This eliminates
              the need to request power access from customers or rely on extension cables running into
              homes or offices, maintaining our independence and minimizing intrusion.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Professional-grade products travel with us including pH-neutral shampoos, specialist wheel
              cleaners, clay bar lubricants, multiple grades of machine polish, leather cleaners and
              conditioners, fabric treatments, glass cleaners, and various protection products from
              waxes to ceramic coatings. This comprehensive product range means we don't compromise on
              materials regardless of location or adjust our approach based on what might be available
              on-site.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Local Conditions Section
const LocalConditionsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Local Conditions and <span className="text-primary">Vehicle Requirements</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Manchester's urban environment creates specific vehicle care requirements we understand
              from extensive local experience. The city's weather patterns bring regular rain, which
              helps rinse vehicles but also accelerates the accumulation of road grime and water
              spotting when vehicles dry naturally. Winter months introduce road salt used for ice
              management, which bonds to paintwork and accelerates corrosion if not regularly removed.
              Spring brings tree pollen that settles on horizontal surfaces and bonds when dampened by
              morning dew or light rain.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Urban driving conditions affect vehicles differently than motorway or rural driving.
              Stop-start city traffic generates substantial brake dust from frequent braking. This
              ferrous contamination bonds to alloy wheels and lower body panels, requiring proper
              decontamination rather than simple washing. Tight urban parking means vehicles accumulate
              door dings, trolley marks, and scuffs that benefit from paint correction and protection.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Industrial areas throughout Greater Manchester expose vehicles to airborne contamination
              from manufacturing processes, creating stubborn bonded contamination that ordinary washing
              cannot remove. Clay bar treatment becomes particularly important for vehicles regularly
              driven through or parked in industrial areas. This contamination appears as rough patches
              on paintwork and must be mechanically removed before proper protection can be applied.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Residential areas with mature trees create specific challenges. Tree sap drops onto
              vehicles parked beneath or near trees, bonding to paint and becoming increasingly
              difficult to remove over time. Bird droppings contain acids that etch into clear coat if
              left for extended periods. These common residential area issues require specific treatment
              approaches we encounter regularly across suburban Manchester locations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Workplace Service Section
const WorkplaceServiceSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Workplace and <span className="text-primary">Fleet Service Arrangements</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Business customers managing company vehicles or employee car schemes benefit from mobile
              service that comes directly to workplace premises. This approach eliminates the
              productivity loss of employees driving to garages during working hours or the
              administrative complexity of coordinating vehicle absences.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              For organizations with multiple vehicles requiring regular valeting, we can establish
              scheduled visit programs where we attend monthly or quarterly to service several vehicles
              in sequence during a single visit. This batching approach provides cost efficiency and
              predictable maintenance scheduling while ensuring company vehicles consistently present a
              professional appearance.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Fleet work at business premises requires coordination with site operations. We work with
              office managers, fleet coordinators, or facilities teams to establish suitable working
              areas, confirm access arrangements, and schedule visits during appropriate times. Some
              businesses prefer early morning services before staff arrive, while others designate
              specific days when the car park has available space and vehicle access is convenient.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Industrial estates and business parks throughout Greater Manchester often house multiple
              companies with vehicle fleets or employees interested in regular valeting services.
              Establishing regular service days at these locations creates efficiency where we can serve
              multiple customers during a single visit to the area, passing location efficiencies on
              through competitive pricing for regular service arrangements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Scheduling Section
const SchedulingSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Scheduling, Reliability, and <span className="text-primary">Service Consistency</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Mobile service reliability depends on realistic scheduling, honest communication, and
              professional time management. When you book an appointment, we provide a realistic
              arrival window accounting for travel time from previous appointments, expected service
              duration, and typical traffic conditions for that time and area. Manchester traffic
              patterns vary significantly between peak commute times and off-peak periods, and two
              decades of local operation means we understand these patterns and schedule accordingly.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We confirm appointments in advance and provide updates if running behind schedule. Mobile
              service occasionally encounters unpredictable delays from traffic incidents, weather
              conditions affecting previous appointments, or site access issues at earlier locations.
              Professional service means communicating these delays promptly rather than leaving
              customers waiting without information.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Weather affects mobile service capability more than studio-based work. Heavy rain makes
              outdoor paint correction impractical because we cannot maintain the controlled conditions
              needed for proper machine polishing. Strong winds create issues with product application
              and dust contamination. Freezing temperatures affect water systems and product
              performance. We monitor weather forecasts and contact customers proactively when
              conditions will prevent quality service delivery, offering rescheduling rather than
              attempting work that won't meet our standards.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              This weather sensitivity means we maintain flexibility in scheduling and work with
              customers when rescheduling becomes necessary. Two decades of mobile operation means
              we've developed weather contingency approaches and can usually find alternative dates
              quickly, but we won't compromise service quality by working in unsuitable conditions just
              to maintain a schedule.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Why Location Matters Section
const WhyLocationMattersSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Why Location Matters for <span className="text-primary">Professional Mobile Detailing</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Operating from Stockport rather than a distant location means we're genuinely local to
              the entire Manchester metropolitan area. This proximity affects service quality in
              practical ways. Travel times remain reasonable regardless of where you're located within
              the region, reducing the likelihood of schedule compression where we might rush service
              to maintain appointments. Local operation means we understand the area's roads, can
              navigate efficiently even during traffic disruption, and know alternative routes when
              primary roads encounter delays.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Being locally based means we serve the same communities consistently rather than treating
              Manchester as an occasional service area visited from elsewhere. Regular operation
              throughout the region builds familiarity with different neighborhoods, parking situations,
              and site-specific considerations. We recognize returning customers, remember
              location-specific requirements from previous visits, and develop working relationships
              with workplace contacts at business locations we serve regularly.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Local operation also means we're accessible for follow-up questions, aftercare advice, or
              addressing any concerns after service completion. Customers aren't contacting a distant
              business with limited connection to the area. We're locally based, consistently operating
              throughout Manchester, and invested in maintaining reputation across communities we serve
              regularly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Booking Section
const BookingSection = () => {
  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            Booking Your <span className="text-primary">Mobile Service Visit</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-muted-foreground mb-10"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              To arrange a mobile service visit, contact us with your location, preferred timing, and
              the service you require. We confirm whether your location suits mobile working and
              discuss any site-specific considerations. Most residential and workplace locations
              throughout Manchester and Greater Manchester present no issues, but we're upfront about
              the occasional situation where access or space limitations might create difficulties.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              We provide clear pricing based on the service required and your vehicle type, not
              variable pricing based on location within our service area. A full valet costs the same
              whether you're in central Manchester, Stockport, or outlying areas within Greater
              Manchester. This consistent pricing reflects our commitment to fair, transparent service
              regardless of customer location.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Booking confirms your appointment time, provides our contact details for any questions
              before the visit, and confirms what to expect regarding service duration, site
              requirements, and what we need from you. Most locations require nothing more than
              suitable vehicle access and space to work safely around your car. We bring everything
              else required to deliver complete professional service at your location.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold" asChild>
              <a href="tel:+447375759686">
                <Phone className="w-5 h-5 mr-2" />
                Call 07375 759686
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-semibold" asChild>
              <a href="/booking">
                <Car className="w-5 h-5 mr-2" />
                Book Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>All Manchester Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" />
              <span>Fully Equipped Mobile Unit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationNew;
