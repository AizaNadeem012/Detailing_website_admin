import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export const metadata = {
  title: "Page Not Found | SRV Detailing",
  description: "The page you're looking for doesn't exist. Return to our homepage or contact us for assistance.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, 
              removed, or the URL might be incorrect.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              <Search className="w-5 h-5" />
              Browse Services
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Need help? Contact us at:</p>
            <p className="mt-2">
              <a href="tel:+447375759686" className="text-primary hover:underline">
                07375 759686
              </a>
              {" "} or {" "}
              <a href="mailto:srv_detailing@icloud.com" className="text-primary hover:underline">
                srv_detailing@icloud.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}