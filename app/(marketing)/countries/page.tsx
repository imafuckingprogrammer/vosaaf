import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Study Destinations",
  description: "Explore top study abroad destinations and universities worldwide.",
};

export default function CountriesPage() {
  const countries = [
    { name: "United States", universities: "500+ universities" },
    { name: "United Kingdom", universities: "150+ universities" },
    { name: "Canada", universities: "100+ universities" },
    { name: "Australia", universities: "80+ universities" },
    { name: "Germany", universities: "100+ universities" },
    { name: "Ireland", universities: "50+ universities" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Study Destinations</h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            We help you get into top universities across the globe.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-200 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{country.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{country.universities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
