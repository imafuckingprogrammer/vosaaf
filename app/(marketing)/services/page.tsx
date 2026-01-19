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
  CheckCircle2,
  ArrowRight,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Study Abroad Consultancy in Vadodara",
  description: "Comprehensive study abroad and visa consultancy services in Vadodara. University selection, visa processing, application support, and more.",
  keywords: ["study abroad services", "visa consultancy", "university selection", "Vadodara"],
};

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
  },
];

const process = [
  { step: "1", title: "Free Consultation", desc: "Meet with our counselors to discuss your goals and options" },
  { step: "2", title: "University Selection", desc: "Shortlist universities based on your profile and preferences" },
  { step: "3", title: "Application Submission", desc: "Prepare and submit applications to selected universities" },
  { step: "4", title: "Visa Processing", desc: "Complete visa application and documentation" },
  { step: "5", title: "Pre-Departure", desc: "Get ready for your journey with our guidance" },
  { step: "6", title: "Fly & Settle", desc: "Land in your destination and start your new chapter" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            End-to-end support for your study abroad journey from FlySky Europe, Vadodara
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
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
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Process
          </h2>
          <div className="space-y-4">
            {process.map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-card p-5 rounded-xl border border-border/50 hover:shadow-sm transition-shadow duration-200">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards your study abroad dream
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+919727616668">
                <Phone className="mr-2 h-4 w-4" />
                Call +91 97276 16668
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
