import { HeroCarousel } from "@/components/sections/hero-carousel";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { PartnerUniversities } from "@/components/sections/partner-universities";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* About Preview Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Choose FlySky Europe?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Based in Vadodara, Gujarat, we are your trusted partner for studying abroad. With
                years of experience in visa consultancy and student placement, we have helped
                hundreds of students achieve their dreams.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Expert Counseling</h3>
                    <p className="text-gray-600 leading-relaxed">Personalized guidance from experienced consultants</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">98% Visa Success Rate</h3>
                    <p className="text-gray-600 leading-relaxed">Proven track record with documentation and applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">End-to-End Support</h3>
                    <p className="text-gray-600 leading-relaxed">From university selection to visa approval and beyond</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Free Consultation</h3>
                    <p className="text-gray-600 leading-relaxed">No-cost initial consultation to discuss your goals</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/600/400?random=20"
                  alt="Students studying abroad"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-700 to-blue-600 text-white p-8 rounded-2xl shadow-2xl border-4 border-white">
                <div className="text-5xl font-bold mb-1">500+</div>
                <div className="text-base font-medium">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* CTA Section */}
      <section className="py-24 md:py-28 bg-gradient-to-r from-blue-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50 leading-relaxed">
            Book a free consultation with our expert counselors today and take the first step
            towards your international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl px-8 py-6 text-lg font-semibold">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-blue-800 border-2 border-blue-800 text-white hover:bg-blue-900 hover:border-blue-900 shadow-xl px-8 py-6 text-lg font-semibold">
              <a href="tel:+919727616668">Call +91 97276 16668</a>
            </Button>
          </div>
        </div>
      </section>

      <PartnerUniversities />
      <Testimonials />
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Visit Our Office in Vadodara
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            2nd Floor, Platinum Hub, 201, Tulsidham Char Rasta, Near Central Bank,
            <br className="hidden md:block" />
            Manjalpur, Vadodara, Gujarat 390011
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg hover:shadow-xl">
            <Link href="/contact">Get Directions</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
