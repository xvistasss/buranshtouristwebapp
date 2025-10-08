import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TrekHighlights from "@/components/TrekHighlights";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div>
      <SEOHead
        title="Buransh Tourist Lodge - Madhyamaheshwar Trek Base Camp | Ransi Village"
        description="Stay at Buransh Tourist Lodge near Ransi Village, the perfect base camp for Madhyamaheshwar trek. Comfortable accommodation for pilgrims and trekkers in Uttarakhand."
        keywords="Buransh Tourist Lodge, Ransi Village stay, Madhyamaheshwar trek accommodation, Hotels near Ukhimath, Lodge near Madhyamaheshwar temple, Panch Kedar trek, Uttarakhand tourism"
        canonicalUrl="https://buranshtourist.shewshaw.tech/"
        ogImage="https://buranshtourist.shewshaw.tech/attached_assets/generated_images/Himalayan_mountain_peaks_panorama_295170a4.png"
      />
      <HeroSection />
      <IntroSection />
      <TrekHighlights />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-lg font-serif text-muted-foreground mb-3" data-testid="text-cta-hindi">
            अपनी हिमालयी यात्रा के लिए तैयार हैं?
          </p>
          <p className="text-muted-foreground mb-8" data-testid="text-cta-description">
            Book your stay at Buransh Tourist Lodge and begin your sacred journey to Madhyamaheshwar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" data-testid="button-cta-book">
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/trek-info">
              <Button size="lg" variant="outline" data-testid="button-cta-trek">
                Learn About Trek
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO-optimized content section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Buransh Tourist Lodge?</h2>
              <p className="text-lg font-serif text-muted-foreground mb-4">
                बुरांश टूरिस्ट लॉज क्यों चुनें?
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Perfect Trek Base Camp:</strong> Located in Ransi Village at 2,200m altitude, 
                  Buransh Tourist Lodge serves as the ideal starting point for the sacred Madhyamaheshwar trek. 
                  Our strategic location makes us the preferred choice for pilgrims and trekkers embarking on 
                  the Panch Kedar pilgrimage circuit.
                </p>
                <p>
                  <strong>Authentic Mountain Hospitality:</strong> Experience traditional Garhwali warmth and 
                  hospitality in our comfortable rooms. We provide essential amenities including hot water, 
                  home-cooked meals, and trek preparation assistance to ensure your journey is both comfortable 
                  and spiritually fulfilling.
                </p>
                <p>
                  <strong>Sacred Location:</strong> Just 20km from Ukhimath, the winter seat of Lord Kedarnath 
                  and Lord Madhyamaheshwar, our lodge is perfectly positioned for the 16km trek to the ancient 
                  Madhyamaheshwar temple where the navel (nabhi) of Lord Shiva is worshipped.
                </p>
              </div>
            </div>
            <div className="bg-card/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Distance from Ukhimath: 20km</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Trek Distance to Temple: 16km</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Altitude: 2,200m (Lodge), 3,497m (Temple)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Best Season: May-June, September-November</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Room Rates: ₹800 - ₹2,500</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section for SEO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Perfect base camp for Madhyamaheshwar trek. Clean rooms, delicious food, and helpful staff. 
                The location in Ransi Village is ideal for acclimatization before the trek."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">R</span>
                </div>
                <div>
                  <p className="font-semibold">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Delhi</p>
                </div>
              </div>
            </div>
            <div className="bg-card/50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Excellent hospitality and authentic Garhwali experience. The lodge is well-maintained 
                and the mountain views are breathtaking. Highly recommended for pilgrims and trekkers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">P</span>
                </div>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-card/50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Buransh Lodge made our Panch Kedar pilgrimage comfortable. The staff helped us with 
                trek arrangements and local guides. Great value for money in this beautiful location."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Amit Singh</p>
                  <p className="text-sm text-muted-foreground">Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
