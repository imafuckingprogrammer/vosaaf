import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Study in Europe | FlySky Europe Vadodara",
  description: "Study in Europe with affordable tuition and quality education. Expert European student visa consultancy in Vadodara, Gujarat.",
  keywords: ["study in Europe", "Europe student visa", "study abroad Europe", "Vadodara"],
};

export default function EuropePage() {
  const countries = [
    {
      name: "Germany",
      href: "/countries/germany",
      image: "https://picsum.photos/400/300?random=40",
      highlights: ["No tuition fees", "18-month job search visa", "Strong economy"],
    },
    {
      name: "United Kingdom",
      href: "/countries/uk",
      image: "https://picsum.photos/400/300?random=41",
      highlights: ["World-class universities", "2-year post-study work", "English medium"],
    },
    {
      name: "Ireland",
      href: "/countries/ireland",
      image: "https://picsum.photos/400/300?random=42",
      highlights: ["Tech hub of Europe", "2-year stay-back", "English speaking"],
    },
    {
      name: "France",
      href: "/countries/france",
      image: "https://picsum.photos/400/300?random=43",
      highlights: ["Low tuition fees", "Rich culture", "Central European location"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(https://picsum.photos/1920/500?random=35)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Study in Europe</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Affordable, high-quality education with rich cultural experiences and excellent career opportunities
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Destination
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {country.name}
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6">
                    {country.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={country.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why Study in Europe?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">Affordable Education</h3>
              <p className="text-gray-600">Many European countries offer low or no tuition fees at public universities</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">High Quality Standards</h3>
              <p className="text-gray-600">World-renowned universities with cutting-edge research facilities</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Cultural Diversity</h3>
              <p className="text-gray-600">Experience multiple cultures and travel across Europe easily</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
