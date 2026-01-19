import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, DollarSign, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Study in USA | FlySky Europe Vadodara",
  description: "Study in USA with FlySky Europe. Expert USA student visa consultancy in Vadodara. Get admission to top US universities with our guidance.",
  keywords: ["study in USA", "USA student visa", "study abroad USA", "USA universities", "visa consultancy Vadodara"],
};

export default function USAPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://picsum.photos/1920/400?random=30)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Study in USA</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Home to world&apos;s top universities and cutting-edge research institutions
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <GraduationCap className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">4000+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">2-4 Years</div>
                <div className="text-sm text-gray-600">Degree Duration</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">$20-60K</div>
                <div className="text-sm text-gray-600">Annual Tuition</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold">OPT/CPT</div>
                <div className="text-sm text-gray-600">Work Options</div>
              </CardContent>
            </Card>
          </div>

          {/* Why Study in USA */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Study in USA?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">World-Class Education</h3>
                  <p className="text-gray-600">Home to 8 of the top 10 universities globally</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Education System</h3>
                  <p className="text-gray-600">Wide range of majors and academic paths</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Career Opportunities</h3>
                  <p className="text-gray-600">OPT/CPT work programs for international students</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Research & Innovation</h3>
                  <p className="text-gray-600">Access to cutting-edge research facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Universities */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Universities</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Harvard University",
              "Stanford University",
              "MIT",
              "UC Berkeley",
              "Columbia University",
              "University of Michigan",
            ].map((uni, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{uni}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Undergraduate: 12th grade with 60%+ marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Postgraduate: Bachelor&apos;s degree with good GPA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>English Proficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>TOEFL: 80+ (iBT) or IELTS: 6.5+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Some universities accept Duolingo English Test</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standardized Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SAT/ACT for undergraduates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>GRE/GMAT for postgraduates (varies by program)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Study in USA?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert guidance on USA university admissions and F-1 student visa process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+919727616668">Call +91 97276 16668</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
