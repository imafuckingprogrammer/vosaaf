import { HeroCarousel } from "@/components/sections/hero-carousel";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";
import { PartnerUniversities } from "@/components/sections/partner-universities";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Why Choose Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Why Choose FlySky Europe?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in Vadodara, Gujarat, we are your trusted partner for studying abroad. With
                years of experience in visa consultancy and student placement, we have helped
                hundreds of students achieve their dreams.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: "Expert Counseling", desc: "Personalized guidance from experienced consultants" },
                  { title: "98% Visa Success Rate", desc: "Proven track record with documentation and applications" },
                  { title: "End-to-End Support", desc: "From university selection to visa approval and beyond" },
                  { title: "Free Consultation", desc: "No-cost initial consultation to discuss your goals" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                  alt="Students studying abroad"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Book a free consultation with our expert counselors today and take the first step
            towards your international education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+919727616668">
                <Phone className="mr-2 h-4 w-4" />
                Call +91 97276 16668
              </a>
            </Button>
          </div>
        </div>
      </section>

      <PartnerUniversities />
      <Testimonials />
      <FAQ />

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Office in Vadodara
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            2nd Floor, Platinum Hub, 201, Tulsidham Char Rasta, Near Central Bank,
            Manjalpur, Vadodara, Gujarat 390011
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
