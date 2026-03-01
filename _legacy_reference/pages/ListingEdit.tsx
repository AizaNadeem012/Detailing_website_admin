import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ListingForm } from "@/components/ListingForm";
import type { Listing } from "@/components/Listings";

const initialListings: Listing[] = [
  {
    id: "1",
    website: "bizify.co.uk",
    keyword: "demo keyword 1",
    password: "demo@123",
    status: "Pending",
  },
  {
    id: "2",
    website: "uksmallbusinessdirectory.co.uk",
    keyword: "mobile car detailing services near me",
    password: "srvdetailing1.com",
    status: "Submitted",
  },
];

const ListingEdit = () => {
  const [listings, setListings] = useState<Listing[]>(() => {
    // Only run on client side since localStorage is not available during SSR
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("listings");
      return saved ? JSON.parse(saved) : initialListings;
    }
    return initialListings;
  });

  useEffect(() => {
    // Only run on client side since localStorage is not available during SSR
    if (typeof window !== 'undefined') {
      localStorage.setItem("listings", JSON.stringify(listings));
    }
  }, [listings]);

  const handleSave = (data: Omit<Listing, "id"> & { id?: string }) => {
    if (data.id) {
      setListings(listings.map((l) => (l.id === data.id ? { ...l, ...data } as Listing : l)));
    } else {
      const newListing: Listing = {
        ...data,
        id: Date.now().toString(),
      };
      setListings([...listings, newListing]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ListingForm listings={listings} onSave={handleSave} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListingEdit;