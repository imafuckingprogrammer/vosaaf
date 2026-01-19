import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  GraduationCap,
  FileCheck,
  BookOpen,
  Plane,
  Languages,
  UserCheck,
  FileText,
  Building2,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Study Abroad Consultancy in Vadodara",
  description: "Comprehensive study abroad and visa consultancy services in Vadodara. University selection, visa processing, application support, and more.",
  keywords: ["study abroad services", "visa consultancy", "university selection", "Vadodara"],
};

export default function ServicesPage() {
  const services = [
    {
      icon: UserCheck,
      title: "Free Career Counseling",
      description: "Get personalized guidance from our expert counselors to understand your options, evaluate your profile, and choose the right path. No obligation, completely free initial consultation.",
      features: [
        "Profile evaluation",
        "Country selection guidance",
        "Course recommendations",
        "Budget planning assistance",
      ],
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: GraduationCap,
      title: "University Selection & Shortlisting",
      description: "We help you find the perfect university match based on your academic background, budget, career goals, and preferences. Access to 200+ partner universities worldwide.",
      features: [
        "Personalized university matching",
        "Application strategy planning",
        "Scholarship guidance",
        "Program comparison",
      ],
      color: "text-green-600 bg-green-50",
    },
    {
      icon: FileText,
      title: "Application Assistance",
      description: "Complete support with university applications, ensuring all documents are perfect and submitted on time. We handle the complexity so you can focus on preparing.",
      features: [
        "Document preparation",
        "SOP/Essay writing guidance",
        "LOR coordination",
        "Application form filling",
      ],
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: FileCheck,
      title: "Visa Consultancy",
      description: "Expert visa processing with 98% success rate. We guide you through documentation, application forms, financial proofs, and interview preparation for all major countries.",
      features: [
        "Document checklist & review",
        "Visa application filing",
        "Interview preparation",
        "Mock interviews",
      ],
      color: "text-red-600 bg-red-50",
    },
    {
      icon: Languages,
      title: "Test Preparation Guidance",
      description: "Get guidance on IELTS, TOEFL, GRE, GMAT, and other standardized tests. We help you understand requirements and connect you with the best preparation resources.",
      features: [
        "Test requirement analysis",
        "Preparation resource guidance",
        "Practice test recommendations",
        "Score improvement tips",
      ],
      color: "text-orange-600 bg-orange-50",
    },
    {
      icon: Building2,
      title: "Education Loan Assistance",
      description: "We help you navigate education loan options and connect you with financial institutions offering student loans for international education.",
      features: [
        "Loan requirement analysis",
        "Bank recommendations",
        "Documentation support",
        "Application guidance",
      ],
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      icon: BookOpen,
      title: "Pre-Departure Briefing",
      description: "Comprehensive orientation before you fly. Learn about accommodation, culture, travel, banking, and everything you need to know before starting your journey.",
      features: [
        "Travel guidance",
        "Accommodation assistance",
        "Cultural orientation",
        "Essential tips & checklist",
      ],
      color: "text-pink-600 bg-pink-50",
    },
    {
      icon: Plane,
      title: "Post-Landing Support",
      description: "Our support doesn't end with your visa. We provide guidance even after you land to help you settle smoothly in your new country.",
      features: [
        "Airport pickup coordination",
        "Local contact assistance",
        "Initial settling guidance",
        "Ongoing support",
      ],
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(https://picsum.photos/1920/400?random=50)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            End-to-end support for your study abroad journey from FlySky Europe, Vadodara
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-200 hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-blue-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Free Consultation", desc: "Meet with our counselors to discuss your goals and options" },
              { step: "2", title: "University Selection", desc: "Shortlist universities based on your profile and preferences" },
              { step: "3", title: "Application Submission", desc: "Prepare and submit applications to selected universities" },
              { step: "4", title: "Visa Processing", desc: "Complete visa application and documentation" },
              { step: "5", title: "Pre-Departure", desc: "Get ready for your journey with our guidance" },
              { step: "6", title: "Fly & Settle", desc: "Land in your destination and start your new chapter" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-10 text-blue-50 max-w-2xl mx-auto leading-relaxed">
            Book your free consultation today and take the first step towards your study abroad dream
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg font-semibold">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-blue-800 border-2 border-blue-800 text-white hover:bg-blue-900 hover:border-blue-900 shadow-lg font-semibold">
              <a href="tel:+919727616668">Call +91 97276 16668</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
